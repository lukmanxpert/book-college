import { auth } from "@/lib/auth";
import { userModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const session = await auth();
    const payload = await req.json();
    if (!payload) {
      return NextResponse.json({
        message: "Payload required",
        error: true,
        success: false,
      });
    }
    const dbUser = await userModel.findOne({ email: session.user.email });
    const isExistingAdmitCollege =
      (await dbUser.admittedCollege?.email) === session.user.email;
    if (isExistingAdmitCollege) {
      return NextResponse.json({
        message: "Already admitted in a college.",
        error: true,
        success: false,
      });
    }
    if (session.user.email !== payload.email) {
      return NextResponse.json({
        message: "Unauthorize access",
        error: true,
        success: false,
      });
    }
    const response = await userModel.updateOne(
      { email: session.user.email },
      { admittedCollege: payload }
    );
    return NextResponse.json({
      message: "Admitted college success.",
      error: false,
      success: true,
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message || error || "Something went wrong",
      error: true,
      success: false,
    });
  }
};
