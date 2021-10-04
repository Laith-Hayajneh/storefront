import { connect } from "react-redux";
import { laith, food, electronic, console, phones } from "../store/categories";
import { Navbar, Nav, Container } from 'react-bootstrap/'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const Category = props => {
    let activeCat = '';
    // console.log(props)
    // alert(props.categorie.food[0].name)
    // alert(props.categorie.activeCategory)

    return (

        <section>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Browse our Categories</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Food" onClick={() => {
                            props.food('food')
                            return
                        }}>Food</Nav.Link>
                        <Nav.Link href="#electronic" onClick={() => { props.electronic('electronic') }} >Electronic</Nav.Link>
                        <Nav.Link href="#console" onClick={() => { props.console('console') }}>Console</Nav.Link>

                        <Nav.Link href="#phones" onClick={() => { props.phones('phones') }}>Phones</Nav.Link>

                    
                    </Nav>
                </Container>
            </Navbar>
            {/* <button onClick={() => { alert(props.categorie.activeCategory) }} >fff</button> */}



            {props.categorie.activeCategory !== '' &&
                props.categorie.categore.map(active => {
                    return (
                        <div style={{ "margin-left": "auto", "margin-right": "auto","align-items":"center" }}>


                            <Card className='bigcard' sx={{ minWidth: 275,ml:10 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 70 }} color="text.secondary" gutterBottom>
                                        {active.name}
                                    </Typography>
                                   
                                    <Typography sx={{ mb: 0.5, }} color="text.secondary">
                                        {active.description}
                                    </Typography>
                                   
                                </CardContent>
                               
                            </Card>
                        </div>
                    )
                })

            }


            {/* laith category */}
        </section>
    )
};
const mapStateToProps = state => ({
    categorie: state.categorie

});
const mapDispatchToProps = { food, console, electronic, phones };

export default connect(mapStateToProps, mapDispatchToProps)(Category)