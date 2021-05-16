import { useState } from "react";

const GetStarted = () => {
  const [title, setTitle] = useState("");

  // Example POST method implementation:
  function postData(url, data) {
    // Default options are marked with *
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ name: `${data}` }), // body data type must match "Content-Type" header
    }).then((res) => {
      console.log(res);
      setTitle("");
    });
  }
  return (
    <form>
      <p>Get started with sending a sticky boi!</p>
      <label htmlFor="user">Enter your desired user name: </label>
      <input
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        id="user"
        name="user"
        placeholder="a real bajsig username"
        value={title}
      ></input>
      <br></br>
      <label htmlFor="bankaccount">Enter your bank account details: </label>
      <input
        type="text"
        id="bankaccount"
        name="bankaccount"
        placeholder="complete with pin"
      ></input>
      <br></br>
      <input
        type="button"
        value="Create"
        onClick={() => {
          postData(`${process.env.REACT_APP_DB}/add-user`, title);
        }}
      ></input>
    </form>
  );
};

export default GetStarted;
