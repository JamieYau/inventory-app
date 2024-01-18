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

- I learned about different HTTP methods such as GET, POST, PUT, DELETE, etc. Each method represents a different type of request. For example, GET is used to retrieve data, POST is used to send data, PUT is used to update data, and DELETE is used to remove data.
- I learned how to handle these different types of requests in Express.js. In Express.js, you can define routes for each type of request using `app.get()`, `app.post()`, `app.put()`, and `app.delete()`. Each route takes a path and a callback function that is called when a request is made to that path with the corresponding HTTP method.
- I learned about the action attribute of HTML forms can be used to simulate the delete request. When a form is submitted, a request is sent to the URL specified in the action attribute. This request is then handled by the corresponding route in your Express.js app. For example, if you submit a form with `action="/games/:id?_method=DELETE"`, a DELETE request is sent to `/games/:id?_method=DELETE`, which is then handled by `app.delete('/games/:id', callback)` in your Express.js app.
- I learned about the interaction between the action URL of a form and Express.js routing. When a form is submitted, a request is sent to the URL specified in the action attribute. This request is then handled by the corresponding route in your Express.js app. For example, if you submit a form with `action="/games"`, a POST request is sent to `/games`, which is then handled by `app.post('/games', callback)` in your Express.js app.