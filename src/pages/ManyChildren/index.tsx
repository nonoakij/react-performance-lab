import React from 'react'
import WrapComponent from '../../components/WrapComponent'

interface Props {
  volume: number
}

interface State {
  renderCount: number
  data: { [k: number]: number }
}

class functionalPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { volume } = this.props
    const data = new Array(volume).reduce((p, c, i) => {
      Object.assign(p, { i })
      return p
    }, {})

    this.state = {
      renderCount: 0,
      data
    }
  }

  shouldComponentUpdate(): boolean {
    performance.mark('update')
    return true
  }

  componentDidUpdate(): void {
    performance.mark('updated')
    performance.measure('measure update to updated', 'update', 'updated')
    console.log(performance.getEntriesByType('measure'))
  }

  componentWillUnmount(): void {
    performance.clearMarks()
    performance.clearMeasures()
  }

  render(): JSX.Element {
    const { renderCount, data } = this.state
    return (
      <div>
        <div style={{ paddingBottom: '16px' }}>
          page component: called {renderCount} times
          <button
            type="button"
            onClick={() =>
              this.setState({
                renderCount: renderCount + 1
              })
            }
          >
            update
          </button>
          <WrapComponent {...data} />
        </div>
      </div>
    )
  }
}

export default functionalPage
