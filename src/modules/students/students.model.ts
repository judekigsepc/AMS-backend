// students model

import mongoose, { Schema, Types } from "mongoose"

interface IStudent {
    firstName: string
    lastName: string
    otherNames: string
    gender: "M"|"F"
    dob: Date,
    guardianName: string,
    guardianContact: string,
    photo: string,
    class: Types.ObjectId,
    stream: Types.ObjectId
}


const studentSchema = new Schema<IStudent>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  otherNames: { type: String, default: '' }, // optional
  gender: { type: String, enum: ['M', 'F'], required: true },
  dob: { type: Date, required: true },
  guardianName: { type: String, required: true },
  guardianContact: { type: String, required: true },
  photo: { type: String, default: '' }, // URL or file path

  // School-related
  class: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
  stream: { type: Schema.Types.ObjectId, ref: 'Stream', required: true },

}, { timestamps: true });

const Student = mongoose.model("Student",studentSchema)

export default Student


