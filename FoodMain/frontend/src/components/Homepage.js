import React from 'react';
import SiteFooter from '../shared/SiteFooter';
import NavBar from '../shared/NavBar';
import { Box, Button, Form, FormField, Heading, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

//App homepage, with search box

const Homepage = (props) => {

    let navigate = useNavigate();

    //set ingredient based on user search input

    const handleChange = evt => {
        props.setIngredient({ingredient: evt.target.value});
    };

    //handle form submit using handleSearch function from parent component (App) and redirect to results page
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleSearch();
        navigate('/results');
    };

    return (
        <>  
            <NavBar />
            <div className='main-image'>
                <div className='main-content'>
                    <Box background={{ color: 'brand', opacity: true }}>
                        <Box align="center">
                            <Heading className="heading" level="1" responsive textAlign="center" color="dark" >The Meal Maker</Heading>
                            <Heading className="heading" level="3" responsive textAlign="center" color="dark">You pick an ingredient, we'll give you a list of things to make!</Heading>
                        </Box>
                        <Box align="center" margin={{ top: "small" }}background={{ color: 'accent-1' }}>
                            <Form onSubmit={handleSubmit}>
                                <FormField label="Ingredient" name="ingredient">
                                    <TextInput name="ingredient" value={props.ingredient.ingredient} onChange={handleChange} />
                                </FormField>
                                <Box direction="row" alingn='center' margin={{ top: "medium", bottom: "large" }}>
                                    <Button type="submit" label="Submit" accent-1 />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </div>
            </div>
            <SiteFooter />
        </>
    )
};

export default Homepage;