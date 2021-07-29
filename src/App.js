import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Enroll from "./components/Enroll/Enroll";
import VaccineCard from "./components/VaccineCard/VaccineCard";

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
                    <Route path="/">
                        {/*<Home/>*/}
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
