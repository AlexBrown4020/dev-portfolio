import './footer.css';

function Footer() {
    return (
        <div id='footer'>
            <section className='footer-info'>
                <h6 id='footer-title'>Information</h6>
                <p className='footer-p-content'>February 9th 2023</p>
                <p className='footer-p-content'>Copyright © 2023, All Rights Reserved.</p>
            </section>
            <section className='footer-info'>
                <h6 id='footer-title'>Contact</h6>
                <p className='footer-p-content'><strong>Developer:</strong> Alexander Brown</p>
                <p className='footer-p-content'><strong>Email:</strong> balex3497@gmail.com</p>
            </section>
        </div>
    )
};

export default Footer;