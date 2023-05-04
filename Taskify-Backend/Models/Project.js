import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

    Titre:{
        type: String,
        required: true
    },
   
},);

export const Project = mongoose.model('Project', ProjectSchema);

