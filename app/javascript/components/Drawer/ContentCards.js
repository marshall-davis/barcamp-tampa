import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AfterpartyIcon from '../../../assets/images/afterparty.png';
import CheckinIcon from '../../../assets/images/checkin.png';
import FeedbackIcon from '../../../assets/images/feedback.png';
import LunchIcon from '../../../assets/images/lunch.png';
import { BarCampSquare } from '../../../assets/images';
import { chs } from '../../../assets/images/sponsors/terabyte';
import { DirectionsButton, MenuButton } from '../Home/Home';
import { sourceToad, redHat } from '../../../assets/images/sponsors/petabyte';

export const CheckinContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <ContentContainer>
          <div>
            <h3>Talk sign-ups start at 8:00 AM</h3>
          </div>
          <img src={CheckinIcon} alt="image of event scheduling" />
          <div>
            <h3>Opening remarks start at 8:45 AM</h3>
            <h4>Taking place in the Auditorium room 150</h4>
          </div>

          <div className="sponsor">
            <div>
              <h4>🍩 Donuts sponsored by SourceToad 🍩</h4>
              <img src={sourceToad} alt="SourceToad Logo" />
            </div>

            <div>
              <h4>☕️ Coffee sponsored by Change Her Story ☕️</h4>
              <img src={chs} alt="SourceToad Logo" />
            </div>
          </div>
        </ContentContainer>
      </CardContent>
    </Card>
  );
};

export const LunchContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <ContentContainer>
          <div>
            <h3>Lunch starts at 12:00 PM</h3>
          </div>
          <img src={LunchIcon} alt="lunch icon" />
          <div>
            <h3>
              We challenge you to sit and talk two people you don't already know
            </h3>
            <h4>Taking place in the Auditorium room 150</h4>
          </div>

          <div className="sponsor">
            <div>
              <h4>🍺 Beverages sponsored by Redhat 🍺</h4>
              <img src={redHat} alt="Redhat Logo" />
            </div>
          </div>
        </ContentContainer>
      </CardContent>
    </Card>
  );
};

export const WrapUpContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <ContentContainer>
          <div>
            <h3>
              Closing remarks, feedback session, and raffle starts at 4:15 PM
            </h3>
          </div>
          <img src={FeedbackIcon} alt="lunch icon" />
          <div>
            <h4>
              Come have fun, and join the raffle by letting us know how we can
              improve BarCamp Tampa Bay!
            </h4>
            <h4>Taking place in the Auditorium room 150</h4>
          </div>

          <div className="sponsor">
            <div>
              <h4>🎟 Raffle sponsors 🎟</h4>
              <img src={BarCampSquare} alt="BarCamp Logo" />
            </div>
          </div>
        </ContentContainer>
      </CardContent>
    </Card>
  );
};

export const AfterpartyContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <ContentContainer>
          <div>
            <h3>Afterparty starts at 5:00 PM</h3>
          </div>
          <img src={AfterpartyIcon} alt="lunch icon" />
          <div>
            <h3>Come hangout with us at the Afterparty!</h3>
            <h4>Taking place at Tampa Joe's</h4>

            <div className="buttons">
              <DirectionsButton
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Tampa+Joe's/@28.0344974,-82.5421181,15z/data=!4m2!3m1!1s0x0:0xb62899a3c700c6eb?sa=X&ved=2ahUKEwjGqt7T1YXlAhWn1lkKHTdVDgEQ_BIwFHoECA0QCA"
                  )
                }
                color="primary"
                variant="contained"
              >
                Directions
              </DirectionsButton>

              <MenuButton
                onClick={() => window.open('http://tampajoes.com/')}
                color="secondary"
                variant="contained"
              >
                MENU
              </MenuButton>
            </div>
          </div>

          <div className="sponsor">
            <div>
              <h4>🍻 Afterparty sponsored by SourceToad 🍻</h4>
              <img src={sourceToad} alt="SourceToad Logo" />
            </div>
          </div>
        </ContentContainer>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  card: {
    width: '80%',
    height: '100%',
  },
});

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }

  .sponsor {
    img {
      margin: 20px 0;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
