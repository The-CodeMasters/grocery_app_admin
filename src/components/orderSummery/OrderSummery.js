import React from 'react'
import "./orderSummery.css"
import { back } from '../../assets/icons'



export default function OrderSummery ({ clicked, setclicked, order }) {
    const moveback = () => {
        setclicked(!clicked)
    }
    return (
        <div className="ordersummery" >
            <div className="header">
                <img className="back-button" width="15" src={back} onClick={() => moveback()} style={{ cursor: "pointer" }} />
                <h5>Order Summery</h5>
            </div>
            <OrderScreen order={order} />

        </div>
    )
}


const Product = ({ product }) => {





    return (
        <div className="product">
            <p style={{ fontWeight: "bolder" }}>{product.name}</p>
            <div className="price-qty">
                <div className="qty">
                    {product.qty} {product.unit}
                </div>
                <span className="cross">x</span>
                <span className="price">{product.price}/{product.unit}</span>
            </div>
            <div className="totalPrice">
                <p>₹{product.price * product.qty}</p>
            </div>
        </div>
    )
}

const OrderScreen = ({ order }) => {
    const orderinfo = order.orderDetails


    return (
        <div className="OrderScreen">
            <div className="products">
                {
                    order.products.map(product => {

                        return (
                            <Product product={product} />
                        )
                    })

                }
            </div>
            <div>
                <div className="otherDetails">
                    <div className="info">
                        <label htmlFor="">Order Number</label>
                        <p>{orderinfo.orderid}</p>
                    </div>
                    <div className="info">
                        <label htmlFor="">Payment</label>
                        <p>{orderinfo.payment}</p>
                    </div>
                    <div className="info">
                        <label htmlFor="">Date</label>
                        <p>{orderinfo.date}</p>
                    </div>
                    <div className="info">
                        <label htmlFor="">Phone Number</label>
                        <p>{orderinfo.phoneno}</p>
                    </div>
                    <div className="info">
                        <label htmlFor="">Deliver to</label>
                        <p>{orderinfo.address}</p>
                    </div>
                </div>
                <div>
                    <div className="calcparice">
                        <div width="50%">
                            <p>item Total</p>
                        </div>
                        <div width="50%">
                            <p>₹{order.checkouttotal}</p>
                        </div>
                    </div>
                    <div className="calcparice" style={{ color: "green", fontWeight: "800" }}>
                        <div width="50%" >
                            <p>Promo-({order.promo.code})</p>
                        </div>
                        <div width="50%">
                            <p>₹{order.promo.rate}</p>
                        </div>
                    </div>
                    <div className="calcparice" >
                        <div width="50%">
                            <p>Taxes</p>
                        </div>
                        <div width="50%">
                            <p>₹{order.taxes}</p>
                        </div>
                    </div>
                    <hr width="80%" style={{ float: 'left' }} />
                    <div className="calcparice" style={{ fontWeight: "800" }}>
                        <div width="50%">
                            <p>Grand Total</p>
                        </div>
                        <div width="50%">
                            <p>₹{order.checkouttotal - order.promo.rate - order.taxes}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

