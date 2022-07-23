import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ArchiveCampaign = (props) => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function archiveCampaign() {
      const uid = props.userData.uid;
      const campaignName = props.campaignName; //replace with campaign name value
      const token = props.userData.token;
      const url = ` http://localhost:4000/campaigns/${uid}/archive-campaign/${campaignName}`;

      
      await axios
        .patch(url,
          {
            headers: {
              'Authorization': 'Bearer '+ token
            }
          }
        )
        .then((resData) => {
          console.log(resData.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    archiveCampaign();
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

export default ArchiveCampaign;