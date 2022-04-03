import React from 'react'

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds,
      count: 0
    };

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    ;
    this.setState({
      seconds: this.state.seconds - 1,
    });
    if (this.state.seconds <= 0) {
      this.setState({
        seconds: this.props.seconds,
        count: this.state.count + 1,
      })

    }
  }

  render() {
    return (
      <>
        Faltam :
        <div className="watch">{new Date(this.state.seconds * 1000).toISOString().substr(11, 8)}
        </div>

        para incrementar.
        <p>
          Contou: <span className="highlight">{this.state.count}</span>
        </p>
        
      </>
    );
  }
}
