import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

const studentModel = mongoose.model("student", studentSchema);

// get all records

// const getAllDoc = async () => {
//   const result = await studentModel.find();
//   console.log(result);
// };

// get only anme and age
// const getNameandAge = async () => {
//   const result = await studentModel.find().select(["name", "age"]);
//   console.log(result);
// };

// const getallotherthannameage = async () => {
//   const result = await studentModel.find().select(["-name", "-age"]);
//   console.log(result);
// };

// find by ID
// const findbyID = async () => {
//   const result = await studentModel.findById("670bc2f3c112bcaa54b23b93")
//   console.log(result);
// };

// findbyIDNameAge

// const findbyIDNameAge = async () => {
//     const result = await studentModel.findById("670bc2f3c112bcaa54b23b93","name age")
//     console.log(result);
//   };

// findbyField
//   const findbyField = async () => {
//     const result = await studentModel.find({name:"sonam"}).select("name age")
//     console.log(result);
//   };

// skip field

//   const skipfiled = async () => {
//     const result = await studentModel.find().skip(2)
//     console.log(result);
//   };

// limit field

//   const limitfiled = async () => {
//     const result = await studentModel.find().limit(2)
//     console.log(result);
//   };


// comparison operator

const comparison1=async()=>{
    const result=await studentModel.find({age:{$gte:30}})
    console.log(result)
}
export { comparison1 };
