create a react project

Now we need below dependencies-
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser
react-hook-form

Next create a .env file and make sure to create it in the root directory. Add this .env file to gitignore
It should not be pushed to github or deployed anywhere.
If it needs to be pushed create another file called .env.sample and then you can share it

To take access of env file in App.jsx file there are different ways depending on the way we created the app, 
i.e. using create-react-app or vite or etc., [Refer documentation]. 