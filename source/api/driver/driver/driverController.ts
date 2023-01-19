import { NextFunction, Request, Response } from 'express';
import { errorHandler, sendBackHandler } from '../../../functions/apiHandlers';
import Driver from './driverModal';

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { fullName, dateOfBirth, passport } = req.body;

        const driver = new Driver({ fullName, dateOfBirth, passport });

        const data = await driver.save();
        sendBackHandler(res, 'driver', data);
    } catch (e) {
        errorHandler(res, e);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Driver.find().exec();
    sendBackHandler(res, 'driver', data);
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    const data = await Driver.findByIdAndRemove(id).exec();

    sendBackHandler(res, 'driver', data);
};

const put = async (req: Request, res: Response, next: NextFunction) => {
    let { id, fullName, dateOfBirth, passport } = req.body;

    const driverModified = await Driver.updateOne({ _id: id }, { fullName, dateOfBirth, passport });

    sendBackHandler(res, 'driver', driverModified);
};

export default { create, getAll, remove, put };
