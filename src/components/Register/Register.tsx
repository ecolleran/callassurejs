import styles from './Register.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import React, { useState, ChangeEvent } from 'react';

// interface CreateAccountProps {}

const CreateAccount: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const searchParams = new URLSearchParams(location.search);
  const emailFromUrl = searchParams.get('email') || ''; // Get email from URL, or empty string if not present
  const [email, setEmail] = useState(emailFromUrl);
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAccountTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAccountType(event.target.value);
  };

  const isSubmitDisabled = !(email && fullName && password && accountType !== 'Select');

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (!isSubmitDisabled) {
  //     // Process the form submission here
  //     console.log('Account created:', { email, fullName, password, accountType });
  //       // You would typically send this data to your backend
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/SetCheckInPage?email=${encodeURIComponent(email)}
      &fullName=${encodeURIComponent(fullName)}
      &password=${encodeURIComponent(password)}
      &accountType=${encodeURIComponent(accountType)}`
    );
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Get setup with CallAssure</h2>
        <p className={styles.description}>
          <strong className={styles.textContentBold}>Configure your account type</strong><br />
          If check-ins will be sent to you, you are a Loved One. If you are someone who wants to be updated if check-ins are missed, you are a Family Member.
        </p>
        <p className={styles.description}>
          <strong className={styles.textContentBold}>Start sending check-ins today</strong><br />
          Setup takes only 5 minutes and two people.
        </p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Create your CallAssure account</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className={styles.inputField}
            />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="accountType">Account Type</label>
              <select id="accountType" value={accountType} onChange={handleAccountTypeChange} className={styles.inputField}>
                <option value="Select">Select</option>
                <option value="Loved One">Loved One</option>
                <option value="Family Member">Family Member</option>
                {/* Add other account type options as needed */}
              </select>
            </div>
            {/* <Link to="/SetCheckInPage"> */}
              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitDisabled ? styles.submitButtonDisabled : ''}`}
                disabled={isSubmitDisabled}
              >
                Create account
              </button>
            {/* </Link> */}
          </form>
          <div className={styles.createAccountBlock}>
            <div className={styles.createAccount}>
              Already have an account? <Link to="/LoginPage">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;