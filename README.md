# Blog-App
It is a website for blog created by React.js using hooks and MySql

## My Awesome Blog App

Welcome to My Awesome Blog App! This is a simple web application for creating and viewing blog posts. It allows users to register, login, and create their own blog posts as well as view existing blog posts.

### Features

- User registration and login functionality.
- Create new blog posts with a title, body, and author name.
- View a list of all blog posts.
- View the details of a specific blog post.
- Delete blog posts.
- Dark mode and light mode options for a personalized user experience.

### Technologies Used

The app is built using the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- React Router: For handling navigation and routing within the app.
- Express: A Node.js web application framework for building the backend server.
- MySQL: As the database for storing blog post data.
- Bcrypt: For securely hashing passwords before storing them in the database.
- Cors: To enable cross-origin resource sharing in the backend.
- Body-parser: To parse incoming request bodies in the backend.

### Installation

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running the following command in the root directory of the app:
   ```
   npm install
   ```
3. Create a MySQL database named `blog_storage`.
4. In the `backend` folder, open the `db.js` file and update the `db` object with your MySQL database credentials.
5. Start the backend server by running the following command in the `backend` folder:
   ```
   node server.js
   ```
6. Start the frontend development server by running the following command in the root directory of the app:
   ```
   npm start
   ```
7. Open your web browser and navigate to `http://localhost:3000` to access the app.

### Usage

1. Upon opening the app, you will be directed to the login page. If you don't have an account, click the "New here? Register" link to create one.
2. After successfully logging in or registering, you will be redirected to the home page where you can view all existing blog posts.
3. Click on the "Add Blog" button to create a new blog post. Fill in the title, body, and author name, and click "Add Blog" to submit the post.
4. Click on a blog post title to view its details.
5. In the blog details page, you have the option to delete the blog post.
6. You can also navigate to the "Create" page from the navigation bar to add new blog posts.

Enjoy using My Awesome Blog App! If you encounter any issues or have feedback, feel free to open an issue in the repository.

This repo is still in progress so sorry for not having proper css or function. 

But hey still, 
Happy blogging! 😄
