"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const ErrorComponent = ({ isHome }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          Server Error 500!
        </h2>
        <div>
          {!isHome && (
            <button
              className="bg-blue-500 px-4 py-2 rounded mr-2 text-white"
              onClick={() => router.push("/")}
            >
              Home
            </button>
          )}

          <button
            className="px-6 py-2 bg-red-500 rounded hover:bg-red-700 text-white transition duration-300"
            style={{ background: "red" }}
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
