import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const EOLayout = React.lazy(() => import('./containers/EOLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

const Login = React.lazy(() => import('./views/Pages/EOLogin/EOLogin'));

class App extends Component {

  render() {
    return (
      // <HashRouter>
      //     <React.Suspense fallback={loading()}>
      //       <Switch>
      //         <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
      //         <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
      //         <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
      //         <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
      //         <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
      //       </Switch>
      //     </React.Suspense>
      // </HashRouter>
      
      // Cài đặt router đến component đã import:
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route path="/help" name="Home" render={props => <DefaultLayout {...props} />} />
            <Route path="/" name="EO-Home" render={props => <EOLayout {...props} />} />         
          </Switch>
        </React.Suspense>
      </BrowserRouter>
      
    );
  }
}

export default App;
