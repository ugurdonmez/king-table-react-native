import React from 'react';
import 'react-native';
import HandName from './HandName';
import renderer from 'react-test-renderer'

describe('<HandName />', () => {
    it('renders tree without crashing', () => {
        const tree = renderer.create(
            <HandName
                name="El Almaz"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })

    it('text should be equal to prop name', () => {
        const wrapper = renderer.create(
            <HandName 
                name="El Almaz"
            />
        ).toJSON();

        expect(wrapper.children[0]).toBe('El Almaz');
    })
})