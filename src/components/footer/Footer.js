import './footer.css';

function Footer() {
    return (
        <footer>
            <div id='footer-info-container'>
                <section className='footer-info'>            
                    <h6 className='footer-title'>About</h6>
                    <p className='footer-p-content'>Freelance developer,</p>
                    <p className='footer-p-content'>3D Modeler / Designer (Blender),</p>
                    <p className='footer-p-content'>SLA/FDM Printing Services</p>
                </section>
                <section className='footer-info'>
                    <h6 className='footer-title'>Information</h6>
                    <p className='footer-p-content'>Updated: March 20th 2023</p>
                    <p className='footer-p-content'>Copyright © 2023, All Rights Reserved.</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;