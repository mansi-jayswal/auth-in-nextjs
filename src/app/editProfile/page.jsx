"use client";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function EditProfile() {
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const router = useRouter();

  const [formData, setFormData] = useState({
    username: user.userInfo?.username || "",
    email: user.userInfo?.email ||"",
    password: user.userInfo?.password ||"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form updated", formData);
    try {
      const res = await fetch("http://localhost:3000/api/editProfile", {
        method: "POST",
        body: JSON.stringify({...formData , id:user.userInfo._id}),
      });
      const data = await res.json();
      if(data.success){
        toast.success(data.message);
        dispatch(setUser(data.user));
        router.replace("/profile");
      }
      else toast.error(data.message)
    } catch (error) {
      toast.error("error is: " + error.message);
    }

  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">Edit profile</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Save information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
