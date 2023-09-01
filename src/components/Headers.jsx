import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };
  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };
  return (
    <header style={{ width: "800px" }}>
      <div className="banner-container">
      <h1 className="banner-title">Jaguar Sport</h1>
      <div className='"container-icon'>
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">0</span>
          </div>
        </div>
      </div>
      </div>
        <div className="carrito">
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <figure>
                        <img
                          src={product.urlImage}
                          alt={product.title}
                          height="75px"
                        />
                      </figure>
                      <p className="cantidad-producto-carrito" style={{ margin: '0 10px' }}>
                         {product.quantity}
                      </p>
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <Button
                className="btn-clear-all"
                onClick={onCleanCart}
                variant="outlined" 
              >
                Vaciar Carrito
              </Button>
            </>
          ) : (
            <p className="cart-empty">El carrito esta vacio</p>
          )}
        </div>
        </div>
      
    </header>
  );
};



