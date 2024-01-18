import { useLoaderData } from "react-router-dom";
import Engineer from "./Engineer";
import { useState } from "react";

const Engineers = () => {
  const loadedEngineers = useLoaderData();
  const [engineers, setEngineers] = useState(loadedEngineers);

  const addNewEngineerFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const email = form.email.value;
    const newEngineer = {name, profession, email};

    fetch("http://localhost:5000/engineers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEngineer),
    })
      .then(res => res.json())
      .then(data => {
        if (data?._id) {
          setEngineers([...engineers, data]);
          form.reset();
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <section>
      <div style={{width: "1170px", margin: "0 auto"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <h3>Total SQA Engineers: {engineers.length}</h3>
            <form onSubmit={addNewEngineerFormHandler}>
              <input style={{display: "block", margin: "10px 0", padding: "4px 6px"}} type="text" name="name" placeholder="Your Name" />
              <input style={{display: "block", margin: "10px 0", padding: "4px 6px"}} type="text" name="profession" placeholder="Your Profession" />
              <input style={{display: "block", margin: "10px 0", padding: "4px 6px"}} type="email" name="email" placeholder="Your Email" />
              <input style={{display: "block", margin: "10px 0", padding: "4px 6px", cursor: "pointer"}} type="submit" value="Add Engineer" />
            </form>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px"}}>
            {
              engineers.map((engineer) => (
                <Engineer key={engineer?._id} engineer={engineer} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineers;
