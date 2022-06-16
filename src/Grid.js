import React from "react";
import './Grid.css'
import {useEffect} from 'react';
import { useState } from "react";


export default function Grid(props){
    
    const [display,setDisplay] = useState(null)

    const gridHeight = 400;

    useEffect(()=>{
        if (props.nums){
            let max = -Infinity;
            props.nums.forEach(element => {
                if(element>max){
                    max =element;
                }
            });
            let arrayDisplay = props.nums.map(num=>{
                return <div style={{height:((num)/max)*gridHeight, backgroundColor:'white',width:'20px'}}>{num}</div>
            })
            setDisplay(arrayDisplay)
        }
    },[props.nums])
    
    
    return <div id ="grid">{display}</div>
}