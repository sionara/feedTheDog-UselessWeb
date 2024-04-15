import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { Box, Typography } from "@mui/material";

export const Status = ({ feedCounter }) => {
  function showStatus() {
    if (feedCounter < 5) {
      return "Hungry";
    } else {
      return "Full";
    }
  }

  return (
    <>
      <Box sx={{ display: "flex", gap: "0.25em", alignItems: "center" }}>
        <TheaterComedyIcon
          sx={{ fontSize: "2em" }}
          color="primary"
        ></TheaterComedyIcon>
        <Typography sx={{ fontSize: "x-large" }}>
          <strong>Status:</strong> {showStatus()}{" "}
        </Typography>
      </Box>
    </>
  );
};
