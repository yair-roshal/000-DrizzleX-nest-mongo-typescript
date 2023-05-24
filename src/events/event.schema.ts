import { Schema, Document } from 'mongoose'

export type EventDocument = Event & Document

import { EventType } from './enums/event-type'

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

export interface EventBase {
    eventType: EventType
    timestamp: Date
}

export interface SensorData {
    dataField1?: string
    dataField2?: number
}

export interface Event extends EventBase {
    userId?: string
    pageFrom?: string
    pageTo?: string
    actionButton?: string
    backgroundProcess?: string
    alertTrigger?: string
    sensorId?: string
    sensorData?: SensorData
    configChangeRequest?: string
}
