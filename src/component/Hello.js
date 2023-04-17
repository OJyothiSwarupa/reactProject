import React from "react";

const Hello = () => {
    // return (
    //     <div className= 'dummyClass'>
    //         <h1>Hello Jyothi..!</h1>       //  without JSX
    //     </div>
    // )

    return React.createElement('div', {id: 'hello', className: 'dummyClass'} , React.createElement('h1', null, 'Hello Jyothi..!')) // using JSX
}

export default Hello