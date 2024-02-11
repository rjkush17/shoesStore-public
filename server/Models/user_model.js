import mongoose from "mongoose";
import { z } from "zod";

//Zod validation object
const zodUser = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(4, { message: "Name should be at least 4 letters long" })
    .max(20, { message: "Name should not exceed 20 letters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invailed email formate" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(4, { message: "Password should have at least 4 characters" })
});

// mongoDB Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      require: true,
      type: String,
      trim: true,
    },
    email: {
      require: true,
      type: String,
      trim: true,
    },
    password: {
      require: true,
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// pre-save hook to validate using Zod before saving to MongoDB
UserSchema.pre("save", async function(next){
  try {
     await zodUser.parseAsync(this.toObject());
     next()
  } catch (error) {
    console.log(`Error while validating User model ${error}` .bgRed.white);
    next(error)
  }
});

//Create mongoDB model using above schema
const User = mongoose.model("User",UserSchema);
export default User;
