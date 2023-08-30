import { FC } from 'react';
import SlickSlider from 'react-slick';
import { SlickSliderProps } from './types';
import { defaultSettings } from './config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider: FC<SlickSliderProps> = ({ children, settings, className }) => {
  const _settings = defaultSettings(settings);
  return (
    <SlickSlider {..._settings} className={className}>
      <div className='w-full h-[50%]'>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>{' '}
    </SlickSlider>
  );
};

export default Slider;
