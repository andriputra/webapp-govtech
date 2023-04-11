import React from 'react';
import "./styles.scss";

const Header = () => {
    return(
        <header>
            <h1 className="text-center">Employee Directory</h1>
            <p className='text-center'>
                Click on columns to filter by heading 
                or use the search box to narrow your results
            </p>
        </header>
    );
};

export default Header;