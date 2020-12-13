import {shallow} from 'enzyme';
import React from 'react';
import NotFound from './not-found.component';

it('expect to render Not Found page component', () => {
    expect(shallow(
        <NotFound />)).toMatchSnapshot();
})