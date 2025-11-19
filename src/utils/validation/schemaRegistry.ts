
import { userLoginSchema, userSchema } from "@modules/users/user.schema";
import streamSchema from "@modules/streams/streams.schema";
import classSchema from "@modules/class/class.schema";
import studentSchema from "@modules/students/students.schema";


export const validationSchemaMap = {
  "user" : userSchema,
  "user-login": userLoginSchema,
  "stream":streamSchema,
  "class" : classSchema,
  "student":studentSchema
};

export type ValidationTypes = keyof typeof validationSchemaMap;
