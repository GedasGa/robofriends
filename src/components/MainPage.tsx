import * as React from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {
    onRequestRobots(): void;
    onSearchChange(): void;
    isPending: boolean;
    searchField: string;
}

interface IAppState {
    robots: Array<IRobot>;
    searchfield: string;
}

class MainPage extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.props.onRequestRobots();
    };

    filterRobots = () => {
        return this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render () {
        const { onSearchChange, isPending } = this.props;
        return isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    };
}

export default MainPage;
