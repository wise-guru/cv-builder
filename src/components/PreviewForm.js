import React, { Component } from 'react';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import Github from '../assets/github.png';

class PreviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="previewForm">
        <section className="personalInfo previewSection">
          <div className="preview header">
            <div className="header left">
              <h1 className="name">
                {this.props.personalInfo.firstName}{' '}
                {this.props.personalInfo.lastName}
              </h1>
              <div className="professionalTitle">
                {this.props.personalInfo.professionalTitle}
              </div>
            </div>
            <ul className="header right">
              <li>
                <img src={Phone} alt="phone icon" />
                <div>{this.props.personalInfo.phone}</div>
              </li>

              <li>
                <img src={Email} alt="email icon" />
                <div>{this.props.personalInfo.email}</div>
              </li>

              <li>
                <img src={Github} alt="github icon" />
                <div>{this.props.personalInfo.github}</div>
              </li>
            </ul>
          </div>
          <div className="personalDescription">
            {this.props.personalInfo.description}
          </div>
        </section>

        <section className="experiencePreview previewSection">
          <h3>Work experience</h3>
          <ul>
            {this.props.experienceInfo.map(experience => {
              const { id } = experience;
              return (
                <li key={id} className="experience">
                  <div className="firstLine">
                    <div>{experience.position}</div>
                    <div className="right">
                      <div className="company">{experience.company}</div>
                      <div>|</div>
                      <div className="bold">{experience.startDate} </div>
                      <div>-</div>
                      <div className="bold">{experience.endDate}</div>
                    </div>
                  </div>
                  <div className="expDescription">{experience.description}</div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="EducationPreview previewSection">
          <h3>Education</h3>
          {this.props.educationInfo.map(education => {
            const { id } = education;
            return (
              <li key={id} className="firstLine">
                <div>{education.degree}</div>
                <div className="right">
                  <div className="institution">{education.institution}</div>
                  <div>|</div>
                  <div className="bold">{education.startDate}</div>
                  <div>-</div>
                  <div className="bold">{education.endDate}</div>
                </div>
              </li>
            );
          })}
        </section>

        <section className="skillsPreview previewSection">
          <h3>Skills</h3>
          {this.props.skillInfo.map(skill => {
            const { id } = skill;
            return (
              <li key={id} className="skills">
                <div>{skill.skill}</div>
              </li>
            );
          })}

          <ul />
        </section>
      </div>
    );
  }
}

export default PreviewForm;
