import React, {useState} from 'react';
import FilterTag from "./FilterTag.js";


const StepTwo = props => {
//     return (
//       <>
//         <p> Step 2/3 </p>

//         <h2>Which geographical locations do you want to target?</h2>

//         <SearchInput
//           placeholder="eg.NewYork, Canada, Moscow"
//           grabLocation={props.grabLocation}
//           resetButton={props.resetButton}
//         />
//         {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//                 <FilterTag name="Gaming"/>
//                 <FilterTag name="Gaming"/>
//                 <FilterTag name="Gaming"/> 
//             <div style={{height:50,width:2,backgroundColor:'black',marginLeft:10,marginRight:10}}></div>

//                 <FilterTag name="Vancouver "/>
//                 <FilterTag name="Los Angeles"/>
//     </div> */}
//       </>
//     );
// }

const [selectedCountry, setSelectedCountry] = useState("");

  

  const changeHandler = (event) => {
    const c = event.target.value;
    props.grabLocation(c)
  };


  const countryCode = [
    {
       "country": "Afganistan",
       "code": "AF"
    },
    {
        "country": "Albania",
        "code": "AL"
     },
     {
        "country": "Algeria",
        "code": "DZ"
     },
     {
        "country": "American Samoa",
        "code": "AS"
     },
     {
        "country": "Andorra",
        "code": "AD"
     },
     {
        "country": "Angola",
        "code": "AO"
     },
     {
        "country": "Anguilla",
        "code": "AI"
     },
     {
        "country": "Antarctica",
        "code": "AQ"
     },
     {
        "country": "Antigua and Barbuda",
        "code": "AG"
     },
     {
        "country": "Argentina",
        "code": "AR"
     },
     {
        "country": "Armenia",
        "code": "AM"
     },
     {
        "country": "Aruba",
        "code": "AW"
     },
     {
        "country": "Australia",
        "code": "AU"
     },
     {
        "country": "Austria",
        "code": "AT"
     },
     {
        "country": "Azerbaijan",
        "code": "AZ"
     },
     {
        "country": "Bahamas (the)",
        "code": "BS"
     },
     {
        "country": "Bahrain",
        "code": "BH"
     },
     {
        "country": "Bangladesh",
        "code": "BD"
     },
     {
        "country": "Barbados",
        "code": "BB"
     },
     {
        "country": "Belarus",
        "code": "BY"
     },
     {
        "country": "Belgium",
        "code": "BE"
     },
     {
        "country": "Belize",
        "code": "BZ"
     },
     {
        "country": "Benin",
        "code": "BJ"
     },
     {
        "country": "Bermuda",
        "code": "BM"
     },
     {
        "country": "Bhutan",
        "code": "BT"
     },
     {
        "country": "Bolivia (Plurinational State of)",
        "code": "BO"
     },
     {
        "country": "Bonaire, Sint Eustatius and Saba",
        "code": "BQ"
     },
     {
        "country": "Bosnia and Herzegovina",
        "code": "BA"
     },
     {
        "country": "Botswana",
        "code": "BW"
     },
     {
        "country": "Bouvet Island",
        "code": "BV"
     },
     {
        "country": "Brazil",
        "code": "BR"
     },
     {
        "country": "British Indian Ocean Territory (the)",
        "code": "IO"
     },
     {
        "country": "Brunei Darussalam",
        "code": "BN"
     },
     {
        "country": "Bulgaria",
        "code": "BG"
     },
     {
        "country": "Burkina Faso",
        "code": "BF"
     },
     {
        "country": "Burundi",
        "code": "BI"
     },
     {
        "country": "Cabo Verde",
        "code": "CV"
     },
     {
        "country": "Cambodia",
        "code": "KH"
     },
     {
        "country": "Cameroon",
        "code": "CM"
     },
     {
        "country": "Canada",
        "code": "CA"
     },
     {
        "country": "Cayman Islands (the)",
        "code": "KY"
     },
     {
        "country": "Central African Republic (the)",
        "code": "CF"
     },
     {
        "country": "Chad",
        "code": "TD"
     },
     {
        "country": "Chile",
        "code": "CL"
     },
     {
        "country": "China",
        "code": "CN"
     },
     {
        "country": "Christmas Island",
        "code": "CX"
     },
     {
        "country": "Cocos (Keeling) Islands (the)",
        "code": "CC"
     },
     {
        "country": "Colombia",
        "code": "CO"
     },
     {
        "country": "Comoros (the)",
        "code": "KM"
     },
     {
        "country": "Congo (the Democratic Republic of the)",
        "code": "CD"
     },
     {
        "country": "Congo (the)",
        "code": "CG"
     },
     {
        "country": "Cook Islands (the)",
        "code": "CK"
     },
     {
        "country": "Costa Rica",
        "code": "CR"
     },
     {
        "country": "Croatia",
        "code": "HR"
     },
     {
        "country": "Cuba",
        "code": "CU"
     },
     {
        "country": "Curaçao",
        "code": "CW"
     },
     {
        "country": "Cyprus",
        "code": "CY"
     },
     {
        "country": "Czechia",
        "code": "CZ"
     },
     {
        "country": "Côte d'Ivoire",
        "code": "CI"
     },
     {
        "country": "Denmark",
        "code": "DK"
     },
     {
        "country": "Djibouti",
        "code": "DJ"
     },
     {
        "country": "Dominica",
        "code": "DM"
     },
     {
        "country": "Dominican Republic (the)",
        "code": "DO"
     },
     {
        "country": "Ecuador",
        "code": "EC"
     },
     {
        "country": "Egypt",
        "code": "EG"
     },
     {
        "country": "El Salvador",
        "code": "SV"
     },
     {
        "country": "Equatorial Guinea",
        "code": "GQ"
     },
     {
        "country": "Eritrea",
        "code": "ER"
     },
     {
        "country": "Estonia",
        "code": "EE"
     },
     {
        "country": "Eswatini",
        "code": "SZ"
     },
     {
        "country": "Ethiopia",
        "code": "ET"
     },

     {
        "country": "Falkland Islands (the) [Malvinas]",
        "code": "FK"
     },
     {
        "country": "Faroe Islands (the)",
        "code": "FO"
     },
     {
        "country": "Fiji",
        "code": "FJ"
     },

     {
        "country": "Finland",
        "code": "FI"
     },
     {
        "country": "France",
        "code": "FR"
     },
     {
        "country": "French Guiana",
        "code": "GF"
     },
     {
        "country": "French Polynesia",
        "code": "PF"
     },
     {
        "country": "French Southern Territories (the)",
        "code": "TF"
     },
     {
        "country": "Gabon",
        "code": "GA"
     },
     {
        "country": "Gambia (the)",
        "code": "GM"
     },
     {
        "country": "Georgia",
        "code": "GE"
     },
     {
        "country": "Germany",
        "code": "DE"
     },
     {
        "country": "Ghana",
        "code": "GH"
     },
     {
        "country": "Gibraltar",
        "code": "GI"
     },
     {
        "country": "Greece",
        "code": "GR"
     },
     {
        "country": "Greenland",
        "code": "GL"
     },
     {
        "country": "Grenada",
        "code": "GD"
     },
     {
        "country": "Guadeloupe",
        "code": "GP"
     },
     {
        "country": "Guam",
        "code": "GU"
     },
     {
        "country": "Guatemala",
        "code": "GT"
     },
     {
        "country": "Guernsey",
        "code": "GG"
     },
     {
        "country": "Guinea",
        "code": "GN"
     },
     {
        "country": "Guinea-Bissau",
        "code": "GW"
     },
     {
        "country": "Guyana",
        "code": "GY"
     },
     {
        "country": "Haiti",
        "code": "HT"
     },
     {
        "country": "Heard Island and McDonald Islands",
        "code": "HM"
     },
     {
        "country": "Holy See (the)",
        "code": "VA"
     },
     {
        "country": "Honduras",
        "code": "HN"
     },
     {
        "country": "Hong Kong",
        "code": "HK"
     },
     {
        "country": "Hungary",
        "code": "HU"
     },
     {
        "country": "Iceland",
        "code": "IS"
     },
     {
        "country": "India",
        "code": "IN"
     },
     {
        "country": "Indonesia",
        "code": "ID"
     },
     {
        "country": "Mexico",
        "code": "IR"
     },
     {
        "country": "Iraq",
        "code": "IQ"
     },
     {
        "country": "Ireland",
        "code": "IE"
     },
     {
        "country": "Isle of Man",
        "code": "IM"
     },
     {
        "country": "Israel",
        "code": "IL"
     },
     {
        "country": "Italy",
        "code": "IT"
     },
     {
        "country": "Jamaica",
        "code": "JM"
     },
     {
        "country": "Japan",
        "code": "JP"
     },
     {
        "country": "Jersey",
        "code": "JE"
     },
     {
        "country": "Jordan",
        "code": "JO"
     },
     {
        "country": "Kazakhstan",
        "code": "KZ"
     },
     {
        "country": "Kenya",
        "code": "KE"
     },

     {
        "country": "Kiribati",
        "code": "KI"
     },
     {
        "country": "Korea (the Democratic People's Republic of)",
        "code": "KP"
     },
     {
        "country": "Korea (the Republic of)",
        "code": "KR"
     },
     {
        "country": "Kuwait",
        "code": "KW"
     },
     {
        "country": "Kyrgyzstan",
        "code": "KG"
     },
     {
        "country": "Lao People's Democratic Republic (the)",
        "code": "LA"
     },
     {
        "country": "Latvia",
        "code": "LV"
     },
     {
        "country": "Lebanon",
        "code": "LB"
     },
     {
        "country": "Lesotho",
        "code": "LS"
     },
     {
        "country": "Liberia",
        "code": "LR"
     },
     {
        "country": "Libya",
        "code": "LY"
     },
     {
        "country": "Liechtenstein",
        "code": "LI"
     },
     {
        "country": "Lithuania",
        "code": "LT"
     },
     {
        "country": "Luxembourg",
        "code": "LU"
     },
     {
        "country": "Macao",
        "code": "MO"
     },
     {
        "country": "Madagascar",
        "code": "MG"
     },
     {
        "country": "Malawi",
        "code": "MW"
     },
     {
        "country": "Malaysia",
        "code": "MY"
     },
     {
        "country": "Maldives",
        "code": "MY"
     },
     {
        "country": "Mali",
        "code": "ML"
     },
     {
        "country": "Malta",
        "code": "MT"
     },
     {
        "country": "Marshall Islands (the)",
        "code": "MH"
     },
     {
        "country": "Martinique",
        "code": "MQ"
     },
     {
        "country": "Mauritania",
        "code": "MR"
     },
     {
        "country": "Mauritius",
        "code": "MU"
     },
     {
        "country": "Mayotte",
        "code": "YT"
     },
     {
        "country": "Mexico",
        "code": "MX"
     },
     {
        "country": "Micronesia (Federated States of)",
        "code": "FM"
     },
     {
        "country": "Moldova (the Republic of)",
        "code": "MD"
     },
     {
        "country": "Monaco",
        "code": "MC"
     },
     {
        "country": "Mongolia",
        "code": "MN"
     },
     {
        "country": "Montenegro",
        "code": "MS"
     },
     {
        "country": "Morocco",
        "code": "MA"
     },
     {
        "country": "Mozambique",
        "code": "MZ"
     },
     {
        "country": "Myanmar",
        "code": "MM"
     },
     {
        "country": "Namibia",
        "code": "NA"
     },
     {
        "country": "Nauru",
        "code": "NR"
     },
     {
        "country": "Nepal",
        "code": "NP"
     },
     {
        "country": "Netherlands (the)",
        "code": "NL"
     },
     {
        "country": "New Caledonia",
        "code": "NC"
     },
     {
        "country": "New Zealand",
        "code": "NZ"
     },
     {
        "country": "Nicaragua",
        "code": "NI"
     },
     {
        "country": "Niger (the)",
        "code": "NE"
     },
     {
        "country": "Niue",
        "code": "NU"
     },
     {
        "country": "Norfolk Island",
        "code": "NF"
     },
     {
        "country": "Northern Mariana Islands (the)",
        "code": "MP"
     },
     {
        "country": "Norway",
        "code": "NO"
     },

     {
        "country": "Oman",
        "code": "OM"
     },
     {
        "country": "Pakistan",
        "code": "PK"
     },
     {
        "country": "Palau",
        "code": "PW"
     },
     {
        "country": "Palestine, State of",
        "code": "PS"
     },
     {
        "country": "Panama",
        "code": "PA"
     },
     {
        "country": "Papua New Guinea",
        "code": "PG"
     },
     {
        "country": "Paraguay",
        "code": "PY"
     },
     {
        "country": "Peru",
        "code": "PE"
     },
     {
        "country": "Philippines (the)",
        "code": "PH"
     },
     {
        "country": "Pitcairn",
        "code": "PN"
     },
     {
        "country": "Poland",
        "code": "PL"
     },
     {
        "country": "Portugal",
        "code": "PT"
     },
     {
        "country": "Puerto Rico",
        "code": "PR"
     },
     {
        "country": "Qatar",
        "code": "QA"
     },
     {
        "country": "Republic of North Macedonia",
        "code": "MK"
     },
     {
        "country": "Romania",
        "code": "RO"
     },
     {
        "country": "Russian Federation (the)",
        "code": "RU"
     },
     {
        "country": "Rwanda",
        "code": "RW"
     },
     {
        "country": "Réunion",
        "code": "RE"
     },
     {
        "country": "Saint Barthélemy",
        "code": "BL"
     },
     {
        "country": "Saint Helena, Ascension and Tristan da Cunha",
        "code": "SH"
     },
     {
        "country": "Saint Kitts and Nevis",
        "code": "KN"
     },
     {
        "country": "Saint Lucia",
        "code": "LC"
     },
     {
        "country": "Saint Martin (French part)",
        "code": "MF"
     },
     {
        "country": "Saint Pierre and Miquelon",
        "code": "PM"
     },
     {
        "country": "Saint Vincent and the Grenadines",
        "code": "VC"
     },
     {
        "country": "Samoa",
        "code": "WS"
     },
     {
        "country": "San Marino",
        "code": "SM"
     },
     {
        "country": "Sao Tome and Principe",
        "code": "ST"
     },
     {
        "country": "Saudi Arabia",
        "code": "SA"
     },
     {
        "country": "Senegal",
        "code": "SN"
     },
     {
        "country": "Serbia",
        "code": "RS"
     },
     {
        "country": "Seychelles",
        "code": "SC"
     },
     {
        "country": "Sierra Leone",
        "code": "SL"
     },
     {
        "country": "Singapore",
        "code": "SG"
     },
     {
        "country": "Sint Maarten (Dutch part)",
        "code": "SX"
     },
     {
        "country": "Slovakia",
        "code": "SK"
     },
     {
        "country": "Slovenia",
        "code": "SI"
     },
     {
        "country": "Solomon Islands",
        "code": "SB"
     },
     {
        "country": "Somalia",
        "code": "SO"
     },
     {
        "country": "South Africa",
        "code": "ZA"
     },
     {
        "country": "South Georgia and the South Sandwich Islands",
        "code": "GS"
     },
     {
        "country": "South Sudan",
        "code": "SS"
     },
     {
        "country": "Spain",
        "code": "ES"
     },
     {
        "country": "Sri Lanka",
        "code": "LK"
     },
     {
        "country": "Sudan (the)",
        "code": "SD"
     },
     {
        "country": "Suriname",
        "code": "SR"
     },
     {
        "country": "Svalbard and Jan Mayen",
        "code": "SJ"
     },
     {
        "country": "Sweden",
        "code": "SE"
     },
     {
        "country": "Switzerland",
        "code": "CH"
     },
     {
        "country": "Syrian Arab Republic",
        "code": "SY"
     },
     {
        "country": "Taiwan (Province of China)",
        "code": "TW"
     },
     {
        "country": "Tajikistan",
        "code": "TJ"
     },
     {
        "country": "Tanzania, United Republic of",
        "code": "TZ"
     },
     {
        "country": "Thailand",
        "code": "TH"
     },
     {
        "country": "Timor-Leste",
        "code": "TL"
     },
     {
        "country": "Togo",
        "code": "TG"
     },
     {
        "country": "Tokelau",
        "code": "TK"
     },
     {
        "country": "Tonga",
        "code": "TO"
     },
     {
        "country": "Trinidad and Tobago",
        "code": "TT"
     },
     {
        "country": "Tunisia",
        "code": "TN"
     },

     {
        "country": "Turkey",
        "code": "TR"
     },
     {
        "country": "Turkmenistan",
        "code": "TM"
     },
     {
        "country": "Turks and Caicos Islands (the)",
        "code": "TC"
     },{
        "country": "Tuvalu",
        "code": "TV"
     },
     {
        "country": "Uganda",
        "code": "UG"
     },
     {
        "country": "Ukraine",
        "code": "UA"
     },
     {
        "country": "United Arab Emirates (the)",
        "code": "AE"
     },
     {
        "country": "United Kingdom of Great Britain and Northern Ireland (the)",
        "code": "GB"
     },
     {
        "country": "United States Minor Outlying Islands (the)",
        "code": "UM"
     },

     {
        "country": "United States of America (the)",
        "code": "US"
     },
     {
        "country": "Uruguay",
        "code": "UY"
     },
     {
        "country": "Uzbekistan",
        "code": "UZ"
     },
     {
        "country": "Vanuatu",
        "code": "VU"
     },
     {
        "country": "Venezuela (Bolivarian Republic of)",
        "code": "VE"
     },

     {
        "country": "Viet Nam",
        "code": "VN"
     },
     {
        "country": "Virgin Islands (British)",
        "code": "VG"
     },
     {
        "country": "Virgin Islands (U.S.)",
        "code": "VI"
     },
     {
        "country": "Wallis and Futuna",
        "code": "WF"
     },
     {
        "country": "Western Sahara",
        "code": "EH"
     },
     {
        "country": "Yemen",
        "code": "YE"
     },
     {
        "country": "Zambia",
        "code": "ZM"
     },
     {
        "country": "Zimbabwe",
        "code": "ZW"
     },
     {
        "country": "Åland Islands",
        "code": "AX"
     }
    ]

    return (
      <>

        <p>Step 2/2</p>
        <h2>Which geographical locations do you want to target?</h2>

        {/* <SearchInput
          grabKeyword={props.grabKeyword}
          resetButton={props.resetButton}
        /> */}
        <div
          className="search_inp_div">

          <select className="search_input" onChange={changeHandler} required>
            {props.location ? (
              <option>{JSON.parse(props.location).country}</option>
            ) : (
              <option>Select a country</option>
            )}

            {countryCode.map((country) => (
              <option value={JSON.stringify(country)} name={country.country}>
                {country.country}
              </option>
            ))}
          </select>

          <div className="search-filters">
          {props.keywordArray.map((key) => (
            <FilterTag name={key} />
          ))}

          {props.location ? (
            <FilterTag
              name={JSON.parse(props.location).country}
              location={props.location}
            />
          ) : (
            <></>
          )}
        </div>
        </div>
      </>
    );
}



export default StepTwo;