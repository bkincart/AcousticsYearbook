import Home from './../src/components/Home';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />)
  })

  it('should pass', () => {
    expect(wrapper.find('h1').text()).toEqual("This is the home page in React!")
  })
})
