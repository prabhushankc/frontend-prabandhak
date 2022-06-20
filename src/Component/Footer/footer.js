import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px 10px",
          margin: "10px 0px",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        Prabandak Hotel Management
      </h1>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Column>
            <Heading style={{ cursor: "pointer", letterSpacing: "2px" }}>
              Pages
            </Heading>
            <FooterLink href="http://localhost:3000/food">Food</FooterLink>
            <FooterLink href="http://localhost:3000/room">Room</FooterLink>
            <FooterLink href="http://localhost:3000/auth">Auth</FooterLink>
          </Column>
          <Column>
            <Heading style={{ cursor: "pointer", letterSpacing: "2px" }}>
              Contact Us
            </Heading>
            <FooterLink href="/" target="_blank">
              Email
            </FooterLink>
            <FooterLink href="tel:+9845716181" target="_blank">
              Phone
            </FooterLink>
            <FooterLink href="/" target="_blank">
              Google Map
            </FooterLink>
          </Column>
          <Column>
            <Heading style={{ cursor: "pointer", letterSpacing: "2px" }}>
              Social Media
            </Heading>
            <FooterLink href="/" target="_blank">
              <FacebookIcon />
            </FooterLink>
            <FooterLink href="/" target="_blank">
              <InstagramIcon />
            </FooterLink>
            <FooterLink href="/" target="_blank">
              <WhatsAppIcon />
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
