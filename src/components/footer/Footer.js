import './footer.css';

function Footer() {
    return (
        <footer>
            <div id='footer-info-container'>
                <section className='footer-info'>            
                    <h6 className='footer-title'>About</h6>
                    <p className='footer-p-content'>Freelance developer,</p>
                    <p className='footer-p-content'>3D Modeler / Designer,</p>
                    <p className='footer-p-content'>SLA/FDM Printing Services</p>
                </section>
                <section className='footer-info'>
                    <h6 className='footer-title'>Information</h6>
                    <p className='footer-p-content'>Updated: February 21st 2024</p>
                    <p className='footer-p-content'>Copyright © 2024, All Rights Reserved.</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;