import mongoose, { Schema } from 'mongoose';
import logging from '../../../config/logging';
import Route from './routeInterface';

const routeSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        destination: { type: String, required: false },
        district: { type: String, required: false },
        region: { type: String, required: false },
        distanceKm: { type: Number, required: false },
        weightKg: { type: Number, required: false },
        dispatch: { type: Date, required: false },
        arrival: { type: Date, required: false }
    },
    {
        strict: true,
        versionKey: false,
        timestamps: false,
        id: false,
        skipVersioning: true,
        toJSON: { virtuals: true }
    }
);

routeSchema.post<Route>('save', function () {
    logging.info('Mongo', 'Checkout the route we just saved: ', this);
});

export default mongoose.model<Route>('Route', routeSchema);
