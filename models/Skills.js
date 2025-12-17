import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        skillName: String
    }
);

const Skills = mongoose.model("Skill", schema);


export default Skills;