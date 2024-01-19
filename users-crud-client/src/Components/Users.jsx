import { useLoaderData } from "react-router-dom";

const Users = () => {
  const employees = useLoaderData();

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
