import React, {Component} from 'react';
import {Badge, Card} from 'react-bootstrap';
import ada_lovelace from './imgs/ada_lovelace.jpg';
import anita_borg from './imgs/anita_borg.jpg';
import christine_paulin_mohring from './imgs/christine_paulin_mohring.jpg';
import dorothy_vaughan from './imgs/dorothy_vaughan.jpg';
import eva_tardos from './imgs/eva_tardos.jpg';
import grace_hopper from './imgs/grace_hopper.jpg';
import hu_qiheng from './imgs/hu_qiheng.jpg';
import kathleen_booth from './imgs/kathleen_booth.jpg';
import noriko_arai from './imgs/noriko_arai.jpg';
import priti_shankar from './imgs/priti_shankar.jpg';
import rozsa_peter from './imgs/rozsa_peter.jpg';
import vera_molnar from './imgs/vera_molnar.jpg';

const imgs = [
  ada_lovelace, anita_borg, christine_paulin_mohring, dorothy_vaughan,
  eva_tardos, grace_hopper, hu_qiheng, kathleen_booth, noriko_arai,
  priti_shankar, rozsa_peter, vera_molnar
];

class List extends Component {
  renderList() {
    if (this.props.items.length === 0) {
      return <li key="default">No people match your search.</li>
    }

    const items = this.props.items.map(item => {
      return <li key={item.name}>
        <div className="card-list">
          <Card className="card-wics" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgs[item.imgIndex]} />
            <Card.Body>
              <Card.Title className="card-wics-title">{item.name}</Card.Title>
              <Card.Text>{item.year}-{item.death}</Card.Text>
              <div>
                <Badge className="card-wics-badge" id="badge-left">
                  {item.field}
                </Badge>
                <Badge className="card-wics-badge">{item.country}</Badge>
              </div>
            </Card.Body>
          </Card>
        </div>
      </li>
    });

    return items;
  }

  render() {
    return (
      <ul>{this.renderList()}</ul>
    );
  }
}

export default List;
