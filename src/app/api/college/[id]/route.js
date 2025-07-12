import connectMongo from "@/lib/connectDb";
import collegeModel from "@/models/college.model";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({
        message: "Id is not found",
      });
    } else {
      await connectMongo();
      const collegeData = await collegeModel.findById(id);
      if (!collegeData) {
        return NextResponse.json({
          message: "No data found",
          error: true,
          success: false,
        });
      }
      return NextResponse.json({
        message: "College data",
        data: collegeData,
        success: true,
        error: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message || error || "Something went wrong.",
    });
  }
};
