import React from "react"
import ContainerTemplate from "./ContainerTemplate"

let style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    textAlign: "center",
}

const ContainerInfo = () => {
    return (
        <div style={style}>
        <link href="https://fonts.googleapis.com/css?family=Amiri|Tangerine" rel="stylesheet"></link>
            <ContainerTemplate 
            img="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
            title="Kitty1"
            subtitle="string lover"
            description="xxx"
            />
            <ContainerTemplate 
            img="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
            title="Kitty2"
            subtitle="laser lover"
            description="xxx"
            />
            <ContainerTemplate 
            img="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
            title="Kitty3"
            subtitle="outside lover"
            description="xxx"
            />
        </div>
    )
}

export default ContainerInfo