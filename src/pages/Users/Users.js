import React, { useState } from 'react'
import LeftNavigator from '../../components/leftNavigator/LeftNavigator'
import Topbar from '../../components/topbar/Topbar'
import "./users.css"
import { pen, trash, search } from "../../assets/icons"
import Model from '../../components/displayModel/Model'


export default function Users () {

    const [openmodel, setopenmodel] = useState(false)
    const clickmodel = () => {
        setopenmodel(!openmodel)
    }

    return (
        <div className="users">
            <LeftNavigator />
            <UserMain clickmodel={clickmodel} />
            {
                openmodel ? <Model openmodel={openmodel} setopenmodel={setopenmodel} /> : null
            }

        </div>
    )
}

const UserMain = ({ clickmodel }) => {
    return (
        <div className="users-main">
            <Topbar title="Users" />
            <div className="users-area">
                <div className="search-box">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="users-table">
                    <table>
                        <tr className="thead">
                            <td>Actions</td>
                            <td>User Id</td>
                            <td>FullName</td>
                            <td>Phone No</td>
                            <td>Email address</td>
                            <td>role</td>
                        </tr>
                        <tr className="user-row" onClick={() => clickmodel()}>
                            <td className="actions">
                                <img src={pen} alt="" onClick={(e) => e.stopPropagation()} />
                                <img src={trash} alt="" />
                            </td>
                            <td>
                                54545f45df
                                </td>
                            <td>
                                deep sangani
                                </td>
                            <td>
                                +91 9727164672
                                </td>
                            <td>
                                drsangani@pizza.com
                                </td>
                            <td>
                                super admin
                                </td>
                        </tr>
                        <tr className="user-row">
                            <td className="actions">
                                <img src={pen} alt="" />
                                <img src={trash} alt="" />
                            </td>
                            <td>
                                54545f45df
                                </td>
                            <td>
                                deep sangani
                                </td>
                            <td>
                                +91 9727164672
                                </td>
                            <td>
                                drsangani@pizza.com
                                </td>
                            <td>
                                super admin
                                </td>
                        </tr>
                        <tr className="user-row">
                            <td className="actions">
                                <img src={pen} alt="" />
                                <img src={trash} alt="" />
                            </td>
                            <td>
                                54545f45df
                                </td>
                            <td>
                                deep sangani
                                </td>
                            <td>
                                +91 9727164672
                                </td>
                            <td>
                                drsangani@pizza.com
                                </td>
                            <td>
                                super admin
                                </td>
                        </tr>
                        <tr>

                        </tr>
                    </table>
                </div>
            </div>

        </div>

    )
}