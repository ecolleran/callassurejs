import {useState} from "react";
  
  const UserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      paymentPlan: 1, // Default payment plan
    });
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { firstName, lastName, email, password, phoneNumber, paymentPlan } =
        formData;
      if (
        firstName &&
        lastName &&
        email &&
        password &&
        phoneNumber &&
        paymentPlan
      ) {
        onAddUser(formData);
        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
          paymentPlan: 1,
        });
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label for="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onInput={handleChange}
            required
          />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onInput={handleChange}
            required
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onInput={handleChange}
            required
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onInput={handleChange}
            required
          />
        </div>
        <div>
          <label for="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onInput={handleChange}
            required
          />
        </div>
        <div>
          <label for="paymentPlan">Payment Plan:</label>
          <select
            id="paymentPlan"
            value={formData.paymentPlan}
            onChange={handleChange}
            required
          >
            <option value="1">Plan 1</option>
            <option value="2">Plan 2</option>
            <option value="3">Plan 3</option>
          </select>
        </div>
        <button type="submit">Add User</button>
      </form>
    );
  };
  
  export default UserForm;
  