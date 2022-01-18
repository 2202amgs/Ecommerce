import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
	width: 100%;
	height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: #df1d00f0;
	color: #fff;
`;

const Title = styled.h1``;

const Description = styled.div``;

const InputContainer = styled.div`
	width: 40vw;
	height: 45px;
	background-color: white;
	margin-top: 20px;
	display: flex;
	border: 1px solid lightgray;
`;
const Input = styled.input`
	flex: 8;
	padding: 5px 10px;
	border: none;
	&:focus{
		outline: none;
	}
`;
const Button = styled.button`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	background-color: teal;
	color: white;
`;

const News = props => {
	return (
		<Container>
			<Title>News</Title>
			<Description>Exercitation non consequat proident sit.</Description>
			<InputContainer>
				<Input placeholder="Your Email"/>
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
}


export default News;