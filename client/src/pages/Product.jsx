import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 400;
    font-size: 40px;
`;

// filter
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;

`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    fon-weight: 200;
    font-size: 20px;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    cursor: pointer;
`;

const FilterSize = styled.select`
    padding: 5px;
    margin-left: 5px;
`;

const FilterSizeOption = styled.option``;

// amount
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
        background-color: #f8f4f5;
    }
`;

const Product = props => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://image.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg' alt='' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Sit reprehenderit est occaecat.</Title>
                    <Desc>
                        Cupidatat proident ipsum incididunt cillum mollit aliqua proident et sit Lorem esse nulla.
                        Do proident in veniam laboris labore est sit irure. Pariatur Lorem eu pariatur enim labore
                        fugiat nostrud id anim. Minim nisi dolore dolor deserunt labore nostrud sint pariatur qui
                        dolore ut.
                    </Desc>
                    <Price>$40</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='#f00' />
                            <FilterColor color='#0f0' />
                            <FilterColor color='#00f' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <News />
            <Footer />
        </Container>
    )
}


export default Product
