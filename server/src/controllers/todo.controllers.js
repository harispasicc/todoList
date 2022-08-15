import _ from "lodash";
import Todo from "../models/todo.model";

const create = (req, res) => {
  const todo = Todo(req.body);
  todo.save((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(201).json(data);
  });
};

const list = (req, res) => {
  Todo.find((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(200).json(data);
  });
};

const update = (req, res) => {
  const id = req.params.id;
  const isCompleted = req.body.isCompleted;
  if (id) {
    Todo.findByIdAndUpdate(id, { isCompleted }, function (err, docs) {
      if (err) {
        res.status(400).json({ message: "Todo has not been updated." });
      } else {
        res.status(200).json({ message: "Todo details successfully updated." });
      }
    });
  } else {
    res.json({ error: "Todo has not been updated." });
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  Todo.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Todo not found!");
    }
    data.remove((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json("Todo successfully deleted.");
    });
  });
};

export default { list, create, update, remove };
