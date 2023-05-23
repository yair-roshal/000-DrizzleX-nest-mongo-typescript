import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Event, EventDocument } from './event.schema'
import { CreateEventDto } from './event.dto'

@Injectable()
export class EventsService {
    constructor(@InjectModel('Event') private readonly eventModel: Model<EventDocument>) {}

    async createEvent(createEventDto: CreateEventDto): Promise<Event> {
        const createdEvent = new this.eventModel(createEventDto)
        return createdEvent.save()
    }
}
