
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const { name, mobile } = user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://crud-app-b1067-default-rtdb.firebaseio.com/createdata/${id}.json`
        );

        const responseData = await response.json();
        setUser(responseData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const getData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const updateData = async (e) => {
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
      `https://crud-app-b1067-default-rtdb.firebaseio.com/createdata/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name,
          mobile,
        }),
      }
    );

    if (res.ok) {
      alert("Data updated successfully");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-red-50 w-[80%] mt-52 p-10">
        <h1 className="text-center text-4xl font-bold">Edit Data</h1>
        <form className="flex flex-col gap-6 items-center mt-4" method="PATCH">
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
                  placeholder="Enter Your MobileNo."
                  name="mobile"
                  value={mobile}
                  onChange={getData}
                />
              </td>
            </tr>
          </table>

          <div className="flex gap-9">
            <button
              className="bg-green-700 rounded-md h-10 w-20 text-white items-center text-2xl"
              onClick={updateData}
            >
              Update
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

export default Edit;
