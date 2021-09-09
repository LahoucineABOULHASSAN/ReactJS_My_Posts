import { useStyles } from "../hooks/useStyles";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menu = [
    {
      path: "/",
      text: "List Posts",
      icon: <HomeIcon fontSize="large" />,
    },
    {
      path: "/create",
      text: "Create Post",
      icon: <PlaylistAddOutlinedIcon fontSize="large" />,
    },
  ];
  const active = `${classes.active} ${classes.tab}`;
  const tab = classes.tab;
  return (
    <header>
      <AppBar color="default" component="nav" className={classes.navbar}>
        <Tabs value={false} centered>
          {menu.map((item) => (
            <Tab
              key={item.text}
              icon={item.icon}
              label={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? active : tab}
            ></Tab>
          ))}
        </Tabs>
      </AppBar>
    </header>
  );
};

export default Header;
