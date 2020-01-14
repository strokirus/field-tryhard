import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalComponent from './ModalComponent';

configure({ adapter: new Adapter() });

const props = {
  open: true,
  onCloseModal: jest.fn(),
  title: 'Teste',
  info: {
    empty_slots: 7,
    extra: {
      address: '北新町１丁目３番 1-3 Kitashin-machi',
      banking: false,
      bonus: false,
      last_update: 1578971976000,
      slots: 16,
      status: 'OPEN',
      uid: 7,
    },
    free_bikes: 9,
    id: 'b5a16c946140c223a13780c533f46119',
    latitude: 36.693935,
    longitude: 137.220853,
    name: '北新町１丁目 KITASHIN-MACHI 1',
    timestamp: '14/01/2020',
  },
};

describe('(Component) ModalComponent', () => {
  it('should call onCloseModal event', () => {
    const onSecondaryFn = jest.fn();
    const wrapper = mount(
      <ModalComponent {...props} onCloseModal={onSecondaryFn} />,
    );

    expect(onSecondaryFn).toHaveBeenCalledTimes(0);

    wrapper
      .find('button')
      .first()
      .simulate('click');

    expect(onSecondaryFn).toHaveBeenCalledTimes(1);
  });
});
