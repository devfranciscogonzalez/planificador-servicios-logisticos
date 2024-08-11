import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logoAzul from "../../../assets/image/logo_camanchaca_azul.png";
import logoBlanco from "../../../assets/image/logo_camanchaca_blanco.png";

const COLORS = {
  AZUL: "azul",
};
const Logo = ({ color }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Link to="/" style={{ height: "50px" }}>
      <img
        src={color === COLORS.AZUL ? logoAzul : logoBlanco}
        alt="Logo Camanchaca"
        style={{ maxWidth: "150px", cursor: "pointer", height: "50px" }}
      />
    </Link>
  </Box>
);

export default Logo;
