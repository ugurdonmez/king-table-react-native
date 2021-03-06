import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import HandName from './HandName';
import renderer from 'react-test-renderer'

describe('<HandName />', () => {
    it('renders without crashing', () => {
        shallow(<HandName />)
    })

    it('match snapshot', () => {
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