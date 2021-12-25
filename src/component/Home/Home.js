
import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import './Home.modul.css'
const Home = () => {
    return (
        <>
            <main id="home">
                <section>
                    <h2>Hii, I am</h2>
                    <h3>Md Intezar Alam</h3>
                    <h1>I am<span className="change_content"></span> </h1>
                    <a href="https://github.com"><IconButton variant="contained" color="primary" className="Git"><GitHubIcon /> </IconButton></a>
                    <a href="https://www.instagram.com"className="fa fa-instagram  rounded-pill" ></a>
                    <a href="https://www.linkedin.com" className="fa fa-linkedin m-1 p-2 rounded-pill"></a>
                    <a href="https://www.facbook.com" className="fa fa-twitter m-1 p-2 rounded-pill"></a>
                </section >
            </main>
        </>
    )
}
export default Home;