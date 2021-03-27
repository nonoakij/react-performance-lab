import React from 'react'
import MemoedDeepCompare from '../../components/MemoedDeepCompare'

export interface memoedDeepCompareProps {
  volume: number
}

export interface memoedDeepCompareState {
  renderCount: number
  myObj: { [k: string]: any }
}

class memoedDeepCompare extends React.Component<
  memoedDeepCompareProps,
  memoedDeepCompareState
> {
  constructor(props: memoedDeepCompareProps) {
    super(props)
    this.state = {
      renderCount: 0,
      myObj: { a: { b: { c: { d: 'd' } } } }
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
    const { renderCount, myObj } = this.state

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
        <MemoedDeepCompare myObj={myObj} />
      </div>
    )
  }
}

export default memoedDeepCompare
