const express = require("express");
const routes = express.Router();

const UserController = require('./controllers/UserController');
const CardController = require('./controllers/CardController');
const QuestionController = require('./controllers/QuestionController');
const QuizController = require('./controllers/QuizController');

routes.get('/', (req, res) => {
    res.send("Hello World");
})

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:user_id", UserController.show);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.destroy);

routes.post("/cards", CardController.store);
routes.get("/cards", CardController.index);
routes.get("/cards/:card_id", CardController.show);
routes.put("/cards/:card_id", CardController.update);
routes.delete("/cards/:card_id", CardController.destroy);

routes.post("/question", QuestionController.store);
routes.get("/question", QuestionController.index);
routes.get("/question/:question_id", QuestionController.show);
routes.put("/question/:question_id", QuestionController.update);
routes.delete("/question/:question_id", QuestionController.destroy);

routes.post("/quiz", QuizController.store);
routes.get("/quiz/:quiz_type", QuizController.show);
routes.get("/quiz", QuizController.index);
routes.put("/quiz/:quiz_id", QuizController.update);
routes.delete("/quiz/:quiz_id", QuizController.destroy);

module.exports = routes;