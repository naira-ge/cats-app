import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './styles.module.scss';

import Sidebar from './components/Sidebar/index';
import Main from './components/Main/index';


function App() {
  return (
      <Router>
      <div className={styles.appContainer}>
        <Sidebar />
          <Switch>
              <Route exact path={"/category/:id"} component={Main}/>
              <Route exact path={"/"} component={Main}/>
          </Switch>
       </div>
      </Router>
  );
}

export default App;
