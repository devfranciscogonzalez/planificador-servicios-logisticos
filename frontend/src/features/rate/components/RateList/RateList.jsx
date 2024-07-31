import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import dayjs from "dayjs";

const RateList = ({ rates, isVerifying }) => {
  const formatFecha = (fecha) =>
    fecha ? dayjs(fecha).format("DD/MM/YYYY") : "No seleccionado";

  return (
    <Paper sx={{ m: 1, p: 1 }} elevation={0}>
      {rates && rates.length > 0 ? (
        <List>
          {rates.map((rate, index) => (
            <ListItem key={index}>
              <ListItemText
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 1,
                }}
                primary={`Tarifa: ${rate.code}`}
                secondary={
                  <Typography component="span">
                    <Typography variant="body2" component="span">
                      Fecha de Incio: {formatFecha(rate.start_date)}
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ mr: 1.9 }}
                    >
                      Fecha de Fin:
                    </Typography>
                    <Typography variant="body2" component="span">
                      {formatFecha(rate.end_date)}
                    </Typography>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <>
          {!isVerifying ? (
            <Typography variant="subtitle1" align="center">
              No existen Tarifas
            </Typography>
          ) : (
            <Typography variant="subtitle1" align="center">
              Cargado...
            </Typography>
          )}
        </>
      )}
      <Divider />
    </Paper>
  );
};

export default RateList;
