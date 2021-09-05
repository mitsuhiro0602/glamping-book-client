
import React, {useState} from 'react'
import styled from 'styled-components'
import LocationInput from './LocationInput';
import {DatePicker, Select} from 'antd';
import moment from 'moment'
import tw from 'twin.macro'
import { useHistory } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { Option } = Select;


const StaySearchForm = () => {

  const [location, setLocation] = useState('')
  const [date, setDate] = useState("");
  const [person, setPerson] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    history.push(`/search-result?location=${location}&date=${date}&person=${person}`);
  }

  // style

  const Marginer = styled.div`
    ${tw`
      px-4
      py-4
      lg:py-0
    `};
  `;

  const SearchButton = styled.button`
    ${tw`
      h-14
      md:h-16 
      w-full 
      md:w-16 
      rounded-full 
      bg-primary-6000 
      hover:bg-primary-700 
      flex 
      items-center 
      justify-center 
      text-neutral-50 
      focus:outline-none
      text-neutral-50
      hover:bg-indigo-700
      bg-indigo-400
    `};
  `;

  const SearchButtonText = styled.span`
    ${tw`
      mr-3
      md:hidden
    `};
  `;

  // eslint-disable-next-line no-unused-vars
  return (
    <div className="
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
      bg-white"
    >
      <LocationInput
        defaultValue={location}
        onChange={(e) => setLocation(e.value)}
        className="w-full"
      />
      <RangePicker
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
        className="w-100"
      />
      <Select
        onChange={(value) => setPerson(value)}
        className="w-50 h-10"
        size="large"
        placeholder="定員人数"
      >
        <Option key={1}>{1}</Option>
        <Option key={2}>{2}</Option>
        <Option key={3}>{3}</Option>
        <Option key={4}>{4}</Option>
        <Option key={5}>{5}</Option>
        <Option key={6}>{6}</Option>
        <Option key={7}>{7}</Option>
        <Option key={8}>{8}</Option>
        <Option key={9}>{9}</Option>
        <Option key={10}>{10}</Option>
      </Select>
      <Marginer>

        <SearchButton type="button" onClick={handleSubmit}>
      <SearchButtonText>Search</SearchButtonText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </SearchButton>
      </Marginer>
    </div>
  )
}

export default StaySearchForm
