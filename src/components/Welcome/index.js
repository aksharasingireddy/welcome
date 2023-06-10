// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  buttonText = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  renderSubscribe = () => {
    const {subscribe} = this.state
    return subscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {buttonText} = this.renderSubscribe()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" onClick={this.buttonText} className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
