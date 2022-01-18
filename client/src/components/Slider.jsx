import styled from 'styled-components';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { sliderItems } from './data';
import { useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: calc(100vh - 90px);
    background-color: #FFF;
    position: relative;
    overflow: hidden;
    ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ left }) => left ? "left: 20px;" : "right: 20px;"} 
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`;


// wrapper
const Warpper = styled.div`
    flex: 1;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: calc(100vh - 107px);
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 2rem;
`;

const Description = styled.p`
    font-size: 1rem;
    margin: 50px;
    letter-spacing: 3px;
    font-weight: 500;
    color: gray;
`;

const Button = styled.button`
    font-size: 20px;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);

    const handleClick = (dir) => {
        if (dir === "left") {
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow left={true} onClick={() => handleClick("left")} ><ArrowBackIosNewOutlined /></Arrow>
            <Arrow onClick={() => handleClick("right")}><ArrowForwardIosOutlined /></Arrow>
            <Warpper slideIndex={slideIndex}>
                {sliderItems.map(i => (
                    <Slide key={i.id}>
                        <ImageContainer>
                            <Image src={i.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{i.title}</Title>
                            <Description>{i.desc}</Description>
                            <Button>GO HERE</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Warpper>
        </Container >
    )
}

export default Slider
