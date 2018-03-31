/** @jsx h */
import { h, Component } from 'preact'
import Gender from './gender'
import Professions from './professions'

class Submit extends Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
    this.state = {
      gender: null,
      profession: null,
      subProfession: null
    }
  }

  onChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render (_, { gender, subProfession, profession }) {
    return (
      <form>
        I'm a
        <Gender selectedGender={gender} onChange={this.onChange} />
        working as a
        <Professions
          selectedProfession={profession}
          selectedSubProfession={subProfession}
          onChange={this.onChange}
        />
        <div>
          <button>How much salt am I worth?</button>
        </div>
      </form>
    )
  }
}

export default Submit
