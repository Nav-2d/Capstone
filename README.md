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
npm run server
```

## Backend

The backend uses MongoDB, JWT, and Express

### Routes:

- `/api/users/signup` to create new users (will be disabled later on and only accessible to admin)
- `/api/users/login` to login users

The routes can be tested by calling endpoints using tool like Postman
