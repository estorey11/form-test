import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'


const style= {
  backgroundColor: '#2C7DFA',
  width: '25.3%',
  height: '100%',
  marginLeft: '4%',
  borderRadius: '1px'
}

const trackStyles = {
  position: 'relative',
  width: '100%',
  height: '100%'
}

class BlueBar extends PureComponent {



  render() {

    let percent= 16
    switch (this.props.form) {
      case 'skills':
        percent= 16
        break;
      case 'equip':
        percent= 147
        break;
      case 'certs':
        percent= 279
        break;
      default:
        percent= 16
        break;
      }

    return (
      <div className='blueBarTrack' style={{ height: '100%' }} >

        <Animate
          start={() => ({
            x: 16,
          })}

          update={() => (
            {
            x: [percent],
            timing: { duration: 800, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state

            return (
              <div style={trackStyles}>
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: '#2C7DFA',
                    width: '25.3%',
                    height: '100%',
                    borderRadius: '1px',
                    WebkitTransform: `translate3d(${x}%, 0, 0)`,
                    transform: `translate3d(${x}%, 0, 0)`,
                  }}
                />
              </div>
            )
          }}
        </Animate>
      </div>
    )
  }
}

export default BlueBar
