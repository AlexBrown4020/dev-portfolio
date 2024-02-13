import './banner.css';

export default function Banner () {
    return (
        <main>
            <h1 id='dev-name'>Alexander Brown</h1>
            <h2 className='dev-description'>Fullstack Software Developer / 3D Designer</h2>
            <div id='dev-paragraph-container'>
                <ul id='dev-paragraph'>
                    <li className='dev-focus'>Focusing on agile development</li> 
                    <li className='dev-focus'>Translating prototypes into responsive design</li>
                    <li className='dev-focus'>Adding value and functionality, with simple implementation</li>
                </ul>
            </div>
            <div id='social-link-container'>
                <a href="https://www.linkedin.com/in/alexander-brown-2a6b7820a/" className="contact-image">
                    <img alt='linkedin' class="contact-image" src="https://iili.io/HENa85Q.png"/>
                </a>
                <a href="https://github.com/AlexBrown4020" className="contact-image">
                    <img alt='github' class="contact-image" src="https://iili.io/HENaO0b.png"/>
                </a>
                <a href="https://www.etsy.com/uk/shop/AdventurersHoardShop?ref=seller-platform-mcnav" class="contact-image">
                    <img alt='Etsy' class="contact-image" src="https://iili.io/H9xHCHN.png"/>
                </a>
                <a href="https://www.instagram.com/adventurers_hoard/" className="contact-image">
                    <img alt='instagram' class="contact-image" src="https://iili.io/HENaUmB.png"/>
                </a>
            </div>
        </main>
    )
}