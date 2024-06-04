import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import "../src/components/css/footer.css"
import TravelDate from "./components/js/TravelDate";
import TravelDetails from "./components/js/TravelDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/js/Login";
import SignUp from "./components/js/SignUp";
import Footer from './components/js/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="container">
                    <div className="col">
                        <h1>YOUR PLANNER</h1>
                        <h4>유플과 시작하는 여행 !</h4>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="auth-links">
                                <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
                            </div>
                        </div>

                    </div>
                </header>

                <section className="container">
                    <div className="row">
                        <div className="col">
                            <Routes>
                                <Route path="/" element={<TravelDate/>}/>
                                <Route path="/details" element={<TravelDetails/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/signup" element={<SignUp/>}/>
                            </Routes>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
