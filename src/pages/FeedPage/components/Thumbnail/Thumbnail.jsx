import React from 'react'
import useFeedStore from '@stores/useFeedStore'
import ThumbnailArea from './Thumbnail.style'

function Thumbnail() {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)

  let thumbnailUrl = ''
  if (selectedCountry.id)
    thumbnailUrl = `https://del5h2y0q6wga.cloudfront.net/country_images/${selectedCountry.id}.jpg`
  else
    thumbnailUrl = `https://del5h2y0q6wga.cloudfront.net/country_images/0.jpg`

  return (
    <ThumbnailArea $url={thumbnailUrl}>
      <div>
        <div className="title">기념품 둘러보기</div>
        <div className="description">기념품을 둘러보세요.</div>
      </div>
    </ThumbnailArea>
  )
}

export default Thumbnail
