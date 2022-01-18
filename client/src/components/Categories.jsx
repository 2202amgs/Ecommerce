import styled from "styled-components";
import Category from "./Category";
import { sliderItems } from './data';
import { mobile } from '../responsive';


const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;
const Categories = () => {
    return (
        <Container>
            {sliderItems.map(item => (
                <Category data={item} key={item.id} />
            ))}
        </Container>
    );
}

export default Categories;
