/** @jsx h */
import { h, Component } from 'preact'
import Front from './front'
import Submit from './submit'
import { INDEX_ROUTE, SUBMIT_ROUTE, routeFromUrl } from './router'

class App extends Component {
  constructor() {
    super()
    this.openSubmit = this.openSubmit.bind(this)
    this.state = {
      activePage: routeFromUrl()
    }
  }

  componentDidMount() {
    window.addEventListener('popstate', e => {
      // Workaround for old Safaris popping state on first load
      if (e.state || this.forcePopActivation) {
        this.setState({
          activePage: routeFromUrl()
        })
      }
    })

    setTimeout(() => {
      this.forcePopActivation = true
    }, 50)
  }

  updateUrl(route) {
    window.history.pushState(route, '', route.path)
  }

  openSubmit() {
    this.setState({
      activePage: SUBMIT_ROUTE
    })
    this.updateUrl(SUBMIT_ROUTE)
  }

  render(_, { activePage }) {
    if (activePage === INDEX_ROUTE) {
      return <Front openSubmit={this.openSubmit} />
    }

    if (activePage === SUBMIT_ROUTE) {
      return <Submit />
    }
  }
}

export default App
