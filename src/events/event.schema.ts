import { Schema, Document } from 'mongoose'

export type EventDocument = Event & Document

export const EventSchema = new Schema<Event>({
    eventType: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, required: true },
    userId: { type: String },
    pageFrom: { type: String },
    pageTo: { type: String },
    actionButton: { type: String },
    backgroundProcess: { type: String },
    alertTrigger: { type: String },
    sensorId: { type: String },
    sensorData: {
        dataField1: { type: String },
        dataField2: { type: Number },
    },
    configChangeRequest: { type: String },
})

export interface Event {
    eventType: string
    timestamp: Date
    userId?: string
    pageFrom?: string
    pageTo?: string
    actionButton?: string
    backgroundProcess?: string
    alertTrigger?: string
    sensorId?: string
    sensorData?: {
        dataField1?: string
        dataField2?: number
    }
    configChangeRequest?: string
}
