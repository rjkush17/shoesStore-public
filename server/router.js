import express from "express";
import {registration_controller, login_controller} from "./Controllers/auth_controller.js";
import { createProduct } from "./Controllers/product_controller.js";
import auth_middle from "./middleware/auth_middle.js";
import { home_controller, get_singal_product, get_shoplist } from "./Controllers/get_product_controller.js"

// run router function form express for creating routers
const router = express.Router();

//Post request router for registration
router.post("/registration",registration_controller)
//post request router for login 
router.post("/login", login_controller)

//router for pages
router.get("/home",home_controller)
//post request for get singal product data
router.get("/listingData/:id", get_singal_product)
//get req to get data of perticluar category by name
router.get("/shop/:name", get_shoplist)


//post request router for add product
router.post("/createProduct", createProduct)



export default router
