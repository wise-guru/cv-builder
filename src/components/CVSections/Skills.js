import React, {Component} from "react";

class Skills extends Component() {

    constructor() {
        super()
        
        this.state = {
            skill: '',
            skills: []
        }
    }

    onSkillSubmit = (e) => {
        e.preventDefault()
        this.setState({
            skills: this.state.skills.concat(this.state.skill),
            skill: ''
        })
    }
    
    render() {
        <section>
            <label htmlFor="skillsInput"></label>
            <input type="text" id="skillsInput"></input>

            <button onSubmit={this.onSkillSubmit}>Add Skill +</button>
        </section>
    }
}

export default Skills