
const MainList = ({ users }) => {
  return (
    <div>
      <hr />
      <p>Here you can see users using a stateless child component with list:</p>
      <ul>
        {users.map(
          (user) =>
            (<li key={user.id}>
              <strong>Email:</strong> {user.email} |
              <strong>Name:</strong> {user.firstName} {user.lastName} |
              <strong>Phone:</strong> {user.phoneNumber} |
              <strong>Payment Plan:</strong> {user.paymentPlan}
            </li>)
        )}
      </ul>
    </div>
  );
};

export default MainList;
