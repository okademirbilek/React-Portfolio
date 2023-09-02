function preloadImages(imagesArray) {
  imagesArray.forEach((imageUrl) => {
    const img = new Image();
    img.src = imageUrl.imgSrc;
    window[imageUrl.imgSrc] = img;
    console.log("Preloaded:", imageUrl.imgSrc);
  });
}
export default preloadImages;
