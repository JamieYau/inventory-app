# inventory-app

## Details

This project is a simple game inventory app that allows users to add, edit, and delete games from their inventory. The app is built using Node.js, Express.js, and MongoDB.

## Project setup

Install dependencies

```
npm install
```

add .env file with the following variables:

```
MONGODB_URI="mongodb+srv://{user}:{password}@cluster0.ol3ac5q.mongodb.net/inventory-app?retryWrites=true&w=majority"
```

## Diary

- First time using ejs and MongoDB.
- Used MVC pattern to structure the app.
- I'm looking forward to learning more about MongoDB and using it in future projects. I was previously only familiar with SQL databases, so it was interesting to learn about the differences between SQL and NoSQL databases.

- I learned about different HTTP methods such as GET, POST, PUT, DELETE, etc.
- I learned how to handle these different types of requests in Express.js. In Express.js, you can define routes for each type of request using `app.get()`, `app.post()`, `app.put()`, and `app.delete()`. Each route takes a path and a callback function that is called when a request is made to that path with the corresponding HTTP method.
- I learned how to use MongoDB with Node.js. I used the mongoose library to connect to the database and define a schema for the data. I also learned how to perform CRUD operations on the database using mongoose.
- I used partials to make the code more modular and reusable. I created a partial for the header and footer and included them in the other views.

## TODO

- Add images
- Add a search bar
- Add a filter
- Add a sort feature
- Add a pagination feature
- Add a login feature
- improve styling
- refactor ejs files to use partials for forms