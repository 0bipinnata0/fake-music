import Home from "../screens/Home";
import Rank from "../screens/Rank";
import Recommend from "../screens/Recommend";
import Singers from "../screens/Singers";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Recommend /> },
      {
        path: "/recommend",
        element: <Recommend />,
      },
      {
        path: "/rank",
        element: <Rank />,
      },
      {
        path: "/singers",
        element: <Singers />,
      },
    ],
  },
];

export default routes;
