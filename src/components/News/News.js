import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import video from '../store/video.mp4'
import video2 from '../store/video2.mp4'
import Trending from '../Trending/Trending'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
const Review = ({src,h1,p,h2='Shop the collection',reverse=false,background}) =>{
    return (
        <Row lg={2} md={2} xs={1} style={{background:background}} className={reverse ? ' p-5 my-5 d-flex flex-row-reverse' :'p-5 my-5 d-flex' }> 
        <Col className='justify-content-center d-flex flex-column '>
            <h1 className='text-center text-white fs-1 mb-5'>{h1}</h1>
            <p className='text-center fs-5 fw-light text-white '> {p}</p> 

       <Link to='/sale' ><h2 className='text-center fs-3 my-5 fw-light text-white'>{h2}</h2></Link>
        </Col>
        <Col>
        <img src={src} class='img-responsive rounded' alt="ngoc-trinh-2k4" />
        </Col>
    </Row>
    )
}
const News = () => {
    return (
        <Container  fluid >
            <Header />
            <video  className='w-100 d-block' autoplay="autoplay" loop muted>
                <source src={video} type="video/mp4"  />
            </video>
            <div className='w-75 justify-content-center d-flex flex-column ' style={{margin:'0 auto'}}>
                <Review src='https://i.imgur.com/87Sm0Kr.jpg' h1='Ngoc Trinh' p="Vlark is the result of years of experience and thousands of conversations with customers.The brand's singular determination is to create a collection of bras 
                        that a S+ woman could wear to feel comfortable and beautiful all day long "  background='#072056' />
                <Review src='https://i.imgur.com/3ABu7VC.jpg' h1="Myla" p="Influenced by the modern woman but remaining true to its British heritage, Myla's English garden asthetic takes its cue 
                        from floral embroidered and vintage-esque prints. An obsession with the perfect fit and use of luxe fabrics make their
                        collection the epitome of every luxury" reverse background='#DCCBC1' />
          
            <Review src='https://i.imgur.com/qBYt1Je.jpg' p="Leonisa designs with a woman's curves in mind. Hailing
                    from Latin America, the brand is dedicated to helping
                    women feel confident from the inside out. Ultra-soft
                    fabrics, high-tech materials and eco-friendly practices
                    inform their seam less shapewear." h1='LEONISA' background='#3B3A38' />
            </div>
            <Trending />
            <video className='w-100 d-block' autoplay="autoplay" loop muted>
                <source src={video2} type="video/mp4"  />
            </video>
            <Footer />
        </Container>
    )
}
export default News
