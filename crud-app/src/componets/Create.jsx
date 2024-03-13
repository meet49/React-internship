import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const { name, mobile } = user;

  const getData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name.trim() || !mobile.trim()) {
      alert("Name and Mobile No. are required fields");
      return;
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const res = await fetch(
      "https://crud-app-b1067-default-rtdb.firebaseio.com/createdata.json",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          mobile,
        }),
      }
    );

    if (res.ok) {
      setUser({
        name: "",
        mobile: "",
      });

      alert("Data is stored");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-red-50 w-[80%] mt-52 p-10">
        <h1 className="text-center text-4xl font-bold">Add Data</h1>
        <form className="flex flex-col gap-6 items-center mt-4" method="POST">
          <table className="table">
            <tr className="text-2xl p-20">
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={getData}
                />
              </td>
            </tr>

            <tr className="text-2xl p-20">
              <td>
                <label htmlFor="mobileno">Mobile No.</label>
              </td>
              <td>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Your MobileNo."
                  value={mobile}
                  onChange={getData}
                />
              </td>
            </tr>
          </table>

          <div className="flex gap-9">
            <button
              className="bg-green-600 rounded-md h-10 w-20 text-white items-center text-2xl"
              onClick={postData}
            >
              Submit
            </button>
            <Link
              to="/"
              className="bg-blue-800 rounded-md h-10 w-20 text-white text-center items-center text-2xl"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
