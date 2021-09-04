// eslint-disable-next-line no-unused-vars
import React, {FC ,useEffect, useState} from 'react'
import styled from 'styled-components'
import LocationInput from './LocationInput';
import GuestsInput from './GuestsInput';
import StayDatesRangeInput from './StayDatesRangeInput';
import ButtonSubmit from './ButtonSubmit';
import moment from 'moment'
import tw from 'twin.macro'
import { useHistory } from 'react-router-dom';

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultDateRange = {
  startDate: moment("2021-08-08"),
  endDate: moment("2021-09-09"),
};

const defaultPerson = {
  person: 2
};


const StaySearchForm = ({
  haveDefaultValue = false,
}) => {
  const [dateRangeValue, setDateRangeValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [person, setPerson] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    history.push(`/search-result?location=${location}&date=${date}&person=${person}`);
  }
  const [guestValue, setGuestValue] = useState({});

  useEffect(() => {
    if(haveDefaultValue) {
      setDateRangeValue(defaultDateRange)
      setLocation(defaultLocationValue)
      setGuestValue(defaultPerson)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // style

  const SearchFormContainer = styled.form`
    ${tw`
      w-full
      relative
      mt-8
      flex
      flex-col
      md:flex-row
      md:items-center
      rounded-3xl
      lg:rounded-full
      shadow-xl
      divide-y
      dark:bg-neutral-900
      dark:shadow-2xl
      divide-neutral-200
      md:divide-y-0
      bg-rose-300
    `};
  `;
  // ほんとはbg-white

  const Marginer = styled.div`
    ${tw`
      px-4
      py-4
      lg:py-0
    `};
  `;

  // eslint-disable-next-line no-unused-vars
  const renderForm = () => {
    return (
      <SearchFormContainer>
        <LocationInput
          defaultValue={location}
          onChange={(e) => setLocation(e)}
          onInputChange={() => setDate("startDate")}
        />
        <StayDatesRangeInput
          defaultValue={dateRangeValue}
          onChange={(value, dateString) => setDate(dateString)}
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, "days")
          }
        />
      {/* //   <LocationInput 
      //     defaultValue={locationInputValue}
      //     onChange={(e) => setLocationInputValue(e)}
      //     onInputDone={() => setDateFocused("startDate")}
      //   />
      // <StayDatesRangeInput
      //   defaultValue={dateRangeValue}
      //   defaultFocus={dateFocused}
      //   onFocusChange={(focus) => setDateFocused(focus)}
      //   onChange={(date) => setDateRangeValue(date)}
      // />
      // <GuestsInput
      //   defaultValue={guestValue}
      //   onChange={(date) => setGuestValue(date)}
      // />
      // <Marginer>
      //   <ButtonSubmit />
      //  */}
        <p>テスト</p>
        <Marginer>
          <ButtonSubmit />
        </Marginer>
      </SearchFormContainer>
    )
  }
  return renderForm();
}

export default StaySearchForm
