const imageUrl = "https://i.ibb.co/XLcZN1P/man-developing-website-on-desk.png";
const imageIN = "https://i.ibb.co/QKRm759/logo-linkedin.png";
import Typewriter from "typewriter-effect";
export default function Homepage(){
    return(
        <>
            <div className="Home">
                <div className="TextHome">
                    <p>Hello &#128079;&#127995;</p>
                    <p>I'm Dorian Joly</p>
                    <p>
                        <Typewriter
                            options={{
                                strings: [
                                    "React Js Developer",
                                    "Front End Developer",
                                    "Back End Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 35,
                            }}
                        />
                    </p>
                    <div className="SocialMedia">
                        <a href="https://www.linkedin.com/in/dorian-joly-35172b263/" target="_blank"><img src={imageIN} alt=""/></a>
                    </div>
                </div>
                <img className="imageHome" src={imageUrl} alt=""></img>
            </div>
        </>
    )
}