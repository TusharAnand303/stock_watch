import { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Navbar from '../components/Navbar';
import AuthModal from '../components/AuthModal';

import heroImage from '../assets/hero-stock4.jpg';
import {
  LogIn,
  Compass,
  LineChart,
  BarChart3,
  NotebookPen,
  BarChart2,
  TrendingUp,
  Search,
  DollarSign
} from 'lucide-react';

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-black font-poppins">
      {/* Hero Background Image with Zoom Animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="w-full h-screen bg-cover bg-center animate-[zoomSlow_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0d001c]/90" />
      </div>

      {/* Navbar */}
      <Navbar setIsAuthOpen={setIsAuthOpen} />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h1 className="text-5xl sm:text-5xl font-semibold mb-4 leading-tight tracking-tight text-center">
            <span className="text-pink-500">Invest</span> Smartly with{' '}
            <span className="text-pink-500 inline-flex items-center gap-2">
              <BarChart2 className="w-10 h-10 text-pink-500" />
              <span className="text-white font-semibold">Stock</span>Watch
            </span>
          </h1>

          <p className="text-gray-400 text-xl sm:text-2xl mb-6 font-medium">
            Your one-stop solution for real-time stock tracking, analysis, and smarter decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.button
              onClick={() => setIsAuthOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-xl transition"
            >
              <LogIn className="w-5 h-5" />
              Get Started
            </motion.button>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-500 hover:border-white text-gray-300 hover:text-white py-3 px-8 rounded-full text-lg font-semibold transition"
            >
              <Compass className="w-5 h-5" />
              Explore Features
            </motion.a>
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300 mt-6 text-sm sm:text-base font-medium">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-pink-500">
                <CountUp start={0} end={1500} duration={3} separator="," />+
              </span>
              <span>Live Stocks Tracked</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">
                <CountUp start={0} end={99.9} duration={3} decimals={1} suffix="%" />
              </span>
              <span>API Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-indigo-400">
                <CountUp start={0} end={0.5} duration={3} decimals={1} suffix=" sec" />
              </span>
              <span>Avg Data Refresh</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#1d102b] to-black text-white"
      >
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-6 flex items-center justify-center gap-3">
            Why Choose{' '}
            <span className="inline-flex items-center ml-2">
              <BarChart2 className="w-8 h-8 text-pink-500" />
              <span className="text-white font-semibold">Stock</span>
              <span className="text-pink-500 font-semibold">Watch</span>
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Everything you need to make smarter investment decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center px-4 sm:px-0">
          {[{
            title: 'Live Stock Prices',
            desc: 'Get real-time updates for top stocks using Twelve Data API.',
            icon: <LineChart className="w-14 h-14 text-pink-500 mx-auto mb-5" />
          }, {
            title: 'Interactive Charts',
            desc: 'View 1D, 1W, 1Y, 5Y charts with modern, clean visuals.',
            icon: <BarChart3 className="w-14 h-14 text-purple-500 mx-auto mb-5" />
          }, {
            title: 'Watchlist & Notes',
            desc: 'Create watchlists and take notes for your trading strategies.',
            icon: <NotebookPen className="w-14 h-14 text-indigo-500 mx-auto mb-5" />
          }].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-white/5 to-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md cursor-pointer transition-transform"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-black to-[#140220] text-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className='text-pink-500'>Works</span> ?</h2>
          <p className="text-gray-400 text-lg">
            Simple steps to get started with StockWatch and make informed trades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[{
            title: 'Track',
            desc: 'Follow real-time price movements and trends of your favorite stocks.',
            icon: <TrendingUp className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          }, {
            title: 'Analyze',
            desc: 'Dive into historical charts, news, and technical insights.',
            icon: <Search className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          }, {
            title: 'Invest',
            desc: 'Make smarter decisions and grow your portfolio with confidence.',
            icon: <DollarSign className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          }].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl shadow-md backdrop-blur"
            >
              {step.icon}
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-[#140220] to-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Built for Every <span className='text-pink-500'>Investor</span></h2>
          <p className="text-lg text-gray-400 mb-6">
            Whether you're new to investing or a seasoned trader, StockWatch gives you the tools to succeed — from price trends to note taking, all backed by real-time data.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-gray-400 text-sm bg-black">
        © {new Date().getFullYear()}{' '}
        <span className="text-white font-semibold">StockWatch</span> · Built with ❤️ by{' '}
        <span className="text-white">Tushar</span>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Custom Keyframes for background animation */}
      <style>
        {`
          @keyframes zoomSlow {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </div>
  );
}
