import React from "react";
import DOD from "../../assets/img/dod-logo.jpg";

import "./notebook.scss";

const EngNotebook = (props) => {
  return (
    <section id='eng-notebook-container'>
      <h1>What is an Engineering Notebook?</h1>
      <div className='eng-notebook-top'>
        <h3>
          <strong>What is the Purpose of this Notebook?</strong>
        </h3>
        <p>
          <em>
            This Engineering Notebook will be used to record your progress,
            ideas, notes, sketches questions, and thoughts. It is your evidence
            of the work you have completed.
          </em>
        </p>
        <p>
          <em>
            Engineers use an Engineering Notebook to record ideas, inventions,
            experimentation records, observations, and all work details.
          </em>
        </p>
      </div>
      <div className='eng-notebook-bottom'>
        <h3>
          <strong>How do I use an Engineering Notebook?</strong>
        </h3>
        <ul>
          <li>
            <strong>1.</strong>{" "}
            <strong>
              Mistakes are an important part of the Engineering and Learning
              processes, they should be embraced and celebrated!
            </strong>
          </li>
          <li>
            <strong>2.</strong> Document NEATLY.
          </li>
          <li>
            <strong>3.</strong> Document EVERYTHING AS IT HAPPENS.
            <p>
              <strong>-</strong>If it is not documented or written the next day,
              it did not happen.
            </p>
          </li>
          <li>
            <strong>4.</strong> Entries should include enough information so
            someone else could successfully duplicate your work.
            <p>
              <strong>-</strong>Label figures and sketches. Keep sketches
              up-to-date – make changes as they happen.
            </p>
            <p>
              <strong>-</strong>Use complete sentences. Sentences begin with
              capitalization and end with punctuation.
            </p>
          </li>
          <li>
            <strong>5.</strong> Once completed, sign and date each page, unused
            pages should be 'X'ed out and signed as well.
          </li>
        </ul>
      </div>
      <img src={DOD} alt='Starbase logo' className='img-fluid' />
    </section>
  );
};

export default EngNotebook;
