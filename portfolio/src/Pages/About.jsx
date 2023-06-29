import React from 'react'
import NavBar from '../components/NavigationBar'
import About from '../components/Aboutpage'

function Home() {
    return (
        <div className="Aboutpage">
            <NavBar />
            <div className="mainAbout">
                <About/>
            </div>
        </div>
    )
}

export default Home