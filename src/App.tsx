import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";
import { WorkPage } from "./pages/Work";
import { AiCreativePage } from "./pages/work/AiCreative";
import { ConsumerAppPage } from "./pages/work/ConsumerApp";
import { ProductPlanningPage } from "./pages/work/ProductPlanning";
import { QuantumGMPage } from "./pages/work/QuantumGM";
import { SubscriptionIntelligencePage } from "./pages/work/SubscriptionIntelligence";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "work", element: <WorkPage /> },
        { path: "work/quantum-gm", element: <QuantumGMPage /> },
        { path: "work/ai-creative", element: <AiCreativePage /> },
        {
          path: "work/subscription-intelligence",
          element: <SubscriptionIntelligencePage />,
        },
        { path: "work/product-planning", element: <ProductPlanningPage /> },
        { path: "work/consumer-app", element: <ConsumerAppPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);

export default function App() {
  return <RouterProvider router={router} />;
}
