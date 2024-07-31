import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/system";
import { SERVICE_TYPE_COLORS } from "../../constants/serviceType";
import useServiceType from "../../hooks/useServiceType";
import ServiceTypeChip from "../ServiceUI/ServiceTypeChip";

const ServiceAccordion = () => {
  const { serviceType } = useServiceType();

  return (
    <>
      {serviceType?.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}a-content`}
            id={`panel${item.id}a-header`}
            sx={{
              backgroundColor: SERVICE_TYPE_COLORS
                ? alpha(SERVICE_TYPE_COLORS[item.id], 0.1)
                : "default",
            }}
          >
            <Typography
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: SERVICE_TYPE_COLORS
                  ? SERVICE_TYPE_COLORS[item.id]
                  : "default",
              }}
            >
              {item.name}
              <ServiceTypeChip
                serviceTypeId={item.id}
                serviceTypeName={item.name}
              />
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: SERVICE_TYPE_COLORS
                ? alpha(SERVICE_TYPE_COLORS[item.id], 0.1)
                : "default",
            }}
          >
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ServiceAccordion;
