import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { getTest } from '../reducers';

import Button from '../presentation/Button';

const Test = ({ test, toggleTest }) => {
  console.log('test', test);
  return (
    <div>
      <div>{ `${test}` }</div>
      <Button type="button" onClick={toggleTest}>toggle</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  test: getTest(state),
});

export default connect(mapStateToProps, actions)(Test);
