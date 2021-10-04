import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { addToCart } from "../store/cart";


const Product = props => {
    // alert(props)
    console.log(props.product.products.filter(product => product.category == props.categorie.activeCategory));

    let currentNav = props.categorie.activeCategory;
    console.log(currentNav)
    // alert(currentNav)
    return (
        <section>








            {
                props.product.products.filter(products => products.category == currentNav).map((product, idx) => {
                    return (
                        <div className="pDiv2">



                            <Card className="pDiv" key={idx} sx={{ maxWidth: 275, m: 1, minWidth: 275 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt="green iguana"
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={()=>{props.addToCart(product)}} size="small">Add To Cart</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>

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
const mapDispatchToProps = { addToCart };


export default connect(mapStateToProps,mapDispatchToProps)(Product)