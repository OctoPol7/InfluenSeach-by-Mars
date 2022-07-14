import React from 'react'
import DisplayBlock from './DisplayBlock';
import Tags from './Tags';


const GridContainer = props => {
    return (
        <div className="grid_container">

            <div>
                <h3 className='ml20'>Overview</h3>
                <div className='overviewBlocks'>
                    <DisplayBlock title="test" content="645" />
                    <DisplayBlock title="test" content="645" />
                    <DisplayBlock title="test" content="645" />
                    <DisplayBlock title="test" content="645" />

                </div>

                <h3 className='ml20'>Metrics</h3>
                <div className='overviewBlocks'>
                    <DisplayBlock title="test" content="645" />
                    <DisplayBlock title="test" content="645" />
                    <DisplayBlock title="test" content="645" />
                    <DisplayBlock title="test" content="645" />

                </div>
            </div>

            <div>
            <h3 className='ml20'>Latest Video</h3>

            <video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" width="100%" className='video'  controls>
     </video>

     <h4 className='ml20'>Common Tags</h4>

<div className='tag_cntnr'>
<Tags name="test"/> <Tags name="test"/> <Tags name="test"/>
</div>
            </div>
        </div>
    )
}

export default GridContainer;