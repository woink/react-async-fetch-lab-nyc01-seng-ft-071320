import React from 'react'

class App extends React.Component {

  state = {
    people: []
  }
  
  
  render() {
    return (
      <div>
        {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }
  componentDidMount() {
    const baseUrl = "http://api.open-notify.org/astros.json"
    fetch(baseUrl)
      .then(resp => resp.json())
      .then(({people}) => this.setState({ people: people }))
  }
}

export default App