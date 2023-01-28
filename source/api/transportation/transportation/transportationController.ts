import { NextFunction, Request, Response } from 'express';
import { errorHandler, sendBackHandler } from '../../../functions/apiHandlers';
import Transportation from './transportationModal';

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { number, route, ticket, dispatcher, bus, driver } = req.body;

        const transportation = new Transportation({ number, route, ticket, dispatcher, bus, driver });

        const data = await transportation.save();
        sendBackHandler(res, 'transportation', data);
    } catch (e) {
        errorHandler(res, e);
    }
};

const putTransportation = async (req: Request, res: Response, next: NextFunction) => {
    let { id, number, route, ticket, dispatcher, bus, driver } = req.body;

    const transportationModified = await Transportation.updateOne({ _id: id }, { number, route, ticket, dispatcher, bus, driver });

    sendBackHandler(res, 'transportation', transportationModified);
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Transportation.find().populate(['dispatcher', 'ticket', 'bus', 'driver']).exec();
    sendBackHandler(res, 'transportation', data);
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    const data = await Transportation.findByIdAndRemove(id).exec();

    sendBackHandler(res, 'transportation', data);
};

export default { create, getAll, remove, putTransportation };
