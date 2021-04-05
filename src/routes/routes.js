import AboutUs from "../pages/about-us";
import BringYourDog from "../pages/bring-your-dog";
import Cast from "../pages/cast";
import Directions from "../pages/directions";
import Employment from "../pages/site-employment";
import Faq from "../pages/faq";
import EntertainmentVendor from "../pages/entertainment-vendor";
import Home from "../pages/home";
import Sitemap from "../pages/sitemap";
import Tickets from "../pages/tickets";
import WarriorsIsland from "../pages/warriors-island";
import Weddings from "../pages/weddings";
import Weekends from "../pages/weekends";
import ContactUs from "../pages/contact-us";

export const routes = [
  {
    name: "AboutUs",
    path: "/about-us",
    Component: AboutUs,
  },

  {
    name: "BringYourDog",
    path: "/bring-your-dog",
    Component: BringYourDog,
  },

  {
    name: "Cast",
    path: "/cast",
    Component: Cast,
  },

  {
    name: "ContactUs",
    path: "/contact-us",
    Component: ContactUs,
  },

  {
    name: "Direction",
    path: "/directions",
    Component: Directions,
  },

  {
    name: "EntertainmentVendor",
    path: "/entertainment-vendor",
    Component: EntertainmentVendor,
  },

  {
    name: "FAQ",
    path: "/faq",
    Component: Faq,
  },

  {
    name: "Home",
    path: "/",
    Component: Home,
    exact: true,
  },

  {
    name: "Sitemap",
    path: "/sitemap",
    Component: Sitemap,
  },

  {
    name: "Employment",
    path: "/employment",
    Component: Employment,
  },

  {
    name: "Tickets",
    path: "/tickets",
    Component: Tickets,
  },

  {
    name: "Warriors",
    path: "/warriors-island",
    Component: WarriorsIsland,
  },

  {
    name: "Weddings",
    path: "/weddings",
    Component: Weddings,
  },

  {
    name: "Weekends",
    path: "/weekends",
    Component: Weekends,
  },
];
