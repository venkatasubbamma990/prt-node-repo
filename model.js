let mongoose = require('mongoose');
let studentSchema = new mongoose.Schema({
   id:{type:Number,required:true},
   class:{type:String,required:true},
   studentCount : {type:Number,required:true},
   
})
let Student = mongoose.model('student',studentSchema);
//module.exports = Student
let classSchema = new mongoose.Schema({
    name:{type:String},
    myClassId:{type:Number},
    studentId:{type:Number}
})
let Class = mongoose.model('class',classSchema);
module.exports = {Student,Class}