import styled from 'styled-components';

import Card from './components/card/Card';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';

import inventory from './app/inventory';

import bgLeft from './assets/bg__left.svg';
import bgRightTop from './assets/bg__top-right.svg';
import bgRightBottom from './assets/bg__btm-right.svg';

const StyledApp = styled.main`
    height: 100vh;
    background: url(${bgLeft}) no-repeat left 66%, url(${bgRightTop}) no-repeat right top,
        url(${bgRightBottom}) no-repeat right bottom, #eff0f6;
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 10rem;
`;

const App = () => {
    return (
        <StyledApp>
            <Card heading="To Go Menu">
                <Menu data={inventory} />
            </Card>
            <Card heading="Your Cart">
                <Cart />
            </Card>
        </StyledApp>
    );
};

export default App;
