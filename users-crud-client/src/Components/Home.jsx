const Home = () => {
  const addUserFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const company = form.company.value;
    const email = form.email.value;
    const newUser = { name, profession, company, email };
    console.log(newUser);

    //post/create new user by post method:
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Employee Added Successfully!");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="home">
      <div className="container">
        <article className="section-title">
          <h2>Simple Users CRUD</h2>
        </article>
        <div className="user-form">
          <div className="form">
            <h3>Add New User From Here</h3>
            <form onSubmit={addUserFormHandler}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name...."
              />
              <input
                type="text"
                name="profession"
                placeholder="Enter your profession...."
              />
              <input
                type="text"
                name="company"
                placeholder="Enter your company name...."
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email...."
              />
              <input type="submit" value="Add New User" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
