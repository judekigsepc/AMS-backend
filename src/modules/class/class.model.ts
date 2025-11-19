import mongoose, { Schema, Types } from "mongoose"

// class model
interface IClass {
    name: string
    stream: [Types.ObjectId]
}

const classSchema = new Schema<IClass>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    stream: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Stream",
        required: true
    }
})

const Class = mongoose.model("Class",classSchema)

export default Class