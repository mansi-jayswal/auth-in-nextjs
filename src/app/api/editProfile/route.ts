import { connectToMongo } from "@/app/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";

connectToMongo();

export async function POST(req: NextRequest) {
  try {
    const { id, username, email, password }: { id: string; username: string; email: string; password: string } = await req.json();
    
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        success: false
      });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password; // Ensure password hashing if needed

    const updatedUser = await user.save();

    return NextResponse.json({
      message: "User updated successfully!",
      success: true,
      user: updatedUser
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        success: false
      },
      { status: 500 }
    );
  }
}
