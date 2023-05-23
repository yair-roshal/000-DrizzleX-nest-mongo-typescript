## Description

The DrizzleX system would like to save EVENTS in MongoDB.

There are 3 types of events:
● User events (login, logout, going from page x to page y, clicking on an action button, etc.)
● System events (background processes, identifying cases where alerts should be sent to customers, etc.)
● Sensor events (sensor sends data, sensor sends keepalive, sensor requests config change, etc.)

All of the above events should be saved in a single MongoDB collection.

Task 1:
Describe how the event object is going to look like, in terms of fields and their types (type can be primitive or another object/enum). If you use other objects as types, please describe their fields as well.

Task 2:
Create a new NestJS project as described here: https://docs.nestjs.com/first-steps.
Add the Mongoose package: https://docs.nestjs.com/techniques/mongodb

Implement the following:

● Define the event object you described above as a Mongoose Schema. If other objects were defined, such as enums, then define them as well.

● Write a controller that receives an event JSON as a payload (using a DTO object with validations would be a bonus).

● Write a service that receives the payload/DTO and saves the event to MongoDB as the Mongoose Schema object. Now, you don’t need to actually install MongoDB if you don’t have it already installed in your computer, but it would be helpful to test that everything’s working.

## Installation

1. install all dependencies :

```bash
$ npm install
```

2. create dev.env like dev.env.example with MONGODB_URI :

```
MONGODB_URI= 'mongodb+srv://<user>:<pass>@<URL_CLUSTER>/event-db'
```

## Running the app

```bash

# watch mode
npm run start:dev

```
