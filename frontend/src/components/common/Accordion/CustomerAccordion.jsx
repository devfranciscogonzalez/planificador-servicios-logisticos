import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const CustomerAccordion = ({ items, colorMap }) => {
  return (
    <>
      {items?.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}a-content`}
            id={`panel${item.id}a-header`}
          >
            <Typography color={colorMap ? colorMap[item.id] : "default"}>
              {item.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CustomerAccordion;
