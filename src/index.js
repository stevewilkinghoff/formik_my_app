import React from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

import App1 from './App1';
import DailyCare from './DailyCareChecklist/DailyCareCheckList';
import MorningCareList from './MorningList';
import App2 from './App2';


ReactDOM.render(<MorningCareList/>, document.getElementById('root'));
