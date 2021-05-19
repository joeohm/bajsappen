import { useEffect, useState } from "react";

const Users = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const [users, setUsers] = useState([]);
  const everyUser = users.map((user, i) => {
    const year = new Date([user.joined_at]).getFullYear();
    const month = String(new Date([user.joined_at]).getMonth() + 1).padStart(
      2,
      "0"
    );
    const day = String(new Date([user.joined_at]).getDate()).padStart(2, "0");
    const hour = String(new Date([user.joined_at]).getHours()).padStart(2, "0");
    const minute = String(new Date([user.joined_at]).getMinutes()).padStart(
      2,
      "0"
    );
    const styledTime = `${year}-${month}-${day} ${hour}:${minute}`;

    return (
      <div className="special-user">
        <p key={i}>{user.name}</p>
        <p key={i}>{styledTime}</p>
      </div>
    );
  });
  return (
    <div className="user-container">
      <div className="lookup-field">
        <h2>Look up a bajsuser!</h2>
        <label htmlFor="lookup-user"></label>
        <input
          type="text"
          id="lookup-user"
          name="lookup-user"
          placeholder="Enter bajsusername..."
        ></input>
      </div>
      <div className="user-header">
        <h3>USERNAME</h3>
        <h3>JOINED AT</h3>
      </div>
      <hr />
      {everyUser}
    </div>
  );
};

export default Users;
