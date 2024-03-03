import React from 'react'

const About = (props) => {
  return (
    <div id="about">
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h1>{props.title}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, quia laborum, ab veritatis quam reiciendis, illum dolorum possimus assumenda commodi maiores pariatur ullam? Maiores veniam distinctio neque accusamus at? Dolores modi a culpa exercitationem laboriosam.</p>
           
           <button>{props.button}</button>
        </div>




    </div>
  )
}

export default About