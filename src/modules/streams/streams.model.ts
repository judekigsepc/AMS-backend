// streams model

import mongoose, { Schema } from "mongoose"

interface IStream {
   name: string
}

const streamSchema = new Schema<IStream>({
    name : {
        type: String,
        required: true,
        unique: true
    }
})

const Stream = mongoose.model("Stream", streamSchema)

export default Stream