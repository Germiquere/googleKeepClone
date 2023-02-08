// import SwiperDrawer from "./assets/components/SwiperDrawer";

import Home from "./assets/components/Home";
import CheckedState from "./assets/context/CheckedState";
import DataProvider from "./assets/context/DataProvider";
import MenuIconState from "./assets/context/MenuIconState";
import NavListProvider from "./assets/context/NavListProvider";
import SearchProvider from "./assets/context/SearchProvider";
function App() {
  return (
    <DataProvider>
      <MenuIconState>
        <NavListProvider>
          <SearchProvider>
            <CheckedState>
              <Home></Home>
            </CheckedState>
          </SearchProvider>
        </NavListProvider>
      </MenuIconState>
    </DataProvider>
  );
}

export default App;
