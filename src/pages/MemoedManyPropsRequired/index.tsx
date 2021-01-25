import React from 'react';
import MemoedComponent from '../../components/MemoedComponent';
import MemoedManyPropsRequiredComponent from '../../components/MemoedManyPropsRequiredComponent';

interface Props {
  volume: number
}

interface State {
  renderCount: number
  arr: number[]
  obj: {
    id: number
    name: string
    data: {
      height: number
      weight: number
      age: number
      birthplace: {
        country: string
        city: string
      }
    }
  }
}

class memoedManyPropsRequiredPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const arr = [...Array(props.volume)].map((_, i) => i);
    this.state = {
      renderCount: 0,
      arr,
      obj: {
        id: 123456,
        name: 'jordan',
        data: {
          height: 198,
          weight: 98,
          age: 57,
          birthplace: {
            country: 'us',
            city: 'NY',
          },
        },
      },
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
        <MemoedManyPropsRequiredComponent
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
        </MemoedManyPropsRequiredComponent>
      </div>
    );
  }
}

export default memoedManyPropsRequiredPage;
