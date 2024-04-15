import { useState, useEffect, useCallback } from "react";
import { Status } from "./components/Status";
import Instructions from "./components/Instructions";
// import images from public
import hungryDog from "./images/hungry.jpg";
import dogFood from "./images/dog-food.png";
import fullDog from "./images/full.jpg";

import "./App.css";

//mui styling
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import RestaurantTwoToneIcon from "@mui/icons-material/RestaurantTwoTone";
import PetsTwoToneIcon from "@mui/icons-material/PetsTwoTone";

export default function App() {
  let fullDogStyle = { display: "none", width: "300px" };
  const [feedCounter, setFeedCounter] = useState(0);
  const [isFull, setIsFull] = useState(false);

  const handleDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
    //dataTransfer object holds data of item being dragged
    event.dataTransfer.dropEffect = "move"; // sets drag operation to a type
  };

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setFeedCounter(feedCounter + 1);
  }

  useEffect(() => {
    // check if status is full
    console.log("useEffect ran");
    if (feedCounter == 5) {
      console.log("if looop ran");
      setIsFull(true);
      setTimeout(() => {
        setFeedCounter(0);
      }, 3000); //way to call setstate function rather than invoke it directly
      setTimeout(() => {
        setIsFull(false);
      }, 3000); //way to call setstate function rather than invoke it directly
    }
  }, [feedCounter]);

  return (
    // fragmet tag
    <>
      <CssBaseline>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              mb: "3em",
            }}
          >
            <PetsTwoToneIcon sx={{ fontSize: "3em" }} color="primary" />
            <Typography variant="h1">Feed The Dog</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "x-large",
              mb: "3em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "0.25em",
                alignItems: "center",
              }}
            >
              <RestaurantTwoToneIcon sx={{ fontSize: "2em" }} color="primary" />
              <Typography sx={{ fontSize: "x-large" }}>
                <strong>Feed Counter:</strong> {feedCounter}
              </Typography>
            </Box>
            <Instructions />
            <Status feedCounter={feedCounter} />
          </Box>

          {/* main content */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <img
                src={hungryDog}
                alt={"Hungry dog"}
                style={isFull ? fullDogStyle : { width: "300px" }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                draggable={false} // prevent dragging onto itself
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <img
                src={fullDog}
                alt={"Dog who is full"}
                style={
                  isFull ? { display: "block", width: "300px" } : fullDogStyle
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                className="food"
                src={dogFood}
                alt={"Dog food"}
                // onDrop={handleDrop}
                draggable={true}
                style={isFull ? fullDogStyle : { width: "300px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </>
  );
}
