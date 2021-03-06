import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../UI/misc';
import Reveal from 'react-reveal/Reveal';
import Cards from './Cards';

class Players extends Component {
  state = {
    show:false
  }

  render() {
    return (
      <Reveal
        fraction={ 0.7 }
        onReveal={ () => {
          this.setState({
            show: true
          })
        }}
      >
        <div className="home_meetplayers" style={{ background: `#fff url(${Stripes})` }}>
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <Cards show={ this.state.show }></Cards>
            </div>
              <div className="home_text_wrapper">

                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#fff"
                    add={{
                      marginBottom: '20px'
                    }}
                  >
                    Meet
                </Tag>
                </div>

                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#fff"
                    add={{
                      marginBottom: '20px'
                    }}
                  >
                    The
                </Tag>
                </div>

                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#fff"
                    add={{
                      marginBottom: '20px'
                    }}
                  >
                    Players
                </Tag>
                </div>

                <div>
                  <Tag
                    bck="#fff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkTo="/the_team"
                    add={{
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: ' solid #0e1731'
                    }}
                  >
                    Meet the team
                </Tag>
                </div>


              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default Players;