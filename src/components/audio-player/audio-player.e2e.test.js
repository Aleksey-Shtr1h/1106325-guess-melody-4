import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

const songSrc = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

it(`AudioPlayer is rendered correctly`, () => {

  const onButtonClick = jest.fn();

  const screen = mount(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={onButtonClick}
    src={songSrc}
  />);

  const buttonTrack = screen.find(`.track__button`);
  buttonTrack.simulate(`click`, onButtonClick);

  expect(buttonTrack.hasClass(`track__button--pause`)).toBe(false);
  expect(buttonTrack.hasClass(`track__button--play`)).toBe(true);

});
