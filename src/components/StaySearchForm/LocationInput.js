/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useRef } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import ClearDataButton from './ClearDataButton';

const LocationInput = ({
  defaultValue,
  autoFocus = false,
  onChange,
  placeHolder = "場所を入力してください",
  desc = ""
}) => {

  const containerRef = useRef(null);
  const inputRef = useRef(null)
  const [value, setValue] = useState(defaultValue);

  const [showPopover, setShowPopover] = useState(autoFocus)

  const handleSelectLocation = (item) => {
    setValue(item);
    setShowPopover(false);
  };

  // style

  const SearchTitle = styled.h3`
    ${tw`
      block
      mt-2
      sm:mt-0
      px-4
      sm:px-8
      font-semibold
      text-base
      sm:text-lg
      text-neutral-800
    `};
  `;

  const SearchContainer = styled.div`
    ${tw`
      mt-4
      mr-3
    `};
  `;

  const SearchInputSpan = styled.span`
    ${tw`
      flex
      px-4
      sm:px-8
      items-center
      space-x-3
      sm:space-x-4
      py-4
      sm:py-5
      hover:bg-neutral-100
      dark:hover:bg-neutral-700
      cursor-pointer
    `};
  `;

  const SearchInputSpanIcon = styled.span`
    ${tw`
      block
      text-neutral-400
    `};
  `;

  const SearchInputSpanText = styled.span`
    ${tw`
      block
      font-medium
      text-neutral-700
      dark:text-neutral-200
    `};
  `;

  const SearchInputContainer = styled.div`
    ${tw`
      relative
      flex
    `};
  `;

  const SearchInputMainContainer = styled.div`
    ${tw`
      relative
      flex
      w-1/2
    `};
  `;

  const SearchInput = styled.div`
    ${tw`
      flex
      flex-1
      relative
      flex-shrink-0
      items-center
      space-x-3
      cursor-pointer
      focus:outline-none
      text-left
    `};
  `;

  const SearchInputTextContainer = styled.div`
    ${tw`
      text-neutral-300
      dark:text-neutral-400
    `};
  `;

  const SearchInputFlexGrow = styled.div`
    ${tw`
      flex-grow
    `};
  `;


  const SearchInputMainSpan = styled.span`
    ${tw`
      block
      mt-0.5
      text-sm
      text-neutral-400
      font-light
    `};
  `;

  const SearchInputLine = styled.span`
  ${tw`
    line-clamp-1
  `};
  `;

  const SearchRecentBox = styled.div`
    ${tw`
      absolute
      left-0
      z-40
      w-full
      min-w-[300px]
      sm:min-w-[500px]
      bg-white
      dark:bg-neutral-800
      top-full
      mt-3
      py-3
      sm:py-6
      rounded-3xl
      shadow-xl
      max-h-96
      overflow-y-auto
    `}
  `

  const RecentSearch = () => {
    return(
      <>
        <SearchTitle>
          最近の検索結果
        </SearchTitle>
        <SearchContainer>
          {[
            "静岡県静岡市",
            "神奈川県横浜市",
            "東京都新宿区"
          ].map((item) => (
            <SearchInputSpan
              onClick={() => handleSelectLocation(item)}
              key={item}
            >
              <SearchInputSpanIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-6 w-4 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </SearchInputSpanIcon>
              <SearchInputSpanText />
            </SearchInputSpan>
          ))}
        </SearchContainer>
      </>
    );
  };

  const SearchValue = () => {
    return (
      <>
        {[
          "東京都新宿区",
          "神奈川県横浜市",
          "愛知県名古屋市"
        ].map((item) => (
          <SearchInputSpan
            onClick={() => handleSelectLocation(item)}
            key={item}
          >
            <SearchInputSpanIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </SearchInputSpanIcon>
            <SearchInputSpanText>
              {item}
            </SearchInputSpanText>
          </SearchInputSpan>
        ))}
      </>
    )
  }
  return (
    <SearchInputMainContainer ref={containerRef}>
      <SearchInput
        onClick={() => setShowPopover(true)}
        className={`
          ${showPopover ? 
            "shadow-2xl rounded-full dark:bg-neutral-800" 
          : ""
          }`
        }
      >
        <SearchInputTextContainer>
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </SearchInputTextContainer>
        <SearchInputFlexGrow>
          <input
            className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-md placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
            placeholder={placeHolder}
            value={value}
            autoFocus={showPopover}
            onChange={(e) => setValue(e.currentTarget.value)}
            ref={inputRef}
          />
          <SearchInputMainSpan>
            <SearchInputLine>{!!value ? placeHolder : desc}</SearchInputLine>
          </SearchInputMainSpan>
          {value && showPopover && (
            <ClearDataButton onClick={() => setValue("")} />
          )}
        </SearchInputFlexGrow>
        {showPopover && (
          <SearchRecentBox>
            {value ? SearchValue() : RecentSearch()}
          </SearchRecentBox>
        )}
      </SearchInput>
    </SearchInputMainContainer>
  );
};

export default LocationInput;
