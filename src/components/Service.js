import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';

const styles = makeStyles({
    serviceMain:{
        padding: " 40px 69px",
        backgroundColor: "#f9f9f9"
    },
    pageTitle: {
        textTransform: "uppercase",
        fontSize: "30px",
        letterSpacing: "2.0px",
        marginBottom: "50px",
        color: "#272525",
        fontWeight: "bold",
        margin: "0 0 15px"
    },
    singleServiceArea:{
        "& div": {
            "& svg":{
                color: "#82B440",
                fontSize: "65px",
                marginBottom: "15px",
                transition: "all 0.1s ease",
                "&:hover": {
                    color: "#E74C3C",
                    transition: "all 0.1s ease"
                }
            }
        },
        "& h2": {
            fontSize: "28px",
            color: "#82B440",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            transition: "all 0.1s ease",
            margin: "0 0 15px",
            fontWeight: "700"
        },
        "& p": {
            fontSize: "18px",
            letterSpacing: "0.5px",
            lineHeight: "30px",
            color: "#272525",
            margin: "0 0 10px",
        }
    }
})

const Service = () => {

    const {serviceMain, pageTitle, singleServiceArea} = styles();
    
    return (
        <Box className={serviceMain}>
            <Box>
                <Typography className={pageTitle} variant="h2">SERVICES</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                   <Box className={singleServiceArea}>
                        <Box><CreateIcon></CreateIcon></Box>
                        <Typography variant="h2">ui design</Typography>
                        <Typography variantMapping={{p:'p'}} variant="p">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </Typography>
                   </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={singleServiceArea}>
                            <Box><ComputerIcon></ComputerIcon></Box>
                            <Typography variant="h2">web design</Typography>
                            <Typography variantMapping={{p:'p'}} variant="p">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={singleServiceArea}>
                            <Box><CodeIcon></CodeIcon></Box>
                            <Typography variant="h2">web development</Typography>
                            <Typography variantMapping={{p:'p'}} variant="p">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Service;