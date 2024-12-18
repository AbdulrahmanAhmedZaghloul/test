import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const AddToCartButton = ({ product, selectedSize, quantity, onAddToCart }) => {
    const { t } = useTranslation();

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error(`${t("cart.errorSize")}`, { autoClose: 3000 });
            return;
        }
        const sizeDetails = product.stock.find((s) => s.size === selectedSize);
        if (!sizeDetails) {
            toast.error(`${t("cart.errorSize")}`, { autoClose: 3000 });
            return;
        }
        if (quantity < 1) {
            toast.error(`${t("cart.errorQuantity")}`, { autoClose: 3000 });
            return;
        }

        const newCartItem = {  product_id: product.id,
            size_id: sizeDetails?.size_id,
            name: product.category_name,
            imag: product.imag,
            quantity: Number(quantity),
            size: selectedSize,
            price: sizeDetails.price,
            total_price: sizeDetails.price * Number(quantity),
        };

        onAddToCart(newCartItem);
        toast.success(`${t("cart.success")}`, { autoClose: 3000 });
    };

    return (
        <button
            onClick={handleAddToCart}
            className='border border-pink-500 hover:border-none mx-2 shadow-sm my-4 p-1 py-2 px-3 w-full hover:bg-[#242323] hover:text-pink-500 -skew-x-[25deg] hover:-skew-x-[5deg] transition-transform'
        >
            {t("productId.add")}
        </button>
    );
};

AddToCartButton.propTypes = {
    product: PropTypes.object.isRequired,
    selectedSize: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default AddToCartButton;
