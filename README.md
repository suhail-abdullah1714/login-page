# Web Form Project with MongoDB

A modern web form application with MongoDB database integration for secure data storage.

## Features

- Clean, professional UI with gradient design
- Client-side form validation
- Backend API with Express.js
- MongoDB database storage
- Real-time success/error feedback

## Prerequisites

Before running this project, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- A MongoDB Atlas account (free tier available) or local MongoDB installation

## MongoDB Setup

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account and sign in
3. Click "Build a Database" → Choose "Free" tier
4. Select a cloud provider and region
5. Click "Create Cluster"
6. Configure Database Access:
   - Click "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose authentication method (username/password)
   - Create username and password (save these!)
7. Configure Network Access:
   - Click "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (or add your specific IP)
8. Get your connection string:
   - Click "Database" → "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `webform_db`

### Option 2: Local MongoDB

1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017`

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd c:\Users\suhai\OneDrive\Desktop\web-form-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Open the `.env` file
   - Replace the `MONGODB_URI` value with your actual MongoDB connection string
   
   Example for MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   DB_NAME=webform_db
   PORT=3000
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Fill out the form and submit to test the MongoDB integration

## API Endpoints

### Register User
- **URL**: `/api/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response**: `201 Created`
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "userId": "..."
  }
  ```

### Get All Users (Testing)
- **URL**: `/api/users`
- **Method**: `GET`
- **Success Response**: `200 OK`
  ```json
  {
    "success": true,
    "count": 5,
    "users": [...]
  }
  ```

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`

## Project Structure

```
web-form-project/
├── index.html          # Frontend HTML
├── style.css           # Styling
├── script.js           # Frontend JavaScript
├── server.js           # Express backend server
├── package.json        # Node.js dependencies
├── .env                # Environment configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Security Notes

⚠️ **Important**: This is a demonstration project. For production use:
- Hash passwords before storing (use bcrypt)
- Implement proper authentication (JWT tokens)
- Add input sanitization
- Use HTTPS
- Implement rate limiting
- Add CSRF protection

## Troubleshooting

### "Unable to connect to server"
- Make sure the server is running (`npm start`)
- Check that port 3000 is not being used by another application

### "MongoDB connection error"
- Verify your connection string in `.env` file
- Check MongoDB Atlas network access allows your IP
- Confirm database user credentials are correct

### Form submits but no success message
- Open browser console (F12) to check for errors
- Verify server is running and accessible
- Check network tab for API response

## License

This project is open source and available under the MIT License.
