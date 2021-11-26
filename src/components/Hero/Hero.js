import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

import styles from './Hero.module.scss'
const Hero = () => {
    return (
        <Container fluid lg={4}>
            <Row>
                <Col className={styles.col}>
                    <h1>V</h1>
                    <div className={styles.col__content}>
                        <h2>Beaty & convinience</h2> 
                        <p>Going to the beach, it is not just a question <br/> of sun and sand. A day at the beach is <br/>
                about attaining the perfect beach style. <br/> That is why you love the VLARK </p>
                    </div>
                 <Link to="/sale">   <button> Shop Now</button> </Link>
                </Col>
                <Col className={styles.col}>
                    <h1>L</h1>
                    <h1>A</h1>
                </Col>
                <Col className={styles.col}>
                    <img alt='1' src='https://images.unsplash.com/photo-1602911429311-1c56a6c42a81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2luaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></img>
                    <h1>R</h1>
                </Col>
                <Col className={styles.col}>
                <img alt='2' src='https://images.unsplash.com/photo-1541433621554-05421e3a3e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></img>
                    <h1>K</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
