import React from 'react';

function Experience() {
  return (
    <section className="expInfo">
      <h2>Experience</h2>
      <div className="infoFields">
        <label htmlFor="companyInput" />
        <input
          id="companyInput"
          className="firstCol firstRow"
          placeholder="Company Name"
        />

        <label htmlFor="positionInput" />
        <input
          id="positonInput"
          className="secondCol firstRow"
          placeholder="Position"
        />

        <label htmlFor="expStartDate" />
        <input
          id="expStartDate"
          className="firstCol secondRow"
          placeholder="Start Date"
        />

        <label htmlFor="expEndDate" />
        <input
          id="expEndDate"
          className="secondCol secondRow"
          placeholder="End Date"
        />

        <label htmlFor="jobDescription" />
        <textarea
          id="jobDescription"
          className="bothCol thirdRow"
          placeholder="Job Description"
        />
      </div>
      <div className="formButtons">
        <button className="add">Add Experience</button>
        <button className="delete">Delete</button>
      </div>
    </section>
  );
}

export default Experience;
