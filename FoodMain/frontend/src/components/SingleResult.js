import React, {useContext, useEffect, useState} from 'react';
import { getMoreInfo } from '../Api';
import {useParams} from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Heading, Image, ResponsiveContext, Text } from 'grommet';
import LoadingSpinner from '../shared/LoadingSpinner';
import SiteFooter from '../shared/SiteFooter';
import NavBar from '../shared/NavBar';

//SingleResult page for individual recipe data

const SingleResult = () => {
    const size = useContext(ResponsiveContext);
    let {id} = useParams();

    //set state for individual recipe data
    const [recipeData, setRecipeData] = useState({
        recipeData: {}
    });

    //function to call getMoreInfo API function, set recipeData with result of API call 
    useEffect(() => {
        try {
            async function getResults() {
                let data = await getMoreInfo(id);
                console.log(data);
                setRecipeData({recipeData: data});
            }
            getResults();
        } catch (err) {
                console.error(err);
        }
    }, []);

    //show LoadingSpinner if recipeData has not been set yet
    if(!recipeData) return <LoadingSpinner />;

    let data = recipeData.recipeData;
    let {title, image, readyInMinutes, sourceUrl} = data;
        
    return (
        <>
            <NavBar />
            <Heading className="heading" level="3" responsive textAlign="center" color="dark" >{title}</Heading>
                <Card height='medium' width={size} background='light-3' margin={{ top:'small', bottom:'large' }}>
                    <CardBody pad='medium'>
                        <Image fit='contain' src={image} />
                        <Text>Ready in: {readyInMinutes}</Text>
                    </CardBody>
                    <CardFooter pad='medium' background='light-5'>
                        <Button label="Make it Here!" href={sourceUrl} />
                    </CardFooter>
                </Card>
            <SiteFooter />
        </>
    )  
};

export default SingleResult;