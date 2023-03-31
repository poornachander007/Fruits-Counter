// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  increaseMango = () => {
    this.setState(preState => ({mangoCount: preState.mangoCount + 1}))
  }

  increaseBanana = () => {
    this.setState(preState => ({bananaCount: preState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="sub_container">
          <h1>
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="card_container">
            <div className="card">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <br />
              <button type="button" onClick={this.increaseMango}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <br />
              <button type="button" onClick={this.increaseBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
