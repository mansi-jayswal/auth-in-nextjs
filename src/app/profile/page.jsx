"use client";
import { clearUser } from "@/redux/userSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const router  = useRouter();

  const data = user.userInfo ? user.userInfo : "guest";
  console.log(data);

  console.log("hello");

  const handleLogout = () => {
    dispatch(clearUser());
    toast.success("logout successful!");
  };
  const handleEdit = () => {
    router.replace('/editProfile');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        {!user.userInfo ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome guest!</h1>
            <p className="text-xl font-semibold mb-4">Please login or signup to see profile info</p>
            <div className="flex gap-2 justify-center">
              <Link href={'/login'} className="text-blue-500 hover:text-blue-900 bg-pink-200 p-2 rounded-lg">Login</Link>
              <Link href={'/signup'} className="text-blue-500 hover:text-blue-900 bg-pink-200 p-2 rounded-lg">Signup</Link>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <p className="mb-2">
              <strong>Username:</strong> {user.userInfo.username}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {user.userInfo.email}
            </p>
            <p className="mb-4">
              <strong>Password:</strong> {user.userInfo.password}
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleEdit}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >Edit
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
