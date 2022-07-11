import React, { useState } from 'react'
import Header from '../Header.js'
import Checkbox from '../SearchResult/Checkbox.js';
import CampStatContner from './CampStatContner';
import CreateBtn from './CreateBtn';
import CurCampContner from './CurCampContnr';
import Inputs from './Inputs';




const Campaign = props => {

    const [modalShow, setModalShow] = useState(false);

    const showmodal = () => {
        // console.log(modalShow);
        setModalShow(!modalShow);
    }


    return (
      <div className="campaign-page">
        <Header />
        <CampStatContner />
        <CurCampContner />

        <CreateBtn click={() => showmodal()} />

        {modalShow ? (
          <div className="modal_overlay" style={{ margin: "2rem" }}>
            <div className="modal_content">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Create a campaign</h3>
                <h3 style={{ cursor: "pointer" }} onClick={() => showmodal()}>
                  X
                </h3>
              </div>

              <form className="contnr" style={{ maxWidth: "500px" }}>

                <Inputs label='Campaign Name:' placeholder="Type your campaign name" />

                <label>Create Description:
                    <textarea
                    placeholder="Type text below.."
                    rows={5}
                    style={{
                        width: "100%",
                        borderRadius: 5,
                        backgroundColor: "lightgray",
                    }}
                    ></textarea>
                </label>

                <label className="modal_inputs">
                    Add target Keywords
                    <Checkbox name="Lifestyle" cbid="/m/019_rr" />
                    <Checkbox name="Music" cbid="/m/04rlf" />
                    <Checkbox name="Entertainment" cbid="/m/02jjt" />
                    <Checkbox name="Gaming" cbid="/m/0bzvm2" />
                    <Checkbox name="Sport" cbid="/m/06ntj" />
                    <Checkbox name="Tourism" cbid="/m/07bxq" />
                    <Checkbox name="Technology" cbid="/m/07c1v" />
                    <Checkbox name="Health" cbid="/m/0kt51" />
                    <Checkbox name="Food" cbid="/m/02wbm" />
                    <Checkbox name="Beauty" cbid="/m/041xxh" />
                </label>
                <button className="cbtn" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );}

export default Campaign;