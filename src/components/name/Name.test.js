import 'react-native';
import React from 'react';
import Name from './Name';

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <Name />
    ).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
})