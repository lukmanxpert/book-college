import connectMongo from "@/lib/connectDb";
import collegeModel from "@/models/college.model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongo();
    const collegeData = await collegeModel.find();
    console.log('collegeData :>> ', collegeData);
    return NextResponse.json({
      message: "College data",
      error: false,
      success: true,
      data: collegeData,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message || error || "Something went wrong",
    });
  }
};
