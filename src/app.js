import "./index.css";
import Body from "./Components/Body";
import { Provider, useDispatch } from "react-redux";
import appStore from "./Utils/Store/appStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  {
    /*This is another approach if we need to have navigate method in the onAuthChange method (navigate should be in the child of route provider 
    ex: body has BrowserRouter, so under Body, we have login, homepage. soly only login , home page should have this navigate method),
  --Other approach is to use window.location.href --not a good way to use this approach
  -- 3rd approach is use the navigate in child components, now used this approach to build this app
  <
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/browse",
  //     element: <HomePage />,
  //   },
  // ]);
> */
  }

  return (
    <div>
      {/* <RouterProvider router={appRouter} /> */}
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
