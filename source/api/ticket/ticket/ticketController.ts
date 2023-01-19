import { NextFunction, Request, Response } from 'express';
import { errorHandler, sendBackHandler } from '../../../functions/apiHandlers';
import Ticket from './ticketModal';

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { seat, cost, purchaseDate, fullName, passport, isPriceReduced } = req.body;

        const ticket = new Ticket({ seat, cost, purchaseDate, fullName, passport, isPriceReduced });

        const data = await ticket.save();
        sendBackHandler(res, 'ticket', data);
    } catch (e) {
        errorHandler(res, e);
    }
};

const put = async (req: Request, res: Response, next: NextFunction) => {
    let { id, number, route, ticket, dispatcher, bus, driver } = req.body;

    const ticketModified = await Ticket.updateOne({ _id: id }, { number, route, ticket, dispatcher, bus, driver });

    sendBackHandler(res, 'ticket', ticketModified);
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await Ticket.find().exec();
    sendBackHandler(res, 'ticket', data);
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    const data = await Ticket.findByIdAndRemove(id).exec();

    sendBackHandler(res, 'ticket', data);
};

export default { create, getAll, remove, put };
