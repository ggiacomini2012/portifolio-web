import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ReduxSibling.css';
import { useTemplate } from '../../../state-manager/redux/slices/sliceTemplate';
// import globalString from '../../constants/strings';
// import s from './constants/strings';

function ReduxSibling() {
  const goTo = useNavigate();

  const templateState = useSelector(useTemplate);
  console.log(templateState);
  console.log('ReduxSibling re-rendered!');

  return (
    <div className="redux-sibling-container">
      This is a ReduxPlayground Component
      <div>
        {templateState.map((templateElement) => (
          <div>{templateElement.id}</div>
        ))}
      </div>
      <button type="button" onClick={() => goTo('/')}>
        Go to home...
      </button>
      <button type="button" onClick={() => goTo('/about')}>
        Go to about...
      </button>
      <button type="button" onClick={() => goTo('/redux-playground')}>
        Go to redux playground...
      </button>
    </div>
  );
}

export default ReduxSibling;
