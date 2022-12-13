import styled from 'styled-components';

const StyledCard = styled.section`
    background-color: #fff;
    box-shadow: 0 0 7rem #c7cbe3;
    width: 37.5rem;
    border-radius: 2.5rem;
    position: relative;
    overflow: auto;

    h2 {
        position: sticky;
        padding: 2.5rem 3.75rem;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(1.5rem);
        border-radius: 2.5rem 2.5rem 0 0;
        z-index: 20;
    }
`;

interface Props {
    heading: string;
    children?: JSX.Element;
}

const Card = ({ heading, children }: Props) => (
    <StyledCard>
        <h2>{heading}</h2>
        {children}
    </StyledCard>
);

export default Card;
