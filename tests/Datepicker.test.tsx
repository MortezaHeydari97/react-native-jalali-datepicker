import 'react-native';
import React from 'react';
import Datepicker from '../lib/Main';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    renderer.create(<Datepicker />)
});
