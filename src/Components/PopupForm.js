import React, { useState, useEffect } from 'react';
import rcLogo from '../Assests/rc logo.png'

const PopupForm = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  // Trigger the popup after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 7000); // 7 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Contact: ${contact}`);
    setPopupVisible(false); // Close popup after submission
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-80 text-center">
            <img src={rcLogo} alt="Rapid Consulting" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-4">Do you want any subsidy, insurance or approvals?</h2>
            <p className="mb-4">Kindly contact us.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact Number"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <button type="submit" className="w-full bg-[#FF6F61] text-white p-2 rounded">
                Submit
              </button>
            </form>
            <button className="absolute top-2 right-2 text-red-500" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
