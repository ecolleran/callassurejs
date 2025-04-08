import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './SetCheckIn.module.css';

const SetCheckIn: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailFromUrl = searchParams.get('email') || '';
  const fullNameFromUrl = searchParams.get('fullName') || '';
  const passwordFromUrl = searchParams.get('password') || '';

  const [textOrCall, setTextOrCall] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  // const navigate = useNavigate();

  const handleTextOrCallChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setTextOrCall(event.target.value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(event.target.value);
  };

  const handleCheckInTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckInTime(event.target.value);
  };

  const isSubmitDisabled = !(phoneNumber && checkInTime && textOrCall !== 'Select');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('User Answers:', {
      email: emailFromUrl,
      fullName: fullNameFromUrl,
      password: passwordFromUrl,
      textOrCall,
      phoneNumber,
      checkInTime,
    });
    // In a real application, you would likely send this data to your backend
    // navigate('/dashboard'); // Example of navigating to a dashboard
  };


  return (
    <div className={styles.signupContainer}>
      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Set Your Check-In Time</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="textOrCall">Text or Call</label>
              <select id="textOrCall" value={textOrCall} onChange={handleTextOrCallChange} className={styles.inputField}>
                <option value="Select">Select</option>
                <option value="Text">Text</option>
                <option value="Call">Call</option>
                {/* Add other account type options as needed */}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phoneumber">Phone Number</label>
              <input
                type="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="checkInTime">Desired Check-In Time</label>
              <input
                type="checkInTime"
                id="checkInTime"
                value={checkInTime}
                onChange={handleCheckInTimeChange}
                className={styles.inputField}
              />
            </div>
            <button
              type="submit"
              className={`${styles.submitButton} ${isSubmitDisabled ? styles.submitButtonDisabled : ''}`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetCheckIn;