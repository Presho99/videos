import React from "react";

class Searchbar extends React.Component {
    state = {term: ""}

    onInputChange =(e) => {
        this.setState({term : e.target.value})
    }

    onFormSubmit = (e) => {
       e.preventDefault() 
       this.props.onSubmitting(this.state.term)

    // Call callback from parent component
    }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
              <label>Video Search</label>
              <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
