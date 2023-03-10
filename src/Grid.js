import React from "react";
import './Grid.css'
import {useEffect} from 'react';
import { useState } from "react";


export default function Grid(props){
    
    const [display,setDisplay] = useState(null)

    const gridHeight = 400;
    const gridWidth = 1000;
    useEffect(()=>{
        if (props.nums){
            let max = -Infinity;
            props.nums.forEach(element => {
                if(element>max){
                    max =element;
                }
            });
            
            let barStyle = {
                
            }

            let arrayDisplay = props.nums.map((num,idx)=>{
                return (<div 
                style={{
                    height:((num)/max)*gridHeight, 
                    backgroundColor:'black',
                    width: gridWidth/props.nums.length , 
                    color: 'white'}
                } 
                key={idx}>
                    {num}
                    </div>)
            })
            setDisplay(arrayDisplay)
        }
    },[props.nums]);

    const quickSort = (arr)=>{
        
    }
    
    
    return <div id ="grid">{display}</div>
}