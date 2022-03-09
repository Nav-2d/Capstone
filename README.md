# Capstone

## Get Started

Clone the repo:

```
git clone https://github.move.com/Nav-2d/Capstone
cd Capstone
```

**Note:** Make sure you read the document "Environment Variable" from the Google Drive and create a `.env` file

Install dependencies and run server:

```
npm install
cd frontend
npm install
cd ..
npm run dev
```

## Backend

The backend uses MongoDB, JWT, and Express

### Routes:

User Routing

- POST `/api/users/signup` to create new users (will be disabled later on and only accessible to admin)
- POST `/api/users/login` to login users

Timetable Routing (All of these are protected i.e. user needs to be logged in)

- GET `/api/timetables/` to create get all timetables for the logged in user
- POST `/api/timetables/` to add timetable for the logged in user
- PUT `/api/timetables/:id` to update the selected timetable
- DELETE `/api/timetables/:id` to delete the selected timetable

The routes can be tested by calling endpoints using tool like Postman

## Frontend

The front uses React & Redux
