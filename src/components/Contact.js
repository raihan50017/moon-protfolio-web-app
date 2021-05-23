import React from 'react';
import { Box, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';

const styles = makeStyles({
    contactArea:{
        padding: "40px 69px"
    },
    pageTitle:{   
        textTransform: "uppercase",
        fontSize: "30px",
        letterSpacing: "2.0px",
        marginBottom: "50px",
        color: "#272525",
        fontWeight: "bold",
        margin: "0 0 15px"
    },
    addressField:{
        "& p":{
            fontSize: "18px",
            letterSpacing: "0.5px",
            lineHeight: "30px",
            color:"#272525",
            margin: "0 0 10px",
            marginLeft:"30px",
            "& svg":{
                color: "#82B440",
                fontSize: "24px",
                marginRight: "9px",
                transition: "all 0.1s ease",
                position: "absolute",
                right:"100%",
                top: ".3px"
            },
            "& span":{
                backgroundColor:"red",
                boxSizing:"border-box",
                position: "relative"
            }
        }
    },
    submitBtn:{
        marginLeft: "72%",
        marginTop: "48px",
        border: "none",
        padding: "8px 60px 8px 60px",
        fontSize: "18px",
        backgroundColor: "#82B440",
        color: "#fff",
        transition: "all 0.1s ease",
        cursor: "pointer",
        "&:hover":{
        backgroundColor: "#E74C3C",
        transition: "all 0.1s ease"
        }
    }
})

const Contact = () => {

    const {contactArea, pageTitle, addressField, submitBtn} = styles();

    return (    
        <Box className={contactArea}>
            <Typography className={pageTitle} variant="h2">Contact</Typography>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box className={addressField}>
                            <Typography variantMapping={{p:'p'}} variant="p">
                               <Typography variant="body"><LocationCityIcon></LocationCityIcon></Typography>: 1/b,Nikunja-2<br></br>
                                Khelkhet,Dhaka<br></br>
                                Bangladesh
                            </Typography>
                            <Typography variantMapping={{p:'p'}} variant="p">
                                <Typography variant="body"><MailIcon></MailIcon></Typography>: abc@gmail.com
                            </Typography>
                            <Typography variantMapping={{p:'p'}} variant="p">
                                <Typography variant="body"><CallIcon></CallIcon></Typography>: +880 1726426154
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form>
                            <TextField fullWidth id="standard-full-width" label="Name"></TextField>
                            <TextField fullWidth id="standard-full-width" label="Email"></TextField>
                            <TextField  multiline rows={5} fullWidth id="standard-full-width" label="Message"></TextField>
                            <button className={submitBtn} type="submit">Send</button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;