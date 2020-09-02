import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="ui ">
        <form
          className="ui form"
          style={{ padding: "20px" }}
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ borderRadius: "30px" }}
              placeholder="Serach Image here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
