import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components
// TODO: Move these components to separate files under pages/
import MainApp from './MainApp';
import EventsPage from './EventsPage';
import TshirtPage from './TshirtPage';

const AppContent = () => {
    const [showTshirtAd, setShowTshirtAd] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTshirtAd(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleKnowMore = () => {
        setShowTshirtAd(false);
    };

    return (
        <>
            {showTshirtAd && <TshirtAdPopup onClose={() => setShowTshirtAd(false)} onKnowMore={handleKnowMore} />}
            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/tshirt" element={<TshirtPage />} />
            </Routes>
        </>
    );
};

export default AppContent;
