import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            {/* <!-- Start Header/Navigation --> */}
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <Link className="navbar-brand" to="/">Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item"> <Link className="nav-link" to="/">Home				</Link>	</li>
                            <li className="nav-item "> <Link className="nav-link" to="Shop">Shop			</Link>	</li>
                            <li className="nav-item "> <Link className="nav-link" to="About">About		</Link>	</li>
                            <li className="nav-item "> <Link className="nav-link" to="Services">Services	</Link>	</li>
                            <li className="nav-item "> <Link className="nav-link" to="Blog">Blog			</Link>	</li>
                            <li className="nav-item "> <Link className="nav-link" to="Contact">Contact us	</Link>	</li>

                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a className="nav-link" href="#"><img src="Assets/images/user.svg" /></a></li>
                            <li><Link className="nav-link" to="Cart"><img src="Assets/images/cart.svg" /></Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* <!-- End Header/Navigation --> */}
        </div>
    )
}
