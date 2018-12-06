import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfileForm from "./forms/profile-form";
import Students from "./students/students";

const Home = () => { 
    return ( 
    <Router>
        <div>
            <h1> Hey username! </h1>
            <hr/>
            <Link  to="/edit-tutor-info">Edit personal info</Link> |
            <Link  to="/edit-class-settings"> Class settings</Link> |
            <Link  to="/students"> Students </Link>
            <hr/>
            <Route exact path="/edit-tutor-info" component={ProfileForm} />
            <Route  path="/edit-class-settings" component={ProfileForm} />
            <Route  path="/students" component={Students} />
        </div>
    </Router>
); }

export default Home;