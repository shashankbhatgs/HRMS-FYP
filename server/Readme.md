# Server End

## Initial Setup
1. cd server
2. npm install
3. npm start

## Backend File-Folder Structure


project-root/
  ├── node_modules/             # Dependencies installed via npm
  ├── src/                      # Source code
  │    ├── controllers/         # Controllers for managing the application logic
  │    │    ├── authController.js  # Handles authentication logic
  │    │    ├── userController.js  # Manages user-related operations
  │    │    ├── ...
  │    ├── models/              # Data models
  │    │    ├── User.js         # Data model for User
  │    │    ├── ...
  │    ├── routes/              # API routes and handlers
  │    │    ├── authRoutes.js   # Routes for authentication (e.g., login, register)
  │    │    ├── userRoutes.js   # Routes for user-related operations
  │    │    ├── ...
  │    ├── middleware/          # Custom middleware functions
  │    │    ├── authMiddleware.js  # Middleware for authentication
  │    │    ├── ...
  │    ├── config/              # Configuration settings
  │    │    ├── config.js       # Contains application configuration (e.g., database connection)
  │    ├── utils/               # Utility functions and helper methods
  │    │    ├── helpers.js      # Various helper functions
  │    ├── app.js               # Express.js application setup
  │    ├── server.js            # Entry point for the server
  ├── package.json              # Project dependencies and scripts
  ├── .env                     # Environment variables (store sensitive data here)
  ├── .gitignore               # Ignore files/folders in version control
  └── README.md                # Documentation for the project
