import './certification.css';
import '../../App.css';

export default function Certification () {
    return (
        <section className='section-container'>
            <h3 className='section-heading'>Certification</h3>
            <div id='cert-card' className='project-card'>
                <h4 id='cert-heading' className='project-sub-heading'>AWS - Certified Cloud Practitioner</h4>
                <div className='project-blurb'>
                    <img alt='AWSCloudPractitioner' class="project-image-AWS" src="https://iili.io/JEpcRYN.png"/>
                    <p className="certification-comment">
                        Awarded 02/21/2024
                    </p>
                </div>
            </div>
        </section>
    )
}