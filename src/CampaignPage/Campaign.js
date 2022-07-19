import React, { useState, useEffect, useRef } from 'react'
import Header from '../header.js'
import Checkboxx from './Checkboxx'
import CampStatContner from './CampStatContner';
import CreateBtn from './CreateBtn';
import CurCampContner from './CurCampContnr';
import axios from 'axios';
import CloseIcon from '../CloseIcon.png'
import AddCampaign from '../AddCampaign.js';
import GetCampaigns from '../GetCampaigns'


const Campaign = props => {

  const campaignNameRefe = useRef();
  const descriptionRef = useRef();
  
  const [tags, setTags] = useState([]);
  const [results, setResults] = useState();
  const [modalShow, setModalShow] = useState(false);
    // const [keywords, setKeywords] = useState([]);

    const showmodal = () => {
        // console.log(modalShow);
        setModalShow(prevState=> !prevState);
    }

    const onCreateHandler = (e) => {
      e.preventDefault();

      const newCampaign = {
        campaignName: campaignNameRefe.current.value,
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
         }
        //  newCampaign();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      //  }, []);
      // console.log(newCampaign)
      // }

    const keywordArrayCB = [
      {name:"Lifestyle",
      cbid:"/m/019_rr"},

      {name:"Music",
      cbid:"/m/04rlf"},

      {name:"Entertainment",
      cbid:"/m/02jjt"},

      {name:"Gaming",
      cbid:"/m/0bzvm2"},

      {name:"Sport",
      cbid:"/m/06ntj"},

      {name:"Tourism",
      cbid:"/m/07bxq"},

      {name:"Technology",
      cbid:"/m/07c1v"},

      {name:"Health",
      cbid:"/m/0kt51"},

      {name:"Food",
      cbid:"/m/02wbm"},

      {name:"Beauty",
      cbid:"/m/041xxh"}
    ]
    
    useEffect(() => {
      return 
        console.log(tags);
    }, [tags]);

    const checkboxHandler = (e) => {
        if (e.target.checked) {
            console.log('checked ' + e.target.value);
            setTags(prevState => [...prevState, e.target.value]);

        } else {
            console.log("unchecked " + e.target.value);
            let newArray = [];
            tags.map((tag)=>{
              if (tag!==e.target.value) {
                newArray.push(e.target.value);
              }
            })
            setTags(newArray)
        }
    }

    const grabResults = (resData) => {
      console.log("FROM Campaign.js " + props.location.country);
      console.log(resData.data);
      setResults(resData.data);
    };


    return (
      <div className="campaign-page">
        <Header userData={props.userData} />
        <GetCampaigns userData={props.userData} grabResults={grabResults} />
        <CampStatContner total={results != null ? results.length : 0 } />
        {/* <div>
        <form>
            <input
              className="search_input"
              type="text"
              placeholder="Search for a campaign"
            />
            <button type="submit">Create New Campaign</button>
          </form>
        </div> */}
        <CurCampContner campaignArray={results} />

        <CreateBtn click={() => showmodal()} />

        {modalShow ? (
          <div className="modal_overlay">
            <div className="modal_content">
              <div>
                <h2>Create a campaign</h2>
                <button type="button" onClick={() => showmodal()}>
                  <img src={CloseIcon} alt="Close"></img>
                </button>
              </div>

              <form className="contnr" onSubmit={onCreateHandler}>
                <label className="modal_inputs">
                  Name your Campaign:
                  <input
                    className="modal_search_input"
                    type="text"
                    name="name"
                    placeholder="Campaign name"
                    ref={campaignNameRefe}
                  />
                </label>

                <label>
                  Description:
                  <textarea
                    placeholder="This is a new campaign"
                    rows={5}
                    ref={descriptionRef}
                  ></textarea>
                </label>

                <label className="modal_inputs">
                  Add tags or keywords
                  {keywordArrayCB.map((keyword) => (
                    <Checkboxx
                      name={keyword.name}
                      id={keyword.cbid}
                      checkboxHandler={checkboxHandler}
                    />
                  ))}
                </label>

                <button className="cbtn" type="submit">
                  Create Campaign
                </button>
              </form>

            </div>
          </div>
        ) : null}
      </div>
    );
  }

export default Campaign;