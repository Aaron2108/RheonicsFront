export const PhoneIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
  </svg>
);

export const EmailIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
  </svg>
);

export const ChevronIcon = ({
  size = 16,
  className = "",
  color = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
  </svg>
);

export const SearchIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
  </svg>
);

export const LinkedInIcon = ({}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_1_283)">
      <path
        d="M13.3333 6.66666C14.6593 6.66666 15.9311 7.19344 16.8688 8.13112C17.8065 9.0688 18.3333 10.3406 18.3333 11.6667V17.5H14.9999V11.6667C14.9999 11.2246 14.8243 10.8007 14.5118 10.4881C14.1992 10.1756 13.7753 9.99999 13.3333 9.99999C12.8912 9.99999 12.4673 10.1756 12.1547 10.4881C11.8422 10.8007 11.6666 11.2246 11.6666 11.6667V17.5H8.33325V11.6667C8.33325 10.3406 8.86004 9.0688 9.79772 8.13112C10.7354 7.19344 12.0072 6.66666 13.3333 6.66666Z"
        stroke="#0A66C2"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5.00008 7.5H1.66675V17.5H5.00008V7.5Z"
        stroke="#0A66C2"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.33341 4.99999C4.25389 4.99999 5.00008 4.2538 5.00008 3.33332C5.00008 2.41285 4.25389 1.66666 3.33341 1.66666C2.41294 1.66666 1.66675 2.41285 1.66675 3.33332C1.66675 4.2538 2.41294 4.99999 3.33341 4.99999Z"
        stroke="#0A66C2"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1_283">
        <rect width="20" height="20" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

export const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_1_343)">
      <path
        d="M6.66675 1.66666V4.99999"
        stroke="#155DFC"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.3333 1.66666V4.99999"
        stroke="#155DFC"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z"
        stroke="#155DFC"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2.5 8.33334H17.5"
        stroke="#155DFC"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1_343">
        <rect width="20" height="20" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

export const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_361)">
      <path
        d="M13.3334 6.66668C13.3334 9.99534 9.64075 13.462 8.40075 14.5327C8.28523 14.6195 8.14461 14.6665 8.00008 14.6665C7.85555 14.6665 7.71493 14.6195 7.59941 14.5327C6.35941 13.462 2.66675 9.99534 2.66675 6.66668C2.66675 5.25219 3.22865 3.89563 4.22885 2.89544C5.22904 1.89525 6.58559 1.33334 8.00008 1.33334C9.41457 1.33334 10.7711 1.89525 11.7713 2.89544C12.7715 3.89563 13.3334 5.25219 13.3334 6.66668Z"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 8.66666C9.10457 8.66666 10 7.77123 10 6.66666C10 5.56209 9.10457 4.66666 8 4.66666C6.89543 4.66666 6 5.56209 6 6.66666C6 7.77123 6.89543 8.66666 8 8.66666Z"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1_361">
        <rect width="16" height="16" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

export const RelojIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_294)">
      <path
        d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 4V8L10.6667 9.33333"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1_294">
        <rect width="16" height="16" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);
