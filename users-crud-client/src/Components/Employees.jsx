import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Employees = () => {
  const loadedEmployees = useLoaderData();
  const [employees, setEmployees] = useState(loadedEmployees);

  //delete button handler:
  const employeeDeleteButtonHandler = (_id) => {
    fetch(`http://localhost:5000/employees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = employees.filter((employee) => employee?._id !== _id);
        if (data.deletedCount > 0) {
          alert("Employee Deleted Successfully!");
          setEmployees(remaining);
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <section className="employees">
      <div className="container">
        <article className="section-title">
          <h2>All Employees Comes Here: {employees.length}</h2>
        </article>
        <div className="users">
          {employees?.map((employee) => (
            <div key={employee?._id} className="user">
              <h3>Name: {employee?.name}</h3>
              <p>Profession: {employee?.profession}</p>
              <p>Email: {employee?.email}</p>
              <button className="btn btn-update">Update</button>
              <button
                onClick={() => employeeDeleteButtonHandler(employee?._id)}
                className="btn btn-delete"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employees;
