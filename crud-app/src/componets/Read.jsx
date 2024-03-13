import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://crud-app-b1067-default-rtdb.firebaseio.com/createdata/${id}.json`
        );

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className=" flex justify-center">
      <div className=" bg-red-50 mt-52 p-10 w-[80%]">
        <div className=" flex flex-col  gap-6 items-center mt-4">
          <h3 className=" text-center text-4xl font-bold">Details</h3>
          <div className=" flex gap-9 text-2xl">
            <strong>Name: </strong> {data.name}
          </div>
          <div className=" flex gap-9 text-2xl">
            <strong>Mobile No: </strong>
            {data.mobile}
          </div>
          <div className=" flex gap-9">
            <Link
              to={`/edit/${id}`}
              className="bg-blue-700 rounded-md h-10 w-20 text-white text-center items-center text-2xl"
            >
              Edit
            </Link>
            <Link
              to="/"
              className=" bg-blue-800 rounded-md h-10 w-20 text-white text-center text-2xl"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
