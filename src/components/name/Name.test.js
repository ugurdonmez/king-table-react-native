import React from 'react';
import 'react-native';
import Name from './Name';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <Name />
    ).toJSON();
    
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