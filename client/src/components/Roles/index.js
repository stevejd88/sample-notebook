import React from "react";
import Rotation from "../../assets/img/roles-rotation.jpg";

import "./roles.scss";

const Roles = (props) => {
  return (
    <section id='roles-container'>
      <h1>Team Roles</h1>

      <div className='each-rol-'>
        <div className='role-sum-team-manager'>
          <h2>Team Manager / Time Keeper</h2>
          <ul>
            <li>
              <strong>-</strong> You will be responsible for organizing your
              team's supplies and making sure that your team has cleaned up its
              area be- fore lunch and at the end of the day.
            </li>
            <li>
              <strong>-</strong> You will also keep track of time and make sure
              that that your team is ontask.
            </li>
          </ul>
        </div>
        <div className='role-sum-recorder'>
          <h2>Recorder / Reporter</h2>
          <ul>
            <li>
              <strong>-</strong> You will record team work, experiment results,
              and post to class space. This could mean posting questions, "aha"
              moments, or pictures/videos of your missions.
            </li>
          </ul>
        </div>
        <div className='role-sum-runner'>
          <h2>Encourager / Runner</h2>
          <ul>
            <li>
              <strong>-</strong> You will also encourage your team by listening
              carefully, sharing ideas, and helping to make connections.
            </li>
            <li>
              <strong>-</strong> You will collect any resources that your team
              may need for a mission.
            </li>
          </ul>
        </div>
        <div className='role-sum-checker'>
          <h2>Checker / Questioner</h2>
          <ul>
            <li>
              <strong>-</strong> You will make sure that everyone in your team
              understands what is being said and what needs to be done.
            </li>
            <li>
              <strong>-</strong> You will also help your team to think
              critically by asking thoughtful questions.
            </li>
          </ul>
        </div>
      </div>
      <img
        className='roles-img img-fluid'
        src={Rotation}
        alt='roles rotation'
      />
      <br />

      <span className='stars'>
        - <strong>A</strong>rchernar, <strong>B</strong>
        etelguese, <strong>C</strong>anopus, and <strong>D</strong>eneb are the
        brightest stars in our universe.
      </span>
    </section>
  );
};

export default Roles;
