import { Router } from "express";
import { c, r, u, d, edit } from "../controller/skill-controller.js";

const skillRoutes = Router();

skillRoutes.post('/', c);
skillRoutes.get('/', r);
skillRoutes.delete('/:id', d);
skillRoutes.put('/:id', u);
skillRoutes.patch('/:id', edit);

export default skillRoutes;