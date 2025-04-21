const ElectricalIcon = ({ color = "text-gray-500", size = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 29"
    fill="none"
    stroke="currentColor"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${size} ${color}`}
  >
    <path d="M14.444 13.2289V6.38508L7.4762 15.6107H12.9341V22.615L20.5239 13.2289H14.444Z" />
    <path d="M26.9144 14.5C26.9144 21.6324 21.1324 27.4144 14 27.4144C6.86762 27.4144 1.08569 21.6324 1.08569 14.5C1.08569 7.36762 6.86762 1.58569 14 1.58569C21.1324 1.58569 26.9144 7.36762 26.9144 14.5Z" />
  </svg>
);

export default ElectricalIcon;
