import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLanguages,
  toFavorite,
  useLanguages,
} from '../../../state-manager/redux/slices/sliceLanguages';
import './ReduxPlayground.css';
import { addTemplate, useTemplate } from '../../../state-manager/redux/slices/sliceTemplate';
// import globalString from '../../constants/strings';
// import s from './constants/strings';

function ReduxPlayground() {
  const goTo = useNavigate();

  const languages = useSelector(useLanguages);

  const [newLanguage, setNewLanguage] = useState('');

  const dispatch = useDispatch();

  const templateState = useSelector(useTemplate);
  console.log(templateState);
  console.log('ReduxPlayground re-rendered!');

  return (
    <div className="redux-playground-container">
      This is a ReduxPlayground Component
      <div>
        <ul>
          {languages.map((language) => (
            <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
              <span style={{ color: language.favorite ? 'green' : 'white' }}>{language.name}</span>
              <button type="button" onClick={() => dispatch(toFavorite(language.name))}>
                {language.favorite ? 'Desfavoritar' : 'Favoritar'}
              </button>
            </div>
          ))}
        </ul>
        <div>
          <input type="text" value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} />
          <button type="button" onClick={() => dispatch(addLanguages(newLanguage))}>
            Adicionar nova linguagem
          </button>
          <button type="button" onClick={() => dispatch(addTemplate('Template'))}>
            Adicionar ao template
          </button>
        </div>
      </div>
      <button type="button" onClick={() => goTo('/')}>
        Go to home...
      </button>
      <button type="button" onClick={() => goTo('/about')}>
        Go to about...
      </button>
      <button type="button" onClick={() => goTo('/redux-sibling')}>
        Go to redux-sibling...
      </button>
    </div>
  );
}

export default ReduxPlayground;
