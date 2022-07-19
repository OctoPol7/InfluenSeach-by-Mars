import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RemoveCreatorCampaign = (props) => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function removeCreator() {
      const uid = props.userData.uid;
      const campaignName = "Campaign Name"; //replace with campaign name value
      const creatorId = "creator Id"; //replace with creator id
      const token = props.userData.token;
      const url = ` https://influensearch.herokuapp.com/campaigns/${uid}/${campaignName}/${creatorId}/remove-creator`;

      await axios
        .patch(url,
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
    removeCreator();
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

export default RemoveCreatorCampaign;