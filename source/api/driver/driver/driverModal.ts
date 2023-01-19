import mongoose, { Schema } from 'mongoose';
import logging from '../../../config/logging';
import IDriver from './driverInterface';

const DriverSchema: Schema = new Schema(
    {
        fullName: { type: String, required: true },
        dateOfBirth: { type: Date, required: false },
        passport: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

DriverSchema.post<IDriver>('save', function () {
    logging.info('Mongo', 'Checkout the driver we just saved: ', this);
});

export default mongoose.model<IDriver>('Driver', DriverSchema);
