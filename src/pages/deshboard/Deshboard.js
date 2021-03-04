import React, { useState } from "react"
import LeftNavigator from "../../components/leftNavigator/LeftNavigator"
import "./deshboard.css"
import Topbar from "../../components/topbar/Topbar.js"
import orders from "../../data/orders.json"
import OrderSummery from "../../components/orderSummery/OrderSummery"

export default function Deshboard () {
  const [clicked, setclicked] = useState(false)
  const [order, setOrder] = useState(null)
  const handleClick = (order) => {
    setclicked(!clicked)
    setOrder(order)

  }

  if (clicked == true) {
    return (
      <div className="deshboard">
        <LeftNavigator />
        <div className="deshboard-main">
          <Topbar />
          <OrderSummery clicked={clicked} setclicked={setclicked} order={order ? order : null} />
        </div>
      </div>

    )
  } else {
    return (
      <div className="deshboard">
        <LeftNavigator />
        <div className="deshboard-main">
          <Topbar />
          <h5>Today's Orders</h5>
          <div className="order-table">
            <table>
              <tr className="thead">
                <td>Order no</td>
                <td>status</td>
                <td>Operator</td>
                <td>Location</td>

              </tr>


              {
                orders.map(order => {
                  const orderStatus = "status " + order.statusCss
                  return (
                    <tr onClick={() => handleClick(order)} className="order-row">
                      <td>{order.orderno}</td>
                      <td><div className={orderStatus}>{order.status}</div></td>
                      <td>{order.operator}</td>
                      <td>
                        <p>{order.location}</p>
                      </td>

                    </tr>
                  )
                })


              }


            </table>
          </div>
          <div className="down-sec">
            <div className="down-sec-box">
              <p>Total Profit</p>
              <h2>₹ 50000</h2>
            </div>
            <div className="down-sec-box">
              <p>Total Users</p>
              <h2>125</h2>
            </div>
          </div>
        </div>
      </div>

    )
  }



}
