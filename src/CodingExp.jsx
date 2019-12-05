import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
// import Resources from "./Resources";

class CodingExp extends Component {
  constructor(props) {
    super(props);
    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
        checkedRadio: 0,
        resourceOption: 0
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
    if (this.state.resourceOption === 0) {
      return;
    } else if (this.state.resourceOption === 1) {
      // Beginners
      return <p>CODEACADEMY</p>;
    } else if (this.state.resourceOption === 2) {
      // Intermediate
      return <p>COURSERA fundamentals</p>;
    } else if (this.state.resourceOption === 3) {
      // Advanced
      return <p>ADVANCED COURSERA</p>;
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
