import {FeedCounter} from "./feedCounter";
import Status from "./status";
// import images from public
import hungryDog from "./images/hungry.jpg";
import dogFood from "./images/dog-food.png";

export default function App() {

  return (
    <>
      <h1>Feed The Dog</h1>
      <FeedCounter>
        0
      </FeedCounter>
      <Status>
        Hungry
      </Status>
        <p>Drag the food to feed the dog!</p>
        <img 
          src= {hungryDog }
          alt= {"Hungry dog"}
          style={{width: "300px"}}
        />
        <img
          className="food"
          src={dogFood}
          alt={'Dog food'}
        />
    </>
  );
}
