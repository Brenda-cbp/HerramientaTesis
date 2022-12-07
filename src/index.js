import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Circle from "./Components/commons/circle/Circle"
import GeneralData from './Components/generalData/GeneralData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import GeneralCleanData from './Components/generalData/GeneralCleanData';
import NumberOfGroups from './Components/numberOfGroups/NumberOfGroups';
import Graphs from './Components/Graphs/Graphs';
import InteractiveGraph from './Components/InteractiveGraph/InteractiveGraph';
// import Ldavis from './Components/InteractiveGraph/Ldavis';

ReactDOM.render(
  <React.StrictMode>
    {/* <Ldavis /> */}
    <GeneralData/>
    <GeneralCleanData/>
    <NumberOfGroups/>
    <Graphs value={0.58}/>
    <InteractiveGraph/>
  </React.StrictMode>,
 document.getElementById('root') 
);
