import z, { string } from "zod";

// class controller
const classSchema = z.object({
    name: z.string(),
    streams: z.string().array()
})

export default classSchema