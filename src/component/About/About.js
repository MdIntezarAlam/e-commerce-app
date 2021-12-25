import Header from '../Header/Header';
import int3 from'./../../img/int3.jpeg'
import './About.modul.css';


const About = () => {
    return (
        <div className="aboutme" id="about">
            <Header title={'About Me'} />
            <div className="container">
                <div className="text">
                    <h2>Hii I'm Md Intezar Alam</h2>
                    <p>
                        Hi, i'm Md Intezar Alam,i am a computer Science Engineering Student in Chaitanya Institute of Technology & Science. I'am curently in 3rd year.
                        I'm Specialist in Coding Language, digital marketeing | freelancer more...
                        the main reason I am passionate about developing a new Technology
                        I also like to learn new technologies by experimenting by myself.
                        for instance last month I created a lot of Responsive website that uses Coding Language because I was curious about how the website work.
                        that is why I am interested in your company since I know it's committed to innovation.
                        I am Specialist in Front end developer, React Js developer, I'm Specilist in HTML-5, CSS-3, Bootstrap, Javascript & React js
                        I hava Confident to learn new technology.
                    </p>
                </div>
                <div className="photo">
                  <img src={int3} alt="me" className="me" />
                </div>
            </div>
        </div>
        
    )
}
export default About;