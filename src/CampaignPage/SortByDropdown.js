import React from 'react'

const SortByDropdown = props => {
    return(
        <div>
            <label for="sortby">Sort by:</label>

            <select name="sortby">
                <option value="newest-first">Newest first</option>
                <option value="oldest-first">Oldest first</option>
                <option value="alphabetical-order">Alphabetical Order</option>
            </select>

        </div>
    )
}

export default SortByDropdown;