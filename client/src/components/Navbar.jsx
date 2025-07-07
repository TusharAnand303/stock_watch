import { LogIn, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AuthModal from './AuthModal'; // Make sure this path is correct

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo and Title with animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <BarChart2 className="w-6 h-6 text-pink-500" />
            <h1 className="text-2xl font-bold tracking-wide">
              Stock<span className="text-pink-500">Watch</span>
            </h1>
          </motion.div>

          {/* CTA Button with animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAuthOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-5 py-2 rounded-full font-medium transition shadow-md"
          >
            <LogIn className="w-5 h-5" />
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Modal for Login/Signup */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
