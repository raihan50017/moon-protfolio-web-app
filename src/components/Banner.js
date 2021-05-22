import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Particles from "react-particles-js";

const styles = makeStyles({
    banner:{
        backgroundImage: `url("/images/moon-protfolio-banner.jpg")`,
        backgroundSize:"cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        minHeight: "672px"
    },
    bannerContent:{
        position: "absolute",
        top: "0",
        left:"0",
        display: "flex",
        flexDirection: "column",
        alignItems:"flex-start",
        justifyContent: "center",
        padding: "0px 69px",
        height: "100%",
    },
    bannerTitle: {
        color: "#fff",
        fontSize: "40px",
        letterSpacing: "5px",
        fontWeight: "700",
        margin: "0 0 15px"
    },
    personName: {
        color: "#82B440",
    },
    bannerDescription: {
        fontFamily: `"Arial"`,
        color: "#fff",
        letterSpacing: "3px",
        fontSize: "22px",
        margin: "0 0 10px"
    },
    hire:{
        backgroundColor: "#82B440",
        fontFamily: "oswald",
        textAlign: "center",
        width: "200px",
        marginTop: "30px",
        "&:hover":{
            backgroundColor: "#E74C3C",
        }
    },
    btnText:{
        color: "#fff",
        fontFamily: "oswald",
        fontWeight: "normal",
        fontSize: "16px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        padding: "10px"
    }
})

const Banner = () => {

    const {banner, bannerContent, bannerTitle, personName, bannerDescription, hire, btnText} = styles()

    return (
        <Box className={banner}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                          "value": 80,
                          "density": {
                            "enable": true,
                            "value_area": 800
                          }
                        },
                        "color": {
                          "value": "#ffffff"
                        },
                        "shape": {
                          "type": "circle",
                          "stroke": {
                            "width": 0,
                            "color": "#000000"
                          },
                          "polygon": {
                            "nb_sides": 5
                          }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": false,
                          "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                          }
                        },
                        "size": {
                          "value": 5,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": true,
                          "distance": 150,
                          "color": "#ffffff",
                          "opacity": 0.4,
                          "width": 1
                        },
                        "move": {
                          "enable": true,
                          "speed": 3,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "repulse"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "push"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 400,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 400,
                            "size": 30,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 200
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": true,
                }} />
                <Box className={bannerContent}>
                    <Typography className={bannerTitle} variant="h2">HELLO! THIS IS <Typography variant="span" className={personName}>JOHN DOE</Typography></Typography>
                    <Typography className={bannerDescription} variant="p">I AM A PROFESSIONAL WEB DEVELOPER</Typography>
                    <div className={hire}>
                        <a style={{textDecoration:"none"}} href="/">
                            <h2 className={btnText}>HIRE</h2>
                        </a>
                    </div>
                </Box>
        </Box>
    );
};

export default Banner;