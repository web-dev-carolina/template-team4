export const getEvents = () => fetch("http://localhost:8088/").then(res => res.json());

