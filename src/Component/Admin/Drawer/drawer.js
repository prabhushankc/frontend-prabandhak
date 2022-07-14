import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Button,
  Avatar,
} from "@mui/material";
import { Mail } from "@material-ui/icons";
import { DashboardCustomize, Layers, CreditScore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Drawered = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
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
          backgroundColor: "rgb(32 ,51 ,85)",
        }}
      >
        <List>
          {["Home", "food", "Room"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton onClick={() => navigate(`/${text}`)}>
                <ListItemIcon
                  style={{
                    color: "white",
                  }}
                >
                  {index % 4 === 0 ? <DashboardCustomize /> : <Layers />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ backgroundColor: "white" }} />
        <List>
          {["payment", "users", "spam", "contact"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton onClick={() => navigate(`/${text}`)}>
                <ListItemIcon
                  style={{
                    color: "white",
                  }}
                >
                  {index % 3 === 0 ? <CreditScore /> : <Mail />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ backgroundColor: "white" }} />
        <Paper
          style={{
            textAlign: "center",
            margin: "20px auto 10px auto",
            backgroundColor: "transparent",
            padding: "10px 0px",
          }}
          elevation={15}
        >
          <Avatar
            alt="Remy Sharp"
            src={user?.result?.selectedFile}
            style={{
              display: "block",
              margin: "10px auto",
            }}
          />
          <Button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "#3f51b5",
              borderRadius: "4px",
              border: "1px solid transparent",
            }}
            onClick={() => navigate("/profile")}
          >
            {user?.message}
          </Button>
        </Paper>
        <Divider style={{ backgroundColor: "white" }} />
      </Paper>
    </div>
  );
};

export default Drawered;
