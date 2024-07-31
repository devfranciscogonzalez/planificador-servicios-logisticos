import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logoAzul from "../../../assets/image/logo_camanchaca_azul.png";
import logoBlanco from "../../../assets/image/logo_camanchaca_blanco.png";

const COLORS = {
  AZUL: "azul",
};
const Logo = ({ color }) => (
  <Box px={1}>
    <Link to="/">
      <img
        src={color === COLORS.AZUL ? logoAzul : logoBlanco}
        alt="Logo Camanchaca"
        style={{ maxWidth: 150, cursor: "pointer" }}
      />
    </Link>
  </Box>
);

export default Logo;
