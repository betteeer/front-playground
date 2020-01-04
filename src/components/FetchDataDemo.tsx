import React from 'react'
// import fetch from 'fetch'
interface Props { }

interface State {
  data: Array<{
    id: number,
    subject: string
  }>
}

class FetchDataDemo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url = 'http://127.0.0.1:8081/api/todos?id=2'
    fetch(url, {
      method: 'GET',
    }).then(res => res.json()).then(res => {
      this.setState({
        data: res.hits
      })
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        {
          data.map((v) => {
            return (
              <div key={v.id}>{v.id} + {v.subject}</div>
            )
          })
        }
      </div>
    )
  }
}
export default FetchDataDemo