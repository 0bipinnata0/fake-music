import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import { BrowserRouterProps, Outlet, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
const Home: React.FC<BrowserRouterProps> = (props) => {
  const { pathname } = useLocation();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              Web App
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }} bgcolor="primary.main" color="secondary.main">
        <Tabs
          value={pathname}
          variant="fullWidth"
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab
            component="a"
            value="/recommend"
            label="推荐"
            color="secondary"
            href="/recommend"
          />
          <Tab
            component="a"
            value="/singers"
            label="歌手"
            color="secondary"
            href="/singers"
          />
          <Tab
            component="a"
            value="/rank"
            label="排行榜"
            color="secondary"
            href="/rank"
          />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  );
};

export default Home;
