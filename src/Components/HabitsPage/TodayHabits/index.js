import styled from "styled-components";
import { useState, useEffect, useContext } from "react";

import { PercentDoneContext, UserContext } from "../../App"; 

import { getTodayHabits } from "../../../assets/services/requests";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Body } from '../Styled';
import { HabitViewer } from "./HabitViewer";

require('dayjs/locale/pt-br');

export function TodayHabits() {
    const [todayHabits, setTodayHabits] = useState([]);
    const [noHabitDone, setNoHabitDone] = useState(true);

    const [percentDone, setpercentDone] = useContext(PercentDoneContext);
    const [user] = useContext(UserContext);

    const dayjs = require('dayjs');

    useEffect(() => {
        getTodayHabits(user.token).then(res => {
            setTodayHabits(res.data);
        }).catch();
    }, []);

    useEffect(() => {
        if (todayHabits.length === 0) {
            setpercentDone(current => 0);
            return;
        }
        const habitsDone = todayHabits.filter(habit => habit.done);
        if (habitsDone.length !== 0) {
            setNoHabitDone(current => false);
            const percent = Math.ceil((habitsDone.length/todayHabits.length)*100);
            setpercentDone(current => percent);
            return;
        } 
        setpercentDone(current => 0);
        setNoHabitDone(current => true);
    }, [todayHabits]);

    return (
        <>
            <Header />

            <Body>

                <Title>
                    <h2>{dayjs().locale('pt-br').format('dddd')} {dayjs().format('DD/MM')}</h2>
                    <p>{noHabitDone ? 'Nenhum hábito concluído ainda' : `${percentDone}% dos hábitos concluidos`}</p>
                </Title>

                {todayHabits.map(habit => <HabitViewer key={habit.id} habitObj={habit} setTodayHabits={setTodayHabits}/>)}

            </Body>
        
            <Footer />
        </>
    );
}

const Title = styled.div`
    padding-top: 1.5rem;
    margin-bottom: 1rem;
    
    h2 {
        font-weight: 400;
        font-size: 1.4rem;
        color: #126ba5;
        text-transform: capitalize;
    }

    p {
        color: ${props => props.isConcluded ? '#8fc549' : '#bababa'}
    }
`
