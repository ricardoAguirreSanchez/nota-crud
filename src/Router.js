import React from 'react';
import { Route, Switch} from 'react-router-dom'
import App from './App'

//componentes
import Page404 from './Componentes/Page404.js';
import Home from './Componentes/Home.js';

// todo el switch va a devolver un hijo para <App>
const AppRouter = () =>
    <App>
        <Switch>
            <Route exact path="/page404" component={Page404}/>
            <Route exact path="/" component={Home}/>
            <Route component={Page404}/>

        </Switch>
    </App>

export default AppRouter;