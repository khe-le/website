import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ScrollIntoView from 'react-scroll-into-view'

import logo from '../assets/images/logo.png'


class Header extends React.Component {
    constructor(props) {
        super(props);
            this.state = { isTop: true };
    };
   
    handleScroll = (e) => {
        const isTop = window.scrollY < 100;

        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
    };
   
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };
   
    componentWillUnmount() {
        window.addEventListener("scroll", this.handleScroll);
    } ;
   
    render() {
        return (
            /* This header consists of a navbar and a social link bar */
            <header id="header">

                {/* Bootstrap Navigation Bar */}
                <Navbar fixed="top" expand="lg" collapseOnSelect="true" className={this.state.isTop ? 'default' : 'sticky'}>
                    <ScrollIntoView selector="#banner">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                className={`d-inline-block align-top ${this.state.isTop ? 'logo-default' : 'logo-sticky'}`}
                                alt="Khe Le Website Logo"
                            />
                        </Navbar.Brand>
                    </ScrollIntoView>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ScrollIntoView selector="#about"><Nav.Link className="section-link">About</Nav.Link></ScrollIntoView>
                            <ScrollIntoView selector="#work"><Nav.Link className="section-link">Work</Nav.Link></ScrollIntoView>
                            <ScrollIntoView selector="#contact"><Nav.Link className="section-link">Contact</Nav.Link></ScrollIntoView>
                            <ScrollIntoView selector=""><Nav.Link className="resume-link" href="https://drive.google.com/file/d/1zIoDG4gzAP-i3VM2lO8snhFuuzdVjl4n/view?usp=sharing">Resume</Nav.Link></ScrollIntoView>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* Left Bar with Social Links */}
                <div className="header-social-icons">
                    <ul>
                        <li><a className="icon alt fa-file" href="https://drive.google.com/file/d/1zIoDG4gzAP-i3VM2lO8snhFuuzdVjl4n/view?usp=sharing"><span className="label">Resume</span></a></li>
                        <li><a className="icon alt fa-github" href="https://github.com/khe-le"><span className="label">GitHub</span></a></li>
                        <li><a className="icon alt fa-linkedin" href="https://www.linkedin.com/in/khe-v-le/"><span className="label">LinkedIn</span></a></li>
                        {/* <li><a className="icon alt fa-instagram" href="https://www.instagram.com/khe_levy/?hl=en"><span className="label">Instagram</span></a></li> */}
                        <li>
                            <a className="icon alt fa-youtube" href="https://www.youtube.com/channel/UCVLkEtPgGuJr2MtABha7_og"><span className="label">Youtube</span></a>
                            <div className="vertical-line"></div>
                        </li>
                    </ul>
                </div> 
            </header>
        )
    }
}

export default Header