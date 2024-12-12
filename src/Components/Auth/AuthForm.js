const AuthForm = ({ user, onChange, onSubmit, isLogin }) => {
  return (
    <div className="center">
      <h1>{isLogin ? "Login to CallAssure" : "Register for CallAssure Here"}</h1>
      <form onSubmit={onSubmit}>
        {!isLogin ? (
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={user.firstName}
                onChange={onChange}
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                value={user.lastName}
                onChange={onChange}
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={user.phoneNumber}
                onChange={onChange}
                pattern="\d{3}-\d{3}-\d{4}"
                name="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div>{" "}
          </div>
        ) : (
          <></>
        )}
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={user.email}
              onChange={onChange}
              name="email"
              placeholder="Email"
              required
            />
          </div>
          {" "}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={user.password}
              onChange={onChange}
              name="password"
              placeholder="Password"
              min="0"
              required
            />
          </div>
        </div>
        <div className="form-group">
            <button type="submit" onSubmit={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;