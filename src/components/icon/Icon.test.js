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
        shallow(<Icon name="Triangle"/>)
    })

    it('Triangle match snapshot', () => {
        const tree = renderer.create(
            <Icon name="Triangle" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })

    it('TriangleEmpty match snapshot', () => {
        const tree = renderer.create(
            <Icon name="TriangleEmpty" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })

    it('Circle match snapshot', () => {
        const tree = renderer.create(
            <Icon name="Circle" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })

    it('CircleEmpty match snapshot', () => {
        const tree = renderer.create(
            <Icon name="CircleEmpty" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
