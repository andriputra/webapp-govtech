import React from "react";
import './styles.scss';

const SearchForm = (props) => {
    return(
        <nav className="navbar navbar-danger bg-warning justify-content-center">
            <form onSubmit={props.handleFormSubmit} className="form-search">
                <input
                className ="form-control"
                value ={props.value}
                name="search"
                onChange={props.handleInputChange}
                type="search"
                placeholder='Search'
                />
            </form>
        </nav>
    )
}
    
export default SearchForm;
