import mongoose, { Schema, Types } from "mongoose"

// class model
interface IClass {
    name: string
    streams: [Types.ObjectId]
}

const ClassSchema = new Schema<IClass>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    streams: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Stream",
        required: true
    }
})

const Class = mongoose.model("Class",ClassSchema)

export default Class