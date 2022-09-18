import logo from './logo.svg';
import './App.scss';
import MyComponent from "./Example/MyComponent";
import Practices from "./practices/practices";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist'
import Nav from "./Nav/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Home from "./Home/Home";
import Users from "./Users/Users";
import UserDetail from "./Users/UserDetail";
import ShowLoading from "./showLoading/ShowLoading";
import Login from "./Login/Login";

/*
*class component, function component (function default, arrow function)
 */
function App() {
    // return JSX
    return (
        <Router>
            <div className="App">
                <Nav/>
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<div style={{'padding-bottom': '20px'}}>Hello everyone! I am Thanh Duong, im a developer frontend!</div>*/}
                    <Switch>
                        <Route exact path='/login' >
                            <Login/>
                        </Route>
                        <Route exact path='/' >
                            <Home/>
                        </Route>
                        <Route exact path='/practices' >
                            <Practices/>
                        </Route>
                        <Route exact path='/myComponent' >
                            <MyComponent/>
                        </Route>
                        <Route exact path='/user' >
                            <Users/>
                        </Route>
                        <Route exact path='/user/:id' >
                            <UserDetail/>
                        </Route>
                        <Route exact path='/myLoading'>
                            <ShowLoading />
                        </Route>
                    </Switch>
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer/>
            </div>

        </Router>
    );
}

export default App;
