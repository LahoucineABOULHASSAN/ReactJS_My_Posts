import {
  Drawer,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import ViewListOutlinedIcon from "@material-ui/icons/ViewListOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import { useHistory, useLocation } from "react-router-dom";
const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menu = [
    {
      path: "/",
      text: "My Notes",
      icon: <ViewListOutlinedIcon color="secondary" />,
    },
    {
      path: "/create",
      text: "Create Note",
      icon: <PlaylistAddOutlinedIcon color="secondary" />,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawer }}
    >
      <div>
        <Typography variant="h5" color="secondary">
          Side Bar
        </Typography>
      </div>
      <List>
        {menu.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path && classes.active}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
