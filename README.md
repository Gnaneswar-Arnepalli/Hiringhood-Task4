# Todo List API (Node.js + MongoDB)

## Environment Configuration : Environment variables are used for sensitive values.

 - MONGO_URI contains the MongoDB connection string

 - PORT defines the server port.

 ## MongoDB Connection : MongoDB is connected using Mongoose.

- The connection is initialized when the server starts

- If the connection is successful, a confirmation message is logged

- If the connection fails, the server stops immediately

  ## Todo Schema Design

  ### Each todo contains:

 - title – Task description (required)

 - completed – Task status (default is false)

  - created_at – Automatically stores creation date

## Express Server Setup

 - Express is used to create the REST API

 - JSON middleware is enabled to handle request bodies

## User Signup:

<img width="1280" height="832" alt="image" src="https://github.com/user-attachments/assets/0f096fbc-eb7d-42d5-910c-9e46beb6796c" />

## User Login/Get Token:

<img width="1280" height="832" alt="image" src="https://github.com/user-attachments/assets/afa71383-3f2a-449f-a062-95ec31ad7c9b" />


   ## GET request using token :

   <img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/ac5d0354-8ed9-4c4b-a313-9390e907b7f5" />

## Fetch User :

<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/4d1b3cec-90ed-4232-9757-12ecd81a21de" />

## Delete User :
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/9242c0f7-7f7d-4009-8439-570e815f335b" />

MongoDB :

<img width="938" height="391" alt="image" src="https://github.com/user-attachments/assets/39dad46f-f41e-4ba8-804b-dfa02bc1cda4" />

<img width="913" height="400" alt="image" src="https://github.com/user-attachments/assets/f4fbe792-a047-45bb-bb23-318952eed980" />
