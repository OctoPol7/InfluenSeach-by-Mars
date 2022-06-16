import React from 'react'

const CountryDropdown = props => {
    return(
        <>
            <select name="country" placeholder="Choose a country">
                <option value="America">America</option>
                <option value="China">China</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Philippines">Philippines</option>
                <option value="South Korea">India</option>
                <option value="Thailand">Thailand</option>
            </select>

        </>
    )
}

export default CountryDropdown;