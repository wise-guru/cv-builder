import React, { Component } from 'react';
import uniqid from 'uniqid';
import BuildForm from './BuildForm';
import PreviewForm from './PreviewForm';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        professionalTitle: '',
        github: '',
        phone: '',
        email: '',
        description: '',
        // linkedIn: '',
        // twitter: '',
      },
      experienceInfo: [],
      educationInfo: [],
      skillInfo: [],
      buildMode: true,
    };
  }

  build = () => {
    this.setState({
      buildMode: true,
    });
  };

  preview = () => {
    this.setState({
      buildMode: false,
    });
  };

  firstNameHandler(e) {
    const personal = this.state.personalInfo;
    personal.firstName = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  lastNameHandler(e) {
    const personal = this.state.personalInfo;
    personal.lastName = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  professionalTitleHandler(e) {
    const personal = this.state.personalInfo;
    personal.professionalTitle = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  githubHandler(e) {
    const personal = this.state.personalInfo;
    personal.github = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  phoneHandler(e) {
    const personal = this.state.personalInfo;
    personal.phone = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  emailHandler(e) {
    const personal = this.state.personalInfo;
    personal.email = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  descriptionHandler(e) {
    const personal = this.state.personalInfo;
    personal.description = e.target.value;
    this.setState({
      personalInfo: personal,
    });
  }

  // linkedInHandler(e) {
  //   const personal = this.state.personalInfo;
  //   personal.linkedIn = e.target.value;
  //   this.setState({
  //     personalInfo: personal,
  //   });
  // }

  // twitterHandler(e) {
  //   const personal = this.state.personalInfo;
  //   personal.twitter = e.target.value;
  //   this.setState({
  //     personalInfo: personal,
  //   });
  // }

  educationHandler() {
    const education = {
      id: uniqid(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    };
    this.setState({
      educationInfo: this.state.educationInfo.concat(education),
    });
  }

  institutionHandler(e, id) {
    const len = this.state.educationInfo.length;
    const education = this.state.educationInfo;

    for (let i = 0; i < len; i += 1) {
      if (education[i].id === id) {
        education[i].institution = e.target.value;
        this.setState({
          educationInfo: education,
        });
      }
    }
  }

  degreeHandler(e, id) {
    const len = this.state.educationInfo.length;
    const education = this.state.educationInfo;

    for (let i = 0; i < len; i += 1) {
      if (education[i].id === id) {
        education[i].degree = e.target.value;
        this.setState({
          educationInfo: education,
        });
      }
    }
  }

  eduStartHandler(e, id) {
    const len = this.state.educationInfo.length;
    const education = this.state.educationInfo;

    for (let i = 0; i < len; i += 1) {
      if (education[i].id === id) {
        education[i].startDate = e.target.value;
        this.setState({
          educationInfo: education,
        });
      }
    }
  }

  eduEndHandler(e, id) {
    const len = this.state.educationInfo.length;
    const education = this.state.educationInfo;

    for (let i = 0; i < len; i += 1) {
      if (education[i].id === id) {
        education[i].endDate = e.target.value;
        this.setState({
          educationInfo: education,
        });
      }
    }
  }

  workHandler() {
    const work = {
      id: uniqid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.setState({
      experienceInfo: this.state.experienceInfo.concat(work),
    });
  }

  companyHandler(e, id) {
    const work = this.state.experienceInfo;
    const len = work.length;

    for (let i = 0; i < len; i += 1) {
      if (work[i].id === id) {
        work[i].company = e.target.value;
        this.setState({
          experienceInfo: work,
        });
      }
    }
  }

  positionHandler(e, id) {
    const work = this.state.experienceInfo;
    const len = work.length;

    for (let i = 0; i < len; i += 1) {
      if (work[i].id === id) {
        work[i].position = e.target.value;
        this.setState({
          experienceInfo: work,
        });
      }
    }
  }

  expStartHandler(e, id) {
    const work = this.state.experienceInfo;
    const len = work.length;

    for (let i = 0; i < len; i += 1) {
      if (work[i].id === id) {
        work[i].startDate = e.target.value;
        this.setState({
          experienceInfo: work,
        });
      }
    }
  }

  expEndHandler(e, id) {
    const work = this.state.experienceInfo;
    const len = work.length;

    for (let i = 0; i < len; i += 1) {
      if (work[i].id === id) {
        work[i].endDate = e.target.value;
        this.setState({
          experienceInfo: work,
        });
      }
    }
  }

  expDescriptionHandler(e, id) {
    const work = this.state.experienceInfo;
    const len = work.length;

    for (let i = 0; i < len; i += 1) {
      if (work[i].id === id) {
        work[i].description = e.target.value;
        this.setState({
          experienceInfo: work,
        });
      }
    }
  }

  skillInfoHandler() {
    const skill = {
      skill: '',
      id: uniqid(),
    };
    this.setState({
      skillInfo: this.state.skillInfo.concat(skill),
    });
  }

  skillHandler(e, id) {
    const skill = this.state.skillInfo;
    const len = skill.length;

    for (let i = 0; i < len; i += 1) {
      if (skill[i].id === id) {
        skill[i].skill = e.target.value;
        this.setState({
          skillInfo: skill,
        });
      }
    }
  }

  render() {
    let mode = null;
    if (this.state.buildMode) {
      mode = (
        <BuildForm
          personalInfo={this.state.personalInfo}
          educationInfo={this.state.educationInfo}
          experienceInfo={this.state.experienceInfo}
          skillInfo={this.state.skillInfo}
          className="buildForm"
          educationHandler={() => {
            this.educationHandler();
          }}
          workHandler={() => {
            this.workHandler();
          }}
          skillInfoHandler={() => {
            this.skillInfoHandler();
          }}
          firstNameHandler={e => {
            this.firstNameHandler(e);
          }}
          lastNameHandler={e => {
            this.lastNameHandler(e);
          }}
          professionalTitleHandler={e => {
            this.professionalTitleHandler(e);
          }}
          githubHandler={e => {
            this.githubHandler(e);
          }}
          phoneHandler={e => {
            this.phoneHandler(e);
          }}
          emailHandler={e => {
            this.emailHandler(e);
          }}
          descriptionHandler={e => {
            this.descriptionHandler(e);
          }}
          // linkedInHandler={e => {
          //   this.linkedInHandler(e);
          // }}
          // twitterHandler={e => {
          //   this.twitterHandler(e);
          // }}
          institutionHandler={(e, id) => {
            this.institutionHandler(e, id);
          }}
          degreeHandler={(e, id) => {
            this.degreeHandler(e, id);
          }}
          eduStartHandler={(e, id) => {
            this.eduStartHandler(e, id);
          }}
          eduEndHandler={(e, id) => {
            this.eduEndHandler(e, id);
          }}
          expStartHandler={(e, id) => {
            this.expStartHandler(e, id);
          }}
          expEndHandler={(e, id) => {
            this.expEndHandler(e, id);
          }}
          expDescriptionHandler={(e, id) => {
            this.expDescriptionHandler(e, id);
          }}
          companyHandler={(e, id) => {
            this.companyHandler(e, id);
          }}
          positionHandler={(e, id) => {
            this.positionHandler(e, id);
          }}
          skillHandler={(e, id) => {
            this.skillHandler(e, id);
          }}
        />
      );
    } else {
      mode = (
        <PreviewForm
          personalInfo={this.state.personalInfo}
          educationInfo={this.state.educationInfo}
          experienceInfo={this.state.experienceInfo}
          skillInfo={this.state.skillInfo}
        />
      );
    }
    return (
      <div className="mainContainer">
        <div className="buttonContainer">
          <button onClick={this.build}>Build Mode</button>
          <button onClick={this.preview}>Preview Mode</button>
        </div>
        <div className="cvForms">{mode}</div>
      </div>
    );
  }
}

export default Overview;
