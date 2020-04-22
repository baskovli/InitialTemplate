import {
  FaHome,
  FaUser,
  FaStickyNote,
  FaCogs,
  // FaPaperPlane,
} from "react-icons/fa";

const Navs = [
  { path: "/", name: "Home", icon: FaHome },
  { path: "/clients", name: "Clients", icon: FaUser },
  { path: "/counter", name: "Counter", icon: FaStickyNote },
  { path: "/fetchData", name: "FetchData", icon: FaCogs },
];

export default Navs;
