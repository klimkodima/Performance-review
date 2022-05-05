import { FC, useState, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import ButtonsGroup from './ButtonsGroup';
import { dateFilterValueType } from './types';
import { FORMAT_DATE } from './constants';

const DateFilterComponent: FC = () => {
  const [value, setValue] = useState<dateFilterValueType>([
    new DateObject().subtract(1, 'month'),
    new DateObject()
  ]);

  useEffect(() => {
    const dateArray: number[] = JSON.parse(JSON.stringify(value));
    if (dateArray.length < 2) {
      return;
    }
    const [startDate, finishDate] = [...dateArray];

    // here can be request for server
    console.log(new Date(startDate));
    console.log(new Date(finishDate));
  });

  return (
    <DatePicker
      data-testId='date-picker'
      render={<InputIcon />}
      value={value}
      onChange={setValue}
      range
      numberOfMonths={2}
      format={FORMAT_DATE}
      maxDate={new Date()}
      plugins={[
        <ButtonsGroup
          classes='buttons-container'
          key={1}
          position='left'
          setValue={setValue}
        />
      ]}
    />
  );
};

export default DateFilterComponent;
