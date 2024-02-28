import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitData = (e) => {
    e.preventDefault();

    if (email && passWord) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        passWord: passWord,
      };
      localStorage.setItem("newEntry", JSON.stringify(newEntry));
      setAllEntry([...allEntry, newEntry]);

      setEmail("");
      setPassWord("");
    } else {
      alert("enater the all Fild");
    }
  };
  return (
    <>
      <form onSubmit={submitData}>
        <div>
          <lable>Email</lable>
          <input
            type="email"
            placeholder="Enter the email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <lable>Password</lable>
          <input
            type="password"
            placeholder="Enter the Password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <button type="submit">Login</button>
        </div>
      </form>

      {/* <div>
        {allEntry.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.email}</p>
              <p>{element.passWord}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Form;
