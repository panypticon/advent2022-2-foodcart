import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { add, selectCart } from '../cart/CartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import check from '../../assets/check.svg';

const StyledMenuItem = styled.li`
    position: relative;
    z-index: 0;
    display: flex;
    gap: 2.5rem;
    list-style: none;

    .MenuItem {
        &__background {
            position: absolute;
            top: 2rem;
            left: 2.5rem;
            bottom: 1.25rem;
            right: 0;
            z-index: -10;
            border-radius: 2.5rem 0 0 2.5rem;
        }

        &__data {
            margin-top: 3.75rem;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            padding-right: 2.5rem;
            flex: 1;

            h3 {
                font-size: 1.8rem;
                font-weight: 400;
            }

            button {
                background-color: #6b00f5;
                border: none;
                border-radius: 5rem;
                color: #fff;
                font-size: inherit;
                font-weight: 700;
                height: 3.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.625rem;
                padding: 0 2.5rem;
                cursor: pointer;
                width: 90%;

                &:disabled {
                    background-color: #000;

                    img {
                        width: 1.6rem;
                        margin: 0;
                        align-self: unset;
                    }
                }
            }
        }

        &__price {
            font-size: 2.4rem;
            font-weight: 700;
        }
    }

    &:nth-child(4n + 1) {
        .MenuItem__background {
            background-color: rgba(122, 179, 243, 0.2);
        }
    }
    &:nth-child(4n + 2) {
        .MenuItem__background {
            background-color: rgba(233, 121, 178, 0.2);
        }
    }

    &:nth-child(4n + 3) {
        .MenuItem__background {
            background-color: rgba(215, 215, 249, 0.2);
        }
    }
    &:nth-child(4n + 4) {
        .MenuItem__background {
            background-color: rgba(120, 247, 187, 0.2);
        }
    }

    img {
        width: 14rem;
        margin-left: 1rem;
        align-self: flex-start;
    }
`;

interface props {
    id: string;
    name: string;
    price: number;
    img: string;
}

const MenuItem = ({ id, name, price, img }: props) => {
    const [imgSrc, setImgSrc] = useState('');

    const { contents } = useAppSelector(selectCart);
    const isDisabled = contents.hasOwnProperty(id);

    useEffect(() => {
        (async () => {
            const { default: imported } = await import(`../../assets/${img}.png`);
            setImgSrc(imported);
        })();
    }, [img]);

    const dispatch = useAppDispatch();

    return (
        <StyledMenuItem className="MenuItem">
            <span className="MenuItem__background"></span>
            <img src={imgSrc} alt={name} />
            <div className="MenuItem__data">
                <h3>{name}</h3>
                <p className="MenuItem__price">{price.toFixed(2)}€</p>
                <button disabled={isDisabled} onClick={() => dispatch(add({ id, name, price, imgSrc }))}>
                    {isDisabled ? (
                        <>
                            <img src={check} alt="Check" />
                            In Cart
                        </>
                    ) : (
                        <>Add to Cart</>
                    )}
                </button>
            </div>
        </StyledMenuItem>
    );
};

export default MenuItem;
