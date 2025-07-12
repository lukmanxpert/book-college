import { auth } from "@/lib/auth";
import connectMongo from "@/lib/connectDb";
import { userModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    const { name, email, university, address, image } = await req.json();
    const session = await auth();
    console.log("userModel :>> ", userModel);
    if (!session.user) {
      return NextResponse.json(
        {
          message: "Unauthorize access",
        },
        {
          status: 401,
        }
      );
    }
    await connectMongo();
    const existUser = await userModel.findOne({ email: session.user.email });
    if (!existUser) {
      return NextResponse.json({
        message: "User not found",
      });
    } else {
      const payload = {
        name,
        university,
        address,
        image,
      };
      const updatedData = await userModel.updateOne(
        { email: session.user.email },
        { $set: payload }
      );
      if (updatedData.modifiedCount === 0) {
        return NextResponse.json({
          message: "No changes made to the user data.",
        });
      }
      return NextResponse.json({
        message: "Successfully updated 😊",
        success: true,
        error: false,
        data: updatedData,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message || error || "Something went wrong!",
    });
  }
};
