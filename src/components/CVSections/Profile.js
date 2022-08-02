import React, {Component} from "react";

class Profile extends Component() {
    render() {
        return(
            <section>
                <label htmlFor="nameInput"></label>
                <input id="nameInput"></input>

                <label htmlFor="emailInput"></label>
                <input id="emailInput"></input>

                <label htmlFor="numberInput"></label>
                <input id="numberInput"></input>

            </section>
        )
    }
}

export default Profile