import logo from './logo.svg';
import './App.scss';
import MyComponent from "./Example/MyComponent";
import Practices from "./practices/practices";
import 'react-toastify/dist'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./Home/Home";
import Users from "./Users/Users";
import UserDetail from "./Users/UserDetail";
import ShowLoading from "./showLoading/ShowLoading";
import Login from "../components/Login/Login";

/*
*class component, function component (function default, arrow function)
 */
function App() {
    // return JSX
    return (
        <Router>
            <div className="App">
                {/*<Nav/>*/}
                <header className="App-header" style={{backgroundImage: `url(./img/login_image_background.png)`}}>
                    <Login />
                {/*    <Routes>*/}
                {/*        <Route exact path='/' element={<Home/>} />*/}
                {/*        <Route exact path='/practices' element={<Practices/>} />*/}
                {/*        <Route exact path='/myComponent' element={ <MyComponent/>} />*/}
                {/*        <Route exact path='/user' element={<Users/>} />*/}
                {/*        <Route exact path='/user/:id' element={<UserDetail/>} />*/}
                {/*        <Route exact path='/myLoading' element={<ShowLoading />} />*/}
                {/*    </Routes>*/}
                </header>
            </div>

        </Router>
    );
}

export default App;
