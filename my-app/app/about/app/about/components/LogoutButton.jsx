"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
