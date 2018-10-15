import React from 'react';
import 'react-native';
import Name from './Name';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json';

describe('<Name /> tests', () => {
    it('renders without crashing', () => {
        shallow(
            <Name 
                name="test"
                punish={2}
                reward={1}
            />)
    })

    it('snapshot test', () => {
        const tree = shallow(
            <Name 
                name="test"
                punish={1}
                reward={1}
            />);

        expect(toJson(tree)).toMatchSnapshot();
    })

    it('shows correct name', () => {
        const wrapper = shallow(
            <Name 
                name="test"
                punish={2}
                reward={1}
            />
        );
    
        wrapper.find('Text').forEach(child => {
            expect(child.children().text()).toBe('test');
        })
    })

    it('should show 2 empty triangle and 3 empty circle', () => {
        const wrapper = shallow(
            <Name 
                name="test"
                punish={0}
                reward={0}
            />
        );

        const components = wrapper.find('Component');

        expect(components.length).toBe(3);

        // second component for reward, two empty triangle
        expect(components.at(1).children().length).toBe(2);

        components.at(1).children().forEach(child => {
            expect(child.prop('name')).toBe('TriangleEmpty')
        })

        // third component for punish, three empty circle 
        expect(components.at(2).children().length).toBe(3);

        components.at(2).children().forEach(child => {
            expect(child.prop('name')).toBe('CircleEmpty')
        })
    })

    it('reward 1, punish 1 ', () => {
        const wrapper = shallow(
            <Name 
                name="test"
                reward={1}
                punish={1}
            />
        );

        const components = wrapper.find('Component');

        expect(components.length).toBe(3);

        // second component for reward
        expect(components.at(1).children().length).toBe(2);

        console.log(components.at(1).children())

        expect(components.at(1).children().at(0).prop('name')).toBe('Triangle')
        expect(components.at(1).children().at(1).prop('name')).toBe('TriangleEmpty')
        
        // third component for punish
        expect(components.at(2).children().length).toBe(3);

        expect(components.at(2).children().at(0).prop('name')).toBe('Circle')
        expect(components.at(2).children().at(1).prop('name')).toBe('CircleEmpty')
        expect(components.at(2).children().at(2).prop('name')).toBe('CircleEmpty')
    })

    it('should show 2 triangle and 3 circle', () => {
        const wrapper = shallow(
            <Name 
                name="test"
                reward={2}
                punish={3}
            />
        );

        const components = wrapper.find('Component');

        expect(components.length).toBe(3);

        // second component for reward, two empty triangle
        expect(components.at(1).children().length).toBe(2);

        components.at(1).children().forEach(child => {
            expect(child.prop('name')).toBe('Triangle')
        })

        // third component for punish, three empty circle 
        expect(components.at(2).children().length).toBe(3);

        components.at(2).children().forEach(child => {
            expect(child.prop('name')).toBe('Circle')
        })
    })
})
