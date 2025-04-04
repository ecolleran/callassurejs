// ContactForm.tsx
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with your submit logic
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactInfo}>
        <h2>Contact Us</h2>
        <p>Need help or have questions? Please reach out and we will do our best to respond to your needs.</p>
        <p>
          <strong className={styles.boldContactInfo}>Phone</strong><br />
          (999) 999-9999
        </p>
        <p>
          <strong className={styles.boldContactInfo}>Email</strong><br />
          help@call-assure.com
        </p>
      </div>
      <div className={styles.messageForm}>
        <h2 className={styles.formTitle}>Send us a message here</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.nameFields}>
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="TYPE YOUR MESSAGE HERE"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;