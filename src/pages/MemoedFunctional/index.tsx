import React from 'react';
import MemoedComponent from '../../components/MemoedComponent';

interface Props {
  volume: number
}

interface State {
  renderCount: number
}

class memoedFunctional extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      renderCount: 0,
    };
  }

  shouldComponentUpdate(): boolean {
    performance.mark('update');
    return true;
  }

  componentDidUpdate(): void {
    performance.mark('updated');
    performance.measure('measure update to updated', 'update', 'updated');
    console.log(performance.getEntriesByType('measure'));
  }

  componentWillUnmount(): void {
    performance.clearMarks();
    performance.clearMeasures();
  }

  render(): JSX.Element {
    const { renderCount } = this.state;
    const { volume } = this.props;
    return (
      <div>
        <div style={{ paddingBottom: '16px' }}>
          page component: called {renderCount} times
          <button
            type="button"
            onClick={() => this.setState({
              renderCount: renderCount + 1,
            })}
          >update
          </button>
        </div>
        {[...Array(volume)].map((_, i) => (
          <MemoedComponent key={i} text="text" />
        ))}
      </div>
    );
  }
}

export default memoedFunctional;
