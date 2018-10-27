import { shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card compoenet', () => {
    expect(shallow(<Card />).length).toEqual(1);
});