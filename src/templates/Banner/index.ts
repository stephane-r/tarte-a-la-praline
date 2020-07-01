import {
  TEXT_BANNER,
  BUTTON_CUSTOM,
  BUTTON_DECLINE,
  BUTTON_AGREE
} from "../../translation";

const Banner = (primaryColor: string): string => `
  <style>
    .cookie-banner-button {
      color: ${primaryColor}
    }
  </style>
  <div id="banner-cookie" class="cookie-banner" style="color: ${primaryColor};">
    <p class="cookie-banner-text">${TEXT_BANNER}</p>
    <div class="cookie-banner-buttons-wrapper">
      <button class="cookie-banner-button js-cookie-button-allow"><span>${BUTTON_AGREE}</span></button>
      <button class="cookie-banner-button js-cookie-button-deny"><span>${BUTTON_DECLINE}</span></button>
      <button class="cookie-banner-button js-cookie-button-customize" data-micromodal-trigger="js-cookie-modal"><span>${BUTTON_CUSTOM}</span></button>
    </div>
  </div>
`;

export default Banner;
