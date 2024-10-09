import { useEffect, useState,} from "react";
import { getAllUsers, createUser } from "../../Services/Users.js";
import MainList from "./MainList.js";
import UserForm from "../UserForm/UserForm.js";
  
  const Main = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      let isMounted = true; // To avoid setting state on unmounted component
      getAllUsers().then((fetchedUsers) => {
        if (isMounted) {
          setUsers(fetchedUsers);
          setLoading(false);
        }
      });
      return () => {
        isMounted = false;
      };
    }, []);
  
    const handleAddUser = async (newUser) => {
      //generate a unique ID or handle it as needed
      const userWithId = { id: users.length + 1, ...newUser };
      setUsers([...users, userWithId]);
      // maybe a way to persist the new user later on
      // const savedUser = await createUser(userWithId);
    };
  
    return (
      <div>
        <h1>CallAssure/Emily Colleran Feature 3</h1>
        <p>Sign Up for CallAssure using this stateful parent component.</p>
        <UserForm onAddUser={handleAddUser} />
        <MainList users={users} />
      </div>
    );
  };
  
  export default Main;
  