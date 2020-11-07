import React from "react";
import { Menu, MenuItem, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          id="header"
          name="my portfolio"
          as={Link}
          to={{ pathname: "/" }}
        />
        <MenuItem
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: "/about" }}
          />
        <MenuItem
          id="projects-tab"
          name="my project"
          as={NavLink}
          to={{ pathname: "/projects" }}
        />
        <MenuItem
          id="resume-tab"
          name="my resume"
          as={NavLink}
          to={{ pathname: "/resume" }}
        />
      </Menu>
    </Segment>
  );
};

export default Header;