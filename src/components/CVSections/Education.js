import React from 'react';

function Education(props) {
  return (
    <section className="education">
      <div className="counter">Education {props.counter}</div>
      <div className="education infoFields">
        <input
          type="text"
          // id="programInput"
          className="firstCol firstRow"
          placeholder="Degree or Program Name"
          value={props.educationInfo.degree}
          onChange={props.degreeHandler}
        />

        <input
          type="text"
          // id="institutionInput"
          className="secondCol firstRow"
          placeholder="Institution Name"
          value={props.educationInfo.institution}
          onChange={props.institutionHandler}
        />

        <input
          type="text"
          // id="eduStartDate"
          className="firstCol secondRow"
          placeholder="Start Date"
          value={props.educationInfo.startDate}
          onChange={props.eduStartHandler}
        />

        <input
          type="text"
          // id="eduEndDate"
          className="secondCol secondRow"
          placeholder="End Date"
          value={props.educationInfo.endDate}
          onChange={props.eduEndHandler}
        />
      </div>
      {/* <div className="formButtons">
        <button className="delete">Delete</button>
      </div> */}
    </section>
  );
}

export default Education;
