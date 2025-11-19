// class validation schema

import z, { string } from "zod";

const classSchema = z.object({
    name: z.string(),
    streams: z.string().array()
})

export default classSchema