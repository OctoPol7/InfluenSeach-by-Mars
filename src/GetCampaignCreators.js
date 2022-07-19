import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetCampaignCreators = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getCampaignCreators() {
      const uid = props.userData.uid;
      const campaignName = props.campaignName; //replace with campaign name value
      const token = props.userData.token;
      const url = ` https://influensearch.herokuapp.com/campaigns/${uid}/${campaignName}`;

      await axios
        .get(url,
          {
            headers: {
              'Authorization': 'Bearer '+ token
            }
          }
        )
        .then((resData) => {
          console.log(resData);
          props.grabResults(resData);
          setIsLoading(false)

        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCampaignCreators();
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

export default GetCampaignCreators;