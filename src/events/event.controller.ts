import { Controller, Post, Body } from '@nestjs/common'
import { CreateEventDto } from './event.dto'
import { EventsService } from './event.service'

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    async createEvent(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.createEvent(createEventDto)
    }
}
