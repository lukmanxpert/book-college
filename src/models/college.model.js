// models/College.js
import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true }, // main college image
    admissionDates: { type: String, required: true },
    events: [{ type: String }],
    researchHistory: { type: String },
    sports: [{ type: String }],
    rating: { type: Number, default: 0 },
    numberOfResearch: { type: Number, default: 0 },
    graduateGallery: [{ type: String }], // ⬅️ NEW FIELD FOR GRADUATE GROUP IMAGES
  },
  { timestamps: true }
);

export default mongoose.models.colleges ||
  mongoose.model("colleges", collegeSchema);
