import React from 'react'
import { Link } from 'react-router-dom'
import SellerSidebar from './SellerSidebar'

export default function Reports() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2 mt-2">
                    <div className="row">
                        <div className="col-md-3  mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Daily Report</h4>
                                    <h4>
                                        <Link className="btn btn-primary btn-sm">View</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Monthly Report</h4>
                                    <h4>
                                        <Link className="btn btn-primary btn-sm">View</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Yearly Report</h4>
                                    <h4>
                                        <Link className="btn btn-primary btn-sm">View</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
