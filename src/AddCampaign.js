import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AddCampaign = (props) => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function newCampaign() {
      const uid = props.userData.uid;
      const token = props.userData.token;
      const url = ` https://influensearch.herokuapp.com/campaigns/${uid}/new-campaign`;

      await axios
        .post(url, 
          props.campaign,
          {
            headers: {
              'Authorization': 'Bearer '+ token
            }
          }
        )
        .then((resData) => {
          console.log(props.campaign);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    newCampaign();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(search);
  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
        {console.log("i am in add camp")}
      </>
    );
  } else {
    return (
      <>
        {/* <h1>Search Successfull!</h1> */}
      </>
    );
  }
};

export default AddCampaign;
