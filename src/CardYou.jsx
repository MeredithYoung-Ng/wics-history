import React, {Component} from "react";
import {Badge, Button, Card, Form} from "react-bootstrap";
import ada_lovelace from "./imgs/ada_lovelace.jpg";

class CardYou extends Component {
  constructor(props) {
      super(props);
      //The state is just a list of key/value pairs (like a hashmap)
      this.state = {
        name: this.props.person.name,
        field: this.props.person.field,
        country: this.props.person.country,
        year: this.props.person.year
      };
    }

  onSubmitForm = event => {
    event.preventDefault();

    // Update "You" card with text in fields
    this.setState({
      name: this.formName.value,
      year: this.formYear.value,
      field: this.formField.value,
      country: this.formCountry.value
    });
  };

  render() {
    return (
      <div>
        <Form inline className="form" onSubmit={this.onSubmitForm}>
          <Form.Group className="formEntry">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={(input) => this.formName = input} type="input" placeholder="You" />
          </Form.Group>
          {/* TODO: make auto select of countries, years */}
          <Form.Group className="formEntry">
            <Form.Label>Birth Year</Form.Label>
            <Form.Control ref={(input) => this.formYear = input} type="input" placeholder="20XX" />
          </Form.Group>
          <Form.Group className="formEntry">
            <Form.Label>Field</Form.Label>
            <Form.Control ref={(input) => this.formField = input} type="input" placeholder="Field" />
          </Form.Group>
          {/* TODO: make auto select of countries, years */}
          <Form.Group className="formEntry">
            <Form.Label>Country</Form.Label>
            <Form.Control ref={(input) => this.formCountry = input} type="input" placeholder="Country" />
          </Form.Group>
          <Button type="submit">
            Join Us
          </Button>
        </Form>
        <div className="card-you">
          <Card className="card-wics" style={{ width: '18rem' }}>
            {/* TODO: find generic picture*/}
            <Card.Img variant="top" src={ada_lovelace} />
            <Card.Body>
              <Card.Title className="card-wics-title">{this.state.name}</Card.Title>
              <Card.Text>{this.state.year}-</Card.Text>
              <div>
                <Badge className="card-wics-badge" id="badge-left">
                  {this.state.field}
                </Badge>
                <Badge className="card-wics-badge">{this.state.country}</Badge>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default CardYou;
