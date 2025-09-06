import React, { useState } from 'react';
import EventRegistrationPopup from './EventRegistrationPopup';

const EventCard = ({ event }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <button
            onClick={() => setShowPopup(true)}
            className="text-black font-semibold hover:underline"
          >
            I'm Interested
          </button>
        </div>
      </div>

      {showPopup && (
        <EventRegistrationPopup 
          event={event} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </>
  );
};

export default EventCard;
