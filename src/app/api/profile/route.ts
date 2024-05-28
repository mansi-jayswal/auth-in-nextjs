import { connectToMongo } from "@/app/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";

connectToMongo();

export async function GET(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User does Not Exist , Please signup First",
        },
        { status: 400 }
      );
    }
    if (user.password !== password) {
      return NextResponse.json({
        message: "Invalid password",
      });
    }
    console.log(user)

    return NextResponse.json({
      message: "Login Successful",
      success: true,
      user: user,
    });
  } 
  catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 400 }
    );
  }
}
