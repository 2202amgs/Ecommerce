import styled from "styled-components";
import Product from "./Product";
import { productItems } from './data';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
`;
const Products = () => {
    return (
        <Container>
            {productItems.map(item => (
                <Product data={item} key={item.id} />
            ))}
        </Container>
    );
}

export default Products;
