import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
  containerRoot: {
    width: '80%',
    padding: '0',
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
  summaryRoot: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    alignItems: 'center',
    '@media (max-height: 868px)': {
      height: '65px',
    },
  },
}));

const Accordion = ({ talkData }) => {
  console.log('talkData', talkData);
  const { title, description, name, speaker } = talkData;
  const { firstName, lastName, email, twitter, facebook, linkedin } = speaker;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionContainer className={classes.containerRoot}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.summaryRoot}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h4 className="accordion-title">{title}</h4>
          {/*<AccordionDescription>{`${time}:00`}</AccordionDescription>*/}
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <AccordionContent>
            <div className="speaker-info">
              <p className="description">{description}</p>
              <span className="speaker-name">{`${firstName} ${lastName}`}</span>
              <span className="speaker-email">{`${email}`}</span>
            </div>

            <div className="social-media">
              <a href={`https://twitter.com/${twitter}`} target="_blank">
                <Icon color={'#33CCFF'} icon={faTwitterSquare} />
              </a>
              <a
                href={`https://www.linkedin.com/in/${linkedin}`}
                target="_blank"
              >
                <Icon color={'#4875B4'} icon={faLinkedin} />
              </a>
              <a href={`https://www.facebook.com/${facebook}`} target="_blank">
                <Icon color={'#3b5998'} icon={faFacebookSquare} />
              </a>
            </div>
            <ActionButton color="secondary">Attend Talk</ActionButton>
          </AccordionContent>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </AccordionContainer>
  );
};

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
};

const AccordionContainer = styled.div`
  .MuiExpansionPanelSummary-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiExpansionPanelDetails-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 10px 10px;
  }
`;

const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
  }

  .social-media {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = withStyles({
  root: {
    background: 'rgb(31, 150, 242)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    width: 130,
    padding: '0',
    margin: '5px 0 0 0',
    boxShadow: '0 3px 5px 2px rgba(41,41,41,.25)',
    '&:hover': {
      background: 'rgb(38, 177, 97)',
      transition: '.8s',
    },
  },
  label: {
    //
  },
})(Button);
