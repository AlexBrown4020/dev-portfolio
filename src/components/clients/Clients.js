import './clients.css';

const clientData = [
    {
        title:'Sunset City',
        description: 'A newly proposed RPG system currently in the development and funding stage, click on the project to see an example of the landing page before public release.',
        logo: 'https://iili.io/HEtcis2.jpg',
        testimonial: ' Good work executed in a timely manner.  The website is clear and colourful and fills the requirements I asked for. Feedback during the process was listened to and implemented in a timely manner. I have used website building services and the work here met the needs of the project better than a template from one of those sites.  Efficient and exceeds the need of the project, would recommend to friends and collegues.',
        name: '- Lauri Halme',
        link:'https://sunset-city.netlify.app/',
    },
    {
        title: 'Life in Balance',
        description: 'A landing page for an online yoga platform; allowing users to learn more about the clients products, availability and background.',
        logo: 'lib.png',
        testimonial: '',
        name:'',
        link:'https://life-in-balance-jb.netlify.app/'
    }
]

function Clients() {
    return (
        <section id='clients-container'>
            <h3 className='title navy'>Client Projects</h3>
            {
                clientData.map(object => {
                    return  <a className='client-link' href={object.link}>
                    <div className='client-project-container'>
                        <h5 className='client-title'>{object.title}</h5>
                        <p className='client-description'>{object.description}</p>
                        <p className='client-testimonial'>            
                            <img  alt='logo' src={object.logo} className='client-logo'/>
                            {object.testimonial}
                            <h6 className='client-name'>{object.name}</h6>
                        </p>
                    </div>
                </a>
                })
            }

        </section>
    );
};

export default Clients;