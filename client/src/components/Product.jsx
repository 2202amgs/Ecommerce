import styled from "styled-components";
import {ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined} from '@mui/icons-material';

const Info = styled.div`
    background-color: #1d626261;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .5s ease-out;
`;

const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 360px;
    background-color: #f5fbfd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 5px;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height; 200px;
    background-color: white;
    position: absolute;
    border-radius: 50%;

`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


const Icon = styled.div`
    margin: 8px;
    color: white;
    cursor: pointer;
    transition: all .5s ease-out;
    &:hover{
        transform: scale(1.5);

    }
`;



const Product = ({ data }) => {
    return (
        <Container>
            <Circle /> 
            <Image src={data.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined style={{fontSize: 38}} />
                </Icon>
                <Icon>
                    <SearchOutlined style={{fontSize: 38}}/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined style={{fontSize: 38}} />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
