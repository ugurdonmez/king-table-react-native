import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import HandScore from './HandScore';
import renderer from 'react-test-renderer'

describe('<HandScore />', () => {
    it('renders without crashing', () => {
        shallow(<HandScore />)
    })

    it('match snapshot', () => {
        const tree = renderer.create(
            <HandScore
                score="10"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })

    it('text should be equal to prop name', () => {
        const wrapper = renderer.create(
            <HandScore 
                name="10"
            />
        ).toJSON();

        expect(wrapper.children[0]).toBe('10');
    })
})