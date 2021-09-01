import React, {FC ,useEffect, useState} from 'react'
import styled from 'styled-components'
import LocationInput from './LocationInput';
import GuestsInput from './GuestsInput';
import StayDatesRangeInput from './StayDatesRangeInput';
import ButtonSubmit from './ButtonSubmit';
import moment from 'moment'
import tw from 'twin.macro'

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
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({});
  const [dateFocused, setDateFocused] = useState(null);

  useEffect(() => {
    if(haveDefaultValue) {
      setDateRangeValue(defaultDateRange)
      setLocationInputValue(defaultLocationValue)
      setGuestValue(defaultPerson)
    }
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
      bg-white
      divide-y
      divide-neutral-200
      md:divide-y-0
    `};
  `;

  const Marginer = styled.div`
    ${tw`
      px-4
      py-4
      lg:py-0
    `};
  `;

  const renderForm = () => {
    return (
      <SearchFormContainer>
        <LocationInput 
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused("startDate")}
        />
      <StayDatesRangeInput
        defaultValue={dateRangeValue}
        defaultFocus={dateFocused}
        onFocusChange={(focus) => setDateFocused(focus)}
        onChange={(date) => setDateRangeValue(date)}
      />
      <GuestsInput
        defaultValue={guestValue}
        onChange={(date) => setGuestValue(date)}
      />
      <Marginer>
        <ButtonSubmit />
      </Marginer>
      </SearchFormContainer>
    )
  }
}

export default StaySearchForm
