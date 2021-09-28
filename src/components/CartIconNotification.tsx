import React from 'react'

type props = {
  url: string
  title: string
  cartCount: string
}

export const CartIconNotification = ({ url, title, cartCount }: props) =>
  <div className="col-md-6 col-sm-6 col-xs-4 clearfix">
    <div className="header-cart clearfix">
        <div className="cart-container icon-cart">
            <a className="cart-contents" href={url} title={title}>
                <span className="cart-count">{cartCount}</span>        
            </a>
        </div>
    </div>
  </div>