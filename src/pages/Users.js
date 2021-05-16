import { useEffect, useState } from "react";

const Users = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const [users, setUsers] = useState([]);
  return users.map((user, i) => {
    return (
      <p key={i}>
        Hej, {user.name}. You are user number {user.id}
      </p>
    );
  });
};

export default Users;
