import { NextFunction, Request, Response } from 'express';
import { errorHandler, sendBackHandler } from '../../../functions/apiHandlers';
import Bus from './busModal';

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { vehicleNumber, plateNumber, vehicleModel, seatsCount } = req.body;

        const bus = new Bus({ vehicleNumber, plateNumber, vehicleModel, seatsCount });

        const data = await bus.save();
        sendBackHandler(res, 'bus', data);
    } catch (e) {
        errorHandler(res, e);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Bus.find().exec();
    sendBackHandler(res, 'bus', data);
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    const data = await Bus.findByIdAndRemove(id).exec();

    sendBackHandler(res, 'bus', data);
};

const put = async (req: Request, res: Response, next: NextFunction) => {
    let { id, vehicleNumber, plateNumber, vehicleModel, seatsCount } = req.body;

    const busModified = await Bus.updateOne({ _id: id }, { vehicleNumber, plateNumber, vehicleModel, seatsCount });

    sendBackHandler(res, 'bus', busModified);
};

export default { create, getAll, remove, put };
