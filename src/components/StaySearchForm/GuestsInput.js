import React, {Fragment, useEffect, useState} from 'react'
import { Popover, Transition } from "@headlessui/react";
import styled from 'styled-components';
import tw from 'twin.macro';
import ClearDataButton from './ClearDataButton';
import NcInputNumber from '../NcInputNumber/NcInputNumber';

const GuestsInput = ({
  defaultValue,
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {
  const [person, setPerson] = useState(defaultValue.person || 0)

  useEffect(() => {
    setPerson(defaultValue.person || 0);
  }, [defaultValue])

  useEffect(() => {
    if(onChange) {
      onChange({
        person
      });
    }
  }, [person])

  const totalGuest = person

  // style
  const GuestsInputContainer = styled.div`
    ${tw`
      text-neutral-300
      dark:text-neutral-400
    `};
  `;

  const GuestsInputFlex = styled.div`
    ${tw`
      flex-grow
    `};
  `;

  const GuestsInputText = styled.span`
    ${tw`
      block
      xl:text-lg
      font-semibold
    `};
  `;

  const GuestsInputTextSm = styled.span`
    ${tw`
      block
      mt-1
      text-sm
      text-neutral-400
      leading-none
      font-light
    `};
  `;


  return (
    <Popover className="flex relative [ nc-flex-1] ">
      {({ open }) => (
        <>
          <Popover.Button
            className={`flex text-left w-full flex-shrink-0 items-center ${fieldClassName} space-x-3 focus:outline-none cursor-pointer ${open ? "shadow-2xl rounded-full dark:bg-neutral-800" : ""}`}
          >
            <GuestsInputContainer>
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </GuestsInputContainer>
            <GuestsInputFlex>
              <GuestsInputText>
                {totalGuest || ""} Guests
              </GuestsInputText>
              <GuestsInputTextSm>
                {totalGuest ? "Guest" : "Add guests"}
              </GuestsInputTextSm>
              {!!totalGuest && open && (
                <ClearDataButton
                  onClick={() => {setPerson(0);}}
                />
              )}
            </GuestsInputFlex>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <NcInputNumber
                className="w-full"
                defaultValue={person}
                onChange={(value) => setPerson(value)}
                max={10}
                min={1}
                label="人数"
                desc="定員人数"
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default GuestsInput
