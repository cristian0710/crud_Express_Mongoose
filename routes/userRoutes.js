import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/userController.js";

const route = express.Router();

route.get("/getusers", getUsers);
route.post("/createuser", createUser);
route.put("/updateuser/:id", updateUser);
route.delete("/deleteuser/:id", deleteUser);

export default route;