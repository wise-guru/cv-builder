import { render } from "@testing-library/react";
import React, {Component} from "react";

class Experience extends Component() {
    // constructor() {
    //     super()
    // }

        render() {
            return(
                <div>
                    <label htmlFor="companyInput"></label>
                    <input id="companyInput"></input>

                    <label htmlFor="positionInput"></label>
                    <input id="positonInput"></input>

                    <label htmlFor="expStartDate"></label>
                    <input id="expStartDate"></input>

                    <label htmlFor="expEndDate"></label>
                    <input id="expEndDate"></input>

                    <label htmlFor="jobDescription"></label>
                    <input id="jobDescription"></input>
                </div>
            )
        }
}

export default Experience