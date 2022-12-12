import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenu = styled.ul`
    margin-bottom: 2.5rem;
`;

interface props {
    data: {
        [key: string]: {
            name: string;
            price: number;
            img: string;
        };
    };
}

const Menu = ({ data }: props) => (
    <StyledMenu>
        {Object.entries(data).map(([id, { name, price, img }]) => (
            <MenuItem key={id} id={id} name={name} price={price} img={img} />
        ))}
    </StyledMenu>
);

export default Menu;
