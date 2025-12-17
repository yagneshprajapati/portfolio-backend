import Skills from "../models/Skills.js";

// post request.
export const addSkills = async (req, res) => {
    const obj = new Skills(req.body);
    await obj.save();
    res.send(obj);
}

