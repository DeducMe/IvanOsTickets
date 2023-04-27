import dotenv from 'dotenv';
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

export const JWT_SECRET_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJWbGFkIGdheSJ9.37cRz58VhOsjY7uQTZiXL21Qt89FkTQZnl_0_NB5NDE';
export const GENIUS_TOKEN = 'byPkg6e3AKESKI50WUGwGPl-Lj0JmLgE0LxOEhedceZUZtMPtuPU-wSCmVb6Q2rR';

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'admin';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'EVL85FXmOlodDYAh';
const MONGO_HOST = process.env.MONGO_URL || `@cluster0.pig02b8.mongodb.net`;
export const EMAIL_LOGIN = 'GuysAndMary@gmail.com';
export const EMAIL_PASSWORD = 'GuysAndMary1!';
export const ALPHA_VINTAGE_KEY = 'W37JJ85TRIHQXE58';

const MONGO_URL = 'mongodb+srv://admin:EVL85FXmOlodDYAh@cluster0.pig02b8.mongodb.net/ivanOs?retryWrites=true&w=majority';
//  process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD && process.env.MONGO_URL ? `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}` : `mongodb://localhost/test`;

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: MONGO_URL
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || process.env.PORT || 3000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: Number(SERVER_PORT)
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
