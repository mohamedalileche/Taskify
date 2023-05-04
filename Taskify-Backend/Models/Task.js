import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    
    Titre: {
        type: String,
        required: true
    },
    Description:{
        type:String, 
        default :""
    },
    Project:{
        type:Schema.Types.ObjectId,
        ref:"Project"
    }
    
});
export const Task = mongoose.model('Task', TaskSchema);






