import React from 'react';

function PersonalInfo(props) {
  return (
    <section className="personalInfo">
      <h2>Personal Information</h2>
      <div className="infoFields">
        <input
          // id="firstNameInput"
          placeholder="First name"
          className="firstCol firstRow"
          value={props.personalInfo.firstName}
          onChange={props.firstNameHandler}
        />

        <input
          // id="lastNameInput"
          placeholder="Last name"
          className="secondCol firstRow"
          value={props.personalInfo.lastName}
          onChange={props.lastNameHandler}
        />

        <input
          placeholder="Professional title"
          className="firstCol secondRow"
          value={props.personalInfo.professionalTitle}
          onChange={props.professionalTitleHandler}
        />

        <input
          placeholder="Github"
          className="secondCol secondRow"
          value={props.personalInfo.github}
          onChange={props.githubHandler}
        />

        <input
          // id="emailInput"
          placeholder="Email"
          className="firstCol thirdRow"
          value={props.personalInfo.email}
          onChange={props.emailHandler}
        />

        <input
          // id="numberInput"
          type="tel"
          placeholder="Phone number"
          className="secondCol thirdRow"
          value={props.personalInfo.phone}
          onChange={props.phoneHandler}
        />

        {/* <input
          // id="twitterInput"
          placeholder="Twitter"
          className="firstCol fourthRow"
          value={props.personalInfo.twitter}
          onChange={props.twitterHandler}
        />

        <input
          // id="linkedinInput"
          placeholder="LinkedIn"
          className="secondCol fourthRow"
          value={props.personalInfo.linkedIn}
          onChange={props.linkedInHandler}
        /> */}

        <textarea
          // id="personalDescriptionInput"
          placeholder="Personal description"
          className="bothCol fourthRow"
          value={props.personalInfo.description}
          onChange={props.descriptionHandler}
        />
      </div>
    </section>
  );
}

export default PersonalInfo;
