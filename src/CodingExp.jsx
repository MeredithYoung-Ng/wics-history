import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
// import Resources from "./Resources";

class CodingExp extends Component {
  constructor(props) {
    super(props);
    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
        checkedRadio: 0,
        resourceOption: null
    };
  }

  updateRadio = event => {
    this.setState({checkedRadio: event.target.value});
  }

  onSubmitForm = event => {
    event.preventDefault();

    this.setState({
      resourceOption: parseInt(this.state.checkedRadio)
    });
  };

  renderRadios() {
    const radios = this.props.choices.map(option => {
      return (
        <div key={option.id}>
          <Form.Label>
            <Form.Check inline type="radio" name="radioLearn"
            value={option.id} onChange={this.updateRadio} />
            {option.option}
          </Form.Label>
        </div>
      );
    });

    return radios;
  }

  renderOption() {
    if (this.state.resourceOption === null) {
      return;
    } else if (this.state.resourceOption === 0) {
      return (
        <p>Select an option above!</p>
      );
    } else if (this.state.resourceOption === 1) {
      // Beginners
      return (
        <div className="learn-option">
          <h4>Programming</h4>
          <p>
            <a href="https://code.org/learn">Hour of Code</a>: Start learning a
            programming mindset through tutorials and games in a hour!
          </p>
          <p>
            <a href="https://www.codecademy.com/catalog/subject/all">
            Codeacademy</a>: Start learning how to code through quick & easy
            tutorials!
          </p>
          <h4>Web Design</h4>
          <p>
            <a href="http://flexboxfroggy.com/">Flexbox Froggy</a>: Learn
            responsive web design with CSS and Flexbox!
          </p>
          <p>
            <a href="https://cssgridgarden.com/">Grid Garden</a>: Learn
            responsive web design with CSS and Grid!
          </p>
        </div>
      );
    } else if (this.state.resourceOption === 2) {
      // Intermediate
      return (
        <div className="learn-option">
          <h4>Programming</h4>
          <p>
            <a href="https://www.coursera.org/specializations/python">
            Coursera: Python for Everybody</a>: Learn how to code with Python!
            This set of courses covers the fundamental data structures to start
            building more complex programs.
          </p>
          <p>
            <a href="https://www.khanacademy.org/computing/computer-science">
            Khan Academy</a>: Instructional video tutorials to help you start
            developing a strong computer science mindset
          </p>
          <p>
            <a href="https://www.coursera.org/specializations/java-object-oriented">
            Coursera: Object-Oriented Programming</a>: A course designed to
            improve your software engineering skills. Covers basic data
            structures and algorithms that will help you build larger projects.
          </p>
          <h4>Web Design</h4>
          <p>
            <a href="http://flexboxfroggy.com/">Flexbox Froggy</a>: Learn
            responsive web design with CSS and Flexbox!
          </p>
          <p>
            <a href="https://cssgridgarden.com/">Grid Garden</a>: Learn
            responsive web design with CSS and Grid!
          </p>
        </div>
      );
    } else if (this.state.resourceOption === 3) {
      // Advanced
      return (
        <div className="learn-option">
          <h4>Artificial Intelligence & Machine Learning</h4>
          <p>
            <a href="https://www.coursera.org/learn/machine-learning">
            Coursera: Machine Learning</a>: Learn the fundamentals of machine
            learning! A popular course taught by the famous computer scientist
            Andrew Ng.
          </p>
          <p>
            <a href="https://www.edx.org/course/introduction-to-artificial-intelligence-ai-2">
            edX: Introduction to AI</a>: Learn more about different fields
            within the realm of artificial intelligence, and the impact they
            have on technology today!
          </p>
          <h4>Computer Graphics</h4>
          <p>
            <a href="">edX: Computer Graphics</a>:
            Learn more about how images are rendered on computer screens in this
            introductory course to computer graphics! Covers topics from
            raytracing to OpenGL.
          </p>
          <h4>Human-Computer Interaction</h4>
          <p>
            <a href="https://www.coursera.org/learn/user-research">
            Coursera: Interaction Design</a>:
            Learn more about different topics in interaction design! Courses
            cover everything from design principles to user experience research
            and prototyping.
          </p>
          <h4>Web Design</h4>
          <p>
            <a href="http://flexboxfroggy.com/">Flexbox Froggy</a>: Learn
            responsive web design with CSS and Flexbox!
          </p>
          <p>
            <a href="https://cssgridgarden.com/">Grid Garden</a>: Learn
            responsive web design with CSS and Grid!
          </p>
        </div>
      );
    } else {
      return <p>Wow! You're already a pro!</p>;
    }
  }

  render() {
    return (
      <div>
        <Form className="form" onSubmit={this.onSubmitForm}>
          <Form.Label>How much coding experience do you have?</Form.Label>
          {this.renderRadios()}
          <Button type="submit">Let's Get Started!</Button>
        </Form>
        {this.renderOption()}
      </div>
    );
  }
}

export default CodingExp;
