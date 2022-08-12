const imagesData = [
  {
    id: 1,
    url: "/assets/images/01.jpg",
    title: "Standing under the galaxy",
    caption: "NASA's Webb delivers deepest infrared image of universe yet",
  },
  {
    id: 2,
    url: "/assets/images/02.jpg",
    title: "Mountain range",
    caption: "The Regional Nature Park of the Mediterranean Narbonnaise",
  },
  {
    id: 3,
    url: "/assets/images/03.jpg",
    title: "Desert night rocks",
    caption: "Extreme Dune Buggy Night Chase from Las Vegas",
  },
  {
    id: 4,
    url: "/assets/images/04.jpg",
    title: "Lake louise",
    caption: "Banff National Park",
  },
  {
    id: 5,
    url: "/assets/images/05.jpg",
    title: "Road to the mountains",
    caption: "Inspirational images without quotes",
  },
  {
    id: 6,
    url: "/assets/images/06.jpg",
    title: "Skandagiri Hills",
    caption: "Positive thinking quotes for more inner strength & growth",
  },
  {
    id: 7,
    url: "/assets/images/07.jpg",
    title: "Berlin Central Bank",
    caption: "A wonderful serenity has taken possession of my entire soul",
  },
  {
    id: 8,
    url: "/assets/images/08.jpg",
    title: "Bionic hand",
    caption: "Complexity has been the enemy of robotics",
  },
  {
    id: 9,
    url: "/assets/images/09.jpg",
    title: "Gold Coast Beach",
    caption: "Protecting the Gold Coast’s most treasured beaches",
  },
  {
    id: 10,
    url: "/assets/images/10.jpg",
    title: "Biblical Mountains",
    caption: "Injured hiker rescued after gruelling 18-hour mission",
  },
  {
    id: 11,
    url: "/assets/images/11.jpg",
    title: "Scandinavian",
    caption: "11 things only a Scandinavian would do",
  },
  {
    id: 12,
    url: "/assets/images/12.jpg",
    title: "Forest bathing",
    caption: "The secret to mindful travel?",
  },
];

const body = document.querySelector("body");
const footer = document.querySelector("footer");
const imagesGallery = document.getElementById("imagesGallery");

// When the user clicks on the gallery image, open the image details modal
const imageDetailsModal = document.getElementById("imageDetailsModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

let currentImageIndex;

const openImageDetailsModal = (index) => {
  currentImageIndex = index;
  if (index === 0) {
    previousImage.style.display = "none";
  } else {
    previousImage.style.display = "block";
  }

  if (index === imagesData.length - 1) {
    nextImage.style.display = "none";
  } else {
    nextImage.style.display = "block";
  }

  window.scrollTo(0, 0);
  imageDetailsModal.style.display = "block";
  body.style.overflow = "hidden";
  footer.style.display = "none";

  modalImage.setAttribute("src", imagesData[index].url);
  modalImage.setAttribute("alt", imagesData[index].title);
  modalTitle.innerHTML = imagesData[index].title;
  modalDescription.innerHTML = imagesData[index].caption;
};

// When the user clicks on the X button, open the image details modal
const closeModal = document.getElementById("closeImageDetailsModal");

const closeImageDetailsModal = () => {
  imageDetailsModal.style.display = "none";
  body.style.overflow = "auto";
  footer.style.display = "flex";
};

closeModal.addEventListener("click", closeImageDetailsModal);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == imageDetailsModal) {
    closeImageDetailsModal();
  }
};

// When the user clicks on the previous button, open the previous image
const previousImage = document.getElementById("previousImage");

const moveToPreviousImage = () => {
  openImageDetailsModal(currentImageIndex - 1);
};

previousImage.addEventListener("click", moveToPreviousImage);

// When the user clicks on the next button, open the next image
const nextImage = document.getElementById("nextImage");

const moveToNextImage = () => {
  openImageDetailsModal(currentImageIndex + 1);
};

nextImage.addEventListener("click", moveToNextImage);

imagesData.map((image) => {
  const figureElement = document.createElement("figure");
  const imageElement = document.createElement("img");

  imageElement.src = image.url;
  imageElement.alt = image.title;

  figureElement.appendChild(imageElement);

  const figcaptionElement = document.createElement("figcaption");
  const titleElement = document.createElement("h2");

  titleElement.innerHTML = image.title;

  figcaptionElement.appendChild(titleElement);
  figureElement.appendChild(figcaptionElement);
  figureElement.classList.add("image-item");

  imagesGallery.appendChild(figureElement);
});

document.querySelectorAll(".image-item").forEach((image, index) => {
  image.addEventListener("click", () => {
    openImageDetailsModal(index);
  });
});
