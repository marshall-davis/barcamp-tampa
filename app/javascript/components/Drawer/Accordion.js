import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    padding: '0 15px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Accordion = ({ title, description, name }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionTitle>
            <Typography className={classes.heading}>{title}</Typography>
          </AccordionTitle>

          <AccordionDescription>
            <Typography className={classes.secondaryHeading}>
              {description}
            </Typography>
          </AccordionDescription>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <AccordionContent>
            <Typography>{description}</Typography>
            <span>by {name}</span>
            <button>Attend Talk</button>
          </AccordionContent>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
};

const AccordionTitle = styled.div`
  //background: bisque;
`;

const AccordionDescription = styled.div`
  //background: darkcyan;
`;

const AccordionContent = styled.div`
  //background: deepskyblue;
  width: 100%;
`;
