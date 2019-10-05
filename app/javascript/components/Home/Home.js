import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import Drawer from '../Drawer/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SponsorBanner from './SponsorBanner';
import { BarCampSquare } from '../../../assets/images';
import { useQuery } from '@apollo/react-hooks';
import { TALKS_BY_YEAR } from '../Drawer/quries';
import {
  petabyte,
  gigabyte,
  terabyte,
  academicPartners,
  communitySponsors,
  mediaPartners,
} from '../../../assets/images/sponsors';

const Home = () => {
  const { loading, error, data } = useQuery(TALKS_BY_YEAR);
  if (error) console.warn('TALKS Query Error: ', error);
  const [drawerState, setDrawerState] = React.useState(false);
  const [isSliding, setSliding] = React.useState(true);
  const talkTimeSlots = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5'];
  const [talkTimeSlotIndex, setTalkTimeSlotIndex] = useState(0);
  const [realTalk, setTalks] = useState([]);
  const currentTalkGroup = talkTimeSlots[talkTimeSlotIndex];

  useEffect(() => {
    if (!loading && data.talks.length) {
      setTalks(data.talks);
    }
  });

  const makeTalkMap = ({ talks, talkTimeSlots }) => {
    let hashMap = {};
    if (talks === undefined || talks === null)
      return console.error('makeTalkMap: talks undefined or null');

    if (talks.length && talks[0]) {
      for (let i = 0; i < talkTimeSlots.length; i++) {
        const currentTimeSlot = talkTimeSlots[i];
        const talksThisHour = talks.filter(talk => {
          const formattedTime = `${format(talk.time, 'h')}`;
          return formattedTime === currentTimeSlot;
        });

        hashMap[currentTimeSlot] = talksThisHour;
      }
    }
    return hashMap;
  };
  // const talks = makeTalkMap({ talks: mockTalks, talkTimeSlots });
  const realTalks =
    realTalk.length > 0 ? makeTalkMap({ talks: realTalk, talkTimeSlots }) : [];

  return (
    <HomeContainer>
      <Drawer
        talkData={realTalks[currentTalkGroup]}
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        setTalkHour={setTalkTimeSlotIndex}
        talkTimeSlotIndex={talkTimeSlotIndex}
        numberOfHours={talkTimeSlots.length}
        currentHour={currentTalkGroup}
      />
      <WelcomeContainer>
        <Header>
          <h1>Welcome to BarCamp 2019</h1>
          <img src={BarCampSquare} alt="barcamp logo" />

          <h3>Keiser University</h3>
          <span>5002 W Waters Ave, Tampa, FL 33634</span>

          <DirectionsButton
            onClick={() =>
              window.open(
                'https://www.google.com/maps/dir//Keiser+University+tampa/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88c2c20cbe97347d:0xa14466b5008394c1?sa=X&ved=2ahUKEwiR0vX1vIHlAhVROq0KHfKaAawQ9RcwFHoECAoQEA'
              )
            }
            color="primary"
            variant="contained"
          >
            Directions
          </DirectionsButton>
        </Header>

        <div className="schedule">
          <h4>Schedule</h4>
          <div>
            <span>Check-in & breakfast </span>
            <b> at 8:00 AM</b>
          </div>
          <div>
            <span>Speaker sign-ups</span>
            <b>at 8:00 AM</b>
          </div>
          <div>
            <span>Welcome remarks</span>
            <b>at 8:45 AM</b>
          </div>
          <div>
            <span>Sessions begin</span>
            <b>at 9:00 AM</b>
          </div>
          <div>
            <span>Lunch</span> <b>12:00 PM to 1:00 PM</b>
          </div>
          <div>
            <span>Wrap-up & raffles</span>
            <b>at 4:00 PM</b>
          </div>

          <div className="afterparty">
            <h4>Afterparty</h4>
            <h5>TAMPA JOES</h5>
            <span>316 Anderson Rd, Tampa, FL 33634 </span>

            <DirectionsButton
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/27.7819919,-82.6416247/Tampa+Joe's,+9316+Anderson+Rd,+Tampa,+FL+33634/@27.906128,-82.6649352,12z/data=!3m1!4b1!4m17!1m6!3m5!1s0x88c2c1c710cdac71:0xb62899a3c700c6eb!2sTampa+Joe's!8m2!3d28.0344974!4d-82.5421181!4m9!1m1!4e1!1m5!1m1!1s0x88c2c1c710cdac71:0xb62899a3c700c6eb!2m2!1d-82.5421181!2d28.0344974!3e0"
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
      </WelcomeContainer>

      <SponsorContainer>
        <h3>Thank You to our Sponsors!</h3>
        <FormControlLabel
          control={
            <Switch
              checked={isSliding}
              onChange={() => setSliding(!isSliding)}
              color="primary"
            />
          }
          label="Toggle Sliding Banners"
        />

        <div className="sponsor-wrapper">
          <SponsorBanner
            isSliding={isSliding}
            header="Petabyte Sponsors"
            sponsors={petabyte}
          />
          <SponsorBanner
            isSliding={isSliding}
            header="Terabyte Sponsors"
            sponsors={terabyte}
          />
          <SponsorBanner
            isSliding={isSliding}
            header="Gigabyte Sponsors"
            sponsors={gigabyte}
          />
          <SponsorBanner
            isSliding={isSliding}
            header="Academic Sponsors"
            sponsors={academicPartners}
          />
          <SponsorBanner
            isSliding={isSliding}
            header="Community Sponsors"
            sponsors={communitySponsors}
          />
          <SponsorBanner header="Media Sponsors" sponsors={mediaPartners} />
        </div>
      </SponsorContainer>

      {true && (
        <TalksButton
          onClick={() => setDrawerState(!drawerState)}
          color="primary"
          aria-label="add"
        >
          Talks
        </TalksButton>
      )}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  font-family: 'Open Sans', Helvetica, Arial, Verdana, sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: black;
  }

  h1 {
    margin-bottom: 40px;
  }

  img {
    margin-bottom: 40px;
  }

  h3 {
    margin: 0;
  }

  span {
    font-size: 14px;
  }
`;

const WelcomeContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
  }

  .schedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    h4 {
      margin: 10px 0;
    }

    div {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      b {
        margin-left: 5px;
      }
    }
  }

  .afterparty {
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 14px;
      margin: 10px 0;
    }

    span {
      font-size: 14px;
    }
  }

  @media only screen and (max-device-height: 850px) {
    h1 {
      font-size: 1.4em;
      text-align: center;
      margin-top: 40px;
    }
  }
`;

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 60px;

  h3 {
    margin: 0;
  }
  .sponsor-wrapper {
    div {
      margin-top: 50px;
    }
  }
`;

const TalksButton = withStyles({
  root: {
    background: 'rgb(31, 150, 242)',
    height: 70,
    width: 70,
    padding: '0 30px',
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '10px',
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
  },
  label: {
    //
  },
})(Fab);

export const DirectionsButton = withStyles({
  root: {
    background: 'rgb(38, 177, 97)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(41,41,41,.25)',
    marginTop: '20px',
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
    '@media (max-height: 570px)': {
      padding: '0 20px',
    },
  },
  label: {
    //
  },
})(Button);

export const MenuButton = withStyles({
  root: {
    background: 'rgb(31, 150, 242)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(41,41,41,.25)',
    marginTop: '20px',
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
    '@media (max-height: 570px)': {
      padding: '0 20px',
    },
  },
  label: {
    //
  },
})(Button);
