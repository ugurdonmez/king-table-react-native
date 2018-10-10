import React from 'react';
import 'react-native';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Icon from './Icon'

beforeEach(() => {
    isConsoleWarningOrError = false;
    const originalError = global.console.error;
    jest.spyOn(global.console, 'error').mockImplementation((...args) => {
        isConsoleWarningOrError = true;
        originalError(...args);
    });
    const originalWarn = global.console.warn;
    jest.spyOn(global.console, 'warn').mockImplementation((...args) => {
        isConsoleWarningOrError = true;
        originalWarn(...args);
    });
});

afterEach(() => {

    if (isConsoleWarningOrError) {
        throw new Error('Console warnings and errors are not allowed');
    }
});

describe('<Icon />', () => {
    it('renders without crashing', () => {
        // const wrapper = shallow(<Icon />)

        // expect(() => shallow(<Icon />)).toThrow();

        shallow(<Icon />)
    })
})
