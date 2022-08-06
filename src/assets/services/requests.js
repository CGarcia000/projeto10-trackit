import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

export function makeRequestHeader(token) {
    return {
        headers: {
            Authorization: 'Bearer' + token,
        }
    }
}


export function postSignUp(body) {
    // body = { email, name, image, password }
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

export function postLogin(body) {
    // body = { email, password }
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
    // res = {id, name, image, email, password, token }
}

export function postHabit(body, token) {
    // body = { name, days }, 
    // const config = makeRequestHeader(token)
    // const promise = axios.post(`${BASE_URL}/habits`, body, config);
    // return promise;

    const promise = axios({
        method: 'post',
        url: `${BASE_URL}/habits`,
        data: body,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
    return promise;
    // res = {id, name, image, email, password, token }
}

export function getHabits(token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/habits`,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return promise;
    // res = [{idHabit, name, days}, ...]
}

export function deleteHabits(idHabit, token) {
    const promise = axios({
        method: 'delete',
        url: `${BASE_URL}/habits/${idHabit}`,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return promise;
}

export function getTodayHabits(token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/habits/today`,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return promise;
    // res = [{idHabit, name, done, currentSequence, highestSequence}, ...]
}

export function postHabitAsDone(idHabit, token) {
    // body = { name, days }, 
    const promise = axios({
        method: 'post',
        url: `${BASE_URL}/habits/${idHabit}/check`,
        // data: body,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
    return promise;
    // res = {id, name, image, email, password, token }
}

export function postHabitAsNotDone(idHabit, token) {
    // body = { name, days }, 
    const promise = axios({
        method: 'post',
        url: `${BASE_URL}/habits/${idHabit}/uncheck`,
        // data: body,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
    return promise;
    // res = {id, name, image, email, password, token }
}

export function getHistoryHabits(token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/habits/history/daily`,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return promise;
    // res = [{ day, habits: [{id, name, date, weekDay, historyId, done}, ...] }, ... ]
}
