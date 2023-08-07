# Blogspot

Welcome to Blogspot! This is a simple web application for creating and viewing blog posts. It allows users to register, login, and create their own blog posts as well as view existing blog posts.

### Features

- User registration and login functionality.
- Create, view, and manage blogs.
- Each blog has a title, body, and author information.
- Blog authors are associated with their blogs through foreign keys in the database.
- Secure authentication using tokens stored in `localStorage`.

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
3. Create a MySQL database named `blog_storage` and tables `blog_store` and `members` with cloumns ( id, title, body, author, author_id, posted_on ) and ( m_id, name, usernam, email, password ) respectively and author_id is foregn key in reference to m_id.
![Screenshot from 2023-08-07 10-25-35](https://github.com/simo411/Blog-App/assets/59970989/99556b89-b512-4c9c-9464-0e3d308e1a1a)


![Screenshot from 2023-08-07 10-26-28](https://github.com/simo411/Blog-App/assets/59970989/341ffcba-95d5-4aa3-993e-d676cf5db523)


5. In the `backend` folder, open the `server.js` file and update the 'db' object with your MySQL database credentials.
6. Before starting the `server.js` install these:
   ```
   npm install express mysql cors nodemon
   npm install bcrypt
   ```
7. Start the backend server by running the following command in the `backend` folder:
   ```
   npm start
   //or
   yarn start
   ```
8. Start the frontend development server by running the following command in the root directory of the app:
   ```
   npm install react-router-dom
   install react-icons --save
   npm start
   ```
9. Open your web browser and navigate to `http://localhost:3000` to access the app.

### Usage

1. Upon opening the app, you will be directed to the Welcome page. After wich you are lead to login page. If you don't have an account, click the "New here?" link to create one.
2. After successfully logging in or registering, you will be redirected to the home page where you can view all existing blog posts.
3. Click on the "Add Blog" button to create a new blog post. Fill in the title and body, and click "Add Blog" to submit the post.
4. Click on a blog post title to view its details.
5. In the blog details page, you have the option to delete the blog post of your own if you dont' like it.
6. You can also navigate to the "Create" page from the navigation bar to add new blog posts.
7. You can view your profile details on profile page.

### Images of the website:
![Screenshot from 2023-08-07 10-46-35](https://github.com/simo411/Blog-App/assets/59970989/b6b3c825-a167-48d8-8a24-d3adb030d70d)
![Screenshot from 2023-08-07 10-58-17](https://github.com/simo411/Blog-App/assets/59970989/8d873aeb-a968-4a0d-b5cf-c881ca4eef73)
<br><br><br><br>

![Screenshot from 2023-08-07 10-44-16](https://github.com/simo411/Blog-App/assets/59970989/8f1d921e-7467-4034-9eee-346c37ce958a)
![Screenshot from 2023-08-07 10-46-05](https://github.com/simo411/Blog-App/assets/59970989/4be9edf8-f74c-4cdf-927a-58af82e883f9)
<br><br><br><br>

![Screenshot from 2023-08-07 10-43-47](https://github.com/simo411/Blog-App/assets/59970989/32dd4e64-de46-4abf-8442-3efb780ed442)
![Screenshot from 2023-08-07 10-44-41](https://github.com/simo411/Blog-App/assets/59970989/1e3d419e-e8bb-452e-8b32-08b917fb7ee3)
![Screenshot from 2023-08-07 10-44-59](https://github.com/simo411/Blog-App/assets/59970989/203aa87e-c2ff-4d8d-ab1c-67af4b73786f)


Enjoy using My Awesome Blog App! If you encounter any issues or have feedback, feel free to open an issue in the repository.

But hey still, 
Happy blogging! 😄
