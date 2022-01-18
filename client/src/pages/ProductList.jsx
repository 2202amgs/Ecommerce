import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Products from '../components/Products';

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

const Filter = styled.div``;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 5px 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Deresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <News />
            <Footer />
        </Container>
    )
}

export default ProductList;
