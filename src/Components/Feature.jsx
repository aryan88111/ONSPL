import React from 'react'
import FeatureBox from './FeatureBox'
import featureBox from "../images/feature_1.png"
import featureBox1 from "../images/feature_2.png"
import featureBox2 from "../images/feature_3.png"

const Feature = () => {
  return (
    <div id="feature">
    <div className="a-container">
          <FeatureBox image={featureBox} title="Development Course"/>
          <FeatureBox image={featureBox1} title="Money Saving Course"/>
          <FeatureBox image={featureBox2} title="Utility Course"/>
    </div>


</div>
    

  )
}

export default Feature