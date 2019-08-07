import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import NotesList from "./components/NoteList";
import CreateEditNote from "./components/CreateEditNote";
import SingleNote from "./components/SingleNote";
import DeleteNote from "./components/DeleteNote";

const App = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={NotesList}/>
                <Route path='/create' component={CreateEditNote}/>
                <Route path='/note/:id' component={SingleNote}/>
                <Route path='/edit/:id' component={CreateEditNote}/>
                <Route path='/delete/:id' component={DeleteNote}/>
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(<App/>, document.getElementById('app'));
