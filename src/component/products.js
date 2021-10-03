import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';


const Product = props => {
    // //alert(props)
    console.log(props.product.products.filter(product=>product.category == props.categorie.activeCategory))
    let currentNav = props.categorie.activeCategory;
    console.log( currentNav)
    // alert(currentNav)
    return ( 
        <section>
            <h1>
                the product
            </h1>
{/* let product ={
     products:[
        {
            category: 'food',
            name: `${faker.commerce.productName}`,
            price: `${faker.commerce.price}`,
            description
  */}
            {/* <p>{props.product.products}</p> */}




            {
                props.product.products.filter(products => products.category == currentNav).map(product => {
                    return (

                        <Card sx={{ maxWidth: 345 }}>
                           
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography> 
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    )
                })
            }




        </section>
    )
}
const mapStateToProps = state => ({
    product: state.product,
    categorie: state.categorie
});
// const mapDispatchToProps = { food, console, electronic, phones };


export default connect(mapStateToProps)(Product)