import Shoppage from "../images/Shop.png";
import Checkout from "../images/Checkout.png";
import AddtoCart from "../images/Addtocart.png";
import Payment from "../images/Payforproduct.png";
import Submit from "../images/SubmitInformation.png";

const Solution = () => {
  return (
    <div>
      <h1>Proposed Solution</h1>
      <p> Search for product on main shop page.</p>
      <img src={Shoppage} alt="Main Shop Page"></img>
      <p> Add Item to cart.</p>
      <img src={AddtoCart} alt="Add to Cart"></img>
      <p> Go to checkout to purchase your product.</p>
      <img src={Checkout} alt="Checkout"></img>
      <p> Fill in the proper Information for shipping</p>
      <img src={Submit} alt="Submit"></img>
      <p> Pay for Order, Get Receipt.</p>
      <img src={Payment} alt="Payment"></img>
      <p> A lot of features are under implementation. </p>
    </div>
  );
};

export default Solution;
