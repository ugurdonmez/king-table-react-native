import 'react-native';
import React from 'react';
import Name from './Name';

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import React from 'react'
Enzyme.configure({adapter: new Adapter()}) // ????


import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <Name />
    ).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
})

it('check propbs', () => {
    const wrapper = shallow(
        <Name 
            name="test"
            punish="2"
            reward="1"
        />
    )

    expect(wrapper).toMatchSnapshot();
    

})