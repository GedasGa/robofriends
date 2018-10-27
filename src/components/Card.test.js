import { shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

describe('test Card component', () => {
    it('expect to render Card component', () => {
        expect(shallow(<Card/>)).toMatchSnapshot();
    });
});