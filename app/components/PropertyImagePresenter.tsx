import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from './Image'
import NImage from 'next/image'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

const allPhotosButtonStyle = {
    width: '120px',
};

const modalBodyStyle = {
    padding: '30px'
};

const thumbnailStyle = {
    width: 'auto',
    minWidth: "100px",
    marginTop: '15px'
};

const imageStyle = {
    maxWidth: '60em',
    maxHeight: '42em'
};

const carouselItemStyle = {
    height: '38em',
};

function ControlledCarousel({ images, index, setIndex }: { images: string[], index: number, setIndex: (i: number) => void }) {

    const handleImgSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='centeredDiv' interval={null} activeIndex={index} onSelect={handleImgSelect}>
            {images.map(function (image, i) {
                return (
                    <Carousel.Item style={carouselItemStyle} key={i}>
                        <div style={imageStyle} className='img-fluid centeredDiv'>
                            <Image alt={'image-' + i} src={image} />
                        </div>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

function ImageShow({ images, show, setShow }:
    { images: string[], show: boolean, setShow: (value: boolean) => void }) {

    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="width-75w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        122 Disney Springs, Orlando, FL 44555
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={modalBodyStyle}>
                    <Container>
                        <Row>
                            <ControlledCarousel images={images} index={selectedImgIndex} setIndex={setSelectedImgIndex} />
                        </Row>
                        <Row className='mt-3'>
                            <div className='centeredDiv width-75w'>
                                {images.map(function (image, i) {
                                    return (
                                        <div key={i} style={thumbnailStyle} className='floatLeft '>
                                            <NImage className='pointer' width={80} height={60} alt='1' src={image} onClick={() => setSelectedImgIndex(i)} />
                                        </div>
                                    );
                                })}
                            </div>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default function PropertyImagePresenter({ id }: { id: string | null }) {
    const [show, setShow] = useState(false);

    const images = [
        "/1-0.webp",
        "/2-0.webp",
        "/3-0.webp",
        "/4-0.webp",
        "/1-0.webp",
        "/2-0.webp",
        "/3-0.webp",
        "/4-0.webp",
        "/1-0.webp",
        "/2-0.webp",
        "/3-0.webp",
        "/4-0.webp",
    ]

    return <>
        <Container>
            <Row>
                <Col xs={12} md={8} >
                    <Image alt='image-1' src={images[0]} />
                </Col>
                <Col xs={6} md={4}>
                    <Row>
                        <Image alt='image-2' src={images[1]} />
                    </Row>
                    <Row className="mt-3">
                        <Image alt='image-3' src={images[1]} />
                    </Row>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Button style={allPhotosButtonStyle} onClick={() => setShow(true)} className='floatRight' variant="outline-dark" size="sm">{images.length} Imagens</Button>
                </Col>
            </Row>
        </Container>
        <ImageShow show={show} setShow={setShow} images={images} />
    </>;
}