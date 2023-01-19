import { NextFunction, Request, Response } from 'express';
import { errorHandler, sendBackHandler } from '../../../functions/apiHandlers';
import Route from './routeModal';

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { name, destination, district, region, distanceKm, weightKg, dispatch, arrival } = req.body;

        const route = new Route({ name, destination, district, region, distanceKm, weightKg, dispatch, arrival });

        const data = await route.save();
        sendBackHandler(res, 'route', data);
    } catch (e) {
        errorHandler(res, e);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Route.find().exec();
    sendBackHandler(res, 'route', data);
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    const data = await Route.findByIdAndRemove(id).exec();

    sendBackHandler(res, 'route', data);
};

const put = async (req: Request, res: Response, next: NextFunction) => {
    let { id, name, destination, district, region, distanceKm, weightKg, dispatch, arrival } = req.body;

    const routeModified = await Route.updateOne({ _id: id }, { name, destination, district, region, distanceKm, weightKg, dispatch, arrival });

    sendBackHandler(res, 'route', routeModified);
};

export default { create, getAll, remove, put };
