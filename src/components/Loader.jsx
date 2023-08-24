// Gif
import { styled } from 'styled-components';
import spinner from '../assets/gif/Spinner-1s-200px.gif'

const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;

    & img {
        width: 120px;
        cursor: default;
    }

    & span {
        font-size: 20px;
    }
`

const Loader = () => {
    return (
        <Container>
            <img src={spinner} alt="Spinner" />
            <span>Loading...</span>
        </Container>
    );
};

export default Loader;