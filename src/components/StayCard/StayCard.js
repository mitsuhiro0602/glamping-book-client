import React from 'react'
import { diffDays } from "../../actions/glamping";
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import tw from 'twin.macro';


const StayCard = ({
  size = "default",
  glamping,
  owner = false,
  showViewMoreButton = true,
}) => {

  const {
    title,
    content,
    from,
    to,
    _id,
    image,
    price,
    location  } = glamping;

  const history = useHistory();

  // style

  const GalleryContent = styled.div`
    ${tw`
      space-y-2
    `};
  `;

  const GalleryTitleContainer = styled.div`
    ${tw`
      flex
      items-center
      space-x-2
    `};
  `;

  const GalleryTitleSpan = styled.h2`
    ${tw`
      font-medium
      capitalize
      text-lg
      text-center
    `};
  `;

  const LocationContainer = styled.div`
    ${tw`
      flex
      items-center
      text-neutral-500
      dark:text-neutral-400
      text-sm
      space-x-2
    `};
  `;

  const GlamgingContent = styled.div`
    ${tw`
      flex
      items-center
      text-neutral-500
      dark:text-neutral-400
      text-sm
      space-x-2
    `};
  `;

  const GlampingContentSpan = styled.span`
    ${tw`
      items-center
      text-base
    `};
  `;

  const BorderContainer = styled.div`
    ${tw`
      w-14
      my-2
      border-b
      border-neutral-100
      dark:border-neutral-800
    `};
  `;

  const PriceContainer = styled.div`
    ${tw`
      flex
      justify-between
      items-center
    `};
  `;

  const PriceSpan = styled.span`
    ${tw`
      float-left
      text-base
      font-semibold
    `};
  `;

  const PriceSpanSm = styled.span`
    ${tw`
      text-sm
      text-neutral-500
      dark:text-neutral-400
      font-normal
    `};
  `;

  const StayCardContainer = styled.div`
    ${tw`
      relative
      bg-white
      dark:bg-neutral-900
      border
      border-neutral-100
      dark:border-neutral-800
      rounded-2xl
      overflow-hidden
      hover:shadow-xl
      transition-shadow
    `};
  `;

  const CardImageContainer = styled.div`
    ${tw`
      sm:h-[300px]
      relative
      w-full
      xl:h-[600px]
    `};
  `;

  const CardImage = styled.img`
    ${tw`
      w-full
      sm:max-w-full
      object-cover
      overflow-hidden
      sm:h-[300px]
      xl:h-[600px]
    `};
  `;

  const OwnerButton = styled.div`
    ${tw`
      flex
      justify-center
      items-center
      text-base
      font-semibold
      my-3
    `};
  `;

  const DaySpan = styled.div`
    ${tw`
      float-right
      text-base
      font-semibold
    `};
  `;

  const ShowButton = styled.button`
    ${tw`
      bg-blue-500
      hover:bg-blue-700 
      text-white font-bold 
      py-2 
      px-4 
      rounded-full
    `}
  `

  const renderSliderGallery = () => {
    return (
      <CardImageContainer>
        {image && image.contentType ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <CardImage
            src={`${process.env.REACT_APP_API}/glamping/image/${_id}`}
            alt="default hotel image"
            className="max-w-full max-h-auto"
          />
        ) : (

          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <CardImage
            src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
            alt="default hotel image"
            className="max-w-full h-96"
          />
        )}
      </CardImageContainer>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"}>
        <GalleryContent>
          <GalleryTitleContainer>
            <GalleryTitleSpan>
              <span className="line-clamp-1">{title}</span>
            </GalleryTitleSpan>
          </GalleryTitleContainer>
          <LocationContainer>
            {size === "default" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            )}
            <span className="">{location}</span>
          </LocationContainer>
          <GlamgingContent>
            <GlampingContentSpan>
              <p>{`${content.substring(0, 50)}...`}</p>
            </GlampingContentSpan>
          </GlamgingContent>
          <BorderContainer />
          <OwnerButton>
            {showViewMoreButton &&(
              <ShowButton
                onClick={() =>???history.push(`/glamping/${_id}`)} 
                className="btn btn-primary"
              >
                ?????????????????????
              </ShowButton>
            )}
          </OwnerButton>
          <PriceContainer>
            <PriceSpan>
              {price}{` `}
              {size === "default" && (
                <PriceSpanSm>
                  ???/???
                </PriceSpanSm>
              )}
            </PriceSpan>
            <DaySpan>
              for {diffDays(from, to)}{" "}
                  {diffDays(from, to) <= 1 ? 'day' : 'days'}
            </DaySpan>

          </PriceContainer>
        </GalleryContent>
      </div>
    )
  }
  return (
    <StayCardContainer>
      {renderSliderGallery()}
      {renderContent()}
    </StayCardContainer>
  )
}

export default StayCard
