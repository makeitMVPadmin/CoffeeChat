# makeitMVP Launch Academy: CoffeeChat

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Technologies Used](#technologies)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Coffee Chat is a platform designed to revolutionize the way professionals network and build meaningful connections. This README provides an overview of the project, its features, and instructions on getting started.

## Features

- **Smart Matching Algorithm**: Connects professionals based on industry, interests, skills, and career goals.
- **In-App Chat**: Enables real-time messaging for easy communication.
- **Meeting Scheduling**: Allows users to schedule 1-to-1 coffee meetings with their matches.
- **User Profiles**: Users can customize their profiles to showcase their professional background.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB or another database system set up.
- [Authentication system](#) (e.g., OAuth, email and password).

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/coffee-chat.git
   cd coffee-chat
   ```

2. Install dependencies
 ```npm install```

 3. Set up your environment variables and configuration for authentication and database. 

 4. Run the app: 
 ```npm start```

### Technologies Used
This project makes use of the following technologies, dependencies and tools:

- **React**: JavaScript library for building the user interface.
- **create-react-app**: A tool to set up a new React application quickly.
- **Firebase**: A cloud-based platform for backend services including Firestore and OAuth.
- **Node.js**: Server-side runtime environment.
- **Express**: Web application framework for Node.js.
- **SCSS/Sass**: CSS preprocessor for styling.
- **react-icons**: A library for adding icons to your React application.
- **dotenv**: A module for loading environment variables from a `.env` file.

...Work in Progress

## Usage
To use the Coffee Chat app, follow the registration and login process. Create your profile, specify your preferences, and start networking with relevant professionals. You can schedule coffee meetings, chat with your connections, and meet new people.

## Screenshots
...Work in Progress

## API Documentation

**THIS PORTION HAS NOT BEEN DONE YET**

Attached are the docs for accessing the API. To start making calls, you'll need to follow these steps:

1. Create a User with FireAuth: Before accessing the API, make sure you've created a user using Firebase Authentication (FireAuth). This step is crucial for authentication purposes.
2. Retrieve JWT with currentUser.getIdToken(): After creating a user, use the currentUser.getIdToken() method provided by Firebase Authentication to obtain a JSON Web Token (JWT). This token will serve as your authentication credential for accessing the API.
3. Include JWT in Bearer Header: Once you have the JWT, include it in the Authorization header of your Axios requests using the Bearer token format. This ensures that your requests are properly authenticated.
4. Example:

``` React
axios.get('https://us-central1-communiti-630fc.cloudfunctions.net/api/users', {
  headers: {
    Authorization: `Bearer <your_jwt_here>`
  }
});
```

  - Base URL and Endpoints: The base URL for the API is https://us-central1-communiti-630fc.cloudfunctions.net/api. Simply append the desired endpoint to this base URL to make requests to specific resources.
  - Example: GET https://us-central1-communiti-630fc.cloudfunctions.net/api/users
Not using the proper token will end up giving you a 401 error saying "Unauthorized". If you are having trouble accessing the API or need to request an update to how the endpoints are structured, reach out to team Mergintegration.

P.S. Not all endpoints are completed yet, and thus aren't included in the docs because they are updated as they are completed and available in the code. The docs will be updated as the endpoints are rolled out. 

## Contributing

We welcome contributions from the community. If you have suggestions or improvements for this starter repository, please open an issue or create a pull request. For more information on how to contribute, check our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
