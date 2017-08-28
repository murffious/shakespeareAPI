import chai from "chai";
var expect = chai.expect;
import { shallow,  render, mount } from 'enzyme';
import React from 'react';
import Play from '../Components/Play/Play';

// Test things that are not static
// Test user events
// Test the response to those events
// Make sure the right things render at the right time
// Run tests in many browsers
// Re-run tests on file changes
// Work with continuous integration systems like Travis

// {props.photo} alt={props.nameLocation}
// {props.average} 
// {{width: (props.average * 10 * 2) + '%'}}
// {props.reviewsNumTotal}
// onClick={() => props.onClick()}
// { props.viewButton === true ? <span>Read Reviews</span> : <span>Hide Reviews</span>}

describe('Play', () => {
    let component;

    beforeEach(() =>  {
        component = shallow(<Play/>)
    })
    it('has the correct class', () => {
        expect(component.hasClass('play-wrap')).to.equal(true);
    });
    it('displays proper text based on props', () => {
        // expect(component.find('play-image')).text())
    })  
});