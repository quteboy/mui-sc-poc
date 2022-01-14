import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
const pages = ["Home Care", "Disability", "About Us", "Activites", "Resources"];
const NavButton = styled(Button)`
  background-color: transparent;
  text-transform: capitalize;
  color: black;
  &:hover {
    background-color: transparent;
  }
`;

const SignButton = styled(Button)`
  background-color: #ffff;
  text-transform: capitalize;
  border: 1px solid ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.primary};
  &:hover {
    background-color: #ffff;
  }
  font-weight: 600;
  margin-right: 10px;
  width: 90px;
`;
const StartedButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary};
  text-transform: capitalize;
  color: #ffff;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;
const SubNavRight = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        {pages.map((page) => (
          <NavButton
            disableElevation
            disableFocusRipple
            disableRipple
            key={page}
            onClick={handleCloseNavMenu}
          >
            {page}
          </NavButton>
        ))}
        <Box sx={{ display: { xs: "none", lg: "flex" }, ml: 1 }}>
          <SignButton variant="outlined">Sign In</SignButton>
          <StartedButton
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
          >
            Get Started
          </StartedButton>
        </Box>
      </Box>
    </div>
  );
};

export default SubNavRight;
