// import React from 'react'

import { useEffect, useState } from "react"

export default function Test() {

    const [child, setChildState] = useState(1);

    useEffect(() => console.log("useEffect of ChaildComponene"), [])
    const add=()=>{setChildState((child)=>child+1)}
    return (
        <div>
            <span> Child Coponene {child}</span>
            <input type="button" name="add" onClick={add} value="Child button"/>
        </div>
    )
}
