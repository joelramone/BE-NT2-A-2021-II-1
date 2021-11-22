import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

let timer

export default ({ running }) => {

    const [counter, setCounter] = useState(0)
    
    useEffect(() => {
        
    },[])

    useEffect(() => {
        
        

        console.log('Datos de running ', running, timer)

        if (running){
            timer = setInterval(()=>{
            
                // setCounter(function(pre){
                //     console.log(`sumar + 1 al estado ${pre}`)
                //     return pre + 1
                // })
    
                setCounter(prev => prev + 1)
            }, 1000)
        }else{
            clearInterval(timer)    
        }


    }, [running])

    useEffect(()=>{
        console.log(`Estado actualizado:  ${counter}`, timer)
    },[counter])

    return (
        <p>{counter}</p>
    )
}