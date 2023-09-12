import './Home.css'
import {FaFacebook, FaGithub, FaTwitter}from 'react-icons/fa'



function Home() {
    return (
        <div className='main'>
            <p>Let's build amazing sites together!</p>
            <h1>Hi!I'm <span>Sherile</span></h1>
            <h1>Software Engineer</h1>
            <p>I’m focused in building responsive fullstack Web and Mobile applications while learning & exploring other technologies.</p>
            <ul className='ul'>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaGithub/>
                </li><li>
                    <FaTwitter/>
                </li>
            </ul>
        </div>
    )
}

export default Home