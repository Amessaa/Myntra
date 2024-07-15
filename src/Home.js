import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchCircle, IoPersonCircle } from 'react-icons/io5';
import { FaCamera, FaPlus } from 'react-icons/fa';
import { CiMicrophoneOn, CiBellOn, CiHeart } from 'react-icons/ci';
import { BsStars } from 'react-icons/bs';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './firebase'; 
import { auth } from './firebase';
import Notification from './Notification'; 

const Home = () => {
  
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [latestNotification, setLatestNotification] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false); 
  useEffect(()=>{
    (inputText=='women ' && navigate('/list'))
  },[inputText])

  useEffect(()=>{
    (inputText == 'women ' && navigate('/list'))
  },[inputText])
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) return;

        const notificationsRef = collection(db, `users/${currentUser.uid}/notifications`);
        const q = query(notificationsRef, orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const updatedNotifications = [];
          querySnapshot.forEach((doc) => {
            updatedNotifications.push({ id: doc.id, ...doc.data() });
          });
          setNotifications(updatedNotifications);

          if (updatedNotifications.length > 0) {
            setLatestNotification(updatedNotifications[0].message);
          }
        });

        return unsubscribe;
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications); // Toggle showNotifications state
  };

  const handlePersonClick = () => {
    navigate('/login');
  };

  const closeNotification = () => {
    setLatestNotification(null);
  };

  return (
    <div className="overflow-hidden h-full">
      <div className="mx-auto justify-center text-center text-3xl">
        <div className="font-bold text-black-600">
          <div className="flex flex-row">
            <img className="hi" src="/images/home_header1.jpeg" alt="Header 1"  />
            <div className="m-0 bg-black/90 border-none p-4 flex w-full h-100 items-center text-gray-200">
              <button onClick={handleNotificationsClick}>
                <CiBellOn />
              </button>
              <CiHeart />
              <button onClick={handlePersonClick}>
                <IoPersonCircle />
              </button>
            </div>
          </div>
          <div className="p-3 bg-black/90 w-screen h-16 text-sm flex flex-row items-center text-gray-200">
            <IoSearchCircle className="w-9 h-9 m-1" />
            <input
              type="text"
              placeholder="Search your style"
              className="m-2 border-white bg-black rounded-3xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 w-8/9 h-3/4"
              onChange={(e) => setInputText(e.target.value)}
            />
            <FaCamera className="m-1 ml-5 w-8 h-8" />
            <CiMicrophoneOn className="m-1 w-8 h-8" />
          </div>
          <img className="w-full h-70" src="/images/home_header_2.jpeg" alt="Header 2" />
        </div>
        <div className="justify-center bg-yellow-100/50">
          <div>
            <img className="w-full h-full" src="/images/home_body.jpeg" alt="Body" />
          </div>
          <div className="justify-center p-2 px-2 text-sm font-bold flex items-center">
            <button
              className="p-4 mx-4 bg-pink-500/60 rounded-full border-2 border-black flex items-center"
              onClick={() => navigate('/viewmore')}
            >
              <FaPlus className="p-1 w-6 h-6" />
              VIEW MORE
            </button>
            <button
              className="p-4 mx-4 bg-pink-500/60 rounded-full border-2 border-black flex items-center"
              onClick={() => navigate('/style')}
            >
              <BsStars className="p-1 w-9 h-7" />
              STYLE
            </button>
          </div>
        </div>
        
        {showNotifications && (
          <div className="justify-center mt-4">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-4">
                  <p className="text-lg">{notification.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="justify-center">
          <img className="w-full h-30" src="/images/home_footer.jpeg" alt="Footer" />
        </div>
        {latestNotification && (
          <Notification message={latestNotification} onClose={closeNotification} />
        )}
      </div>
    </div>
  );
};

export default Home;
