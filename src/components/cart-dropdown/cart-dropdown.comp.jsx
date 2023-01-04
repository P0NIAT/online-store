import Button from '../button/button.comp'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
   return (
      <div className='cart-dropdown-container'>
         <div className="cart-items"></div>
         <Button>go to checkout</Button>
      </div>
   );
};

export default CartDropdown;