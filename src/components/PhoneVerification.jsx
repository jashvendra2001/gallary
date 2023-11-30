import React, { useState } from 'react';
import axios from 'axios';

function PhoneVerification() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const sendOTP = async () => {
    try {
      const response = await axios.post('url', { phoneNumber });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post('url', { phoneNumber, verificationCode });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Phone Number Verification</h1>
      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <br></br>
      <input
        type="number"
        placeholder="Verification code"
        max={4}
        
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
}

export default PhoneVerification;
