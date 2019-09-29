import React, { useState } from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import { mockTalks } from '../Drawer/mockTalks';
import Drawer from '../Drawer/Drawer';
// import { useQuery } from "@apollo/react-hooks";
// import { TALKS } from "../Drawer/quries";

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
      />

      <PlaceHolder>map goes here</PlaceHolder>

      <ButtonContainer>
        <DrawerButton
          onClick={() => setDrawerState(!drawerState)}
          color="primary"
          aria-label="add"
        >
          Open
        </DrawerButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: cornflowerblue;
`;

const PlaceHolder = styled.span`
  text-align: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const DrawerButton = styled(Fab)`
  font-size: 16px;
  color: red;
`;
