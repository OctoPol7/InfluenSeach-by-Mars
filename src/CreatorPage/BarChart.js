import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar" 
        style={{height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
      <div className="chart-bar__inner" 
      style={{height: '100%',
                width: '60%',
                border: '1px solid #313131',
                borderRadius: '12px',
                backgroundColor: '#c3b4f3',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'}}>
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, 
                backgroundColor: '#4826b9',
                width: '100%',
                transition: 'all 0.3s ease-out'}}
        ></div>
      </div>
      <div className="chart-bar__label" 
        style={{fontWeight: 'bold',
            fontSize: '0.5rem',
            textAlign: 'center'
            }}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
