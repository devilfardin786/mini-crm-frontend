"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Login to Mini CRM</h2>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}