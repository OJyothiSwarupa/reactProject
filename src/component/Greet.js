import React from "react";

//stateless component
// function Greet() {
//     return <h1>Hello Jyothi</h1>
// }

//funtional component
// const Greet = () => <h1>Hello Jyothi</h1>

 //usingprops...
//    const Greet = props => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} this is {props.heroName}</h1>   
//             {props.children}
//         </div>
//     )
//    }

//destructuring props in functional component
    const Greet = ({name, heroName}) => {
        return (
            <div>
                <h1>Hello {name} this is {heroName}</h1>   
            </div>
        )
       }
export default Greet