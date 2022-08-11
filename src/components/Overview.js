import { Component } from 'react';
import uniqid from 'uniqid';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        description: '',
        linkedIn: '',
        twitter: '',
      },
      experienceInfo: [],
      educationInfo: [],
      skills: [],
    };
  }

  firstNameHandler(e) {
    const personal = this.state.personalInfo;
    personal.firstName = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

  lastNameHandler(e) {
    const personal = this.state.personalInfo;
    personal.lastName = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

  phoneHandler(e) {
    const personal = this.state.personalInfo;
    personal.phone = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

  emailHandler(e) {
    const personal = this.state.personalInfo;
    personal.phone = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

  descriptionHandler(e) {
    const personal = this.state.personalInfo;
    personal.description = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

  linkedInHandler(e) {
    const personal = this.state.personalInfo;
    personal.linkedIn = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

  twitterHandler(e) {
    const personal = this.state.personalInfo;
    personal.twitter = e.target.value;
    this.state({
      personalInfo: personal,
    });
  }

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
    const len = this.state.educationInfo;
    const education = this.state.educationInfo;

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
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

    for (let i = 0; i < len; i++) {
      if (work[i].id === id) {
        work[i].description = e.target.value;
        this.setState({
          experienceInfo: work,
        });
      }
    }
  }

  skillHandler() {
    const skill = {
      skill: '',
      id: uniqid(),
    };
    this.setState({
      skills: this.state.skills.concat(skill),
    });
  }
}
