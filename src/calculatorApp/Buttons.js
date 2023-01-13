import React from "react";

const Buttons = () => {
  return <>
  <div className="first">
  <button value={9}>9</button>
  <button value={8}>8</button>
  <button value={7}>7</button>
  </div>
  
  <div className="second">
  <button value={6}>6</button>
  <button value={5}>5</button>
  <button value={4}>4</button>
  </div>
  
  <div className="third">
  <button value={3}>3</button>
  <button value={2}>2</button>
  <button value={1}>1</button>
  </div>
  <div className="third">
  <button value='+'>+</button>
  <button value='-'>-</button>
  <button value='*'>*</button>
  <button value='/'>/</button>
  </div>
  <button value={'='}>=</button>
  </>;
};


export default Buttons