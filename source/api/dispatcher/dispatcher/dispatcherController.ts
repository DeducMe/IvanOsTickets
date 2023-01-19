import { NextFunction, Request, Response } from 'express';
import { errorHandler, sendBackHandler } from '../../../functions/apiHandlers';
import Dispatcher from './dispatcherModal';

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { fullName, dateOfBirth, address } = req.body;

        const dispatcher = new Dispatcher({ fullName, dateOfBirth, address });

        const data = await dispatcher.save();
        sendBackHandler(res, 'dispatcher', data);
    } catch (e) {
        errorHandler(res, e);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Dispatcher.find().exec();
    sendBackHandler(res, 'dispatcher', data);
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    const data = await Dispatcher.findByIdAndRemove(id).exec();

    sendBackHandler(res, 'dispatcher', data);
};

const put = async (req: Request, res: Response, next: NextFunction) => {
    let { id, fullName, dateOfBirth, address } = req.body;

    const dispatcherModified = await Dispatcher.updateOne({ _id: id }, { fullName, dateOfBirth, address });

    sendBackHandler(res, 'dispatcher', dispatcherModified);
};

export default { create, getAll, remove, put };
