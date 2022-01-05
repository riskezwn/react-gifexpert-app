import React from 'react';
import ReactDOM from 'react-dom';

import GifExpertApp from './GifExpertApp';

import './index.css';

const defaultCategories = ['Rick and Morty'];

ReactDOM.render(
    <GifExpertApp defaultCategories={defaultCategories}/>,
  document.getElementById('root')
);
