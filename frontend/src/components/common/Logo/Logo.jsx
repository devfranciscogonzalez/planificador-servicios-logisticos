import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { logoAzul, logoBlanco } from "../../../assets/images";

const COLORS = {
  AZUL: "azul",
};
const Logo = ({ color }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Link to="/" style={{ height: "50px" }}>
      <img
        src={color === COLORS.AZUL ? logoAzul : logoBlanco}
        alt="Logo Camanchaca"
        style={{ width: "150px", height: "50px", cursor: "pointer" }}
      />
    </Link>
  </Box>
);

export default Logo;
