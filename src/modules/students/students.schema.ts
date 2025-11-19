// students validation schema
import { z } from 'zod';

export const studentValidationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  otherNames: z.string().optional().default(''),
  gender: z.enum(['M', 'F'], "Gender must be 'M' or 'F'"),
  dob: z.string().refine(
    (date) => !isNaN(Date.parse(date)), 
    { message: "Date of birth must be a valid date" }
  ),
  guardianName: z.string().min(1, "Guardian name is required"),
  guardianContact: z.string().min(1, "Guardian contact is required"),
  photo: z.string().optional().default(''),

  // School-related
  class: z.string().min(1, "Class ID is required"),   // should be a valid ObjectId string
  stream: z.string().min(1, "Stream ID is required"), // should be a valid ObjectId string
});

export default studentValidationSchema