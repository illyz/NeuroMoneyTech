document.addEventListener("DOMContentLoaded", function () {
  var studyPage = document.querySelector(".study-page");

  if (
    !studyPage ||
    !window.jQuery ||
    !window.jQuery.fn.magnificPopup
  ) {
    return;
  }

  var $ = window.jQuery;
  var svgImageLinks = $(studyPage)
    .find("a[href$='.svg']")
    .has("> img");

  if (!svgImageLinks.length) {
    return;
  }

  svgImageLinks.addClass("svg-image-popup").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500,
    mainClass: "mfp-zoom-in mfp-svg-gallery",
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    }
  });
});
