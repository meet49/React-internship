import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://crud-app-b1067-default-rtdb.firebaseio.com/createdata.json"
        );

        const responseData = await response.json();

        const dataArray = Object.keys(responseData).map((key) => ({
          id: key,
          ...responseData[key],
        }));

        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://crud-app-b1067-default-rtdb.firebaseio.com/createdata/${id}.json`,
        {
          method: "DELETE",
        }
      );
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-9 bg-slate-200 place-content-center m-48 mt-72">
        <h1 className="text-6xl text-center">List</h1>
        <Link
          to="/create"
          className="bg-green-700 rounded-md h-10 w-20 text-white text-center text-2xl ml-10"
        >
          Add+
        </Link>
        <table className="table text-lg">
          <thead>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Action</th>
          </thead>
          <tbody className="text-center text-xl">
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td className="flex justify-around">
                  <Link
                    to={`/read/${item.id}`}
                    className="bg-blue-400 rounded-md h-10 w-20 text-white items-center text-2xl"
                  >
                    read
                  </Link>
                  <Link
                    to={`/edit/${item.id}`}
                    className="bg-blue-700 rounded-md h-10 w-20 text-white items-center text-2xl"
                  >
                    edit
                  </Link>

                  <button
                    className="bg-red-700 rounded-md h-10 w-20 text-white items-center text-2xl"
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
