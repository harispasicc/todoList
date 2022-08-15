import express from "express";
import ctrl from "../controllers/todo.controllers";

const router = express.Router();

router.route("/api/todos").get(ctrl.list).post(ctrl.create);
router.route("/api/todos/:id").put(ctrl.update).delete(ctrl.remove);

export default router;
