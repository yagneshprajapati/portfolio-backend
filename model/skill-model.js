import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        skillName: String
    }
);

const Skill = mongoose.model("Skill", schema);

export default Skill;