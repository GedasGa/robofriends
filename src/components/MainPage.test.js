import { shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('test MainPage component', () => {
    let wrapper;
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        };
        wrapper = shallow(<MainPage { ...mockProps }/>);
    });

    it('expect to render MainPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('filter robots correctly when searchField is empty', () => {
        expect(wrapper.instance().filterRobots()).toEqual([]);
    });

    it('filter robots correctly when there is a match', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John Snow',
                email: 'knows.nothing@got.com'
            }],
            searchField: 'john',
            isPending: false
        };
        const filteredRobots = [{
            id: 3,
            name: 'John Snow',
            email: 'knows.nothing@got.com'
        }];
        const wrapper2 = shallow(<MainPage { ...mockProps2 }/>);
        expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
    });

    it('filter robots correctly when there is no match', () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John Snow',
                email: 'knows.nothing@got.com'
            }],
            searchField: 'a',
            isPending: false
        };
        const wrapper3 = shallow(<MainPage { ...mockProps3 }/>);
        expect(wrapper3.instance().filterRobots()).toEqual([]);
    });

    it('filter robots correctly when when isPending is true', () => {
        const mockProps4 = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: true
        };
        const wrapper4 = shallow(<MainPage { ...mockProps4 }/>);
        expect(wrapper4.instance().render()).toEqual(<h1>Loading</h1>);
    });
});