import styled from 'styled-components';
import {
	Facebook,
	Twitter,
	Instagram,
	YouTube,
	Pinterest,
	LocalPhone,
	PhoneAndroid,
	Email
} from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	${mobile({ flexDirection: 'column' })}
`;


// Start
const Start = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 20px;
`;

const Logo = styled.h1`
	margin: 5px
`;

const Description = styled.p`
	margin: 5px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	height: 40px;
	width: 40px;
	cursor: pointer;
	margin: 5px;
	color: white;
	background-color: #${({ color }) => color};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 50%;
`;


// Center
const Center = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const Title = styled.h3`
	margin-bottom: 25px;
	margin-top: 5px;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ListItem = styled.li`
	width: 50%;
`;


// End
const End = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	margin-top: 10px
`;

const Payments = styled.img`
	width: 75%;
	object-fit: cover;
`;
const Footer = () => {
	return (
		<Container>
			<Start>
				<Logo>Souq</Logo>
				<Description>
					Culpa cupidatat dolor in fugiat duis eu anim ullamco est ex excepteur aute in sit duis deserunt nisi irure excepteur dolore ut ut non eu non in tempor irure esse ad cillum id.
				</Description>
				<SocialContainer>
					<SocialIcon color="3B5999"><Facebook /></SocialIcon>
					<SocialIcon color="E4405f"><Instagram /></SocialIcon>
					<SocialIcon color="55ACEE"><Twitter /></SocialIcon>
					<SocialIcon color="E60023"><YouTube /></SocialIcon>
					<SocialIcon color="E60023"><Pinterest /></SocialIcon>
				</SocialContainer>
			</Start>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
				</List>
			</Center>
			<End>
				<Title>Contact</Title>
				<ContactItem><LocalPhone /> 050 3600386</ContactItem>
				<ContactItem><PhoneAndroid /> +20 1066769540</ContactItem>
				<ContactItem><Email /> samir.love7000@gmail.com</ContactItem>
				<ContactItem><Email /> last.love27@yahoo.com</ContactItem>
				<Payments src="https://www.vhv.rs/dpng/d/615-6155786_card-payments-logo-uk-png-transparent-png.png" />
			</End>
		</Container>
	);
}

export default Footer;