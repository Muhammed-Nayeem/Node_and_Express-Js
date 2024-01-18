import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Engineer = ({engineer}) => {
  const navigate = useNavigate();
  const engineerDetailsHandler = (_id) => {
    navigate(`/engineer/${_id}`);
  };

  return (
    <div style={{border: "1px solid #333", padding: "10px"}}>
      <span>Id: {engineer?._id}</span>
      <h3>Name: {engineer?.name}</h3>
      <p>Profession: {engineer?.profession}</p>
      <p>Email: {engineer?.email}</p>
      <button onClick={() => engineerDetailsHandler(engineer?._id)} style={{cursor: "pointer"}}>See Details</button>
    </div>
  );
};

Engineer.propTypes = {
  engineer: PropTypes.object,
};

export default Engineer;
