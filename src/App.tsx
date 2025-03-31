import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import GroupTours from "./pages/GroupTours";
import Visa from "./pages/Visa";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Faq from "./pages/Faq";
import DestinationDetail from "./pages/DestinationDetail";
import ReligiousTours from "./pages/ReligiousTours";
import CalculateTourPage from "@/pages/calculate-tour";

// Using createRoutesFromElements for better readability
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Layout><NotFound /></Layout>}>
      <Route index element={<Index />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="destinations" element={<Destinations />} />
      <Route path="destinations/:destinationName" element={<DestinationDetail />} />
      <Route path="tours" element={<Tours />} />
      <Route path="tours/religious" element={<ReligiousTours />} />
      <Route path="tours/group" element={<GroupTours />} />
      <Route path="visa" element={<Visa />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="refund" element={<Refund />} />
      <Route path="faq" element={<Faq />} />
      <Route path="calculate-tour" element={<CalculateTourPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
