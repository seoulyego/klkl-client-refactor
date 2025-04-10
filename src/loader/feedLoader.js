import kyInstance from '@utils/kyInstance'

const feedLoader = async () => {
  const regionRequest = kyInstance.get('regions/hierarchy').json()
  const categoryRequest = kyInstance.get('categories/hierarchy').json()

  const responseData = await Promise.all([
    regionRequest,
    categoryRequest,
  ]).catch((error) => {
    throw Error(`${error.response.status}`)
  })

  console.log(`regionData: ${responseData[0]}`)
  console.log(`categoryData: ${responseData[1]}`)

  return {
    regionData: responseData[0],
    categoryData: responseData[1],
  }
}

export default feedLoader
