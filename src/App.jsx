import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const App = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#home">My Portfolio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section id="home" className="bg-light text-dark py-5 text-center">
                <div className="container">
                    <h1 className="display-4">Welcome to My Portfolio</h1>
                    <p className="lead">Showcasing my journey as a Fullstack Developer</p>
                </div>
            </section>

            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">About Me</h2>
                    <p className="text-center">I am a passionate Fullstack Developer skilled in creating responsive and interactive web applications. I have hands-on experience with various technologies including HTML, CSS, JavaScript, and backend frameworks.</p>
                </div>
            </section>

            <section id="projects" className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Projects</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Project 1</h5>
                                    <p className="card-text">A brief description of the project.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Project 2</h5>
                                    <p className="card-text">A brief description of the project.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Project 3</h5>
                                    <p className="card-text">A brief description of the project.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Me</h2>
                    <form >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send</button>
                    </form>
                </div>
            </section>

            <footer className="bg-dark text-white py-3">
                <div className="container text-center">
                    <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
