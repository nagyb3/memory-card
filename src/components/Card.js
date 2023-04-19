import React from "react"
import "../App.css"

export default function Card(props) {

    function handle() {
        props.handleClick(props.index)
    }

    // function asd() {
    //     console.log(props.name, props.index)
    // }

    return (
        <div onClick={handle} className={props.handleClass}>
            <img height="100px" src={props.image} alt=""/>
        </div>
    )
}