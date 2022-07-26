import React,{useState, useEffect, useRef} from 'react';
import Header from '../header.js'
import AddToCampainButton from './AddToCampainButton.js';
import CreatorImage from './CreatorImage.js';
import NameBoard from './NameBoard.js';
import Searchlist from './Searchlist';
import ScoreCard from './ScoreCard.js';
import DisplayBlock from './DisplayBlock';
import Graph from './Graph.js';
import GetCreatorInfo from '../GetCreatorInfo.js'
import Tag from '../SearchPage/Tag.js';
import GetCampaigns from '../GetCampaigns'
import axios from 'axios';
// import { Redirect, Route } from 'react-router-dom';
import Checkboxx from '../CampaignPage/Checkboxx'



const CreatorPage = props => {
    const [modalshow,setModalShow] = useState(false);
    const [isAddtocamp,setIsAddtoCamp]=useState(true);
    const [results, setResults] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [groupCamp, setGroupCamp] = useState([]);
    const [tags, setTags] = useState([]);

    const campaignNameRef = useRef();
    const descriptionRef = useRef();

    function showmodal(value) {
    setIsAddtoCamp(true)
    setModalShow(value);
    }

    const grabResults = (resData) => {
      console.log("Results FROM Creator ");
      console.log(resData.data);
      setResults(resData.data);
    };

    const grabCampaigns = (resData) => {
      console.log("Campaigns FROM Creator ");
      console.log(resData.data);
      setCampaigns(resData.data);
    };

    const youTubeTopicIds = [
       {
         topic: "music",
         id: "/m/04rlf",
       },
       {
         topic: "Children's music",
         id: "/m/05fw6t",
       },
       {
         topic: "Christian music",
         id: "/m/02mscn",
       },
       {
         topic: "Country",
         id: "/m/01lyv",
       },
       {
         topic: "Electronic music",
         id: "/m/02lkt",
       },
       {
         topic: "Hip hop music",
         id: "/m/0glt670",
       },
       {
         topic: "Independent music",
         id: "/m/05rwpb",
       },
       {
         topic: "Jazz",
         id: "/m/03_d0",
       },
       {
         topic: "Music of Asia",
         id: "/m/028sqc",
       },
       {
         topic: "Music of Latin America",
         id: "/m/0g293",
       },
       {
         topic: "Pop music",
         id: "/m/064t9",
       },
       {
         topic: "Reggae",
         id: "/m/06cqb",
       },
       {
         topic: "Rhythm and blues",
         id: "/m/06j6l",
       },
       {
         topic: "Rock music",
         id: "/m/06by7",
       },
       {
         topic: "Soul music",
         id: "/m/0gywn",
       },
       {
         topic: "Gaming",
         id: "/m/0bzvm2",
       },
       {
         topic: "Action game",
         id: "/m/025zzc",
       },
       {
         topic: "Action-adventure game",
         id: "/m/02ntfj",
       },
       {
         topic: "Casual game",
         id: "/m/0b1vjn",
       },
       {
         topic: "Music video game ",
         id: "/m/02hygl",
       },
       {
         topic: "Puzzle video game ",
         id: "/m/01sjng",
       },
       {
         topic: "Racing video game ",
         id: "/m/04q1x3q",
       },
       {
         topic: "Puzzle video game ",
         id: "/m/0403l3g",
       },
       {
         topic: "Role-playing video game ",
         id: "/m/0403l3g",
       },
       {
         topic: "Simulation video game ",
         id: "/m/021bp2",
       },
       {
         topic: "Sports game ",
         id: "/m/022dc6",
       },
       {
         topic: "Strategy video game ",
         id: "/m/03hf_rm",
       },
       {
         topic: "Sports",
         id: "/m/06ntj",
       },
       {
         topic: "American football",
         id: "/m/0jm_",
       },
       {
         topic: "Baseball ",
         id: "/m/018jz",
       },
       {
         topic: "Boxing",
         id: "/m/01cgz",
       },
       {
         topic: "Cricket",
         id: "/m/09xp_",
       },
       {
         topic: "Football",
         id: "/m/02vx4",
       },
       {
         topic: "Golf",
         id: "/m/037hz",
       },
       {
         topic: "Ice hockey",
         id: "/m/03tmr",
       },
       {
         topic: "Mixed martial arts",
         id: "/m/01h7lh",
       },
       {
         topic: "Motorsport",
         id: "/m/0410tth",
       },
       {
         topic: "Professional wrestling",
         id: "/m/066wd",
       },
       {
         topic: "Tennis",
         id: "/m/07bs0",
       },
       {
         topic: "Volleyball",
         id: "/m/07_53",
       },
       {
         topic: "Entertainment",
         id: "/m/02jjt",
       },
       {
         topic: "Animated cartoon",
         id: "/m/095bb",
       },
       {
         topic: "Performing arts",
         id: "/m/05qjc",
       },
       {
         topic: "Humor",
         id: "/m/09kqc",
       },
       {
         topic: "Movies",
         id: "/m/02vxn",
       },
       {
         topic: "Lifestyle",
         id: "/m/019_rr",
       },
       {
         topic: "Fashion",
         id: "/m/032tl",
       },
       {
         topic: "Fitness",
         id: "/m/027x7n",
       },
       {
         topic: "Food",
         id: "/m/02wbm",
       },
       {
         topic: "Health",
         id: "/m/0kt51",
       },
       {
         topic: "Hobby",
         id: "/m/03glg",
       },
       {
         topic: "Pets",
         id: "/m/068hy",
       },
       {
         topic: "Physical attractiveness [Beauty]",
         id: "/m/041xxh",
       },
       {
         topic: "Technology",
         id: "/m/07c1v",
       },
       {
         topic: "Tourism",
         id: "/m/07bxq",
       },
       {
         topic: "Vehicles",
         id: "/m/07yv9",
       },
       {
         topic: "Knowledge",
         id: "/m/01k8wb",
       },
       {
         topic: "Society",
         id: "/m/098wr",
       },
    ];

    const countryCode = [
      {
        country: "Afganistan",
        code: "AF",
      },
      {
        country: "Albania",
        code: "AL",
      },
      {
        country: "Algeria",
        code: "DZ",
      },
      {
        country: "American Samoa",
        code: "AS",
      },
      {
        country: "Andorra",
        code: "AD",
      },
      {
        country: "Angola",
        code: "AO",
      },
      {
        country: "Anguilla",
        code: "AI",
      },
      {
        country: "Antarctica",
        code: "AQ",
      },
      {
        country: "Antigua and Barbuda",
        code: "AG",
      },
      {
        country: "Argentina",
        code: "AR",
      },
      {
        country: "Armenia",
        code: "AM",
      },
      {
        country: "Aruba",
        code: "AW",
      },
      {
        country: "Australia",
        code: "AU",
      },
      {
        country: "Austria",
        code: "AT",
      },
      {
        country: "Azerbaijan",
        code: "AZ",
      },
      {
        country: "Bahamas (the)",
        code: "BS",
      },
      {
        country: "Bahrain",
        code: "BH",
      },
      {
        country: "Bangladesh",
        code: "BD",
      },
      {
        country: "Barbados",
        code: "BB",
      },
      {
        country: "Belarus",
        code: "BY",
      },
      {
        country: "Belgium",
        code: "BE",
      },
      {
        country: "Belize",
        code: "BZ",
      },
      {
        country: "Benin",
        code: "BJ",
      },
      {
        country: "Bermuda",
        code: "BM",
      },
      {
        country: "Bhutan",
        code: "BT",
      },
      {
        country: "Bolivia (Plurinational State of)",
        code: "BO",
      },
      {
        country: "Bonaire, Sint Eustatius and Saba",
        code: "BQ",
      },
      {
        country: "Bosnia and Herzegovina",
        code: "BA",
      },
      {
        country: "Botswana",
        code: "BW",
      },
      {
        country: "Bouvet Island",
        code: "BV",
      },
      {
        country: "Brazil",
        code: "BR",
      },
      {
        country: "British Indian Ocean Territory (the)",
        code: "IO",
      },
      {
        country: "Brunei Darussalam",
        code: "BN",
      },
      {
        country: "Bulgaria",
        code: "BG",
      },
      {
        country: "Burkina Faso",
        code: "BF",
      },
      {
        country: "Burundi",
        code: "BI",
      },
      {
        country: "Cabo Verde",
        code: "CV",
      },
      {
        country: "Cambodia",
        code: "KH",
      },
      {
        country: "Cameroon",
        code: "CM",
      },
      {
        country: "Canada",
        code: "CA",
      },
      {
        country: "Cayman Islands (the)",
        code: "KY",
      },
      {
        country: "Central African Republic (the)",
        code: "CF",
      },
      {
        country: "Chad",
        code: "TD",
      },
      {
        country: "Chile",
        code: "CL",
      },
      {
        country: "China",
        code: "CN",
      },
      {
        country: "Christmas Island",
        code: "CX",
      },
      {
        country: "Cocos (Keeling) Islands (the)",
        code: "CC",
      },
      {
        country: "Colombia",
        code: "CO",
      },
      {
        country: "Comoros (the)",
        code: "KM",
      },
      {
        country: "Congo (the Democratic Republic of the)",
        code: "CD",
      },
      {
        country: "Congo (the)",
        code: "CG",
      },
      {
        country: "Cook Islands (the)",
        code: "CK",
      },
      {
        country: "Costa Rica",
        code: "CR",
      },
      {
        country: "Croatia",
        code: "HR",
      },
      {
        country: "Cuba",
        code: "CU",
      },
      {
        country: "Curaçao",
        code: "CW",
      },
      {
        country: "Cyprus",
        code: "CY",
      },
      {
        country: "Czechia",
        code: "CZ",
      },
      {
        country: "Côte d'Ivoire",
        code: "CI",
      },
      {
        country: "Denmark",
        code: "DK",
      },
      {
        country: "Djibouti",
        code: "DJ",
      },
      {
        country: "Dominica",
        code: "DM",
      },
      {
        country: "Dominican Republic (the)",
        code: "DO",
      },
      {
        country: "Ecuador",
        code: "EC",
      },
      {
        country: "Egypt",
        code: "EG",
      },
      {
        country: "El Salvador",
        code: "SV",
      },
      {
        country: "Equatorial Guinea",
        code: "GQ",
      },
      {
        country: "Eritrea",
        code: "ER",
      },
      {
        country: "Estonia",
        code: "EE",
      },
      {
        country: "Eswatini",
        code: "SZ",
      },
      {
        country: "Ethiopia",
        code: "ET",
      },

      {
        country: "Falkland Islands (the) [Malvinas]",
        code: "FK",
      },
      {
        country: "Faroe Islands (the)",
        code: "FO",
      },
      {
        country: "Fiji",
        code: "FJ",
      },

      {
        country: "Finland",
        code: "FI",
      },
      {
        country: "France",
        code: "FR",
      },
      {
        country: "French Guiana",
        code: "GF",
      },
      {
        country: "French Polynesia",
        code: "PF",
      },
      {
        country: "French Southern Territories (the)",
        code: "TF",
      },
      {
        country: "Gabon",
        code: "GA",
      },
      {
        country: "Gambia (the)",
        code: "GM",
      },
      {
        country: "Georgia",
        code: "GE",
      },
      {
        country: "Germany",
        code: "DE",
      },
      {
        country: "Ghana",
        code: "GH",
      },
      {
        country: "Gibraltar",
        code: "GI",
      },
      {
        country: "Greece",
        code: "GR",
      },
      {
        country: "Greenland",
        code: "GL",
      },
      {
        country: "Grenada",
        code: "GD",
      },
      {
        country: "Guadeloupe",
        code: "GP",
      },
      {
        country: "Guam",
        code: "GU",
      },
      {
        country: "Guatemala",
        code: "GT",
      },
      {
        country: "Guernsey",
        code: "GG",
      },
      {
        country: "Guinea",
        code: "GN",
      },
      {
        country: "Guinea-Bissau",
        code: "GW",
      },
      {
        country: "Guyana",
        code: "GY",
      },
      {
        country: "Haiti",
        code: "HT",
      },
      {
        country: "Heard Island and McDonald Islands",
        code: "HM",
      },
      {
        country: "Holy See (the)",
        code: "VA",
      },
      {
        country: "Honduras",
        code: "HN",
      },
      {
        country: "Hong Kong",
        code: "HK",
      },
      {
        country: "Hungary",
        code: "HU",
      },
      {
        country: "Iceland",
        code: "IS",
      },
      {
        country: "India",
        code: "IN",
      },
      {
        country: "Indonesia",
        code: "ID",
      },
      {
        country: "Mexico",
        code: "IR",
      },
      {
        country: "Iraq",
        code: "IQ",
      },
      {
        country: "Ireland",
        code: "IE",
      },
      {
        country: "Isle of Man",
        code: "IM",
      },
      {
        country: "Israel",
        code: "IL",
      },
      {
        country: "Italy",
        code: "IT",
      },
      {
        country: "Jamaica",
        code: "JM",
      },
      {
        country: "Japan",
        code: "JP",
      },
      {
        country: "Jersey",
        code: "JE",
      },
      {
        country: "Jordan",
        code: "JO",
      },
      {
        country: "Kazakhstan",
        code: "KZ",
      },
      {
        country: "Kenya",
        code: "KE",
      },

      {
        country: "Kiribati",
        code: "KI",
      },
      {
        country: "Korea (the Democratic People's Republic of)",
        code: "KP",
      },
      {
        country: "Korea (the Republic of)",
        code: "KR",
      },
      {
        country: "Kuwait",
        code: "KW",
      },
      {
        country: "Kyrgyzstan",
        code: "KG",
      },
      {
        country: "Lao People's Democratic Republic (the)",
        code: "LA",
      },
      {
        country: "Latvia",
        code: "LV",
      },
      {
        country: "Lebanon",
        code: "LB",
      },
      {
        country: "Lesotho",
        code: "LS",
      },
      {
        country: "Liberia",
        code: "LR",
      },
      {
        country: "Libya",
        code: "LY",
      },
      {
        country: "Liechtenstein",
        code: "LI",
      },
      {
        country: "Lithuania",
        code: "LT",
      },
      {
        country: "Luxembourg",
        code: "LU",
      },
      {
        country: "Macao",
        code: "MO",
      },
      {
        country: "Madagascar",
        code: "MG",
      },
      {
        country: "Malawi",
        code: "MW",
      },
      {
        country: "Malaysia",
        code: "MY",
      },
      {
        country: "Maldives",
        code: "MY",
      },
      {
        country: "Mali",
        code: "ML",
      },
      {
        country: "Malta",
        code: "MT",
      },
      {
        country: "Marshall Islands (the)",
        code: "MH",
      },
      {
        country: "Martinique",
        code: "MQ",
      },
      {
        country: "Mauritania",
        code: "MR",
      },
      {
        country: "Mauritius",
        code: "MU",
      },
      {
        country: "Mayotte",
        code: "YT",
      },
      {
        country: "Mexico",
        code: "MX",
      },
      {
        country: "Micronesia (Federated States of)",
        code: "FM",
      },
      {
        country: "Moldova (the Republic of)",
        code: "MD",
      },
      {
        country: "Monaco",
        code: "MC",
      },
      {
        country: "Mongolia",
        code: "MN",
      },
      {
        country: "Montenegro",
        code: "MS",
      },
      {
        country: "Morocco",
        code: "MA",
      },
      {
        country: "Mozambique",
        code: "MZ",
      },
      {
        country: "Myanmar",
        code: "MM",
      },
      {
        country: "Namibia",
        code: "NA",
      },
      {
        country: "Nauru",
        code: "NR",
      },
      {
        country: "Nepal",
        code: "NP",
      },
      {
        country: "Netherlands (the)",
        code: "NL",
      },
      {
        country: "New Caledonia",
        code: "NC",
      },
      {
        country: "New Zealand",
        code: "NZ",
      },
      {
        country: "Nicaragua",
        code: "NI",
      },
      {
        country: "Niger (the)",
        code: "NE",
      },
      {
        country: "Niue",
        code: "NU",
      },
      {
        country: "Norfolk Island",
        code: "NF",
      },
      {
        country: "Northern Mariana Islands (the)",
        code: "MP",
      },
      {
        country: "Norway",
        code: "NO",
      },

      {
        country: "Oman",
        code: "OM",
      },
      {
        country: "Pakistan",
        code: "PK",
      },
      {
        country: "Palau",
        code: "PW",
      },
      {
        country: "Palestine, State of",
        code: "PS",
      },
      {
        country: "Panama",
        code: "PA",
      },
      {
        country: "Papua New Guinea",
        code: "PG",
      },
      {
        country: "Paraguay",
        code: "PY",
      },
      {
        country: "Peru",
        code: "PE",
      },
      {
        country: "Philippines (the)",
        code: "PH",
      },
      {
        country: "Pitcairn",
        code: "PN",
      },
      {
        country: "Poland",
        code: "PL",
      },
      {
        country: "Portugal",
        code: "PT",
      },
      {
        country: "Puerto Rico",
        code: "PR",
      },
      {
        country: "Qatar",
        code: "QA",
      },
      {
        country: "Republic of North Macedonia",
        code: "MK",
      },
      {
        country: "Romania",
        code: "RO",
      },
      {
        country: "Russian Federation (the)",
        code: "RU",
      },
      {
        country: "Rwanda",
        code: "RW",
      },
      {
        country: "Réunion",
        code: "RE",
      },
      {
        country: "Saint Barthélemy",
        code: "BL",
      },
      {
        country: "Saint Helena, Ascension and Tristan da Cunha",
        code: "SH",
      },
      {
        country: "Saint Kitts and Nevis",
        code: "KN",
      },
      {
        country: "Saint Lucia",
        code: "LC",
      },
      {
        country: "Saint Martin (French part)",
        code: "MF",
      },
      {
        country: "Saint Pierre and Miquelon",
        code: "PM",
      },
      {
        country: "Saint Vincent and the Grenadines",
        code: "VC",
      },
      {
        country: "Samoa",
        code: "WS",
      },
      {
        country: "San Marino",
        code: "SM",
      },
      {
        country: "Sao Tome and Principe",
        code: "ST",
      },
      {
        country: "Saudi Arabia",
        code: "SA",
      },
      {
        country: "Senegal",
        code: "SN",
      },
      {
        country: "Serbia",
        code: "RS",
      },
      {
        country: "Seychelles",
        code: "SC",
      },
      {
        country: "Sierra Leone",
        code: "SL",
      },
      {
        country: "Singapore",
        code: "SG",
      },
      {
        country: "Sint Maarten (Dutch part)",
        code: "SX",
      },
      {
        country: "Slovakia",
        code: "SK",
      },
      {
        country: "Slovenia",
        code: "SI",
      },
      {
        country: "Solomon Islands",
        code: "SB",
      },
      {
        country: "Somalia",
        code: "SO",
      },
      {
        country: "South Africa",
        code: "ZA",
      },
      {
        country: "South Georgia and the South Sandwich Islands",
        code: "GS",
      },
      {
        country: "South Sudan",
        code: "SS",
      },
      {
        country: "Spain",
        code: "ES",
      },
      {
        country: "Sri Lanka",
        code: "LK",
      },
      {
        country: "Sudan (the)",
        code: "SD",
      },
      {
        country: "Suriname",
        code: "SR",
      },
      {
        country: "Svalbard and Jan Mayen",
        code: "SJ",
      },
      {
        country: "Sweden",
        code: "SE",
      },
      {
        country: "Switzerland",
        code: "CH",
      },
      {
        country: "Syrian Arab Republic",
        code: "SY",
      },
      {
        country: "Taiwan (Province of China)",
        code: "TW",
      },
      {
        country: "Tajikistan",
        code: "TJ",
      },
      {
        country: "Tanzania, United Republic of",
        code: "TZ",
      },
      {
        country: "Thailand",
        code: "TH",
      },
      {
        country: "Timor-Leste",
        code: "TL",
      },
      {
        country: "Togo",
        code: "TG",
      },
      {
        country: "Tokelau",
        code: "TK",
      },
      {
        country: "Tonga",
        code: "TO",
      },
      {
        country: "Trinidad and Tobago",
        code: "TT",
      },
      {
        country: "Tunisia",
        code: "TN",
      },

      {
        country: "Turkey",
        code: "TR",
      },
      {
        country: "Turkmenistan",
        code: "TM",
      },
      {
        country: "Turks and Caicos Islands (the)",
        code: "TC",
      },
      {
        country: "Tuvalu",
        code: "TV",
      },
      {
        country: "Uganda",
        code: "UG",
      },
      {
        country: "Ukraine",
        code: "UA",
      },
      {
        country: "United Arab Emirates (the)",
        code: "AE",
      },
      {
        country: "United Kingdom of Great Britain and Northern Ireland (the)",
        code: "GB",
      },
      {
        country: "United States Minor Outlying Islands (the)",
        code: "UM",
      },

      {
        country: "United States of America (the)",
        code: "US",
      },
      {
        country: "Uruguay",
        code: "UY",
      },
      {
        country: "Uzbekistan",
        code: "UZ",
      },
      {
        country: "Vanuatu",
        code: "VU",
      },
      {
        country: "Venezuela (Bolivarian Republic of)",
        code: "VE",
      },

      {
        country: "Viet Nam",
        code: "VN",
      },
      {
        country: "Virgin Islands (British)",
        code: "VG",
      },
      {
        country: "Virgin Islands (U.S.)",
        code: "VI",
      },
      {
        country: "Wallis and Futuna",
        code: "WF",
      },
      {
        country: "Western Sahara",
        code: "EH",
      },
      {
        country: "Yemen",
        code: "YE",
      },
      {
        country: "Zambia",
        code: "ZM",
      },
      {
        country: "Zimbabwe",
        code: "ZW",
      },
      {
        country: "Åland Islands",
        code: "AX",
      },
    ];

    const xtopic = youTubeTopicIds.find((obj) => obj.id === props.channelInfo?.topicIds[0]);
    const xcountry = countryCode.find((obj) => obj.code === props.channelInfo?.country);

    const checkboxHandler = (e) => {
      if (e.target.checked) {
        console.log("checked " + e.target.value);
        setGroupCamp((prevState) => [...prevState, e.target.value]);
      } else {
        console.log("unchecked " + e.target.value);
        let newArray = [];
        groupCamp?.map((tag) => {
          if (tag !== e.target.value) {
            newArray.push(e.target.value);
          }
        });
        setGroupCamp(newArray);
      }
    };

      useEffect(() => {
        console.log(groupCamp);
      }, [groupCamp]);

    const addCreator = () => {
      const uid = props.userData?.uid;
      const token = props.userData?.token;

      groupCamp?.map((camp)=>{
        let index = 0;
        const campaignName = camp; //replace with campaign name value
        console.log(campaignName);
        const url = `http://localhost:4000/campaigns/${uid}/${campaignName}/add-creator`;

        axios
          .patch(
            url,
            {
              "creatorId": `${props.channelId}`, //replace with channel id value
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((resData) => {
            console.log(campaigns[index]);
            props.grabCampData(campaigns[index]);
            index++;
            alert(props.channelInfo.name +" is added to "+ groupCamp.join(', '))
            setModalShow(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
    }

    const onCreateHandler = (e) => {
      e.preventDefault();

      const newCampaign = {
        campaignName: campaignNameRef.current.value,
        description: descriptionRef.current.value,
        tags: tags,
      };

      //  useEffect(() => {
      //    async function newCampaign() {
      const uid = props.userData.uid;
      const token = props.userData.token;
      const url = `http://localhost:4000/campaigns/${uid}/new-campaign`;

      axios
        .post(url, newCampaign, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((resData) => {
          console.log(resData.data.message);
          showmodal();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const keywordArrayCB = [
      { name: "Lifestyle", cbid: "/m/019_rr" },

      { name: "Music", cbid: "/m/04rlf" },

      { name: "Entertainment", cbid: "/m/02jjt" },

      { name: "Gaming", cbid: "/m/0bzvm2" },

      { name: "Sport", cbid: "/m/06ntj" },

      { name: "Tourism", cbid: "/m/07bxq" },

      { name: "Technology", cbid: "/m/07c1v" },

      { name: "Health", cbid: "/m/0kt51" },

      { name: "Food", cbid: "/m/02wbm" },

      { name: "Beauty", cbid: "/m/041xxh" },
    ];

    const checkboxHandlerX = (e) => {
      if (e.target.checked) {
        console.log("checked " + e.target.value);
        setTags((prevState) => [...prevState, e.target.value]);
      } else {
        console.log("unchecked " + e.target.value);
        let newArray = [];
        tags?.map((tag) => {
          if (tag !== e.target.value) {
            newArray.push(e.target.value);
          }
        });
        setTags(newArray);
      }
    };
    
    return (
      <>
        <Header userData={props.userData} />
        <GetCreatorInfo
          channelInfo={props.channelInfo}
          channelId={props.channelId}
          userData={props.userData}
          grabResults={grabResults}
        />
        <div className="creator">
          <div className="margin">
            <div className="top_Banner">
              {/* <TopBanner/> */}
              <AddToCampainButton
                modalshow={modalshow}
                isAddtocamp={isAddtocamp}
                showmodal={showmodal}
              />
              <CreatorImage info={props.channelInfo} />
              <ScoreCard />
              <div className="textcont">
                <NameBoard info={props.channelInfo} />
              </div>

              {modalshow ? (
                <div className="modal_overlay">
                  {isAddtocamp ? (
                    <div className="modal_content">
                      <div className="modal_style">
                        <h3>Add to Campaign</h3>
                        <h3
                          className="pointer"
                          onClick={() => showmodal(false)}
                        >
                          X
                        </h3>
                      </div>

                      <div className="contnr">
                        {/* <Inputs placeholder="Search a campaign" /> */}
                        <GetCampaigns
                          userData={props.userData}
                          grabCampaigns={grabCampaigns}
                        />
                        {campaigns?.length === 0 ? (
                          <></>
                        ) : (
                          campaigns?.map((camp) => (
                            <Searchlist
                              title={camp.campaignName}
                              subtitle={`${camp.creators?.length} creators`}
                              checkboxHandler={checkboxHandler}
                            />
                          ))
                        )}

                        <button className="cbtn" onClick={addCreator}>
                          Add to Campaign
                        </button>
                        <p
                          onClick={() => setIsAddtoCamp(false)}
                          className="creat_capm_txt"
                        >
                          Create new Capmapign
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="modal_content">
                      <div className="modal_style">
                        <h3>Create Campaign</h3>
                        <h3
                          className="pointer"
                          onClick={() => showmodal(false)}
                        >
                          X
                        </h3>
                      </div>

                      <form className="contnr" onSubmit={onCreateHandler}>
                        <label className="modal_inputs">
                          Name your Campaign:
                        </label>

                        <input
                          className="modal_search_input"
                          type="text"
                          name="name"
                          placeholder="Campaign name"
                          ref={campaignNameRef}
                        />

                        <label>Description:</label>

                        <textarea
                          placeholder="This is a new campaign"
                          rows={5}
                          ref={descriptionRef}
                        ></textarea>

                        <label className="modal_inputs">
                          Add tags or keywords
                        </label>

                        {keywordArrayCB?.map((keyword) => (
                          <Checkboxx
                            name={keyword.name}
                            id={keyword.cbid}
                            checkboxHandler={checkboxHandlerX}
                          />
                        ))}

                        <button className="cbtn" type="submit">
                          Create Campaign
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            <div className="grid_container">
              <div>
                <h3 className="ml20">Overview</h3>
                <div className="overviewBlocks">
                  <DisplayBlock
                    title="Video Uploads"
                    content={props.channelInfo?.vidCount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  />
                  <DisplayBlock
                    title="Total Views"
                    content={props.channelInfo?.viewCount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  />
                  <DisplayBlock
                    title="Country"
                    content={xcountry === undefined ? "N/A" : xcountry.country}
                  />
                  <DisplayBlock
                    title="Channel Type"
                    content={xtopic === undefined ? "N/A" : xtopic.topic}
                  />
                </div>
              </div>

              <div>
                <h3 className="ml20">Latest Video</h3>

                {/* <video
                  src={
                    // "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                    `//www.youtube.com/embed/${results[0].id}?rel=0`
                  }
                  width="100%"
                  className="video"
                  controls
                ></video> */}

                <iframe
                  title={results ? results[0]?.snippet.localized.title : ""}
                  // width="420"
                  // height="315"
                  src={
                    results
                      ? `//www.youtube.com/embed/${results[0]?.id}?rel=0`
                      : ""
                  }
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

                <h4 className="ml20">Common Tags</h4>
                <div className="tag_cntnr">
                  <ul className="tag_div">
                    {props.channelInfo?.topicIds.map((tag) => (
                      <Tag className="tags tag_style" name={tag} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="graph">
              <Graph latestFive={results} />
              {/* {results?.map((result) => {
                <Graph viewCount={result.statistics.viewCount} />;
              })} */}
            </div>
          </div>
        </div>
      </>
    );

}

export default CreatorPage;


