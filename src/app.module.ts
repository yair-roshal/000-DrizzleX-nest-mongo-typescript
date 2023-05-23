import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { EventsController } from './events/event.controller'
import { EventsService } from './events/event.service'
import { EventSchema } from './events/event.schema'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),

        MongooseModule.forRoot(process.env.MONGODB_URI),

        MongooseModule.forFeature([{ name: 'Event', schema: EventSchema }]),
    ],
    controllers: [AppController, EventsController],
    providers: [AppService, EventsService],
})
export class AppModule {}
