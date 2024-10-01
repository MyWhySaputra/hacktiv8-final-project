import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { Provider } from "react-redux";
import store from "./redux/app/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
