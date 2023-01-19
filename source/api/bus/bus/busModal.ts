import mongoose, { Schema } from 'mongoose';
import logging from '../../../config/logging';
import IBus from './busInterface';

const BusSchema: Schema = new Schema(
    {
        vehicleNumber: { type: String, required: true },
        plateNumber: { type: String, required: true },
        vehicleModel: { type: String, required: true },
        seatsCount: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

BusSchema.post<IBus>('save', function () {
    logging.info('Mongo', 'Checkout the bus we just saved: ', this);
});

export default mongoose.model<IBus>('Bus', BusSchema);
