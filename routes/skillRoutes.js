import { Router } from "express";
import { addSkills } from "../controller/Skill.js";

const skillRoutes = Router();

skillRoutes.post('/add', addSkills);

export default skillRoutes;