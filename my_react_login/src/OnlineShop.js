import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const OnlineShop = () => {

    return (

//    The product to be added to cart */
    <div>
        <div style="display: flex;">
            <div class="product">
                <h2>Product 1</h2>
                <p>$10.00</p>
                <input type="hidden" id="product1" value="10.00" />
                <button class="add-to-cart" id="add-to-cart1">Add to Cart</button>
            </div>
  
            <div class="product">
                <h2>Product 2</h2>
                <p>$5.00</p>
                <input type="hidden" id="product2" value="5.00" />
                <button class="add-to-cart" id="add-to-cart2">Add to Cart</button>
            </div>

            <div class="product">
                <h2>Product 3</h2>
                <p>$20.00</p>
    
                <input type="hidden" id="product3" value="20.00" />
                <button class="add-to-cart" id="add-to-cart3">Add to Cart</button>
            </div>
        </div>


        <div class="cart">
            <h2>Cart</h2>
            <ul></ul>
            <p>Total: $<span id="cart_total">0.00</span></p>
    
                    <br />
            Items Added: <br />
            <ul id="allProd"></ul>
        </div>
    </div>
    );
};

export default OnlineShop