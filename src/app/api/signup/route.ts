import { connectToMongo } from "@/app/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";

connectToMongo();

export async function POST(req: NextRequest) {
  try 
   {
    const { username, email, password }: any = await req.json();
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        message: "user already exists",
        success:false
      });
    }
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "user registerd successfully!",
      success:true,
      user: savedUser,
    });
  } 
  catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        success:false
      },
      { status: 500 }
    );
  }
}
