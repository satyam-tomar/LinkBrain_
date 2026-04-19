import { Router } from "express";
import { saveDetails } from "../controllers/contact.controller.js";

export const contactRouter = Router();

contactRouter.post('/contact', saveDetails);