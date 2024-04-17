import React from "react";
import girl from "../IMG/girl.png";
import camera from "../IMG/Group.svg";

function Dashboard() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className="MainPage">
      <section className="Miyauth">
        <nav>
          <h4>Account Settings</h4>
        </nav>
        <section className="upperPart">
          <div>
            <img src={girl} alt="/"  className="girl"/>
            <img src={camera} alt="/"  className="camera"/>
          </div>
          <div className="more">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </section>
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ratione aspernatur! Ratione tenetur vel iusto aspernatur odio ut minima fugiat. Blanditiis, odio perferendis!
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
