import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundView: FC = () => {
  return (
    <Container>
      <div>
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Not found</Typography>
        <Typography variant="h3">
          <Link to="/">Return to home page</Link>
        </Typography>
      </div>
    </Container>
  );
};

export default NotFoundView;
