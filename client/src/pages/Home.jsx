import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Products from '../components/Products';
import News from '../components/News';
import Footer from '../components/Footer';

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

const Home = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <News />
            <Footer />
        </Container>
    );
}

export default Home;
