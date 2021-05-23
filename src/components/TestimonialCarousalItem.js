import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const styles = makeStyles({
    testimonialCarousalDescription:{   
        fontSize: "18px",
        letterSpacing: "0.5px",
        lineHeight: "30px",
        color: "#fff",
        marginBottom: "30px"
    },
    testimonialCarousalName:{
        lineHeight: "30px",
        color: "#fff",
        fontWeight: "normal",
        fontSize: "18px",
        letterSpacing: "1px",
        textTransform: "uppercase"
    }
})

const TestimonialCarousalItem = ({item}) => {

    const {testimonialCarousalDescription, testimonialCarousalName} = styles();

    return (
        <Box>
        <Typography className={testimonialCarousalDescription} variantMapping={{p:'p'}} variant="p">{item.description}</Typography>
        <Typography className={testimonialCarousalName} variant="h3">{item.name}</Typography>
      </Box>
    );
};

export default TestimonialCarousalItem;