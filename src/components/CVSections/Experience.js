import React from 'react';

function Experience(props) {
  return (
    <section>
      <div className="counter">Experience {props.counter}</div>
      <div className="experience infoFields">
        <input
          // id="companyInput"
          className="firstCol firstRow"
          placeholder="Company Name"
          value={props.experienceInfo.company}
          onChange={props.companyHandler}
        />

        <input
          // id="positonInput"
          className="secondCol firstRow"
          placeholder="Position"
          value={props.experienceInfo.position}
          onChange={props.positionHandler}
        />

        <input
          // id="expStartDate"
          className="firstCol secondRow"
          placeholder="Start Date"
          value={props.experienceInfo.startDate}
          onChange={props.expStartHandler}
        />

        <input
          // id="expEndDate"
          className="secondCol secondRow"
          placeholder="End Date"
          value={props.experienceInfo.endDate}
          onChange={props.expEndHandler}
        />

        <textarea
          // id="jobDescription"
          className="bothCol thirdRow"
          placeholder="Job Description"
          value={props.experienceInfo.description}
          onChange={props.expDescriptionHandler}
          rows={4}
        />
      </div>
    </section>
  );
}

export default Experience;
