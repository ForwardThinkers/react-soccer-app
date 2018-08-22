import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {
  state = {
    stripes:[
      {
        background: '#98c5e9',
        left: 120,
        top: -260,
        rotate: 25,
        delay: 0
      },
      {
        background: '#fff',
        left: 360,
        top: -397,
        rotate:25,
        delay: 200
      },
      {
        background: '#98c5e9',
        left: 600,
        top: -498,
        rotate:25,
        delay: 400
      }
    ]
  }

  showStripes = () => (
    this.state.stripes.map((stripe,i) =>(

      <Animate

        key={i}
        show={true}
        start={{
          background: '#fff',
          opacity: 0,
          left: 0,
          top: 0,
          rotate: 0
        }}

        enter={{
          background: [stripe.background] ,
          opacity: [1],
          left: [stripe.left],
          top: [stripe.top],
          rotate: [stripe.rotate],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut }
        }}
      >
        {({background, opacity, left, top, rotate})=>{
          return(
            <div
          className="stripe"
          style={{
            background,
            opacity,
            transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`
          }}
          ></div>
          )
        }}

      </Animate>
    ))
  )

  render() {
    return (
      <div className="featured_stripes">
        { this.showStripes() }
      </div>
    );
  }
}

export default Stripes;