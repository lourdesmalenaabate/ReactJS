import "./VistaWrapper.css";
import SideBar from "./components/SideBar";

const VistaWrapper =
  (Componente) =>
  ({ ...props }) =>
    (
      <>
        <SideBar />
        <div className="main">
          <Componente {...props} />
        </div>
      </>
    );

export default VistaWrapper;
