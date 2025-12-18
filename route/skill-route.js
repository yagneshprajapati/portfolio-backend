import { Router } from "express";
import { addSkills, readSkills, deleteSkills, updateSkills, patchSkills } from "../controller/skill-controller.js";

const skillRoutes = Router();

skillRoutes.post('/', addSkills);
skillRoutes.get('/', readSkills);
skillRoutes.delete('/:id', deleteSkills);
skillRoutes.put('/:id', updateSkills);
skillRoutes.patch('/:id', patchSkills);

export default skillRoutes;