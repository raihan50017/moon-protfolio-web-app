import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import TestimonialCarousalItem from './TestimonialCarousalItem';

const styles = makeStyles({
    testimonialArea:{
        padding: "40px 69px",
        backgroundColor: "#272525"
    },
    pageTitle: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: "30px",
        letterSpacing: "2.0px",
        marginBottom: "50px",
        fontWeight: "bold",
        margin: "0 0 15px"
    }
})

const Testimonial = () => {

    const {testimonialArea, pageTitle} = styles();

    const items = [
        {
            name: "Fahmid",
            description: "back Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itto make"
        },
        {
            name: "Fahmid",
            description: "back Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itto make"
        },
        {
            name: "Fahmid",
            description: "back Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itto make"
        }
        
    ]

    return (
        <Box className={testimonialArea}>
            <Typography className={pageTitle} variant="h2">TESTIMONIAL</Typography>
            <Box>
            <Carousel
                autoPlay={true}
                animation = {"slide"}
                indicators = {true}
                cycleNavigation = {true}
                timeout = {500}
                navButtonsAlwaysVisible = {false}
                navButtonsAlwaysInvisible = {false}
                indicatorIconButtonProps={{
                    style: {
                        color: 'black',
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color :'white',
                        transform: "scale(1.05)"
                    }
                }}
            >
            {
                items.map((item, i)=> <TestimonialCarousalItem item={item}></TestimonialCarousalItem>)
            }
        </Carousel>
            </Box>
        </Box>
    );
};

export default Testimonial;