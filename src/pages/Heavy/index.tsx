import React from 'react'
import HeavyComponent from '../../components/HeavyComponent'

interface Props {
  volume: number
}

interface State {
  renderCount: number
  arr: number[]
}

class heavyPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const arr = [...Array(props.volume)].map((_, i) => i)
    this.state = {
      renderCount: 0,
      arr
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
    const { renderCount, arr } = this.state
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
        <HeavyComponent arr={arr} />
      </div>
    )
  }
}

export default heavyPage
