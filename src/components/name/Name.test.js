import React from 'react';
import 'react-native';
import Name from './Name';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<Name /> tests', () => {
    // it('renders without crashing', () => {
    //     shallow(
    //         <Name 
    //             name="test"
    //             punish="2"
    //             reward="1"
    //         />)
    // })

    // it('shows correct name', () => {
    //     const wrapper = shallow(
    //         <Name 
    //             name="test"
    //             punish="2"
    //             reward="1"
    //         />
    //     );
    
    //     wrapper.find('Text').forEach(child => {
    //         expect(child.children().text()).toBe('test');
    //     })
    // })

    it('should show 2 empty triangle and 3 empty circle', () => {
        const wrapper = shallow(
            <Name 
                name="test"
                punish="0"
                reward="0"
            />
        )

        wrapper.find('Component').forEach(child => {
            console.log(child.text())
        })
    })
})
