# Finding-Meows-Homes

It is a responsive web application specifically designed for users who want to adopt straycats.
Users can also upload any straycats information through this platform.

It is also a platform for users to find their lost cats by typing names of cats.

# Tech stack used

```
    Node engine: >=8

    Component driver: React JS
    CSS Compiler:     Sass
    Server engine:    Express
```

# usage instructions

You need to run front-end and backend seperately by following below guide

## backend

Go to server directory, then run below command

```
    npm install // install dependencies
    npm start   // start server
```

## front-end

Go to client directory, then run below command

```
    npm install // install dependencies
    npm start   // start the application
```

After app started, The [web app](http://localhost:3000) will be automatically opened in your default browser.

# API references

Origin: http://localhost:9001

| API          | Description                         | Method | Content-type        |
| ------------ | ----------------------------------- | ------ | ------------------- |
| /cats        | Fetch list of registered cats       | GET    |                     |
| /cats/{id}   | Get detail for a specific cat       | GET    |                     |
| /cats        | Register a new cat with detail      | POST   | application/json    |
| /cats/{id}   | Remove a cat when a cat is adopted  | DELETE |                     |
| /cats/upload | Upload image of cat before register | POST   | multipart/form-data |

# screenshots

## List View

![Cat list view](/doc/assets/list-view.png)

## Register view

![Cat create view](/doc/assets/create-view.png)

# Lessons learned & next steps

learned uploading images through http post method.
trying to make a cat food donation functionality in this platform.
