import './About.css'


function About() {
    return (
        <div className="About">

            <div className='container'>
                <h1>About</h1>
                <p>
                    I'm a Front End Engineer and Software Engineer with a focus on creating responsive and highly interactive web/mobile applications.
                    I am well versed in best practices for front end development using JavaScript (React, Vanilla) and Mobile Development (Flutter) and User Interaction.
                    I have built frontend projects that aim at changing the world.
                </p>
                <h2>What can limit me from other learners?</h2>
                <button>Check out my projects</button>
            </div>
            <div className='img'>
                <img src="./image/setup.jpg" alt="About" />
            </div>
        </div>
    )
}

export default About