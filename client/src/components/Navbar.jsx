import styled from 'styled-components';
import SrachIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';

// Style
const Container = styled.div`
    height: 60px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;  
    align-items: center;
    
`;

// Start

const Start = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    flex: .75;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    margin: 0 35px;
    padding: 0 5px;

`;

const Input = styled.input`
    border: none;
    flex: 1;
    margin: 5px;
    padding: 0px 5px;
`;

// Center

const Center = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
`;


// End
const End = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    cursor: pointer;
    margin: 0 12px;
    font-size: 14px;
`;


// code
const Navbar = () => {
    return (
        <Container>
            <Start>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SrachIcon style={{ color: "gray", fontSize: 18 }} />
                </SearchContainer>
            </Start>
            <Center>
                <Logo>Souq</Logo>
            </Center>
            <End>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
            </End>
        </Container>
    )
}

export default Navbar
