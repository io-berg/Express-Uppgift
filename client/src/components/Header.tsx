import { Button, Container, Typography } from "@mui/material";
import { FC } from "react";

interface HeaderProps {
  userType:string
}

const Header: FC<HeaderProps> = ({ userType }) => {
  return (
    <Container>
      <header className="flex justify-between">
        <Typography variant="h4">Products</Typography>
        <div className="header-button-group">
          <Button variant="contained" color="primary">
            {userType === "admin" ? "Shop" : "Edit"}
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
