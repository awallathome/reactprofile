import React, { Component } from "react";
import styles from './Footer.css';
import signature from './Images/signature.jpg';
  
  class Footer extends Component {
    render () {
      return <footer className={styles.Footer}>
          <div className={styles.Footer} id="footer-copyright">
            <div className={styles.Footer}>
              <img src={signature} id="signature" alt="Adam Wallis made this page" />
              <p id="copyright">&copy; 2018 Adam Wallis</p>
            </div>
          </div>
        </footer>;
    }
  }

  export default Footer;