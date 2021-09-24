import 'react-native';
import React from 'react';
import Datepicker from '../lib/Datepicker';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    renderer.create(<Datepicker  />)
});
