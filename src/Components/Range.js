import Slider from '@mui/material/Slider';
import { useGlobalContext } from '../context';

const Range = () => {
  const { sliderValue, setSliderValue } = useGlobalContext();
  const onSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className='max-w-sm md:w-28 md:p-0  '>
      <h3 className=''>Price: </h3>
      <p className=' text-sm'>50€ to {sliderValue}€</p>
      <Slider
        value={sliderValue}
        onChange={onSliderChange}
        valueLabelDisplay='auto'
        max={200}
        min={50}
      />
    </div>
  );
};

export default Range;
