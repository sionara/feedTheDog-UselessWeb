import FeedCounter from "./feedCounter";
import Status from "./status";


export default function Main() {

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
          src= {"./public/images/hungry.jpg"}
          alt= {"Photo of a hungry dog"}
        />
        <img
          className="food"
          src={"./public/images/dog-food.png"}
          alt={'Photo of dog food'}
        />
    </>
  );
}