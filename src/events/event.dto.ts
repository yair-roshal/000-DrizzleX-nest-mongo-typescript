import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator'

import { EventType } from './enums/event-type'

export class CreateEventDto {
    @IsNotEmpty()
    @IsEnum(EventType)
    eventType: EventType

    @IsNotEmpty()
    timestamp: Date

    @IsOptional()
    userId?: string

    @IsOptional()
    pageFrom?: string

    @IsOptional()
    pageTo?: string

    @IsOptional()
    actionButton?: string

    @IsOptional()
    backgroundProcess?: string

    @IsOptional()
    alertTrigger?: string

    @IsOptional()
    sensorId?: string

    @IsOptional()
    sensorData?: {
        dataField1?: string
        dataField2?: number
    }

    @IsOptional()
    configChangeRequest?: string
}
