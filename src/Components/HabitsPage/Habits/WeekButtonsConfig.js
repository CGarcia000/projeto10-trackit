import styled from "styled-components";


export function WeekButtonsConfig({
    habitWeekdays
}) {

    function makeArrWeekDays (habitWeekdays) {
        const arr = [
            {day: 'D', active: false},
            {day: 'S', active: false},
            {day: 'T', active: false},
            {day: 'Q', active: false},
            {day: 'Q', active: false},
            {day: 'S', active: false},
            {day: 'S', active: false},
        ];

        habitWeekdays.forEach(dayIndex => {
            arr[dayIndex].active = true;
        });
        return arr;
    }

    const arrWeekDays = makeArrWeekDays(habitWeekdays);



    return(
        <Buttons>
            {arrWeekDays.map((dayButton, i) => {
                return (<Button 
                    key={i} 
                    isConfig={true} 
                    isActive={dayButton.active}
                >
                    {dayButton.day}
                </Button>);
            })}
        </Buttons>
    );
}

const Buttons = styled.div` 
    display: flex;
    margin-top: 0.5rem;
`

const Button = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    color: ${props => props.isActive ? 'white' : '#d4d4d4'};
    background-color: ${props => props.isActive ? '#CFCFCF' : 'white'};
    margin-right: 0.3rem;
    cursor: ${props => props.isConfig ? 'pointer' : 'auto'};
`