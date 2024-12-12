import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/home");
  };

  return (
    <div>
      <input type="checkbox" id="flagBox" />
      <button onClick={buttonHandler}>HOME</button>
    </div>
  );
};

export default Main;
