import styled from "styled-components";
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
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({ width: '75%' })}
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-weight: 300;
    font-size: 24;
    ${mobile({ fontSize: '18px' })}
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 10px 0;
    ${mobile({ padding: '5px', margin: '10px 0' })}
`;

const Button = styled.button`
    /* width: 40%; */
    background-color: teal;
    cursor: pointer;
    border: none;
    color: white;
    padding: 10px 20px;
    margin: 10px 0;
`;
const Link = styled.a`
    font-style: 12px;
    text-decoration: underline;
    margin: 5px 0;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username' />
                    <Input placeholder='password' />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THe PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
