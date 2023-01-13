import React from "react";


const Weekdays =(props)=>{
    
   const onTrigger =()=>{
        const day = new Date().getDay()
        console.log(day)
    props.getDay(day)
    }



    return <h1 onClick={onTrigger} >Get it done.</h1>
}

export default Weekdays