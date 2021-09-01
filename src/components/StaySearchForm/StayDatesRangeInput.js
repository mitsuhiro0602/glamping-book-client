import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {
  // eslint-disable-next-line no-unused-vars
  AnchorDirectionShape,
  DateRangePicker,
  // eslint-disable-next-line no-unused-vars
  FocusedInputShape,
} from "react-dates";
// eslint-disable-next-line no-unused-vars
import { DateRage } from "./StaySearchForm";
// eslint-disable-next-line no-unused-vars
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
import useWindowSize from "hooks/useWindowResize";
import tw from 'twin.macro';

const StayDatesRangeInput = ({
  defaultValue,
  onChange,
  defaultFocus = null,
  onFocusChange,
  fieldClassName = "[ nc-hero-field-padding ]",
  wrapClassName = "divide-y divide-neutral-200 lg:divide-y-0 md:border-l md:border-r border-neutral-200 lg:border-none",
  numberOfMonths,
  anchorDirection,
}) => {
  const [focusedInput, setFocusedInput] = useState(defaultFocus);
  const [stateDate, setStateDate] = useState(defaultValue)

  const windowSize = useWindowSize();

  useEffect(() => {
    setStateDate(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setFocusedInput(defaultFocus);
  }, [defaultFocus]);

  useEffect(() => {
    if (onChange) {
      onChange(stateDate);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateDate]);

  const handleClearData = (field) => {
    switch (field) {
      case "checkIn": {
        return setStateDate((date) => ({ ...date, startDate: null }));
      }
      case "checkOut": {
        return setStateDate((date) => ({ ...date, endDate: null }));
      }

      default:
        break;
    }
  };

  const handleDateFocusChange = (focus) => {
    setFocusedInput(focus);
    onFocusChange && onFocusChange(focus);
  };

  // style

  const DateInputCheckContainer = styled.div`
    ${tw`
      relative
      flex
      flex-1
      flex-shrink-0
      items-center
      space-x-3
      cursor-pointer
    `};
    ${fieldClassName}
  `;

  const DateInputTextContainer = styled.div`
    ${tw`
      text-neutral-300
      dark:text-neutral-400
    `};
  `;

  const DateInputFlexGrow = styled.div`
    ${tw`
      flex-grow
    `};
  `;

  const DateInputSpan = styled.span`
    ${tw`
      block
      xl:text-lg
      font-semibold
    `};
  `;

  const DateInputText = styled.span`
    ${tw`
      block
      mt-1
      text-sm
      text-neutral-400
      leading-none
      font-light
    `};
  `;

  const DateInputContainer = styled.div`
    ${tw`
      relative
      flex-shrink-0
      flex
      z-10
      [ lg:nc-flex-2 ]
    `};
  `;

  const DateInputInner = styled.div`
    ${tw`
      absolute
      inset-x-0
      bottom-0
    `};
  `;

  const DateInputFlex = styled.div`
    ${tw`
      flex
      flex-col
      lg:flex-row
      lg:items-center
      w-full
      flex-shrink-0
      relative
    `};
    ${wrapClassName}
  `;


  const InputCheckInDate = () => {
    const focused = focusedInput === "startDate";

    return (
      <DateInputCheckContainer
        classname={` ${focused ? "shadow-2xl rounded-full dark:bg-neutral-800" : ""}`}
        onClick={() => handleDateFocusChange("startDate")}
      >
        <DateInputTextContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nc-icon-field"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </DateInputTextContainer>
        <DateInputFlexGrow>
          <DateInputSpan>
            {stateDate.startDate
              ? stateDate.startDate.format("MM-DD")
              : "Check in"
            }
          </DateInputSpan>
          <DateInputText>
            {stateDate.startDate ? "Check in " : `Add date`}
          </DateInputText>
          {stateDate.startDate && (
            <ClearDataButton
              onClick={() => handleClearData('checkIn')}
            />
          )}
        </DateInputFlexGrow>
      </DateInputCheckContainer>
    );
  };

  const InputCheckOutDate = () => {
    const focused = focusedInput === "endDate";
    return (
      <DateInputCheckContainer
        classname={` ${focused ? "shadow-2xl rounded-full dark:bg-neutral-800" : ""}`}
        onClick={() => handleDateFocusChange("endDate")}
      >
        <DateInputTextContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nc-icon-field"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </DateInputTextContainer>
        <DateInputFlexGrow>
          <DateInputSpan>
            {stateDate.endDate
              ? stateDate.endDate.format("MM-DD")
              : "Check in"
            }
          </DateInputSpan>
          <DateInputText>
            {stateDate.endDate ? "Check out " : `Add date`}
          </DateInputText>
          {stateDate.endDate && (
            <ClearDataButton
              onClick={() => handleClearData('checkOut')}
            />
          )}
        </DateInputFlexGrow>
      </DateInputCheckContainer>
    )
  }
  return (
    <DateInputContainer>
      <DateInputInner>
        <DateRangePicker 
          startDate={stateDate.startDate}
          endDate={stateDate.endDate}
          focusedInput={focusedInput}
          onDatesChange={(date) => setStateDate(date)}
          onFocusChange={handleDateFocusChange}
          numberOfMonths={
            numberOfMonths || (windowSize.width <= 1024 ? 1 : undefined)
          }
          startDateId={"nc-hero-stay-startDateId"}
          endDateId={"nc-hero-stay-endDateId"}
          daySize={windowSize.width > 500 ? 56 : undefined}
          orientation={"horizontal"}
          showClearDates
          noBorder
          keepOpenOnDateSelect
          hideKeyboardShortcutsPanel
          anchorDirection={anchorDirection}
        />
      </DateInputInner>
      <DateInputFlex>
        {InputCheckInDate()}
        {InputCheckOutDate()}
      </DateInputFlex>
    </DateInputContainer>
  )
}

export default StayDatesRangeInput;
