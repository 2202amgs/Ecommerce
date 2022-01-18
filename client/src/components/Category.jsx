import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 5px;
    position: relative;
    ${mobile({
    height: '30vh',
})}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: white;
    border: 1px solid white;
    padding: 10px;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 10px;
`;


const Category = ({ data }) => {
    return (
        <Container>
            <Image src={data.img} />
            <Info>
                <Title>{data.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default Category
