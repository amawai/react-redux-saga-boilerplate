import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { incCounter } from "../actions/counterActions";

const counterStep = 1;

const CounterButton = props => {
  const { counter, increment, decrement } = props;
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={decrement}>
        - DECREASE -
      </button>
      <button type="button" onClick={increment}>
        + INCREASE +
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incCounter(counterStep));
    },
    decrement: () => {
      dispatch(incCounter(-counterStep));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButton);

CounterButton.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};