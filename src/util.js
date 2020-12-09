//Media resize
export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/medi\/screenshots/)
    ? imagePath.replace(
      'media/scrennshots',
      `media/resize/${size}/-/screenshots`
    )
    : imagePath.replace(
      '/media/games/',
      `/media/resize/${size}/-/games/`
    )
  return image;
}
