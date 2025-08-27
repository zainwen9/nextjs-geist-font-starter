"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-700/20 to-transparent"></div>
      
      {/* Main content */}
      <div className="flex flex-col items-center text-center text-white z-10 max-w-sm mx-auto">
        {/* Motorcycle illustration placeholder */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <img 
              src="https://placehold.co/200x150?text=Motorcycle+Driver+Illustration+Blue+Theme" 
              alt="Motorcycle driver illustration with blue theme"
              className="w-40 h-32 object-contain"
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-white/10 rounded-full"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-2xl font-bold mb-3 leading-tight">
          Perjalanan aman di<br />ujung jari anda
        </h1>

        {/* Subtitle */}
        <p className="text-blue-100 mb-12 text-sm leading-relaxed">
          Siap mengantar kemanapun anda<br />mau
        </p>

        {/* Action buttons */}
        <div className="w-full space-y-3">
          <Link href="/login" className="block">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-lg"
              size="lg"
            >
              Login
            </Button>
          </Link>
          
          <Link href="/register" className="block">
            <Button 
              variant="outline" 
              className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 font-medium py-3 rounded-lg backdrop-blur-sm"
              size="lg"
            >
              Daftar
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom illustration */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="https://placehold.co/400x200?text=Bottom+Wave+Pattern+Blue+Gradient" 
          alt="Bottom wave pattern with blue gradient"
          className="w-full h-32 object-cover opacity-30"
        />
      </div>
    </div>
  );
}
