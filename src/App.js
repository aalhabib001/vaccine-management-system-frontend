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
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import VaccineCardDownload from "./components/VaccineCardDownload/VaccineCardDownload";
import CertificateDownload from "./components/CertificateDownload/CertificateDownload";
import {createContext, useState} from "react";

export const AlertContext = createContext({
    isOpen: false,
    msg: "This is a massage",
    type: 'success'
});

function App() {

    const [alertData, setAlertData] = useState({
        isOpen: false,
        msg: "This is a massage",
        type: 'success'
    });

    return (
        <AlertContext.Provider value={[alertData, setAlertData]}>
            <Router>
                <div>
                    <Header/>

                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/vaccine-card/download">
                            <VaccineCardDownload/>
                        </Route>
                        <Route path="/vaccine-card">
                            <VaccineCard/>
                        </Route>
                        <Route path="/enroll">
                            <Enroll/>
                        </Route>
                        <Route path="/certificate/download">
                            <CertificateDownload/>
                        </Route>
                        <Route path="/certificate">
                            <Certificate/>
                        </Route>
                        {/*<Route path="/certificate/download">*/}
                        {/*    <Certificate/>*/}
                        {/*</Route>*/}
                        <Route path="/status">
                            <VaccineStatus/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/admin">
                            <AdminDashboard/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </AlertContext.Provider>
    );
}

export default App;
