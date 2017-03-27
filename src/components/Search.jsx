import React from 'react';
import { browserHistory as history } from 'react-router';


class Search extends React.Component {
  constructor(props) {
    super(props);

        // Why do we need to do this?? Make sure you understand!!!
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    history.push(`/user/${this.refs.userInput.value}`);
  }

  render() {
    return (
      <header className="container text-center">
        <h2 className="modal-title">Search for GitHub username</h2>
        <div className="col">
          <form onSubmit={this._handleSubmit}>
            <input ref="userInput" className="" type="text" />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
      </header>
    );
  }
}

export default Search;
