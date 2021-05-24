import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
    footerArea: {
        padding: "69px 40px",
        backgroundColor: "black",
        "& p":{
            fontSize: "16px",
            color: "#fff",
            lineHeight: "32px",
            marginTop: "24px",
            margin: "0 0 10px",
            textAlign:"center"
        }
    },

    footerIconWrap:{
        justifyContent:"center",
    },

   footerIcon:{
        display: "flex",
        "& ul":{
            listStyleType: "none",
            marginBottom: "10px",
            display:"block",
            textAlign:"center",
            "& li":{
                display: "inline-block",
                backgroundColor: "#82B440",
                margin: "0px 4px",
                borderRadius:"10px",
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

})

const Footer = () => {

    const {footerArea, footerIcon, footerIconWrap} = styles();

    return (
       <Box className={footerArea}>
           <Grid container className={footerIconWrap}>
                <Grid item className={footerIcon}>
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
           </Grid>
           <Typography variantMapping={{p:'p'}} variant="p">
           © MOON-2017 | All Right Reserved
           </Typography>
       </Box>
    );
};

export default Footer;