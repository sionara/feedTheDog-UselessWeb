export default function FeedCounter(){
  return (
    <>
      <p>Feed Counter: {getAmountFed}</p>
    </>
  );
}

function getAmountFed(){
  let counter = 0;
  if (foodDropped) {
    counter += 1;
  }

  return counter
}