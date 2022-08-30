# todoList

Project features:

-Initializing package.json

-Development Dependencies:
Babel(.bablelrc with presets: env and stage-2),
Webpack(webpack.config.js),
Nodemon(nodemon.json)

-Config Variables:
config.js with mongo process.env.db with mongodb link and port

-Running Scripts:
package.json with start nodemon scripts

-Configuring Express:
npm i express --save
importing express in app.js
same for bodyParser, helmet, cors, router

-Starting the server:
Setup Mongoose and connecting to DB in index.js

-Setting Up Mongoose and Connecting to MongoDB:
making connection in index.js

-Todo Model:
TodoSchema with text and isCompleted and their types and data

-TODO CRUD API:
The API routes will be declared using the Express router in src/routes/todo.router.js, and then mounted on the Express app we configured in src/routes/index.js
Making CRUD in todo.router.js with path
Making TODO Controllers in todo.controller.js

.env with DB and PORT
