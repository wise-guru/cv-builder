import React from 'react';

function Skills(props) {
  return (
    <section>
      <h2>Skills</h2>
      <input
        type="text"
        className="skillsInput"
        placeholder="Skill"
        value={props.skillInfo.skill}
        onChange={props.skillHandler}
      />
    </section>
  );
}

export default Skills;
