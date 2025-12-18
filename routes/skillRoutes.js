import { Router } from "express";
import { addSkills, readSkills, deleteSkills, updateSkills, patchSkills } from "../controller/skill.js";

const skillRoutes = Router();

skillRoutes.post('/add', addSkills);
skillRoutes.get('/read-all', readSkills);
skillRoutes.delete('/deletes/:id', deleteSkills);
skillRoutes.put('/update/:id', updateSkills);
skillRoutes.patch('/patch/:id', patchSkills);

export default skillRoutes;