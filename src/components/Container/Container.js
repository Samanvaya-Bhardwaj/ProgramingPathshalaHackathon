import React from "react";
import "./Container.css";

export default function Container() {
  return (
    <>
    
      <div className="her">
      <div className="card text-bg-dark border-0">
  <img src="/assets/background.jpg" className="card-img" alt="Background" height="730px"/>
  <div className="card-img-overlay">
    {/* <button className="btn-primary ">Let's Learn Now</button> */}
  </div>
  </div>
  

  <div className="hero">
          <div className="box">

            <h1>Learn Anytime Anywhere</h1>
            <h4>Learn in Your Suitable Slots</h4>
            <div className="lorem my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis quibusdam, distinctio vel quo dolores doloremque saepe cumque cupiditate quod?
            </div>
          </div>
        

        <div className="image mx-5 my-5">
        <img src="/assets/Container.jpg" className="card-img" alt="Background" />
        </div>
        </div>
      </div>
    </>
  );
}
