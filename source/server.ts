import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import logging from './config/logging';
import config from './config/config';
import userRoute from './api/users/user/userRoute';

import routeRoute from './api/route/route/routeRoute';
import dispatcherRoute from './api/dispatcher/dispatcher/dispatcherRoute';
import busRoute from './api/bus/bus/busRoute';
import ticketRoute from './api/ticket/ticket/ticketRoute';
import transportationRoute from './api/transportation/transportation/transportationRoute';
import driverRoute from './api/driver/driver/driverRoute';

// @ts-ignore
import docs from 'express-mongoose-docs';
import { checkAuthToken, errorHandler } from './functions/apiHandlers';
// import errorHandler from './errorHandling';

const NAMESPACE = 'Server';
export const app = express();

/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Mongo Connected');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });
mongoose.connection.on('open', function () {
    // logging.info(NAMESPACE, 'db dropped');
    // mongoose.connection.dropDatabase();
});
docs(app, mongoose);
/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.use(async (req, res, next) => {
    // const authed = await checkAuthToken(res, req);
    // if (!authed.success) {
    //     return await errorHandler(res, { message: authed.message }, 405);
    // }
    next();
});

/** driver **/
app.use('/api/driver', driverRoute);

/** user **/
app.use('/api/user', userRoute);

/** route **/
app.use('/api/route', routeRoute);

/** ticket **/
app.use('/api/ticket', ticketRoute);

/** transportation **/
app.use('/api/transportation', transportationRoute);

/** dispatcher **/
app.use('/api/dispatcher', dispatcherRoute);

/** bus **/
app.use('/api/bus', busRoute);
// app.use(errorHandler);

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running on http://${config.server.hostname}:${config.server.port}/`));
