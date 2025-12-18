import Skills from "../model/skill-model.js";

// post request.
export const addSkill = async (req, res) => {
    const obj = new Skills(req.body);
    await obj.save();
    res.send(obj);
}

// get request 
export const readAllSkill = async (req, res) => {
    const arr = await Skills.find(); // array return kare.
    res.json(arr);
}

// delete request
export const deleteSkillById = async (req, res) =>{
    const obj = await Skills.findByIdAndDelete(req.params.id);
    res.json({ "message" : `success deletedd ${obj} ` })
}

// put request for updation
export const updateSkillById = async (req, res) =>{
    const updatedObj = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ "message" : `success updated ${updatedObj} `});
}

// patch
export const editSkillById = async (req, res) => {
    const patchObj = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ "message" : `success updated ${patchObj} `});
}

