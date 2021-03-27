import React from 'react'
import DeepCompare from '../../components/DeepCompare'

export interface deepCompareProps {
  volume: number
}

export interface deepCompareState {
  renderCount: number
}

class deepCompare extends React.Component<deepCompareProps, deepCompareState> {
  constructor(props: deepCompareProps) {
    super(props)
    this.state = {
      renderCount: 0
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
    const { renderCount } = this.state

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
        </div>
        <DeepCompare myObj={{ a: { b: { c: { d: 'd' } } } }} />
      </div>
    )
  }
}

export default deepCompare
