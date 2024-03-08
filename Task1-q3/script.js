const images = [
    "https://m.media-amazon.com/images/I/6161TMIwL3L._AC_UF1000,1000_QL80_.jpg",
    "https://i.etsystatic.com/20427741/r/il/ae53e7/3672546678/il_570xN.3672546678_575j.jpg",
    "https://m.media-amazon.com/images/I/61KTbjfuNIL._AC_UF1000,1000_QL80_.jpg",
    "https://www.poison.org/-/media/images/shared/articles/2015-mar/are-daffodils-poisonous.jpg",
    "https://www.skorganicfarms.com/cdn/shop/products/african-marigold-f2-dwarf-orange_700x.jpg?v=1596341910",
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg",
    "https://m.media-amazon.com/images/I/71mcmwk7CzL._AC_UF1000,1000_QL80_.jpg",
    "https://www.vedonic.com/cdn/shop/products/1LlOU-n_kMXb-DQKXg7PmNK52IyLrQDmm_1024x1024.jpg?v=1659536119",
    "https://plantsmarket.in/cdn/shop/products/top-15-air-cleaning-purifying-houseplants-NASA-Clean-Air-Study-healthy-clean-living-gerbera_1024x1024.jpg?v=1651254274",
    "https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-crocus-flowers-united-kingdom-uk-royalty-free-image-1674159456.jpg"
  ];

  
  const thumbnailsContainer = document.querySelector('.thumbnails');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeBtn = document.querySelector('.close');
  
  function createThumbnail(image, index) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index+1}">`;
    thumbnail.addEventListener('click', () => {
      openLightbox(image);
    });
    return thumbnail;
  }
  
  function openLightbox(image) {
    lightboxImage.src = image;
    lightbox.style.display = 'flex';
  }
  
  function closeLightbox() {
    lightbox.style.display = 'none';
  }
  
  images.forEach((image, index) => {
    const thumbnail = createThumbnail(image, index);
    thumbnailsContainer.appendChild(thumbnail);
  });
  
  closeBtn.addEventListener('click', closeLightbox);
  