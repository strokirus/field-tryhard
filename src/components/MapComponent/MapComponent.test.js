import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import MapComponent from './MapComponent';

const props = {
  center: {
    latitude: 38.7071,
    longitude: -9.13549,
  },
  points: [{ empty_slots: 7, extra: { address: '北新町１丁目３番 1-3 Kitashin-machi', banking: false, bonus: false, last_update: 1578971976000, slots: 16, status: 'OPEN', uid: 7 }, free_bikes: 9, id: 'b5a16c946140c223a13780c533f46119', latitude: 36.693935, longitude: 137.220853, name: '北新町１丁目 KITASHIN-MACHI 1', timestamp: '14/01/2020' }],
};

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('(Component) MapComponent', () => {
  it('should render an MapComponent with result', () => {
    act(() => {
      ReactDOM.render(<MapComponent {...props} />, container);
    });
  });
});
