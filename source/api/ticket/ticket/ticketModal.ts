import mongoose, { Schema } from 'mongoose';
import logging from '../../../config/logging';
import ITicket from './ticketInterface';

const TicketSchema: Schema = new Schema(
    {
        seat: { type: Number, required: false },
        cost: { type: Number, required: false },
        purchaseDate: { type: Date, required: false },
        fullName: { type: String, required: false },
        passport: { type: String, required: false },
        isPriceReduced: { type: Boolean, required: false }
    },
    {
        timestamps: true
    }
);

TicketSchema.post<ITicket>('save', function () {
    logging.info('Mongo', 'Checkout the ticket we just saved: ', this);
});

export default mongoose.model<ITicket>('Ticket', TicketSchema);
