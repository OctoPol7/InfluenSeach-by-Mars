import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AddCreatorCampaign = (props) => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function addCreator() {
      const uid = props.userData.uid;
      const campaignName = "Campaign Name"; //replace with campaign name value
      const token = props.userData.token;
      const url = ` http://localhost:4000/campaigns/${uid}/${campaignName}/add-creator`;

      await axios
        .patch(url, 
          {
            "creatorId": "channelId" //replace with channel id value
          },
          {
            headers: {
              'Authorization': 'Bearer '+ token
            }
          }
        )
        .then((resData) => {
          console.log(resData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    addCreator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(search);
  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
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

export default AddCreatorCampaign;