// streams validation schema

import z from "zod";

const streamSchema = z.object({
    name: z.string({})
})

export default streamSchema