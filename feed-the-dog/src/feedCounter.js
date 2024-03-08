import React from "react";

export const FeedCounter = () => {
  
  function foodDropped(event) {
    event.dataTransfer.setData('')
  }
  
  function getAmountFed(){
    let counter = 0;
    if (foodDropped) {
      counter += 1;
    }
  
    return counter
  }
  return (
    <>
      <p>Feed Counter: {getAmountFed}</p>
    </>
  );
}