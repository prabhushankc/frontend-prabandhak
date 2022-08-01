import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import {
  Home,
  Fastfood,
  ListAlt,
  Group,
  Report,
  Message,
} from "@material-ui/icons";
import {
  Bed,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Drawered = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "fixed",
        marginTop: "-7px",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "100vh",
          padding: "0px 8px 0px 8px",
          margin: "auto",
          backgroundColor: "#fafafa",
        }}
      >
        <List>
          {["Home", "Food", "Room"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton id={text === "Food" && 'foodPageBtn'} onClick={() => navigate(`/${text}`)}>
                <ListItemIcon
                  style={{
                    color: "black",
                  }}
                >
                  {text === "Home" ? (
                    <Home />
                  ) : text === "Food" ? (
                    <Fastfood />
                  ) : (
                    text === "Room" && <Bed />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text === "Home" ? text : `Add ${text}`}
                  style={{
                    color: "black",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {["users", "payment", "Spam", "contact"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton id={text === "payment" ? 'orderDetails' : text === "Spam" && "spamDetails"} onClick={() => navigate(`/${text}`)}>
                <ListItemIcon
                  style={{
                    color: "black",
                  }}
                >
                  {text === "payment" ? (
                    <ListAlt />
                  ) : text === "users" ? (
                    <Group />
                  ) : text === "Spam" ? (
                    <Report />
                  ) : (
                    text === "contact" && <Message />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={
                    text === "payment"
                      ? "Order Details"
                      : text === "users"
                        ? "User Details"
                        : text === "contact"
                          ? "User Queries"
                          : `${text}`
                  }
                  style={{
                    color: "black",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Drawered;
