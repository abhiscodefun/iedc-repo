import React from 'react';
import TopNavigation from '../components/layout/TopNavigation';
import Footer from '../components/layout/Footer';
import eventsTreasureHuntImg from '../assets/events_treasure_hunt.jpg';

const EventsPage = ({ navigate, currentPage }) => {
  const eventsPageData = [
    {
      title: "Treasure Hunt",
      imageUrl: eventsTreasureHuntImg,
      altText: "Treasure hunt map",
      description: "Embark on an exciting treasure hunt filled with clues, puzzles, and surprises. Test your problem-solving skills and win amazing prizes!",
      certificateLink: "https://drive.google.com/drive/folders/17-9OFE4foKTwUbUC2EB8FPTZFvd7nTNB?usp=drive_link"
    },
    {
      title: "Faculty Development Programme",
      imageUrl: "/events_fdp.jpg",
      altText: "Faculty Development Programme",
      description: "A comprehensive 3-day program designed to enhance teaching skills and professional development for faculty members.",
      certificateLink: "https://drive.google.com/drive/folders/1_WP4BPitPWmPTjqsWC93LnAVfEAcVXli"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <TopNavigation navigate={navigate} currentPage={currentPage} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Events & Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsPageData.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <img
                  src={event.imageUrl}
                  alt={event.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.certificateLink && (
                  <a
                    href={event.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
