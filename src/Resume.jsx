import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import EducationCard from './EducationCard';
//import WorkCard from './WorkCard';

class Education extends Component {
  state = {
    education: [],
  };

  componentDidMount() {
    axios({url:"../data/education.json", method: "get", headers: { 'Content-Type': 'application/json' }}).then((response) => {
      this.setState({ education: response.data });
    });
  }

  render() {
    const { education } = this.state;

    let educationList = education.map((education) => {
      return (
        <div id={`education-${education.id}`} key={education.id}>
          <EducationCard education={education} />
        </div>
      );
    });

    return (
        <Container>
          <h1 id="resume-header">My resume</h1>
          <Grid>{educationList}</Grid>
        </Container>
      );
    }
  }  

export default Education;