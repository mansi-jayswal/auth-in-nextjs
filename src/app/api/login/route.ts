import { connectToMongo } from "@/app/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";
import jwt from "jsonwebtoken";

connectToMongo();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User does Not Exist , Please signup First",
          success: false,
        },
        { status: 400 }
      );
    }
    if (user.password !== password) {
      return NextResponse.json({
        message: "Invalid password",
        success: false,
      });
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "10",    
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: user,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;

  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 400 }
    );
  }
}
