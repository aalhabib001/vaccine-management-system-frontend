import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Enroll from "./components/Enroll/Enroll";
import VaccineCard from "./components/VaccineCard/VaccineCard";
import Certificate from "./components/Certificate/Certificate";
import VaccineStatus from "./components/VaccineStatus/VaccineStatus";
import Login from "./components/Login/Login";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/enroll">
                        <Enroll/>
                    </Route>
                    <Route path="/vaccine-card">
                        <VaccineCard/>
                    </Route>
                    <Route path="/certificate">
                        <Certificate/>
                    </Route>
                    <Route path="/status">
                        <VaccineStatus/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
