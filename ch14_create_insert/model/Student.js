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

const createdoc = async (nam,age,fee,hob,isa,comm) => {
  try {
    const studentDoc = new studentModel({
      name: nam,
      age: age,
      fees: fee,
      hobbies: hob,
      isactive: isa,
      comments: comm,
    });
    const result = await studentDoc.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const createmultipledoc = async () => {
    try {
      const result = await studentModel.insertMany([
        {
          name: "e",
          age: 33,
          fees: 89000,
          hobbies: ["e", "e"],
          isactive: true,
          comments: [{ value: "this is bad mongoose" }],
        },
        {
          name: "f",
          age: 34,
          fees: 82000,
          hobbies: ["f", "f"],
          isactive: true,
          comments: [{ value: "this is bad mongoose" }],
        },
        {
          name: "g",
          age: 39,
          fees: 89000,
          hobbies: ["g", "g"],
          isactive: true,
          comments: [{ value: "this is bad mongoose 4" }],
        },
      ]);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
export {createdoc,createmultipledoc};
