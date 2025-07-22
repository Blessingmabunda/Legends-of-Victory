// app/register/register.tsx
"use client";

export default function Register() {
  return (
    <div className="flex justify-center my-8">
      <button className="relative bg-gradient-to-br from-red-600 to-purple-700 hover:from-red-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden">
        <span className="relative z-10">Register Now</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
      </button>
    </div>
  );
}