import { useState, useEffect, useCallback } from "react";
import {Status} from "./status";
// import images from public
import hungryDog from "./images/hungry.jpg";
import dogFood from "./images/dog-food.png";
import fullDog from "./images/full.jpg";

export default function App() {

  let fullDogStyle = {display: "none", width: "300px" };
  const [feedCounter, setFeedCounter] = useState(0);
  const [isFull, setIsFull] = useState(false);

  const handleDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
    //dataTransfer object holds data of item being dragged
    event.dataTransfer.dropEffect = "move"; // sets drag operation to a type
  }

  function handleDrop(e){
    e.preventDefault();
    e.stopPropagation();
    setFeedCounter(feedCounter + 1);
  }  
  
  useEffect(() => { 
    // check if status is full
    console.log("useEffect ran")
    if (feedCounter == 5) {
      console.log("if looop ran");
      setIsFull(true);
      setTimeout(()=>{setFeedCounter(0)}, 3000); //way to call setstate function rather than invoke it directly
      setTimeout(()=>{setIsFull(false)}, 3000); //way to call setstate function rather than invoke it directly
    } 
  }, [feedCounter]); 
  
  return (
    <>
      <h1>Feed The Dog</h1>
      <div>
        Feed Counter: {feedCounter}
      </div>
      <Status feedCounter = {feedCounter}>
      </Status>
        <p>Drag the food to feed the dog!</p>
        <img 
          src= {hungryDog}
          alt= {"Hungry dog"}
          style={isFull ? fullDogStyle : {width: "300px"}}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          draggable = {false} // prevent dragging onto itself
        />
        <img 
          src = {fullDog}
          alt = {"Dog who is full"}
          style={isFull ? {display: "block", width: "300px"} : fullDogStyle }
         /> 
        <img
          className="food"
          src={dogFood}
          alt={'Dog food'}
          // onDrop={handleDrop}
          draggable = {true}
        />
    </>
  );
}
