import React from "react"
import BoxTemplate from "./BoxTemplate"

const BoxInfo = () => {
    return (
        <div>
        <BoxTemplate 
        title="Gina"
        subtitle="eater"
        info="favorite foods: chocolate, eggs, sushi"
        />
        <BoxTemplate 
        title="Justin"
        subtitle="gym rat"
        info="favorite foods: meat, sushi, booze"
        />
        <BoxTemplate 
        title="Hana"
        subtitle="eater"
        info="favorite foods: tuna, cat food, grass"
        />
        <BoxTemplate 
        title="Kuku"
        subtitle="panther"
        info="favorite foods: cat treats, tuna, grass"
        />
        </div>
    )
}


export default BoxInfo