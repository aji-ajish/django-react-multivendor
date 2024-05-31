import React from 'react'
import SellerSidebar from './SellerSidebar'

export default function SellerAddProduct() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Add Product</h4>
                        <div className="card-body">
                            <form autoComplete="off">
                                <div className="mb-3">
                                    <label htmlFor="Category" className="form-label">
                                        Category
                                    </label>
                                    <select className="form-control" id="Category">
                                        <option>--- Select Category ---</option>
                                        <option>Python</option>
                                        <option>React JS</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Title"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Price" className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Price"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="Description"
                                        autoComplete="off" rows={6}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        Profile Images
                                    </label>
                                    <input type="file" className="form-control" id="image" />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
