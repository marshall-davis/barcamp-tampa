import React, { useEffect, useState } from 'react';
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
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as starLight } from '@fortawesome/free-regular-svg-icons';

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
    height: 'auto',
    alignItems: 'center',
  },
}));

const Accordion = ({ talkData, currentHour }) => {
  const { title, description, room, name, twitter } = talkData;
  const [isExpanded, setExpanded] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const classes = useStyles();

  return (
    <AccordionContainer className={classes.containerRoot}>
      <ExpansionPanel
        expanded={isExpanded}
        onChange={() => setExpanded(!isExpanded)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.summaryRoot}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h4 className="accordion-title">{title}</h4>
          <h5>{`Room #${room.name}`}</h5>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <AccordionContent>
            <div className="speaker-info">
              <p className="description">{description}</p>
              <p className="speaker-name">{`by ${name}`}</p>
              <p className="talk-time">{`at ${currentHour}:00`}</p>
            </div>

            <div className="social-media">
              {twitter && (
                <a
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon color={'#33CCFF'} icon={faTwitterSquare} />
                </a>
              )}
              {/*{  favorites.includes(id) ? (*/}
              {/*  <Icon*/}
              {/*    onClick={() =>*/}
              {/*      setFavorites(favorites.filter(favorite => favorite !== id))*/}
              {/*    }*/}
              {/*    color={'#ffd700'}*/}
              {/*    icon={faStar}*/}
              {/*  />*/}
              {/*) : (*/}
              {/*  <Icon*/}
              {/*    onClick={() => setFavorites([...favorites, id])}*/}
              {/*    color={'#ffd700'}*/}
              {/*    icon={starLight}*/}
              {/*  />*/}
              {/*)}*/}
            </div>
          </AccordionContent>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </AccordionContainer>
  );
};

export default Accordion;

Accordion.propTypes = {
  currentHour: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  talkData: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    room: PropTypes.shape({
      name: PropTypes.string,
    }),
    speaker: PropTypes.shape({
      facebook: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
    }),
  }),
};

const AccordionContainer = styled.div`
  .MuiExpansionPanelSummary-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
      margin: 0;
    }

    h5 {
      margin: 10px 0 0 0;
      font-size: 16px;
    }
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

  .speaker-name {
    font-weight: bold;
  }

  .talk-time {
    font-weight: bold;
  }

  .social-media {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
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
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
    '&:hover': {
      background: 'rgb(38, 177, 97)',
      transition: '.8s',
    },
  },
  label: {
    //
  },
})(Button);
