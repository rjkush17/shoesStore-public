import express from "express";
import {registration_controller, login_controller} from "./Controllers/auth_controller.js";
import { createProduct } from "./Controllers/product_controller.js";
import auth_middle from "./middleware/auth_middle.js";

// run router function form express for creating routers
const router = express.Router();

//Post request router for registration
router.post("/registration",registration_controller)
//post request router for login 
router.post("/login", login_controller)


//post request router for add product
router.post("/createProduct", createProduct)


export default router
