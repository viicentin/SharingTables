import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import GetStartedButton from '../components/GetStartedButton';
import ImageSection from '../components/ImageSection';
import './Home.css';
import msg1 from '../assets/msg1.png';
import msg2 from '../assets/msg2.png';
import msg3 from '../assets/msg3.png';
import msg4 from '../assets/msg4.png';

function Home() {
  const messages = useMemo(() => [
    { src: msg1 },
    { src: msg2 },
    { src: msg3 },
    { src: msg4 },
  ], []);

  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < messages.length) {
      const interval = setInterval(() => {
        setVisibleMessages((prevMessages) => [
          ...prevMessages,
          messages[currentIndex]
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, messages]);

  return (
    <div className="home">
      <Header />
      <div className="messages">
        {visibleMessages.map((message, index) => (
          message && message.src ? (
            <Message key={index} src={message.src} />
          ) : null
        ))}
      </div>
      <GetStartedButton />
      <ImageSection />
    </div>
  );
}

export default Home;
