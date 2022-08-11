import React from 'react';

function Education(props) {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="infoFields">
        <label htmlFor="programInput" />
        <input
          type="text"
          id="programInput"
          className="firstCol firstRow"
          placeholder="Degree or Program Name"
        />

        <label htmlFor="institutionInput" />
        <input
          type="text"
          id="institutionInput"
          className="secondCol firstRow"
          placeholder="Institution Name"
        />

        <label htmlFor="eduStartDate" />
        <input
          type="text"
          id="eduStartDate"
          className="firstCol secondRow"
          placeholder="Start Date"
        />

        <label htmlFor="eduEndDate" />
        <input
          type="text"
          id="eduEndDate"
          className="secondCol secondRow"
          placeholder="End Date"
        />
      </div>
      <div className="formButtons">
        <button className="add">Add Education</button>
        <button className="delete">Delete</button>
      </div>
    </section>
  );
}

export default Education;
