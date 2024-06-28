import dayjs from 'dayjs'

export const blogPostImagePath = (imageData, size) => {
  const images = imageData.data.attributes.formats
  const baseUrl = process.env.NEXT_PUBLIC_UPLOAD_URL || ''

  const imagePath = `${baseUrl}${images[size].url}`

  return {
    src: imagePath,
    alt: imageData.data.attributes.alternativeText,
  }
}

export const formatDate = (date) => {
  return dayjs(date).format('DD MMM YYYY')
}

export const fetchData = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
  return null
}
