import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetCampaigns = (props) => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getCampaigns() {
      const uid = props.userData.uid;
      const token = props.userData.token;
      const url = ` https://influensearch.herokuapp.com/campaigns/${uid}`;

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
          props.grabCampaigns(resData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCampaigns();
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

export default GetCampaigns;