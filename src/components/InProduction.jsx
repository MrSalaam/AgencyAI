import React from 'react';
import { motion } from 'framer-motion';

const InProduction = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl text-center text-blue-700 dark:text-white mx-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Work in Progress!</h2>
        <p className='text-xs sm:text-sm font-bold'>This site is currently under construction. Feel free to look around!</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
};

export default InProduction;