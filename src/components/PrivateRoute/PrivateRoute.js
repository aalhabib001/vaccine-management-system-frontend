import {LoginContext, UserContext} from "../../App";
import {useContext, useEffect} from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    console.log(children, rest)
    return (
        <Route
            {...rest}
            render={({location}) =>
                loggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
