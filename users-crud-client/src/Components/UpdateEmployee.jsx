import { useLoaderData } from "react-router-dom";

const UpdateEmployee = () => {
  const employee = useLoaderData();

  //employee update form handler:
  const employeeUpdateFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const company = form.company.value;
    const email = form.email.value;
    const updatedEmployee = { name, profession, company, email };

    //update employer by PUT:
    fetch(`http://localhost:5000/employees/${employee?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Employer Information Updated Successfully!");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="update-employee">
      <div className="container">
        <div className="user-form">
          <div className="form">
            <h3>Update Employee Information</h3>
            <form onSubmit={employeeUpdateFormHandler}>
              <input type="text" name="name" defaultValue={employee?.name} />
              <input
                type="text"
                name="profession"
                defaultValue={employee?.profession}
              />
              <input
                type="text"
                name="company"
                defaultValue={employee?.company}
              />
              <input type="email" name="email" defaultValue={employee?.email} />
              <input type="submit" value="Update Employee" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateEmployee;
