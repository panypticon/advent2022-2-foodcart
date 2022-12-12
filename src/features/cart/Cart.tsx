import { useAppSelector } from '../../app/hooks';
import { selectCart } from './CartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const cart = useAppSelector(selectCart);

    return (
        <ul>
            {Object.entries(cart.contents).map(([id, { name, price, imgSrc, amount }]) => (
                <CartItem key={id} id={id} name={name} price={price} imgSrc={imgSrc} amount={amount} />
            ))}
        </ul>
    );
};

export default Cart;
