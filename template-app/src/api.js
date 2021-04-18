export const getEvents = () => fetch("http://localhost:8081/").then(res => res.json());

