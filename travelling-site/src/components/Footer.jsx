import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Find best vaccation places here
                </p>

                <p className="footer-subscription-text">
                    You can unsubscribe anytime.
                </p>

                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Enter Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline' buttonSize='btn--medium'> Subscribe </Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-links-items">
                        <h2 className='head'>About Us</h2>
                        <Link className='links' to='/sign-up'>How it works</Link>
                        <Link className='links' to='/'>Testimonials</Link>
                        <Link className='links' to='/'>Careers</Link>
                        <Link className='links' to='/'>Terms of Services</Link>
                    </div>

                    <div className="footer-links-items">
                        <h2 className='head'>Contact Us</h2>
                        <Link className='links' to='/'>Contact</Link>
                        <Link className='links' to='/'>Support</Link>
                        <Link className='links' to='/'>Destinations</Link>
                        <Link className='links' to='/'>Sponsorship</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-links-items">
                        <h2 className='head'>Videos</h2>
                        <Link className='links' to='/'>Submit Videos</Link>
                        <Link className='links' to='/'>Ambassador</Link>
                        <Link className='links' to='/'>Agency</Link>
                        <Link className='links' to='/'>Influencer</Link>
                    </div>

                    <div className="footer-links-items">
                        <h2 className='head'> Social Media</h2>
                        <Link className='links' to='/'>Instagram</Link>
                        <Link className='links' to='/'>Facebook</Link>
                        <Link className='links' to='/'>Twitter</Link>
                        <Link className='links' to='/'>Youtube</Link>
                        
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            DINO <i className="fab fa-typo3" /> 
                        </Link>
                    </div>

                    <small className="website-rights">
                        DINO © 2021
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link className="social-icon-link youtube"
                            to='/'
                            target='_blank'
                            aria-label='youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>

                        <Link className="social-icon-link twitter"
                            to='/'
                            target='_blank'
                            aria-label='twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
