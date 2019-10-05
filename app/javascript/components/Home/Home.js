import React, { useState } from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { mockTalks } from '../Drawer/mockTalks';
import Drawer from '../Drawer/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import SponsorBanner from './components/SponsorBanner';
import BarCampTechNova from '../../../assets/images/barcamp-square.png';
// import { useQuery } from "@apollo/react-hooks";
// import { TALKS } from "../Drawer/quries";
import {
  petabyte,
  gigabyte,
  terabyte,
  academicPartners,
  communitySponsors,
  mediaPartners,
} from '../../../assets/images/sponsors';

// this is where map will be
const Home = () => {
  // const { loading, error, data } = useQuery(TALKS);
  // if (error) console.warn('TALKS Query Error: ', error);

  const [drawerState, setDrawerState] = React.useState(false);
  const talkTimeSlots = ['9', '10', '11', '12', '1', '2', '3', '4', '5'];
  const [talkTimeSlotIndex, setTalkTimeSlotIndex] = useState(0);
  const currentTalkGroup = talkTimeSlots[talkTimeSlotIndex];

  const makeTalkMap = ({ talks, talkTimeSlots }) => {
    let hashMap = {};

    if (talks[0]) {
      for (let i = 0; i < talkTimeSlots.length; i++) {
        const currentTimeSlot = talkTimeSlots[i];
        const talksThisHour = talks.filter(
          talk => talk.time === currentTimeSlot
        );

        hashMap[currentTimeSlot] = talksThisHour;
      }
    }
    return hashMap;
  };
  const talks = makeTalkMap({ talks: mockTalks, talkTimeSlots });

  return (
    <HomeContainer>
      <Drawer
        talkData={talks[currentTalkGroup]}
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
          <img src={BarCampTechNova} alt="barcamp logo" />

          <a
            href="https://www.google.com/maps/dir//Keiser+University+tampa/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88c2c20cbe97347d:0xa14466b5008394c1?sa=X&ved=2ahUKEwiR0vX1vIHlAhVROq0KHfKaAawQ9RcwFHoECAoQEA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Keiser University</h3>
            <span>5002 W Waters Ave, Tampa, FL 33634</span>
            <a
              href="https://www.google.com/maps/dir//Keiser+University+tampa/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88c2c20cbe97347d:0xa14466b5008394c1?sa=X&ved=2ahUKEwiR0vX1vIHlAhVROq0KHfKaAawQ9RcwFHoECAoQEA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DirectionsButton color="primary" variant="contained">
                Directions
              </DirectionsButton>
            </a>
          </a>
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
          <a
            href="https://www.google.com/maps/dir/Keiser+University+Tampa,+West+Waters+Avenue,+Tampa,+FL/tampa+joes/@28.0276851,-82.5456225,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2c20cbe97347d:0xa14466b5008394c1!2m2!1d-82.5294327!2d28.0248903!1m5!1m1!1s0x88c2c1c710cdac71:0xb62899a3c700c6eb!2m2!1d-82.5421181!2d28.0344974"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="afterparty">
              <h4>Afterparty</h4>
              <h5>TAMPA JOES</h5>
              <span>316 Anderson Rd, Tampa, FL 33634 </span>
              <a
                href="https://www.google.com/maps/dir/Keiser+University+Tampa,+West+Waters+Avenue,+Tampa,+FL/tampa+joes/@28.0276851,-82.5456225,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2c20cbe97347d:0xa14466b5008394c1!2m2!1d-82.5294327!2d28.0248903!1m5!1m1!1s0x88c2c1c710cdac71:0xb62899a3c700c6eb!2m2!1d-82.5421181!2d28.0344974"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DirectionsButton color="primary" variant="contained">
                  Directions
                </DirectionsButton>
              </a>
              <a
                href="http://tampajoes.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MenuButton color="secondary" variant="contained">
                  MENU
                </MenuButton>
              </a>
            </div>
          </a>
        </div>
      </WelcomeContainer>

      <SponsorContainer>
        <h3>Thank You to our Sponsors!</h3>
        <div className="sponsor-wrapper">
          <SponsorBanner header="Petabyte Sponsors" sponsors={petabyte} />
          <SponsorBanner header="Terabyte Sponsors" sponsors={terabyte} />
          <SponsorBanner header="Gigabyte Sponsors" sponsors={gigabyte} />
          <SponsorBanner
            header="Academic Sponsors"
            sponsors={academicPartners}
          />
          <SponsorBanner
            header="Community Sponsors"
            sponsors={communitySponsors}
          />
          <SponsorBanner header="Media Sponsors" sponsors={mediaPartners} />
        </div>
      </SponsorContainer>

      <ButtonContainer>
        {false && (
          <StyledButton
            onClick={() => setDrawerState(!drawerState)}
            color="primary"
            aria-label="add"
          >
            Talks
          </StyledButton>
        )}
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const StyledButton = withStyles({
  root: {
    background: 'rgb(31, 150, 242)',
    height: 100,
    width: 100,
    padding: '0 30px',
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
  },
  label: {
    //
  },
})(Fab);

const DirectionsButton = withStyles({
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

const MenuButton = withStyles({
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
