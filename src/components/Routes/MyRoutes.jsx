import {
  Routes,
  Route,
} from "react-router-dom";
import App from '../../App'
import Login from "../../modules/Login/Login";
import WebsocketConnection from '../../modules/websocketConnection/WebsocketConnection';
import Register from "../../modules/Register/Register";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/websocket" element={<WebsocketConnection />} />
    </Routes>
  );
};

export default MyRoutes;