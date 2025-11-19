// streams model

import mongoose, { Schema } from "mongoose"

interface IStream {
   name: string
}

const StreamSchema = new Schema<IStream>({
    name : {
        type: String,
        required: true,
        unique: true
    }
})

const Stream = mongoose.model("Stream", StreamSchema)

export default Stream