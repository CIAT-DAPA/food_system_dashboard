import React from 'react';

import './Nav.css';
function Nav() {
    return (
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-3">
                        {/*<a className="link-secondary" href="#">Subscribe</a>*/}
                    </div>
                    <div className="col-6 text-center">
                        {/* <a className="blog-header-logo text-dark" href="#/">Sistema alimentario de Cali</a> */}
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        {/*
                        <a className="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        */}
                    </div>
                </div>
            </header>

            {/* <div className="nav-scroller py-1 mb-2"> 
                <nav className="nav d-flex justify-content-between">*/}
            <div className="text-center">
            <nav className="nav d-flex text-center">
                    <a className="p-2 link-secondary" href="#/">Home</a>
                    <a className="p-2 link-secondary" href="#/determinantes">Determinantes</a>
                    <a className="p-2 link-secondary" href="#/suministro_alimentos">Suministro de alimentos</a>
                </nav>
            </div>
        </div>
    );
}

export default Nav;