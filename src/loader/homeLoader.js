import kyInstance from '@utils/kyInstance'

const homeLoader = async () => {
  const newReviewsRequest = kyInstance
    .get('products?sort_by=created_at&size=12')
    .json()
  const popularReviewsRequest = kyInstance
    .get('products?sort_by=like_count&size=12')
    .json()

  const responseData = await Promise.all([
    newReviewsRequest,
    popularReviewsRequest,
  ]).catch((error) => {
    throw Error(`${error.response.status}`)
  })

  console.log(`newReviews: ${responseData[0]}`)
  console.log(`popularReviews: ${responseData[1]}`)

  return {
    newReviews: responseData[0],
    popularReviews: responseData[1],
  }
}

export default homeLoader
