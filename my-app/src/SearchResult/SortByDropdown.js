import React from 'react'

const SortByDropdown = props => {
    return(
        <>
            <label for="sortby">Sort by:</label>

            <select name="sortby">
                <option value="alphabetical-order">Alphabetical Order</option>
                <option value="rating">Rating</option>
                <option value="highest-to-lowest">Subscriber Count (Highest to Lowest)</option>
                <option value="lowest-to-highest">Subscriber Count (Lowest to Highest)</option>
            </select>

        </>
    )
}

export default SortByDropdown;