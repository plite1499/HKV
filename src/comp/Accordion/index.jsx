import React from "react";
import css from "./Accordion.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";

const MyAccordion = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <Accordion
        sx={{
          backgroundColor: "red",
          borderRadius: "10px !important",
          width: "650px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            height: "70px",
          }}
        >
          {props.title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "dimgray",
          }}
        >
          {props.summary}
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
