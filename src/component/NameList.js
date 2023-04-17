import React from "react";

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(names => <h2>{names}</h2>)
    return <h2>{nameList}</h2>

}

export default NameList