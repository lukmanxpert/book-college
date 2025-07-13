// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: null, required: true },
    email: { type: String, required: true, unique: true },
    university: { type: String, required: true, default: null },
    address: { type: String, required: true, default: null },
    image: { type: String, required: true, default: null },
    admittedCollege: { type: Object, default: null },
  },
  {
    timestamps: true,
  }
);

// ✅ Check if model exists before creating
export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
