import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col} from 'react-bootstrap';

export default class TagList extends Component {

  render() {
    return (
      <div>
        <FormGroup>
            <FormControl type="text" placeholder="Filter" onChange={(event) => this.props.onFilterChange(event)} value={this.props.filter ? this.props.filter : ""}/>
        </FormGroup>
        <div style={{marginBottom: '0.8em'}}>
          {!this.props.loaded ? "loading..." : ""}
        </div>
        <ul className="list-group">

            {this.props.error && this.props.error}
            {this.props.list.map((tag, index) => (
              this.props.tag === tag ?
                <Button bsClass="list-group-item active" key={index} onClick={() => this.props.onClick(tag)}>{tag}</Button>
                :
                <Button bsClass="list-group-item" key={index} onClick={() => this.props.onClick(tag)}>{tag}</Button>
            ))}

        </ul>
      </div>
    );
  }
}
