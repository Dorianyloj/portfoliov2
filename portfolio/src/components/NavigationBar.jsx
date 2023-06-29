import '../../../../portfoliov2/portfolio/src/index.css'
import {useEffect, useState} from "react";

const imageUrl = "https://i.ibb.co/71kYCRd/image-2023-06-08-091518387-removebg-preview-modified.png";
export default function NavigationBar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Ajoute un écouteur d'événement pour détecter le défilement de la page
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Vérifie si la page a été défilée
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <>
            <div className={`NavBar ${isScrolled ? 'scrolled' : ''}`}>
                <ul>
                    <li><a href="\"><img className="logo" src={imageUrl} alt=""></img></a></li>
                    <div className="onglet">
                        <li><a href="/about">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </div>
                </ul>


            </div>
        </>
    )
}