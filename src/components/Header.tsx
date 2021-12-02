import { AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="transparent" position="static">
      <Typography
        variant="h1"
        sx={{ flexGrow: 1, textAlign: "center" }}
        style={{ padding: "10px", fontFamily: "Didot, serif" }}
      >
        EmberFrost
      </Typography>
    </AppBar>
  );
};
export default Header;
