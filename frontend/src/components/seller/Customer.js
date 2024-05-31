import React from 'react'
import SellerSidebar from './SellerSidebar'
import { Link } from 'react-router-dom'

export default function Customer() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-responsive table-bordered ">
                                <thead className="text-center">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td>
                                            Anish
                                        </td>
                                        <td className="text-end">
                                            anish@gmail.com
                                        </td>
                                        <td className="text-center"> 9874563210</td>
                                        <td>
                                            <button className='btn btn-sm btn-primary'><i class="fa-solid fa-clipboard-list"></i> Orders</button>
                                            <button className='btn btn-sm btn-danger ms-1'><i class="fa-solid fa-trash "></i> Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td>
                                            Anish
                                        </td>
                                        <td className="text-end">
                                            anish@gmail.com
                                        </td>
                                        <td className="text-center"> 9874563210</td>
                                        <td>
                                            <button className='btn btn-sm btn-primary'><i class="fa-solid fa-clipboard-list"></i> Orders</button>
                                            <button className='btn btn-sm btn-danger ms-1'><i class="fa-solid fa-trash "></i> Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">3</td>
                                        <td>
                                            Anish
                                        </td>
                                        <td className="text-end">
                                            anish@gmail.com
                                        </td>
                                        <td className="text-center"> 9874563210</td>
                                        <td>
                                            <button className='btn btn-sm btn-primary'><i class="fa-solid fa-clipboard-list"></i> Orders</button>
                                            <button className='btn btn-sm btn-danger ms-1'><i class="fa-solid fa-trash "></i> Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">4</td>
                                        <td>
                                            Anish
                                        </td>
                                        <td className="text-end">
                                            anish@gmail.com
                                        </td>
                                        <td className="text-center"> 9874563210</td>
                                        <td>
                                            <button className='btn btn-sm btn-primary'><i class="fa-solid fa-clipboard-list"></i> Orders</button>
                                            <button className='btn btn-sm btn-danger ms-1'><i class="fa-solid fa-trash "></i> Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
