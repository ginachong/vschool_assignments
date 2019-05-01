import React from 'react'
import './App.css'
import { withDataProvider } from './DataProvider';


function Meter(props) {

        return (
            <div className="meter-container">
                <h1>{props.progress}</h1>
                <svg width="40%" height="25%">
                    <rect width="100%" height="25%" fill="#d5dbe5" rx="0" ry="0"></rect>
                    <rect width={props.progress + "%"} height="25%" fill="#639fff" 
                    rx="0" ry="0"></rect>
                </svg>
            </div>
        )

    }

export default withDataProvider(Meter)
