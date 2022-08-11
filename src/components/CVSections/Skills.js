import React, { Component } from 'react';
import uniqid from 'uniqid';
import SkillOverview from '../SkillOverview';

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skill: {
        text: '',
        id: uniqid(),
      },
      skills: [],
    };
  }

  onSkillSave = e => {
    e.preventDefault();
    this.setState({
      skill: {
        text: e.target.value,
      },
      skills: this.state.skills.concat(this.state.skill),
    });
  };

  handleChange = e => {
    this.setState({
      skill: {
        text: e.target.value,
      },
      skills: this.state.skills.replace(this.state.skill),
    });
  };

  render() {
    const { skill, skills } = this.state;
    return (
      <section>
        <h2>Skills</h2>
        <label htmlFor="skillsInput" />
        <input
          type="text"
          id="skillsInput"
          value={skill.text}
          onChange={this.handleChange}
        />
        <button>Delete</button>
        <button onSubmit={this.onSkillSave}>Add Skill +</button>
        <SkillOverview skills={skills} />
      </section>
    );
  }
}

export default Skills;
