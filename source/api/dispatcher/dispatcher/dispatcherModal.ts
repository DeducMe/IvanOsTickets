import mongoose, { Schema } from 'mongoose';
import logging from '../../../config/logging';
import IDispatcher from './dispatcherInterface';

const DispatcherSchema: Schema = new Schema(
    {
        fullName: { type: String, required: true },
        dateOfBirth: { type: Date, required: false },
        address: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

DispatcherSchema.post<IDispatcher>('save', function () {
    logging.info('Mongo', 'Checkout the dispatcher we just saved: ', this);
});

export default mongoose.model<IDispatcher>('Dispatcher', DispatcherSchema);
