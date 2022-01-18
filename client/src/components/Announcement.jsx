import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #1d6262;
    display: flex;
    color: #fff;
    justify-content: center;
`;

const Announcement = () => {
    return (
        <Container>
            Get an offer today with Souq!!
        </Container >
    );
}

export default Announcement;
