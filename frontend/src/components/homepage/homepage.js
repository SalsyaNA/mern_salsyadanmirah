import React from "react"
import "./homepage.css"


import logo from "./icons/Logo.png"
import Group33092 from "./images/Group 33092.png"
import image5 from "./images/image 5.png"
import daco from "./images/Daco_1703273 1.png"
import pngegg from "./images/pngegg 1.png"
import maskGroup from "./images/Mask Group.png"
import rectangle38 from "./images/Rectangle 38.png"
import rectangle39 from "./images/Rectangle 39.png"
import image12 from "./icons/image 12.png"
import image13 from "./icons/image 13.png"
import image14 from "./icons/image 14.png"
import XMLID from "./icons/XMLID 1.png"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <header>
                {/* Top Navigation Starts */}
                <nav className="container navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item pe-5">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                        <li className="nav-item pe-5">
                            <a className="nav-link" href="#">
                            Products
                            </a>
                        </li>
                        <li className="nav-item pe-5">
                            <a className="nav-link" href="#">
                            About Us
                            </a>
                        </li>
                        <li className="nav-item pe-5">
                            <a className="nav-link" href="#">
                            Contacts
                            </a>
                        </li>
                        <li className="nav-item pe-5">
                            <a className="nav-link logout" onClick={() => setLoginUser({})}>
                            <b>Log Out</b>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {/* Top Navigation Ends */}
                {/* First Atrraction Starts */}
                <div className="container pb-5 mb-5">
                    <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center justify-content-between">
                    <img className="order-2 order-md-1" src={Group33092} alt="" />
                    <div className="order-1 order-md-2 col-md-5">
                        <h1>
                        <span className="nike">NIKE REACT</span>
                        <br />
                        <span className="infinity">INFINITY RUN 2</span>
                        </h1>
                        <p className="w-75">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        </p>
                        <button type="button" className="btn rounded-3 text-white px-4 py-2">
                        <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                        </button>
                    </div>
                    </div>
                </div>
                {/* First Atrraction End */}
            </header>


            <main>
                {/* Casual Shoes */}
                <section className="container mb-5">
                    <h3 className="title mb-4">CASUAL SHOES</h3>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-100 p-3">
                        <img
                            src={image5}
                            className="card-img-top h-100 w-100"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Nike Shoe</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h2 className="price fw-bold mb-0">$234</h2>
                            <button
                                type="button"
                                className="btn rounded-3 text-white px-4 py-2"
                            >
                                <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-3">
                        <img
                            src={daco}
                            className="card-img-top h-100 w-100"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sneakers Skate Shoe </h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h2 className="price fw-bold mb-0">$234</h2>
                            <button
                                type="button"
                                className="btn rounded-3 text-white px-4 py-2"
                            >
                                <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-3">
                        <img
                            src={pngegg}
                            className="card-img-top h-100 w-100"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sneakers Basketball shoe</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h2 className="price fw-bold mb-0">$234</h2>
                            <button
                                type="button"
                                className="btn rounded-3 text-white px-4 py-2"
                            >
                                <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Formal SHOES */}
                <section className="container mb-5">
                    <h3 className="title mb-4">FORMAL SHOES</h3>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-100 p-3">
                        <img
                            src={maskGroup}
                            className="card-img-top h-100 w-100"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Prestige High-Cut Leather </h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h2 className="price fw-bold mb-0">$234</h2>
                            <button
                                type="button"
                                className="btn rounded-3 text-white px-4 py-2"
                            >
                                <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-3">
                        <img
                            src={rectangle38}
                            className="card-img-top h-100 w-100"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Slip-On Formal Shoe</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h2 className="price fw-bold mb-0">$234</h2>
                            <button
                                type="button"
                                className="btn rounded-3 text-white px-4 py-2"
                            >
                                <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-3">
                        <img
                            src={rectangle39}
                            className="card-img-top h-100 w-100"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Slip-On Formal Shoe</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h2 className="price fw-bold mb-0">$234</h2>
                            <button
                                type="button"
                                className="btn rounded-3 text-white px-4 py-2"
                            >
                                <i className="fas fa-shopping-cart pe-1" /> BUY NOW
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Features Section */}
                <section className="container mb-5">
                    <div className="d-flex justify-content-around align-items-center row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
                    <div className="col-lg-4 order-2 order-lg-1 mb-3">
                        <div className="feature shadow d-flex flex-column flex-lg-row justify-content-around align-items-center mb-4 px-4 py-3 mx-auto">
                        <img
                            className="pe-lg-3 pb-2 pb-lg-0"
                            src={image12}
                            alt=""
                            style={{ width: 78, height: 82 }}
                        />
                        <div className="text-lg-start text-center">
                            <h5>Find the Perfect Fit</h5>
                            <p>
                            Everybody is different, which is why we offer styles for every
                            body.
                            </p>
                        </div>
                        </div>
                        <div className="feature shadow d-flex flex-column flex-lg-row justify-content-around align-items-center mb-4 px-4 py-3 mx-auto">
                        <img
                            className="pe-lg-3 pb-2 pb-lg-0"
                            src={image13}
                            alt=""
                            style={{ width: 79, height: 76 }}
                        />
                        <div className="text-lg-start text-center">
                            <h5>Find the Perfect Fit</h5>
                            <p>
                            Everybody is different, which is why we offer styles for every
                            body.
                            </p>
                        </div>
                        </div>
                        <div className="feature shadow d-flex flex-column flex-lg-row justify-content-around align-items-center mb-4 px-4 py-3 mx-auto">
                        <img
                            className="pe-lg-3 pb-2 pb-lg-0"
                            src={image14}
                            alt=""
                            style={{ width: 71, height: 76 }}
                        />
                        <div className="text-lg-start text-center">
                            <h5>Find the Perfect Fit</h5>
                            <p>
                            Everybody is different, which is why we offer styles for every
                            body.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 mb-3">
                        <img className="w-100" src={XMLID} alt="" />
                    </div>
                    </div>
                </section>
            </main>


            <footer>
                <p className="text-center">
                    <small>
                        Copyright @ Website developed by Salsya Nur Alfienda dan Siti Amirah.
                    </small>
                </p>
            </footer>
        </div>
    )
}

export default Homepage