import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer   />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersContainer />}/>

                </div>
            </div>
    )
};


export default App;