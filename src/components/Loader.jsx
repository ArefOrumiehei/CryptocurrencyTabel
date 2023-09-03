import { styled } from 'styled-components';

// Gif
import spin from '../assets/gif/Spin-1s-200px.gif'


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
            <img src={spin} alt="Spinner" />
            <span>Loading...</span>
        </Container>
    );
};

export default Loader;