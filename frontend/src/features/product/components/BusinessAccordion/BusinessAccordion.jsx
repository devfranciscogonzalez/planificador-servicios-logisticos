import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/system";
import useBusinessType from "../../hooks/useBusinessType";
import { BUSINESS_COLORS } from "../../constants/productBusiness";
import BusinessChip from "../ProductUI/BusinessChip";

const BusinessAccordion = () => {
  const { businessType } = useBusinessType();

  return (
    <>
      {businessType?.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}a-content`}
            id={`panel${item.id}a-header`}
            sx={{
              backgroundColor: BUSINESS_COLORS
                ? alpha(BUSINESS_COLORS[item.id], 0.1)
                : "default",
            }}
          >
            <Typography
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: BUSINESS_COLORS ? BUSINESS_COLORS[item.id] : "default",
              }}
            >
              {item.name}
              <BusinessChip businessId={item.id} businessName={item.name} />
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: BUSINESS_COLORS
                ? alpha(BUSINESS_COLORS[item.id], 0.6)
                : "default",
              color: "white",
            }}
          >
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default BusinessAccordion;
