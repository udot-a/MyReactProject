import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/login";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledError = (promiseRejectionEvent) =>{
        console.error("DronError:", promiseRejectionEvent);
    }

    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
        this.props.initializeApp()
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={() => <Redirect to={"/profile"}/>}
                        />

                        <Route
                            path='/dialogs'
                            render={withSuspense(DialogsContainer)}
                        />

                        <Route
                            path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)}
                        />

                        <Route
                            path='/news'
                            component={News}
                        />

                        <Route
                            path='/users'
                            render={() => <UsersContainer/>}
                        />

                        <Route
                            path='/login'
                            render={() => <Login/>}
                        />

                        <Route
                            render={() => (<h1>PAGE NOT FOUND!!!</h1>)}
                        />
                    </Switch>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.init.initialized
})

let AppContainer =  compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter >
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>

    )
};

export default SamuraiJSApp;