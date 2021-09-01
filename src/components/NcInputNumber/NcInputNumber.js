import React, { useEffect, useState } from 'react'
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import styled from 'styled-components'
import tw from 'twin.macro';

const NcInputNumber = ({
  className = "w-full",
  defaultValue = 0,
  min = 0,
  max,
  onChange,
  label,
  desc,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange && onChange(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleClickDecrement = () => {
    if (min >= value) return;
    setValue((state) => state - 1);
  };
  const handleClickIncrement = () => {
    if (max && max <= value) return;
    setValue((state) => state + 1);
  };

  // style

  const FlexContainer = styled.div`
    ${tw`
      flex
      flex-col
    `};
  `;

  const InputNumberLabel = styled.span`
    ${tw`
      font-medium
      text-neutral-800
      dark:text-neutral-200
    `};
  `;

  const InputNumberLabelText = styled.span`
    ${tw`
      text-xs
      text-neutral-500
      dark:text-neutral-400
      font-normal
    `};
  `;

  const NcInputContainer = styled.div`
    ${tw`
      nc-NcInputNumber
      flex
      items-center
      justify-between
    `};
    ${className}
  `;

  const NcInputInner = styled.div`
    ${tw`
      nc-NcInputNumber
      flex
      items-center
      justify-between
      w-28
      ml-5
    `};
  `;

  const NcInputButton = styled.button`
    ${tw`
      w-8
      h-8
      rounded-full
      flex
      items-center
      justify-center
      border
      border-neutral-400
      dark:border-neutral-500
      bg-white
      dark:bg-neutral-900
      focus:outline-none
      hover:border-neutral-700
      disabled:hover:border-neutral-400
      dark:disabled:hover:border-neutral-500
      disabled:opacity-50
      disabled:cursor-default
    `};
  `;

  const Label = () => {
    return (
      <FlexContainer>
        <InputNumberLabel>
          {label}
        </InputNumberLabel>
        {desc && (
          <InputNumberLabelText>
            {desc}
          </InputNumberLabelText>
        )}
      </FlexContainer>
    );
  };

  return (
    <NcInputContainer data-nc-id="NcInputNumber">
      {label && Label()}
      <NcInputInner>
        <NcInputButton
          type="button"
          onClick={handleClickDecrement}
          disabled={min >= value}
        >
          <MinusIcon className="w-4 h-4" />
        </NcInputButton>
        <span>{value}</span>
        <NcInputButton
          type="button"
          onClick={handleClickIncrement}
          disabled={max ? max <= value : false}
        >
          <PlusIcon className="w-4 h-4" />
        </NcInputButton>
      </NcInputInner>
    </NcInputContainer>
  );
};

export default NcInputNumber
