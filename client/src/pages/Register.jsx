import styled from "styled-components"
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url('https://wallpaperaccess.com/full/1448056.jpg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ height: '100%', padding: '40px 0' })}
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({ width: '75%' })}
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center;
    align-items: center; */
    ${mobile({ flexDirection: 'column' })}
    
`;
const Title = styled.h1`
    font-weight: 300;
    font-size: 24;
    ${mobile({ fontSize: '18px' })}
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 5px 0 5px; 
    padding: 10px;
    ${mobile({ padding: '5px', margin: '10px 5px 0 5px' })}
`;
const Agreement = styled.span`
    font-size: 14px;
    margin: 15px 0;
`;
const Button = styled.button`
    width: 40%;
    background-color: teal;
    cursor: pointer;
    border: none;
    color: white;
    padding: 15px 20px;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name' />
                    <Input placeholder='last name' />
                    <Input placeholder='user name' />
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Input placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
