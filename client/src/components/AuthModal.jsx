import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { X, User, Mail, Lock, Facebook, BarChart2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

// Import your background image
import heroImage from '../assets/login_banner.jpg';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white text-black rounded-xl shadow-2xl flex overflow-hidden z-50">
        
        {/* Left Panel with Image */}
        <div className="hidden md:flex w-[60%] relative overflow-hidden">
          <img
            src={heroImage}
            alt="Stock Background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          {/* Optional dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          {/* Content on image */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center p-6 text-center">
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="w-7 h-7 text-pink-500" />
              <h1 className="text-3xl font-bold tracking-wide text-white">
                Stock<span className="text-pink-500">Watch</span>
              </h1>
            </div>
            <p className="text-white text-sm leading-snug">
              Track stocks in real-time, manage your watchlist, and invest smartly in any stock.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[40%] p-6 sm:p-8 relative z-10">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            {isLogin ? 'Login to your account' : 'Create your account'}
          </h3>

          <form className="space-y-4">
            {!isLogin && (
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
                <User className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full outline-none text-sm"
                />
              </div>
            )}
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
              <Lock className="w-4 h-4 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2 rounded-md font-semibold transition"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-4 text-sm text-center">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-pink-600 font-medium hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-pink-600 font-medium hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </div>

          <div className="mt-6">
            <p className="text-center text-sm mb-3 text-gray-500">Or continue with</p>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
                <FcGoogle className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
                <Facebook className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
