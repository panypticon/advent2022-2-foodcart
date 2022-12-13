import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { increment, decrement } from './CartSlice';

import chevron from '../../assets/chevron.svg';

const StyledCartItem = styled.li`
    list-style: none;
    display: flex;
    padding: 2.5rem 0;
    margin: 0 2.5rem;
    gap: 1.25rem;
    border-bottom: 0.1rem solid #d7d7f9;

    &:first-child {
        padding-top: 0;
    }

    :last-child {
        border-bottom-width: 0.5rem;
    }

    .CartItem {
        &__img {
            position: relative;
            width: 7.5rem;
            height: 7.5rem;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 7.5rem;
                position: absolute;
            }

            span {
                background-color: #000;
                color: #fff;
                border-radius: 50%;
                z-index: 10;
                display: inline-block;
                width: 3.2rem;
                height: 3.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
            }
        }

        &__data {
            flex: 1;

            h3 {
                font-size: 1.8rem;
                font-weight: 400;
            }
        }

        &__price {
            font-weight: 700;
        }

        &__amount-price {
            margin-top: 1.25rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        &__button {
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6b00f5;
            border: none;
            border-radius: 50%;
            cursor: pointer;

            img {
                transform: translateX(-0.1rem);
            }

            &--more {
                img {
                    transform: rotate(180deg) translateX(-0.1rem);
                }
            }
        }

        &__amount {
            font-weight: 700;
            flex: 0 0 1.5rem;
            text-align: center;
        }

        &__total {
            font-weight: 700;
            font-size: 2.4rem;
            flex: 1;
            text-align: right;
        }
    }
`;

interface props {
    id: string;
    name: string;
    price: number;
    imgSrc: string;
    amount: number;
}

const CartItem = ({ id, name, price, imgSrc, amount }: props) => {
    const dispatch = useAppDispatch();

    return (
        <StyledCartItem className="CartItem">
            <span className="CartItem__img">
                <img src={imgSrc} alt={name} />
                <span>{amount}</span>
            </span>
            <div className="CartItem__data">
                <h3>{name}</h3>
                <p className="CartItem__price">{price.toFixed(2)} €</p>
                <div className="CartItem__amount-price">
                    <button className="CartItem__button CartItem__button--less" onClick={() => dispatch(decrement(id))}>
                        <img src={chevron} alt="Less" />
                    </button>
                    <span className="CartItem__amount">{amount}</span>
                    <button className="CartItem__button CartItem__button--more" onClick={() => dispatch(increment(id))}>
                        <img src={chevron} alt="More" />
                    </button>
                    <span className="CartItem__total">{(amount * price).toFixed(2)}€</span>
                </div>
            </div>
        </StyledCartItem>
    );
};

export default CartItem;
