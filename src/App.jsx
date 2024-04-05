import { RouterProvider } from "react-router-dom";
import CustomRoutes from "./routes";

function App() {

  return (
   
    <RouterProvider router={CustomRoutes} />
  );
}

export default App;
