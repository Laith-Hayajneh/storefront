import { connect } from "react-redux";
import { food, electronic, console, phones } from "../store/categories";
import { Navbar, Nav, Container } from 'react-bootstrap/'


const Category = props => {
    let activeCat = '';
    // console.log('s')
    // alert(props.categorie.food[0].name)

    return (

        <section>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Browse our Categories</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Food" onClick={() => {
                            props.categorie.activeCategory = 'food'
                            return
                        }}>Food</Nav.Link>
                        <Nav.Link href="#electronic" onClick={() => { props.categorie.activeCategory = 'electronic' }} >electronic</Nav.Link>
                        <Nav.Link href="#console" onClick={() => { props.categorie.activeCategory = 'console' }}>console</Nav.Link>
                        <Nav.Link href="#phones" onClick={() => { props.categorie.activeCategory = 'phones' }}>phones</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <button onClick={() => { alert(props.categorie.activeCategory) }} >fff</button>
            {activeCat == 'food' && props.categorie.food.map(fo => <p>{fo.description}</p>)}

            {/* {props.categorie.food.map(fo=><p>{fo.description}</p>)} */}

            {/* {props.categorie.activeCat.map(food => <p>
                {food.name}
            </p>)} */}
            laith category
        </section>
    )
};
const mapStateToProps = state => ({
    categorie: state.categorie

});
const mapDispatchToProps = { food, console, electronic, phones };

export default connect(mapStateToProps, mapDispatchToProps)(Category)