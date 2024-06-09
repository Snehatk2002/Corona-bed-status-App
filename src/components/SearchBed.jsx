import React from 'react'
import Navbar from './Navbar'

const SearchBed = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">BED NO</label>
                        <input type="text" className="form-control" />
                    </div>
                    <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-info">SEARCH</button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default SearchBed