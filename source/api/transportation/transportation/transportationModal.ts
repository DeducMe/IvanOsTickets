import mongoose, { Schema } from 'mongoose';
import logging from '../../../config/logging';
import ITransportation from './transportationInterface';

const TransportationSchema: Schema = new Schema(
    {
        number: { type: String, required: false },
        route: { type: Schema.Types.ObjectId, ref: 'Route', required: false },
        ticket: { type: Schema.Types.ObjectId, ref: 'Ticket', required: false },
        dispatcher: { type: Schema.Types.ObjectId, ref: 'Dispatcher', required: false },
        bus: { type: Schema.Types.ObjectId, ref: 'Bus', required: false },
        driver: { type: Schema.Types.ObjectId, ref: 'Driver', required: false }
    },
    {
        timestamps: true
    }
);

TransportationSchema.post<ITransportation>('save', function () {
    logging.info('Mongo', 'Checkout the transportation we just saved: ', this);
});

export default mongoose.model<ITransportation>('Transportation', TransportationSchema);
