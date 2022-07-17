import React, { useState, useEffect } from 'react'
import Header from '../header.js'
import Checkbox from '../SearchResult/Checkbox.js';
import CampStatContner from './CampStatContner';
import CreateBtn from './CreateBtn';
import CurCampContner from './CurCampContnr';
import axios from 'axios';
import CloseIcon from '../CloseIcon.png'



const Campaign = props => {

    const [modalShow, setModalShow] = useState(false);
    // const [keywords, setKeywords] = useState([]);

    const showmodal = () => {
        // console.log(modalShow);
        setModalShow(prevState=> !prevState);
    }

    const onCreateHandler = () => {
      async function loadSearch() {
        const url = `http://localhost:4000/campaigns/${props.channelId}/new-campaign`;

        console.log("Bearer " + props.userData.token);

        await axios
          .post(url, {
            headers: {
              'Authorization': 'Bearer '+ props.userData.token
            },
          })
          .then(() => {
            console.log(url);
          })
          .catch((error) => {
            console.log(error);
          });
        }
        loadSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    

    const checkboxHandler = (e) => {
        if (e.target.checked) {
            console.log('checked ' + e.target.value)
        } else {
            console.log("unchecked " + e.target.value);
        }

    }


    return (
      <div className="campaign-page">
        <Header userData={props.userData} />
        <CampStatContner />
        <div>
        <form>
            <input
              className="search_input"
              type="text"
              placeholder="Search for a campaign"
            />
            <button type="submit">Create New Campaign</button>
          </form>
        </div>
        <CurCampContner />

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

              <form
                className="contnr"
                // onSubmit={onCreateHandler}
              >
                <label className="modal_inputs">
                Choose campaign name
                  <input
                    className="modal_search_input"
                    type="text"
                    name="name"
                    placeholder="Title"
                  />
                </label>

                <label>
                Choose description:
                  <textarea
                    placeholder="This is a new campaign"
                    rows={5}
                  ></textarea>
                </label>

                <label className="modal_inputs">
                  Add tags or keywords
                  <Checkbox
                    name="Lifestyle"
                    cbid="/m/019_rr"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Music"
                    cbid="/m/04rlf"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Entertainment"
                    cbid="/m/02jjt"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Gaming"
                    cbid="/m/0bzvm2"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Sport"
                    cbid="/m/06ntj"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Tourism"
                    cbid="/m/07bxq"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Technology"
                    cbid="/m/07c1v"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Health"
                    cbid="/m/0kt51"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Food"
                    cbid="/m/02wbm"
                    checkboxHandler={checkboxHandler}
                  />
                  <Checkbox
                    name="Beauty"
                    cbid="/m/041xxh"
                    checkboxHandler={checkboxHandler}
                  />
                </label>
                <button className="cbtn" type="submit">
                  Create Campaign
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

export default Campaign;