import React from 'react';
import ManyPropsRequiredComponent from '../../components/ManyPropsRequiredComponent';
import MemoedComponent from '../../components/MemoedComponent';

interface Props {
  volume: number
}

interface State {
  renderCount: number
  arr: number[]
  obj: {
    squadName: string
    homeTown: string
    formed: number
    secretBase: string
    active: boolean
    members: {
      name: string,
      age: number,
      secretIdentity: string,
      powers: string[],
    }[]
  }
}

class manyPropsRequiredPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const arr = [...Array(props.volume)].map((_, i) => i);
    this.state = {
      renderCount: 0,
      arr,
      obj: {
        squadName: 'Super hero squad',
        homeTown: 'Metro City',
        formed: 2016,
        secretBase: 'Super tower',
        active: true,
        members: [
          {
            name: 'Molecule Man',
            age: 29,
            secretIdentity: 'Dan Jukes',
            powers: [
              'Radiation resistance',
              'Turning tiny',
              'Radiation blast',
            ],
          },
          {
            name: 'Madame Uppercut',
            age: 39,
            secretIdentity: 'Jane Wilson',
            powers: [
              'Million tonne punch',
              'Damage resistance',
              'Superhuman reflexes',
            ],
          },
          {
            name: 'Eternal Flame',
            age: 1000000,
            secretIdentity: 'Unknown',
            powers: [
              'Immortality',
              'Heat Immunity',
              'Inferno',
              'Teleportation',
              'Interdimensional travel',
            ],
          },
        ],
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
