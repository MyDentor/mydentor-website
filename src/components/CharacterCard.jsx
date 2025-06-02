import React from 'react';
import { motion } from 'framer-motion';

const CharacterCard = ({ character, description, image, gradient }) => {
  return (
    <motion.div 
      className={`rounded-lg overflow-hidden shadow-lg ${gradient} p-1`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col items-center">
          <img 
            src={image} 
            alt={character} 
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="font-nunito font-bold text-xl mb-2">{character}</h3>
          <p className="text-gray-700 text-center font-poppins">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
