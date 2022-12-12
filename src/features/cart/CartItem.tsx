interface props {
    id: string;
    name: string;
    price: number;
    imgSrc: string;
    amount: number;
}

const CartItem = ({ id, name, price, imgSrc, amount }: props) => {
    return <div>CartItem</div>;
};

export default CartItem;
