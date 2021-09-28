import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type product = {
  url: string
  imgPath: string
  name: string
  currency: string
  price: string
}

type props = {
  products: product[]
}

export const WooCommerce = ({ products }: props) =>
  <div className="col-md-12 mb-0">
    <div className="woocommerce">
        <ul className="products">
          {
            products.map(({
              url,
              imgPath,
              name,
              currency,
              price
            }: product) => (
              <li key={imgPath} className="product">
                  <a href={url} className="woocommerce-LoopProduct-link">
                    <LazyLoadImage
                      alt={"Placeholder"}
                      width={262}
                      height={262}
                      src={imgPath}
                    />
                    {/* <img src={imgPath} alt="Placeholder" height="300" /> */}
                    <h3>{name}</h3>

                    <span className="price">
                        <span className="amount">
                            <span>{currency}</span>{price}</span>
                    </span>
                  </a>
                  <a href={url} className="button">Add to cart</a>
              </li>
            ))
          }
        </ul>
    </div>
  </div>