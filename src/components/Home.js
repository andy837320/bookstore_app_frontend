import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <h3 style={{ color: "blue", fontSize: "20px", marginTop: "18px" }}>
          This is Home Library.Please choose your book to enhance your
          knowledge!
        </h3>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
