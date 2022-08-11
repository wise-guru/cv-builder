import React from 'react';

function Profile() {
  return (
    <section className="personalInfo">
      <h2>Personal Information</h2>
      <div className="infoFields">
        <label htmlFor="firstNameInput" />
        <input
          id="firstNameInput"
          placeholder="First name"
          className="firstCol firstRow"
        />

        <label htmlFor="lastNameInput" />
        <input
          id="lastNameInput"
          placeholder="Last name"
          className="secondCol firstRow"
        />

        <label htmlFor="emailInput" />
        <input
          id="emailInput"
          placeholder="Email"
          className="firstCol secondRow"
        />

        <label htmlFor="numberInput" />
        <input
          id="numberInput"
          placeholder="Phone number"
          className="secondCol secondRow"
        />
      </div>
    </section>
  );
}

export default Profile;
