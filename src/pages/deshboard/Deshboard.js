import React from "react"
import LeftNavigator from "../../components/leftNavigator/LeftNavigator"
import "./deshboard.css"
import Topbar from "../../components/topbar/Topbar.js"
export default function Deshboard () {
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
            <tr>
              <td>#1212121</td>
              <td><div className="status-completed">Completed</div></td>
              <td>deep sangani</td>
              <td>
                <p>120,silver heights,rajkot</p>
              </td>

            </tr>
            <tr>
              <td>#54454454</td>
              <td><div className="status-pending">Pending</div></td>
              <td>mr.yn</td>
              <td>
                <p>120,silver heights,rajkot</p>
              </td>

            </tr>
            <tr>
              <td>#1878777</td>
              <td><div className="status-canceled">Canceled</div></td>
              <td>ug bhai</td>
              <td>
                <p>125,silver heights,rajkot</p>
              </td>

            </tr>
            <tr>
              <td>#1878777</td>
              <td><div className="status-pending">Pending</div></td>
              <td>suraj bhai</td>
              <td>
                <p>185,silver heights,rajkot</p>
              </td>

            </tr>

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
