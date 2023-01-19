import { Document, Schema } from 'mongoose';

export default interface Route extends Document {
    name: string;
    destination: string;
    district: string;
    region: string;
    distanceKm: number;
    weightKg: number;
    dispatch: Date;
    arrival: Date;
}
