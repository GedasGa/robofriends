import * as React from 'react';
import CounterButton from './CounterButton';

class Header extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div>
                <h1 className='f2'>Robofriends</h1>
                <CounterButton color={'red'}/>
            </div>
        )
    }
}

export default Header;