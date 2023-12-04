import React from 'react'
import TopBar from "./TopBar"
import './App.css'

function About() {
    return (
        <>
            <TopBar />
            <div className="text">
                <h1 className="centertext">About</h1>
                <div className="article">
                    <p>
                        Welcome to Project 2 Blog!
                    </p>
                    <p>
                        At Project 2 Blog, we believe that every student has the potential to shine, and school 
                        clubs are the perfect platform to unlock that potential. Our mission is to provide a 
                        comprehensive guide to all things related to school clubs, offering insights, tips, and 
                        inspiration to help students make the most of their extracurricular experiences.
                    </p>
                    <p>
                        Our team of passionate writers and educators are dedicated to bringing you the latest trends,
                        success stories, and practical advice on how to navigate the diverse landscape of school clubs.
                        Whether you're an aspiring leader, a creative mind, or an all-around enthusiast, we aim to 
                        be your go-to resource for maximizing your club involvement and fostering a vibrant, 
                        inclusive school community.
                    </p>
                    <p>
                        Join us as we explore the power of collaboration, creativity, and leadership within the 
                        dynamic world of school clubs. Let's unlock the doors to endless possibilities and create 
                        lasting memories that will shape your academic journey and beyond.
                    </p>
                    <p>
                        Feel free to reach out, share your experiences, and embark on this exciting adventure with us!
                    </p> <br></br><br></br>
                    <p>
                        Stay inspired, <br></br>

                        Koa Lee and Alex Gao
                        Founder, Project 2 Blog
                    </p>
                </div>
                <img className="centerimg" src="https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg" />
            </div>
        </>
    )
}

export default About
