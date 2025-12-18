import { Router } from "express";
import { addSkill, readAllSkill, updateSkillById, deleteSkillById, editSkillById } from "../controller/skill-controller.js";

const skillRoutes = Router();

skillRoutes.post('/', addSkill);
skillRoutes.get('/', readAllSkill);
skillRoutes.delete('/:id', updateSkillById);
skillRoutes.put('/:id', deleteSkillById);
skillRoutes.patch('/:id', editSkillById);

export default skillRoutes;