import React from 'react';
import ManyPropsRequiredComponent from '../../components/ManyPropsRequiredComponent';
import MemoedComponent from '../../components/MemoedComponent';

interface Props {
  volume: number
}

interface State {
  renderCount: number
  arr: number[]
  obj: { name: string }
}

class manyPropsRequiredPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const arr = [...Array(props.volume)].map((_, i) => i);
    this.state = {
      renderCount: 0,
      arr,
      obj: { name: 'tarou' },
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
    const { renderCount, arr, obj } = this.state;
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
        <ManyPropsRequiredComponent
          text1="test"
          text2="test"
          text3="test"
          text4="test"
          text5="test"
          text6="test"
          text7="test"
          array={arr}
          obj={obj}
        >
          <MemoedComponent text="text" />
          <MemoedComponent text="text" />
          <MemoedComponent text="text" />
          <MemoedComponent text="text" />
          <MemoedComponent text="text" />
        </ManyPropsRequiredComponent>
      </div>
    );
  }
}

export default manyPropsRequiredPage;
