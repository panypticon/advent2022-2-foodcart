import styled from 'styled-components';

import { useAppSelector } from '../../app/hooks';
import { selectCart } from './CartSlice';
import CartItem from './CartItem';

const StyledCart = styled.div`
    .Cart {
        &__total {
            font-weight: 700;
            margin: 2.5rem;
            display: flex;
            gap: 2.5rem;

            p {
                height: 4.5rem;
                display: flex;
                align-items: center;

                span {
                    width: 100%;
                    text-align: right;
                }
            }
        }

        &__amounts {
            font-size: 2.4rem;

            > :last-child {
                color: #6b00f5;
            }
        }

        &__labels {
            flex: 1;
        }
    }
`;

const Cart = () => {
    const { contents } = useAppSelector(selectCart);

    const subTotal = Object.values(contents).reduce((acc, { amount, price }) => acc + amount * price, 0);
    const tax = subTotal * 0.19;

    return (
        <StyledCart className="Cart">
            <ul>
                {Object.entries(contents).map(([id, { name, price, imgSrc, amount }]) => (
                    <CartItem key={id} id={id} name={name} price={price} imgSrc={imgSrc} amount={amount} />
                ))}
            </ul>
            <div className="Cart__total">
                <div className="Cart__labels">
                    <p>
                        <span>Subtotal:</span>
                    </p>
                    <p>
                        <span>Tax:</span>
                    </p>
                    <p>
                        <span>Total:</span>
                    </p>
                </div>
                <div className="Cart__amounts">
                    <p>
                        <span>{subTotal.toFixed(2)}€</span>
                    </p>
                    <p>
                        <span>{tax.toFixed(2)}€</span>
                    </p>
                    <p>
                        <span>{(subTotal + tax).toFixed(2)}€</span>
                    </p>
                </div>
            </div>
        </StyledCart>
    );
};

export default Cart;
