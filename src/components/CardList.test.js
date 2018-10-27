import { shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

describe('test CardList component', () => {
    it('expect to render CardList component', () => {
        const mockRobots = [
            {
                id: 1,
                name: 'John Snow',
                email: 'knows.nothingw@got.com'
            }
        ];
        expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
    });
});
