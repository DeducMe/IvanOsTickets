import { Document } from 'mongoose';

export default interface Bus extends Document {
    vehicleNumber: string;
    plateNumber: string;
    vehicleModel: string;
    seatsCount: number;
}
