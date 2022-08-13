import React, { Component } from 'react';
import uniqid from 'uniqid';
import SkillOverview from '../SkillOverview';

function Skills(props) {
  return (
    <section>
      <h2>Skills</h2>
      <input
        type="text"
        id="skillsInput"
        value={props.skillInfo.skill}
        onChange={props.skillHandler}
      />
    </section>
  );
}

export default Skills;
