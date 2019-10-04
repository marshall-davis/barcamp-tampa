import React, { useState } from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import { mockTalks } from '../Drawer/mockTalks';
import Drawer from '../Drawer/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import SponsorBanner from './components/SponsorBanner';
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
          <a
            href="https://www.google.com/maps/dir//Keiser+University+tampa/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88c2c20cbe97347d:0xa14466b5008394c1?sa=X&ved=2ahUKEwiR0vX1vIHlAhVROq0KHfKaAawQ9RcwFHoECAoQEA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Keiser University</h3>
            <span>(click for directions)</span>
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
          <div>Afterparty -- T.B.D.</div>
        </div>
      </WelcomeContainer>

      <SponsorContainer>
        <h3>Thank You to our Sponsors!</h3>

        <SponsorBanner sponsors={petabyte} />
        <SponsorBanner sponsors={terabyte} />
        <SponsorBanner sponsors={gigabyte} />
        <SponsorBanner sponsors={academicPartners} />
        <SponsorBanner sponsors={communitySponsors} />
        <SponsorBanner sponsors={mediaPartners} />
      </SponsorContainer>

      <ButtonContainer>
        <StyledButton
          onClick={() => setDrawerState(!drawerState)}
          color="primary"
          aria-label="add"
        >
          Talks
        </StyledButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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

  h3 {
    margin: 0;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .schedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
`;

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  h3 {
    margin: 0;
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
  },
  label: {
    //
  },
})(Fab);
