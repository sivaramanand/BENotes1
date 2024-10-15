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

//updateDocumentbyID

// const updateDocById = async (id) => {
//   try {
//    const result= await studentModel.findByIdAndUpdate(id, { name: "1re34" });
//    console.log(result)
//   } catch (error) {
//     console.log(error);
//   }
// };

//updateOne
// const updateOne = async () => {
//   try {
//     const result = await studentModel.updateOne(
//       { age: 34 },
//       { name: "23wea3124w" }
//     );
//     console.log(result);
//   } catch (e) {
//     console.log(e)
//   }
// };

// updateMany
const updateMany = async () => {
  try {
    const result = await studentModel.updateMany(
      { age: 31 },
      { name: "kumaran" }
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

//deletemany

// const deletemany = async () => {
//   try {
//     const result = await studentModel.deleteMany({ name: "kumaran" });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

//deleteone

const deleteOne = async () => {
  try {
    const result = await studentModel.deleteOne({ age: 39 });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
export { deleteOne };
