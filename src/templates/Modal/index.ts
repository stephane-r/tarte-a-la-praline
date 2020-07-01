import { HEADER_MODAL } from "../../translation";

const Modal = (primaryColor: string): string => `
  <div class="modal-overlay" tabindex="-1" data-micromodal-close style="color: ${primaryColor}">
    <div class="modal-container" role="dialog" aria-modal="true">
      <header class="modal-header">
        <h2 class="modal-title">${HEADER_MODAL}</h2>
        <button
          class="modal-close"
          aria-label="Close modal"
          data-micromodal-close
        ></button>
      </header>
      <div class="modal-content">
        <div id="js-custom-selection"></div>
      </div>
    </div>
  </div>
`;

export default Modal;
