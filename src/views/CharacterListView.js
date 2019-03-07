import React from "react";
import { connect } from "react-redux";
import { getChars } from "../actions";
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    if (this.props.isLoading) {
      return <h1>LOADING</h1>;
    }
    if (this.props.error) {
      return <h1>ERROR LOADING PAGE</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    isLoading: state.charsReducer.isLoading,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
