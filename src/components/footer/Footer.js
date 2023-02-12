import './footer.css';

function Footer() {
    return (
        <div id='footer'>
                <section>            
                    <h6 className='footer-title'>About</h6>
                    <p className='footer-p-content'>Osaka based freelance developer</p>
                    <p className='footer-p-content'>3D Modeler / Designer (Blender)</p>
                    <p className='footer-p-content'>SLA/FDM Printing Services</p>
                    <p className='footer-p-content'>Owner of Adventurer's Hoard</p>
                </section>
            <section className='footer-info'>
                <h6 className='footer-title'>Contact</h6>
                <p className='footer-p-content'><strong>Developer:</strong> Alexander Brown</p>
                <p className='footer-p-content'><strong>Email:</strong> balex3497@gmail.com</p>
                <section className='footer-info'>
                    <div id='social-container'>
                        <a href="https://www.instagram.com/adventurers_hoard/" className="contact-image">
                            <img alt='instagram' class="contact-image" src="https://iili.io/HENaUmB.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/alex-brown-2a6b7820a/" className="contact-image">
                            <img alt='linkedin' class="contact-image" src="https://iili.io/HENa85Q.png"/>
                        </a>
                        <a href="https://github.com/AlexBrown4020" className="contact-image">
                            <img alt='github' class="contact-image" src="https://iili.io/HENaO0b.png"/>
                        </a>
                    </div>
                </section>
            </section>
            <section className='footer-info'>
                <h6 className='footer-title'>Information</h6>
                <p className='footer-p-content'>February 12th 2023</p>
                <p className='footer-p-content'>Copyright © 2023, All Rights Reserved.</p>
            </section>
        </div>
    )
};

export default Footer;