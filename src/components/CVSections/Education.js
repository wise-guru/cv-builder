import React, {component} from "react";

class Education extends component {
    render() {
        return(
            <section className="education">
                <label htmlFor="programInput">Program or Degree Name</label>
                <input type="text" id="programInput"></input>

                <label htmlFor="institutionInput">Institution Name</label>
                <input type="text" id="institutionInput"></input>
              
                <label htmlFor="eduStartDate">Start</label>
                <input type="text" id="eduStartDate"></input>

                <label htmlFor="eduEndDate">End</label>
                <input type="text" id="eduEndDate"></input>
            </section>
        )
    }
}

export default Education