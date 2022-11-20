import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {

    const [searchValue, setSearchValue] = useState("")

    

    function handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        console.log(formData)
    }


    return (
        <>
            <div className="container fluid">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-capitalize text-slanted">
                            search for recipe with <strong className="text-primary">Panch Foron</strong>
                        </h1>
                        <form className='mt-4' onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type='text'
                                    className='form-control'
                                    name='search'
                                    placeholder='Search Items'
                                 />
                                <div className="input-group-append">
                                    <button
                                        type='submit'
                                        className="input-group-text bg-primary text-white"
                                    >
                                        <SearchIcon />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search