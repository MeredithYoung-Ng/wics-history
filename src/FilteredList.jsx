import React, {Component} from "react";
import {ButtonToolbar, DropdownButton, Dropdown} from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
      super(props);
      //The state is just a list of key/value pairs (like a hashmap)
      this.state = {
        field: "All",
        fieldButton: "Field",
        country: "All",
        countryButton: "Country",
        sortDOB: false
      };
    }

    /*
     * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
     * changes that should occur when a new filter type is selected.
     */
    onSelectFilterField = event => {
      this.setState({field: event});
      if (event === "All") {
        this.setState({fieldButton: "Field (All)"})
      } else {
        this.setState({fieldButton: event});
      }
    };

    /*
     * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
     * changes that should occur when a new filter type is selected.
     */
    onSelectFilterCountry = event => {
      this.setState({country: event});
      if (event === "All") {
        this.setState({countryButton: "Country (All)"})
      } else {
        this.setState({countryButton: event});
      }
    };

    /*
     * This function should determine whether the item being passed in matches the type
     * that we are filtering on. Remember that the selected type we are filtering on is stored
     * in this.state!
     * Input: An element from your List component
     * Output: true or false
     */
    matchesFilterType = item => {
      /* Cases:
       *  - field: all, country: all
       *  - field: all, country: selected
       *  - field: selected, country: all
       *  - field: selected, country: selected */
      if (((this.state.field === "All") && (this.state.country === "All")) ||
      ((this.state.field === "All") && (this.state.country === item.country)) ||
      ((this.state.field === item.field) && (this.state.country === "All")) ||
      ((this.state.field === item.field) && (this.state.country === item.country))) {
        return true;
      } else {
        return false;
      }
    }

    /* onChange */
    onChangeSortDOB = event => {
      this.setState({sortDOB: event.target.checked});
    }

    /* Sort by earliest date of birth */
    sortDOB = (a, b) => {
      if (this.state.sortDOB) {
        // Sort by date of birth
        if (a.year < b.year) {
          return -1;
        } else if (a.year > b.year) {
          return 1;
        } else {
          return 0;
        }
      } else {
        // Sort alphabetically
        return a.name.localeCompare(b.name);
      }
    }

    render() {
      return (
        <div>
          <ButtonToolbar className="button-toolbar">
            <DropdownButton title={this.state.fieldButton} className="dropdown" id="dropdown-button">
              <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterField}>
                All
              </Dropdown.Item>
              <Dropdown.Item eventKey="AI" onSelect={this.onSelectFilterField}>
                AI
              </Dropdown.Item>
              <Dropdown.Item eventKey="Compilers" onSelect={this.onSelectFilterField}>
                Compilers
              </Dropdown.Item>
              <Dropdown.Item eventKey="Comp. Art" onSelect={this.onSelectFilterField}>
                Comp. Art
              </Dropdown.Item>
              <Dropdown.Item eventKey="Networking" onSelect={this.onSelectFilterField}>
                Networking
              </Dropdown.Item>
              <Dropdown.Item eventKey="Programming" onSelect={this.onSelectFilterField}>
                Programming
              </Dropdown.Item>
              <Dropdown.Item eventKey="Systems" onSelect={this.onSelectFilterField}>
                Systems
              </Dropdown.Item>
              <Dropdown.Item eventKey="Theory" onSelect={this.onSelectFilterField}>
                Theory
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton title={this.state.countryButton} className="dropdown-button" id="dropdown-button">
              <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterCountry}>
                All
              </Dropdown.Item>
              <Dropdown.Item eventKey="China" onSelect={this.onSelectFilterCountry}>
                China
              </Dropdown.Item>
              <Dropdown.Item eventKey="England" onSelect={this.onSelectFilterCountry}>
                England
              </Dropdown.Item>
              <Dropdown.Item eventKey="France" onSelect={this.onSelectFilterCountry}>
                France
              </Dropdown.Item>
              <Dropdown.Item eventKey="Hungary" onSelect={this.onSelectFilterCountry}>
                Hungary
              </Dropdown.Item>
              <Dropdown.Item eventKey="India" onSelect={this.onSelectFilterCountry}>
                India
              </Dropdown.Item>
              <Dropdown.Item eventKey="Japan" onSelect={this.onSelectFilterCountry}>
                Japan
              </Dropdown.Item>
              <Dropdown.Item eventKey="USA" onSelect={this.onSelectFilterCountry}>
                USA
              </Dropdown.Item>
            </DropdownButton>
            <div className="checkbox">
              <form>
                <label className="checkbox-dob">
                  Sort By:
                  <input type="checkbox" onChange={this.onChangeSortDOB} />
                  Date of Birth
                </label>
              </form>
            </div>
          </ButtonToolbar>
          <List items={this.props.items.filter(this.matchesFilterType).sort(this.sortDOB)} />
        </div>
      );
    }
  }

export default FilteredList;
