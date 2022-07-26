import React from 'react'
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import BarChart from './BarChart'

const Graph = props => {
     const [viewStat, setViewStat] = useState('');

     const viewStatHandler = (e) => {
          setViewStat(e.target.value);
     }

     const statViewCount = props.latestFive?.map(
       (vid) => vid.statistics.viewCount
     );
     const maxValue = Math.max(...statViewCount);
     // const dateDate = props.date.toLocaleString("en-US", { month: "long" }) + " " + props.date.toLocaleString("en-US", { day: "2-digit" }) + " " + props.date.getFullYear();
     
    return (
      <>
        <h1>Number of Views from the latest 5 Videos</h1>
        {/* <select onChange={viewStatHandler}>
          <option value="viewCount">Total Views</option>
          <option value="likeCount">Total Likes</option>
          <option value="viewCount">Total Views</option>
        </select> */}
        <div
          style={{
            padding: "1rem",
            borderRadius: "12px",
            backgroundColor: "#f8dfff",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            height: "20rem",
          }}
        >
          {props.latestFive?.map((vid) => (
            <div
              style={{
                flexShrink: 1,
                display: "flex",
                flexFlow: "column nowrap",
                flex: "0 0 18%",
              }}
            >
              <div style={{ flexShrink: 1, height: "100%" }}>
                <BarChart
                  maxValue={maxValue}
                  value={vid.statistics.viewCount}
                />
              </div>
              <div style={{ flexShrnk: 1 }}>
                {/* <p>{`${JSON.stringify(vid.statistics)}.${viewStat}`}</p> */}
                <p>
                  Views:{" "}
                  {vid.statistics.viewCount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p style={{ height: "2rem", overflow: "hidden" }}>
                  {vid.snippet.title.slice(0, 20)}
                </p>
                {/* <p>
                  {vid.snippet.publishAt.toLocaleString("en-US", {
                    month: "long",
                  }) +
                    " " +
                    vid.snippet.publishAt.toLocaleString("en-US", {
                      day: "2-digit",
                    }) +
                    " " +
                    vid.snippet.publishAt.getFullYear()}
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="chart" 
        style={{padding: '1rem',
               borderRadius: '12px',
               backgroundColor: '#f8dfff',
               textAlign: 'center',
               display: 'flex',
               justifyContent: 'space-around',
               height: '10rem'
          }}>
          {props.lastest5?.map((vid) => (
            <BarChart
              value={vid.value}
              maxValue={maxValue}
              label={vid.snippet.title}
            />
          ))}
        </div> */}
      </>
    );
}



export default Graph;