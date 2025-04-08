import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SetCheckIn.module.css';

const SetCheckIn: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailFromUrl = searchParams.get('email') || '';
  const fullNameFromUrl = searchParams.get('fullName') || '';
  const passwordFromUrl = searchParams.get('password') || '';
  const accountTypeFromUrl = searchParams.get('accountType')|| '';

  const [textOrCall, setTextOrCall] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkInTimeAMPM, setCheckInTimeAMPM] = useState('');
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

  const handleCheckInTimeAMPMChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCheckInTimeAMPM(event.target.value);
  };

  const isSubmitDisabled = !textOrCall || !phoneNumber || !checkInTime;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      console.log('User Answers:', {
        email: emailFromUrl,
        fullName: fullNameFromUrl,
        password: passwordFromUrl,
        accountType: accountTypeFromUrl,
        textOrCall,
        phoneNumber,
        checkInTime,
        checkInTimeAMPM,
      });
      // In a real application, you would likely send this data to your backend
      // navigate('/dashboard'); // Example of navigating to a dashboard
    } else {
      alert('Please fill in all the required fields.');
    }
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
                <option value="">Select</option>
                <option value="Text">Text</option>
                <option value="Call">Call</option>
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
              <div className={styles.formGroupTime}>
                <input
                  type="checkInTime"
                  id="checkInTime"
                  value={checkInTime}
                  onChange={handleCheckInTimeChange}
                  className={styles.inputField}
                />
                <select id="checkInTimeAMPM" value={checkInTimeAMPM} onChange={handleCheckInTimeAMPMChange} className={styles.meridiem}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <Link to="/RegisterThankYouPage">
              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitDisabled ? styles.submitButtonDisabled : ''}`}
                disabled={isSubmitDisabled}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetCheckIn;