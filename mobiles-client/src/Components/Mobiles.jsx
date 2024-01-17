import { Link, useLoaderData } from "react-router-dom";

const style = {
  listStyle: "none",
  textAlign: "left",
};

const Mobiles = () => {
  const mobiles = useLoaderData();

  return (
    <section>
      <div className="container">
        <h2>All Mobiles Here: {mobiles.length}</h2>
        <ul style={style}>
          {mobiles?.map((mobile) => (
            <li key={mobile?.id}>
              <Link to={`/mobile/${mobile?.id}`}>{mobile?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mobiles;
