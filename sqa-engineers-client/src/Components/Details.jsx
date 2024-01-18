import { useLoaderData } from "react-router-dom";

const Details = () => {
  const engineer = useLoaderData();

  return (
    <section>
      <div style={{ width: "1170px", margin: "0 auto" }}>
        <div style={{ border: "1px solid #333", padding: "10px" }}>
          <h3>Name: {engineer?.name}</h3>
          <p>Profession: {engineer?.profession}</p>
          <p>Email: {engineer?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
