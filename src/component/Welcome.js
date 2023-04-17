import React, { Component } from "react";

//class component
class Welcome extends Component {
    render() {
        // return <h1>Class Component</h1>


        //destructuring props in class component
        const {name, heroName} = this.props
        // const {name, heroName} = this.state  -> destructuring state in class component

        return (
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
       
}

export default Welcome