// ✨ Remember to run: npm install swiper
import React, { useRef, useState, useEffect } from 'react';

// ✨ Swiper component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// ✨ Swiper CSS imports
import 'swiper/css';
import 'swiper/css/pagination';

// --- Asset Imports ---
import ideathonEventImg from './assets/new_events_ideathon.png';
import techtronixEventImg from './assets/new_events_techtronix.png';
import gamingEventImg from './assets/new_events_gaming.png';
import funEventImg from './assets/new_events_fun.png';
import nodalOfficer1Img from './assets/nod_off1.jpg';
import nodalOfficer2Img from './assets/nod_off2.jpg';
import ex01Img from './assets/ex_01.jpg';
import ex02Img from './assets/ex_02.jpg';
import ex03Img from './assets/ex_03.jpg';
import ex04Img from './assets/ex_04.jpg';
import ex05Img from './assets/ex_05.jpg';
import ex06Img from './assets/ex_06.jpg';
import ex07Img from './assets/ex_07.jpg';
import ex08Img from './assets/ex_08.jpg';
import ex09Img from './assets/ex_09.jpg';
import ex10nsImg from './assets/ex_10_ns.png';
import galleryPic1 from './assets/pics_01.jpg';
import galleryPic2 from './assets/pics_02.jpg';
import galleryPic3 from './assets/pics_03.jpg';
import galleryPic4 from './assets/pics_04.jpg';
import galleryPic5 from './assets/pics_05.jpg';
import galleryPic6 from './assets/pics_06.jpg';
import galleryPic7 from './assets/pics_07.jpg';
import galleryPic8 from './assets/pics_08.jpg';
import galleryPic9 from './assets/pics_09.jpg';
import eventsFdpImg from './assets/events_fdp.jpg';
import tshirtAdVideo from './assets/tshirt_ad.mp4';


// --- Main App Component ---
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [page, setPage] = useState('home');
  const [showTshirtAd, setShowTshirtAd] = useState(false);

  const navigate = (targetPage) => {
    setPage(targetPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      const hideTimer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(hideTimer);
    }, 3000);
    return () => clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const adTimer = setTimeout(() => {
        setShowTshirtAd(true);
      }, 1500);
      return () => clearTimeout(adTimer);
    }
  }, [isLoading]);

  const handleKnowMore = () => {
    setShowTshirtAd(false);
    navigate('tshirt');
  };

  if (isLoading) {
    return <LoadingScreen isExiting={isExiting} />;
  }
  
  return (
    <>
      {showTshirtAd && <TshirtAdPopup onClose={() => setShowTshirtAd(false)} onKnowMore={handleKnowMore} />}
      {page === 'home' && <MainApp navigate={navigate} currentPage={page} />}
      {page === 'events' && <EventsPage navigate={navigate} currentPage={page} />}
      {page === 'tshirt' && <TshirtPage navigate={navigate} currentPage={page} />}
    </>
  );
};

// --- The Main Application (Home Page) ---
const MainApp = ({ navigate, currentPage }) => {
  const joinSectionRef = useRef(null);
  const [galleryState, setGalleryState] = useState({ isOpen: false, startIndex: 0 });
  const [updateImage, setUpdateImage] = useState(null);

  const handleScrollToJoin = () => {
    joinSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const openGallery = (index) => {
    setGalleryState({ isOpen: true, startIndex: index });
  };

  const closeGallery = () => {
    setGalleryState({ isOpen: false, startIndex: 0 });
  };

  const openUpdateImage = (imageUrl) => {
    setUpdateImage(imageUrl);
  };

  const closeUpdateImage = () => {
    setUpdateImage(null);
  };

  return (
    <>
      <div className="bg-gray-100 font-sans antialiased animate-fade-in pb-28" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <AnnouncementBanner />
        <HeroSection onJoinClick={handleScrollToJoin} navigate={navigate} currentPage={currentPage} />
        <ContentSection openGallery={openGallery} onImageClick={openUpdateImage} />
        <div ref={joinSectionRef} className="bg-white py-12 sm:py-16">
          <JoinSection />
        </div>
        <Footer />
      </div>
      {galleryState.isOpen && <FullScreenGallery images={galleryImages} startIndex={galleryState.startIndex} onClose={closeGallery} />}
      {updateImage && (
        <FullScreenGallery 
          images={[{ id: 'update-img', imageUrl: updateImage, alt: 'Latest update image' }]}
          startIndex={0}
          onClose={closeUpdateImage}
        />
      )}
      <WhatsAppButton />
    </>
  );
};


// --- Loading Screen Component ---
const LoadingScreen = ({ isExiting }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const text = "IEDC ASET";

  return (
    <div className={`relative h-screen w-screen flex items-center justify-center overflow-hidden bg-[#000411] transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <WaveBackground isloading="true" />
      <div className="relative w-full max-w-lg h-48">
        <svg viewBox="0 0 500 100" className="absolute inset-0 w-full h-full">
          <g className={`circuit-bg ${startAnimation ? 'animate' : ''}`}>
            <path d="M 0 10 H 500" />
            <path d="M 0 90 H 500" />
            <path d="M 50 10 V 90" />
            <path d="M 150 10 V 90" />
            <path d="M 250 10 V 90" />
            <path d="M 350 10 V 90" />
            <path d="M 450 10 V 90" />
            <path d="M 20 50 H 480" />
          </g>
          {/* Use SVG text with a custom font and animate each character */}
          <text x="50%" y="55%" dy=".1em" textAnchor="middle" className="loading-text">
            {text.split("").map((char, index) => (
              <tspan 
                key={index} 
                className={`text-char ${startAnimation ? 'animate' : ''}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </tspan>
            ))}
          </text>
        </svg>
      </div>
    </div>
  );
};


// --- Scrolling Announcement Banner ---
const AnnouncementBanner = () => (
  <div className="text-white bg-black py-3 overflow-hidden whitespace-nowrap shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
    <div className="inline-block animate-marquee">
      <span className="mx-12 text-sm font-medium tracking-wider">TSHIRT sale exclusively for IEDC members coming soon!</span>
      <span className="mx-12 text-sm font-medium tracking-wider">TSHIRT sale exclusively for IEDC members coming soon!</span>
      <span className="mx-12 text-sm font-medium tracking-wider">TSHIRT sale exclusively for IEDC members coming soon!</span>
    </div>
  </div>
);

// --- Core Sections ---
const HeroSection = ({ onJoinClick, navigate, currentPage }) => {
  const [waveStyle, setWaveStyle] = useState({ buttonY: 0, rotation: 0, imageOpacity: 0.2 });
  const [isTextVisible, setIsTextVisible] = useState(false);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsTextVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animate = () => {
      const time = performance.now() * 0.001;
      const sineWave = Math.sin(time * 1.5);
      const cosineWave = Math.cos(time * 1.5);
      const buttonY = 8 * sineWave;
      const rotation = 2 * cosineWave;
      const imageOpacity = 0.4 - 0.2 * sineWave; 
      setWaveStyle({ buttonY, rotation, imageOpacity });
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    return () => { if (animationFrameId.current) { cancelAnimationFrame(animationFrameId.current); } };
  }, []);

  return (
    <div className="relative h-[700px] w-full flex flex-col items-center overflow-hidden bg-gray-100">
      <WaveBackground />
      <img 
        src="https://wallpapers.com/images/high/iconic-black-turtleneck-portrait-zbmouypwoxbs22k1.png" 
        alt="Inspiration" 
        className="hidden md:block absolute bottom-0 left-0 w-auto h-full max-h-[500px] z-10 pointer-events-none transition-opacity duration-500 ease-in-out" 
        style={{ opacity: waveStyle.imageOpacity }} 
        onError={(e) => { e.target.style.display = 'none'; }} 
      />
      
      <div className="relative w-full max-w-6xl mx-auto px-6 h-full">
        <div className="absolute top-0 left-0 right-0 z-30 px-6">
            <TopNavigation navigate={navigate} currentPage={currentPage} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center z-20">
            <div className="relative">
                <HeroText isVisible={isTextVisible} />
                <div className="mt-12" style={{ transform: `translateY(${waveStyle.buttonY}px) rotate(${waveStyle.rotation}deg)` }}>
                    <JoinButton onClick={onJoinClick} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};


const ContentSection = ({ openGallery, onImageClick }) => (
  <>
    <UpcomingEventsSection />
    <LatestUpdatesSection onImageClick={onImageClick} />
    <TestimonialsSection />
    <TeamSection />
    <GallerySection openGallery={openGallery} />
  </>
);

// --- Dynamic Event Data ---
const getEventDate = (daysFromNow) => {
  const date = new Date('2025-08-24T12:00:00'); // Base date for consistency
  date.setDate(date.getDate() + daysFromNow);
  return {
    day: date.getDate().toString(),
    month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
  };
};

const eventsData = [
  { title: "Inter Ahalia Ideathon", date: getEventDate(3), imageUrl: ideathonEventImg, altText: "Speaker at a tech conference", description: "VisionX an inter-ahalia ideathon. Showcase your innovative ideas and win a chance to present your idea at kerala Startup Mission." },
  { title: "Techtronix", date: getEventDate(7), imageUrl: techtronixEventImg, altText: "Code on a screen", description: "Delve into the realm of robotics - A hands-on workshop for selective members." },
  { title: "Gaming Competition", date: getEventDate(10), imageUrl: gamingEventImg, altText: "Gaming setup", description: "Kick a goal with PES and shoot your fears with PUBG. Stay tuned to compete!" },
  { title: "Fun Events", date: getEventDate(14), imageUrl: funEventImg, altText: "People collaborating", description: "Stay tuned for more exciting and fun-filled events coming your way!" }
];

const UpcomingEventsSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <SectionTitle title="Upcoming Events" />
        <div className="mt-12">
          <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1.2} pagination={{ el: '.swiper-pagination-custom', clickable: true, type: 'progressbar' }} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }} className="!pb-4">
            {eventsData.map(event => (
              <SwiperSlide key={event.title} className="h-auto">
                <EventCard {...event} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative mt-8 h-4 md:hidden">
            <div className="absolute inset-x-0 bottom-0 h-2 p-1 rounded-full bg-gray-800 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]">
              <div className="swiper-pagination-custom h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const updatesData = [
  {
    title: "Conducted Orientation for MBA College",
    date: "Aug 21, 2025",
    snippet: "An engaging orientation was held for MBA students, introducing them to entrepreneurship principles and the role of IEDC.",
    imageUrl: galleryPic3
  },
  {
    title: "New Student Lead 2 elected",
    date: "Aug 14, 2025",
    snippet: "Saniya Fathima was elected as the new Student Lead 2, bringing fresh perspectives and leadership to the team."
  },
  {
    title: "ASET team wins national-level hackathon",
    date: "July 13, 2025",
    snippet: "A team from S5 CSE B participated in HACKON 2.0, organised by IEDC MCET, and secured the first prize."
  }
];

const LatestUpdatesSection = ({ onImageClick }) => (
  <div className="bg-gray-50 py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-6">
      <SectionTitle title="Latest Updates" />
      <div className="mt-12 space-y-8">
        {updatesData.map(update => (
          <UpdateCard key={update.title} {...update} onImageClick={() => onImageClick(update.imageUrl)} />
        ))}
      </div>
    </div>
  </div>
);

const testimonialsData = [
  { quote: "The IEDC session was informative and motivating. It gave a clear overview of entrepreneurship, innovation, and startup opportunities. The session encouraged creative thinking and inspired us to explore new ideas. Overall, it was a valuable and engaging experience.", name: "Santhwana CR", role: "2nd Year, Ahalia Nursing College", imageUrl: "https://images.unsplash.com/photo-1517841905240-472-un-photo.jpg" },
  { quote: "Being part of IEDC has been a turning point in my journey. It gave me the platform to explore beyond academics and discover my true potential. Through IEDC, I was able to build essential skills like communication, leadership, and teamwork. IEDC ASET has truly been the launchpad for my confidence and career.", name: "Vishnu VS", role: "Student Lead, IEDC ASET", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60" },
  { quote: "Being the Student Lead of IEDC I was able to try new things, meet amazing people, and push myself beyond academics. It helped me improve my communication, leadership, teamwork, and even made me a more confident speaker. More than that, it gave me the belief in myself and the courage to take steps toward my career.", name: "Saniya Fathima A", role: "Student Lead, IEDC ASET", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60" }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        setIsFading(false);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const currentTestimonial = testimonialsData[currentIndex];
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="What Our Members Say" />
        <div className="mt-16 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full max-w-2xl mx-auto relative min-h-48 flex items-center justify-center">
            <div className={`transition-opacity duration-500 w-full ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-gray-600 italic text-center">"{currentTestimonial.quote}"</p>
              <div className="mt-6 flex items-center justify-center">
                <div className="text-left ml-4">
                  <p className="font-bold text-gray-900">{currentTestimonial.name}</p>
                  <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const teamData = {
  nodalOfficers: [
    { name: "Lakshmy Suresh", role: "Nodal Officer", imageUrl: nodalOfficer1Img },
    { name: "Vipin Das", role: "Asst. Nodal Officer", imageUrl: nodalOfficer2Img }
  ],
  coreTeam: [
    { name: "Vishnu VS", role: "Student Lead 1", imageUrl: ex01Img },
    { name: "Saniya Fathima", role: "Student Lead 2", imageUrl: ex02Img },
    { name: "Somya Ranjan Mohanty", role: "Quality & Operation Lead", imageUrl: ex03Img },
    { name: "Naveen S", role: "Community Lead", imageUrl: ex04Img },
    { name: "Midhun M", role: "Technical Lead", imageUrl: ex05Img },
    { name: "Abhiram K", role: "Creative & Innovation Lead", imageUrl: ex06Img },
    { name: "Irin Ranju", role: "Women & Entrepreneurship Lead", imageUrl: ex07Img },
    { name: "Adhoeeba Sherin", role: "Finance Lead", imageUrl: ex08Img },
    { name: "Afrah Fathima", role: "Marketing Lead", imageUrl: ex09Img },
    { name: "{in progress..}", role: "IPR & Research Lead", imageUrl: ex10nsImg }
  ]
};

const TeamSection = () => (
  <div className="bg-gray-50 py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-6">
      <SectionTitle title="Meet the Team" />
      <h4 className="text-2xl font-bold text-gray-700 text-center mt-16 mb-8">Nodal Officers</h4>
      <div className="flex justify-center gap-8 md:gap-16">
        {teamData.nodalOfficers.map(member => <TeamMemberCard key={member.name} {...member} />)}
      </div>
      <h4 className="text-2xl font-bold text-gray-700 text-center mt-16 mb-8">Core Team</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {teamData.coreTeam.map(member => <TeamMemberCard key={member.name} {...member} />)}
      </div>
    </div>
  </div>
);

const galleryImages = [
  { id: 1, imageUrl: galleryPic1, alt: "Team discussion" },
  { id: 2, imageUrl: galleryPic2, alt: "Students collaborating" },
  { id: 3, imageUrl: galleryPic3, alt: "Workshop in progress" },
  { id: 4, imageUrl: galleryPic4, alt: "Presentation event" },
  { id: 5, imageUrl: galleryPic5, alt: "Classroom learning" },
  { id: 6, imageUrl: galleryPic6, alt: "Team hands in" },
  { id: 7, imageUrl: galleryPic7, alt: "Group meeting" },
  { id: 8, imageUrl: galleryPic8, alt: "Students with laptops" },
  { id: 9, imageUrl: galleryPic9, alt: "Office brainstorming session" }
];

const GallerySection = ({ openGallery }) => (
  <div className="bg-white py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle title="Gallery" />
      <div className="mt-12">
        <Swiper modules={[Pagination]} spaceBetween={15} slidesPerView={1.5} pagination={{ el: '.gallery-pagination', clickable: true }} breakpoints={{ 640: { slidesPerView: 2.5, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 20 } }} className="!pb-12" >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={img.id}>
              <div onClick={() => openGallery(index)} className="cursor-pointer">
                <GalleryImage imageUrl={img.imageUrl} alt={img.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="gallery-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  </div>
);

// --- Styles & Wave Background ---
const WaveBackground = ({ isloading }) => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@300;400;500;600;700;800&display=swap');

      /* Shared Animations */
      @keyframes move-wave { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .wave-animation { animation: move-wave 25s linear infinite; }
      @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-33.33%); } }
      .animate-marquee { animation: marquee 20s linear infinite; }
      @keyframes fade-in-pop { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
      .animate-fade-in-pop { animation: fade-in-pop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      @keyframes fade-in-scale-up { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
      .animate-fade-in-scale-up { animation: fade-in-scale-up 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }

      /* Loading Screen */
      .circuit-bg { stroke: rgba(59, 130, 246, 0.25); stroke-width: 1; opacity: 0; }
      .circuit-bg.animate { animation: fadeInCircuits 1s ease-out forwards; }
      @keyframes fadeInCircuits { to { opacity: 1; } }

      .loading-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 70px;
        font-weight: 500;
        letter-spacing: 2px;
        fill: transparent;
        stroke: #00A2FF;
        stroke-width: 1.5;
        filter: drop-shadow(0 0 5px #00A2FF);
      }
      
      .text-char {
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
      }

      .text-char.animate {
        animation: trace-text 1.5s ease-out forwards;
      }

      @keyframes trace-text {
        to {
          stroke-dashoffset: 0;
        }
      }

      /* Swiper */
      .swiper-pagination-custom .swiper-pagination-progressbar { background: rgba(255, 255, 255, 0.2); border-radius: 9999px; height: 100%; }
      .swiper-pagination-custom .swiper-pagination-progressbar .swiper-pagination-progressbar-fill { background: #3B82F6; border-radius: 9999px; }
      .swiper-slide { height: auto; }
      .gallery-pagination .swiper-pagination-bullet { background-color: #9CA3AF; opacity: 1; transition: all 0.2s ease-in-out; }
      .gallery-pagination .swiper-pagination-bullet-active { background-color: #3B82F6; transform: scale(1.25); }
    `}</style>
    {!isloading && (
      <>
        <div className="absolute bottom-0 left-0 w-full h-[600px] overflow-hidden z-10">
          <div className="absolute w-[200%] h-full wave-animation" style={{ animationDuration: '30s' }}>
            <div className="absolute w-full h-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-80" style={{ clipPath: 'url(#wave3)' }}></div>
          </div>
          <div className="absolute w-[200%] h-full wave-animation opacity-60" style={{ animationDuration: '20s' }}>
            <div className="absolute w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ clipPath: 'url(#wave2)' }}></div>
          </div>
          <div className="absolute w-[200%] h-full wave-animation opacity-60" style={{ animationDuration: '15s' }}>
            <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600" style={{ clipPath: 'url(#wave1)' }}></div>
          </div>
        </div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="wave1" clipPathUnits="objectBoundingBox"><path d="M0,0.6 C0.2,0.4, 0.3,0.8, 0.5,0.7 C0.7,0.6, 0.8,0.9, 1,0.8 L1,1 L0,1 Z" /></clipPath>
            <clipPath id="wave2" clipPathUnits="objectBoundingBox"><path d="M0,0.7 C0.2,0.5, 0.3,0.9, 0.5,0.8 C0.7,0.7, 0.8,1, 1,0.9 L1,1 L0,1 Z" /></clipPath>
            <clipPath id="wave3" clipPathUnits="objectBoundingBox"><path d="M0,0.8 C0.2,0.6, 0.3,1, 0.5,0.9 C0.7,0.8, 0.8,1, 1,1 L1,1 L0,1 Z" /></clipPath>
          </defs>
        </svg>
      </>
    )}
  </>
);

// --- Helper & UI Components ---
const TopNavigation = ({ navigate, currentPage }) => (
  <nav className="w-full flex justify-between items-center py-8">
    <button onClick={() => navigate('home')} className={`font-semibold text-base pb-1 transition-colors ${currentPage === 'home' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}>Home</button>
    <button onClick={() => navigate('events')} className={`font-semibold text-base pb-1 transition-colors ${currentPage === 'events' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}>Events</button>
  </nav>
);

const HeroText = ({ isVisible }) => (
  <div className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h1 className="text-black text-6xl md:text-8xl font-thin tracking-[0.2em]">DIVE</h1>
    <h2 className="text-black text-3xl md:text-5xl font-extrabold tracking-wider mt-2">INTO THE OCEAN OF IDEAS</h2>
  </div>
);

const JoinButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-white text-black font-bold text-base tracking-widest py-5 px-14 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">JOIN NOW</button>
);

const SectionTitle = ({ title }) => (
  <div className="text-center">
    <div className="relative inline-block pb-4">
      <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">{title}</h3>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></div>
    </div>
  </div>
);

const EventCard = ({ title, date, imageUrl, altText, description }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full">
    <div className="relative">
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
        <img src={imageUrl} alt={altText} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
      <div className="absolute top-4 left-4 bg-white text-center rounded-lg shadow-md w-20 py-2">
        <p className="text-3xl font-extrabold text-blue-600">{date.day}</p>
        <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">{date.month}</p>
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600 flex-grow">{description}</p>
    </div>
  </div>
);

const UpdateCard = ({ title, date, snippet, imageUrl, onImageClick }) => {
  if (imageUrl) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div onClick={onImageClick} className="w-full sm:w-48 sm:h-32 rounded-md overflow-hidden flex-shrink-0 cursor-pointer group">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-grow sm:pt-2">
          <p className="text-sm text-gray-500">{date}</p>
          <h4 className="text-xl font-bold text-gray-900 mt-1">{title}</h4>
          <p className="text-gray-600 mt-2">{snippet}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <p className="text-sm text-gray-500">{date}</p>
      <h4 className="text-xl font-bold text-gray-900 mt-1">{title}</h4>
      <p className="text-gray-600 mt-2">{snippet}</p>
    </div>
  );
};

const JoinSection = () => {
  const [formData, setFormData] = useState({ NAME: '', YEAR: '', BRANCH: '', SECTION: '', 'CONTACT NUMBER': '', 'EMAIL ID': '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxaNmM7-VwO5unwtRJYIfA_HT_ZEjizdvQ4qKnZzAzGRCzY-0hvcHOkEQ-fPiz0eeZ8/exec';
    const form = new FormData();
    for (const key in formData) { form.append(key, formData[key]); }
    fetch(scriptURL, { method: 'POST', body: form })
      .catch(error => console.error('Google Sheets API Error!', error.message));
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ NAME: '', YEAR: '', BRANCH: '', SECTION: '', 'CONTACT NUMBER': '', 'EMAIL ID': '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200 min-h-[550px] flex flex-col items-center justify-center">
        {!isSubmitted ? (
          <>
            <SectionTitle title="Join the Voyage" />
            <form onSubmit={handleSubmit} className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="NAME" placeholder="Name" value={formData.NAME} onChange={handleChange} required className="p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
              <input type="text" name="YEAR" placeholder="Year" value={formData.YEAR} onChange={handleChange} required className="p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
              <input type="text" name="BRANCH" placeholder="Branch" value={formData.BRANCH} onChange={handleChange} required className="p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
              <input type="text" name="SECTION" placeholder="Section" value={formData.SECTION} onChange={handleChange} className="p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
              <div className="md:col-span-2"><input type="tel" name="CONTACT NUMBER" placeholder="Contact Number" value={formData['CONTACT NUMBER']} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" /></div>
              <div className="md:col-span-2"><input type="email" name="EMAIL ID" placeholder="Email ID" value={formData['EMAIL ID']} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" /></div>
              <div className="md:col-span-2 text-center">
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white font-bold py-4 px-12 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center animate-fade-in-pop">
            <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="mt-6 text-3xl font-bold text-gray-800">Congratulations!</h3>
            <p className="mt-3 text-lg text-gray-600">You're officially on board. Welcome to the voyage!</p>
            <p className="mt-1 text-gray-500">We'll be in touch with you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const TeamMemberCard = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center">
    <img src={imageUrl} alt={name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md" />
    <h4 className="mt-4 text-lg font-bold text-gray-900">{name}</h4>
    <p className="text-gray-700 font-semibold text-sm">{role}</p>
  </div>
);

const GalleryImage = ({ imageUrl, alt }) => (
  <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 pb-[56.25%]">
    <img src={imageUrl} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
  </div>
);

const FullScreenGallery = ({ images, startIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(startIndex);

  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = 'unset'; }; }, []);

  const goNext = (e) => { e.stopPropagation(); setActiveIndex((prev) => (prev + 1) % images.length); };
  const goPrev = (e) => { e.stopPropagation(); setActiveIndex((prev) => (prev - 1 + images.length) % images.length); };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') goNext(e);
      else if (e.key === 'ArrowLeft') goPrev(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose} >
      <button onClick={onClose} className="absolute top-4 right-4 z-[51] text-white text-2xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition-colors">&times;</button>
      <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-[51] bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors text-2xl">&lt;</button>
      <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-[51] bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors text-2xl">&gt;</button>
      <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
        {images.map((img, index) => (
          <img key={img.id || index} src={img.imageUrl} alt={img.alt} className={`w-full h-full object-contain absolute transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`} />
        ))}
      </div>
    </div>
  );
};

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '918778944493';

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end">
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <form onSubmit={handleSend} className="bg-slate-50 p-4 rounded-lg shadow-2xl mb-2 w-80 border border-slate-200">
          <h3 className="font-bold text-slate-800 text-lg mb-3">Send a Message</h3>
          <textarea className="w-full h-28 p-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 transition" placeholder="Hi, I'd like to know more about..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" className="w-full mt-3 bg-slate-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-black transition-colors"> Send via WhatsApp </button>
        </form>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform" aria-label={isOpen ? "Close messenger" : "Open WhatsApp messenger"}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
        )}
      </button>
    </div>
  );
};

// --- Other Page Components ---
const EventsPage = ({ navigate, currentPage }) => {
  const certificateFolderUrl = "https://drive.google.com/drive/folders/1_WP4BPitPWmPTjqsWC93LnAVfEAcVXli";
  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in" style={{animationDuration: '0.5s'}}>
      <AnnouncementBanner />
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <TopNavigation navigate={navigate} currentPage={currentPage} />
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <SectionTitle title="Events" />
        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full transform hover:-translate-y-2 transition-transform duration-300">
            <img src={eventsFdpImg} alt="Faculty Development Programme" className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">3 days Faculty Development Programme</h3>
              <a href={certificateFolderUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-black transition-colors" >
                Get Certificate
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const TshirtAdPopup = ({ onClose, onKnowMore }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden animate-fade-in-scale-up">
        <button onClick={onClose} className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-800 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="w-full h-72 bg-gray-900 flex items-center justify-center">
          <video src={tshirtAdVideo} autoPlay loop muted playsInline className="w-full h-full object-contain md:object-cover" ></video>
        </div>
        <div className="p-8 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">Exclusive IEDC Merch</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-gray-900">Get Your Official IEDC Tee!</h3>
          <p className="mt-4 text-gray-600"> Available exclusively for IEDC ASET members. Show your spirit and be part of the community. </p>
          <button onClick={onKnowMore} className="mt-8 w-full bg-gray-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-black transform hover:scale-105 transition-all duration-300" >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const TshirtPage = ({ navigate, currentPage }) => {
  const [formData, setFormData] = useState({ NAME: '', BRANCH: '', YEAR: '', 'TSHIRT SIZE': 'M', 'CONTACT NUMBER': '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const scriptURL = 'YOUR_NEW_GOOGLE_SHEETS_SCRIPT_URL_HERE'; // ⚠️ Remember to replace this
    const form = new FormData();
    for (const key in formData) { form.append(key, formData[key]); }
    fetch(scriptURL, { method: 'POST', body: form })
      .catch(error => console.error('Google Sheets API Error!', error.message));
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in" style={{animationDuration: '0.5s'}}>
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <TopNavigation navigate={navigate} currentPage={currentPage} />
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200 min-h-[550px] flex flex-col items-center justify-center">
            {!isSubmitted ? (
              <>
                <SectionTitle title="Order Your IEDC Tee" />
                <p className="mt-4 text-center text-gray-600">Fill out the form below to secure your exclusive member T-shirt!</p>
                <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg space-y-6">
                  <input type="text" name="NAME" placeholder="Full Name" value={formData.NAME} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
                  <input type="text" name="BRANCH" placeholder="Branch" value={formData.BRANCH} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
                  <input type="text" name="YEAR" placeholder="Year of Study" value={formData.YEAR} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
                  <select name="TSHIRT SIZE" value={formData['TSHIRT SIZE']} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition appearance-none">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                  <input type="tel" name="CONTACT NUMBER" placeholder="Contact Number" value={formData['CONTACT NUMBER']} onChange={handleChange} required className="w-full p-4 bg-gray-100 rounded-lg border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition" />
                  <div className="text-center pt-4">
                    <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white font-bold py-4 px-12 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : 'PLACE ORDER'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center animate-fade-in-pop">
                <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="mt-6 text-3xl font-bold text-gray-800">Order Placed!</h3>
                <p className="mt-3 text-lg text-gray-600">Thank you for your order. We've received your details.</p>
                <p className="mt-1 text-gray-500">We will notify you when it's ready for pickup.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-6 text-center">
    <p>&copy; IEDC ASET - All Rights reserved</p>
  </footer>
);

export default App;