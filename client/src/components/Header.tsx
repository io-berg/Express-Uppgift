import { Button, Container, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <header className="flex justify-between">
        <Typography variant="h4">Generic Product Store</Typography>
        <div className="header-button-group">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin")}
          >
            Admin View
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Shop View
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
