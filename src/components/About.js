import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
    pageTitle: {
        textTransform: "uppercase",
        fontSize: "30px",
        letterSpacing: "2.0px",
        marginBottom: "50px",
        color: "#272525",
        fontWeight: "bold"
    },
    aboutSection: {
        padding: "69px",
        boxSizing: "border-box",
    },
    aboutContent: {
        "& h2":{
            fontWeight: "bold",
            fontSize: "28px",
            color: "#82B440",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            margin: "0 0 15px"
        },
        "& p":{       
           fontSize: "18px",
           letterSpacing: "0.5px",
           lineHeight: "30px",
           color: "#272525",
           margin: "0 0 10px",
           fontFamily: `Arial, Helvetica, sans-serif`
        }
    },
    aboutImage: {
        "& img":{
            width:"100%"
        }
    },
    aboutButtons:{
        paddingTop: "20px",
    },
    aboutSocial:{
        "& ul":{
            listStyleType: "none",
            marginBottom: "10px",
            display:"block",
            "& li":{
                display: "inline-block",
                backgroundColor: "#82B440",
                margin: "0px 4px",
                transition: "all 0.1s ease",
                "&:hover": {
                    display: "inline-block",
                    backgroundColor: "#E74C3C",
                    transition: "all 0.1s ease",
                },
                "& a":{
                    color: "#337ab7",
                    textDecoration: "none",
                    "& img":{
                        padding: "3px",
                        maxWidth: "100%",
                        height: "auto",
                        verticalAlign: "middle",
                        border: "0",
                    }
                }
            }
        }
    },
    aboutDownload: {
        backgroundColor: "#82B440",
        textAlign: "center",
        display: "block",
        verticalAlign:"middle",
        "&:hover":{
            backgroundColor:"#E74C3C",
        },
        "& a":{
            textDecoration: "none",
            transition: "all 0.1s ease",
            "& h2":{
                color: "#fff",
                fontWeight: "normal",
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "3px",
                padding: "10px"
            }
        }
    }
})

const About = () => {

    const {pageTitle, aboutSection, aboutContent, aboutImage, aboutSocial, aboutDownload, aboutButtons} = styles();

    return (
        <Box className={aboutSection}>
            <Box>
            <Grid>
                <Typography className={pageTitle} variant="h1">
                     ABOUT
                </Typography>
            </Grid>
            </Box>
            <Box>
            <Grid container spacing={3}>
                <Grid className={aboutContent} item xs={12} md={9}>
                    <Typography variant="h2">
                        I AM JOHN DOE
                    </Typography>
                    <Typography variantMapping={{p:'p'}} variant="p">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. nisipellentesque eu, pretium quis, sem. Nulla consequat massa quis enim nisi
                    </Typography>
                    <Typography variantMapping={{p:'p'}} variant="p">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box className={aboutImage}>
                        <img alt="" src="/images/my-pic.jpg"></img>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            <Box>
            <Grid className={aboutButtons} container>
                <Grid item className={aboutSocial} xs={12} md={9}>
                    <Typography variantMapping={{ul:'ul'}} variant="ul">
                        <Typography variantMapping={{li:'li'}} variant="li">
                            <a href="facebook.com">
                                <img alt="" src="/images/facebook.png"></img>
                            </a>
                        </Typography>
                        <Typography variantMapping={{li:'li'}} variant="li">
                            <a href="google.com">
                                <img alt="" src="/images/googleplus.png"></img>
                            </a>
                        </Typography>
                        <Typography variantMapping={{li:'li'}} variant="li">
                            <a href="linkedin.com">
                                <img alt="" src="/images/linkedin.png"></img>
                            </a>
                        </Typography>
                        <Typography variantMapping={{li:'li'}} variant="li">
                            <a href="tumblr.com">
                                <img alt="" src="/images/tumblr.png"></img>
                            </a>
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item className={aboutDownload} xs={12} md={3}>
                    <a href="/download">
                        <Typography variant="h2">
                            Download resume
                        </Typography>
                    </a>
                </Grid>
            </Grid>
            </Box>
        </Box>
    );
};

export default About;