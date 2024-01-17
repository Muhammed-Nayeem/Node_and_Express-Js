import { useLoaderData } from "react-router-dom";

const Mobile = () => {
  const mobile = useLoaderData();

  return (
    <section>
      <div className="container">
        <div>
          <h3>Name: {mobile?.name}</h3>
          <p>RAM: {mobile?.ram}</p>
          <p>Price: ${mobile?.price}</p>
          <img
            style={{ width: "200px", height: "200px" }}
            src={mobile?.image}
            alt={mobile?.name}
          />
        </div>
      </div>
    </section>
  );
};

export default Mobile;
