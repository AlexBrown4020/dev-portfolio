import './clients.css';

function Clients() {
    return (
        <section id='clients-container'>
            <h4 id='clients-title'>Client Projects</h4>
            <div className='clients-project-container'>
                <img href='https://sunset-city.netlify.app/' alt='sunset city logo' src='https://iili.io/HEtcis2.jpg' className='clients-logo'/>
                <h5 className='client-project-title'>Sunset City</h5>
            </div>
        </section>
    )
}

export default Clients;