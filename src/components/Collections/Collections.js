import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from "./Collections.module.scss"
import Modal from 'react-bootstrap/Modal'
import {useState,memo} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const collection = [
    {id: 5,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/96d8b719-093b-4296-b691-bdc825b3385b/web_Aileen_by_MAX_LIBERTINE_for_fith_sense_lingerie_DSC0693.jpg?format=750w'
    },
    {id: 2,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/501623f5-8d6a-4ff9-91c5-8931737ab15b/Fifth_Sense_Lingerie_Campaign_Fall_2021_with_Danielle_Knidel_by_Max_LibertineFifth_Sense_Lingerie_Campaign_Fall_2021_with_Danielle_Knidel_by_Max_Libertine_DSC1650.jpg?format=750w'
    },
    {id: 3,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/3bb28cf6-ea51-4135-a9fd-6a54d3ef8264/Fifth_Sense_Lingerie_Campaign_Fall_2021_with_Danielle_Knidel_by_Max_Libertine_DSC3025.jpg?format=750w'
    },
    {id: 6,
        image:'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/3629c812-7aff-4f43-8383-28ccc112b323/web_Anna_Verkhorubova_in_lingerie_photographed_by_MAX_LIBERTINE_DSC3579.jpg?format=750w'
    },
    {id: 1,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1538312d-c2f3-4dc5-99e3-071e6647aa56/web_DSC9462.jpg?format=750w'
    },
    {id: 4,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/e463c88f-43d2-4414-af7d-a7dbc825f88f/Swimwear+campaign+for+Fifth+Sense+Lingerie+photographed+by+MAX+LIBERTINE-+Mallorca+Brand+Experience+20201+-+web_DSC2475.jpg?format=750w'
    },
    {id: 7,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/b213f92d-627f-4f53-92d3-deed45f85a74/web_Aileen_Gold_in+5th_sense_lingerie_swimwear_by_Max_Libertine__DSC2849.jpg?format=750w'
    },
    {id: 8,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1608635239797-C0Z3TJYKWDLYUIFL9O9I/_DSC2683_LR.jpg?format=750w'
    },
    {id: 9,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1608636074327-M9XNFF1P8C80EKPIJ3HI/_DSC8140_LR.jpg?format=750w'
    },
    {id: 10,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/18153938-257d-463c-b45c-45b0401bd2bb/web_DSC5341.jpg?format=750w'
    },
    {id: 11,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1608635343079-N1T2KM3ORNJSTX16NYAU/_DSC7162_LR.jpg?format=750w'
    },
    {id: 12,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/5abe7f18-0229-4188-8d4c-6911caf5b408/web_DSC7366.jpg?format=750w'
    },
    {id: 13,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/493fa27c-db71-4a00-a79c-1fc6898d95d5/web__Lilly_Lagodka_in_Arson_Swimwear_photographed_by_Max_Libertine_DSC9642.jpg?format=750w'
    },
    {id: 14,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/94ed95b0-52ed-4122-a712-89c1eb6f6db8/Dani_Knidel_5th_sense_lingerie_by_Max_Libertine__DSC0714.jpg?format=750w'
    },
    {id: 15,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1608634954162-I5GX1NOOFWOTTHBE9M6L/_DSC2337_LR.jpg?format=750w'
    },
    {id: 16,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1608635136755-2YEJM23ZDAAJJ9VUCL7U/_DSC9458_LR2.jpg?format=750w'
    },
    {id: 17,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/1608635505352-6PJW6H9W42BE652NRUFJ/_DSC8491_LR.jpg?format=750w'
    },
    {id: 18,
        image: 'https://images.squarespace-cdn.com/content/v1/5fe1d0d84adefb5fb8536f46/3966be05-5010-4126-ad51-e8403ba613ff/preview_Once_Upon_a_time_in_Larnaca_by_MAX_LIBERTINE.jpg?format=750w'
    },    
];



const Collections = () => {
    const [item,getItem] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className={styles.gallery}>
            <Header/>
            <Modal show={show} onHide={handleClose}>
                <Image src={item} />
            </Modal>
            <Row xs={1} md={3} lg={3}>
                {collection.filter(item => item.id <= 3).map(item =>(
                    <Col lg={4} key ={item.id}><Image fluid alt="girl" src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }} /></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 3 && item.id <= 6).map(item =>(
                    <Col lg={4} key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }} /></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 6 && item.id <= 9).map(item =>(
                    <Col lg={4} key ={item.id}><Image fluid alt="girl" src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 9 && item.id <= 12).map(item =>(
                    <Col lg={4}key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 12 && item.id <= 15).map(item =>(
                    <Col lg={4} key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 15 && item.id <= 18).map(item =>(
                    <Col lg={4} key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Footer/>
        </Container>
    )
}

export default memo(Collections)
