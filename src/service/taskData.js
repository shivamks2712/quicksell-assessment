import axios from 'axios';

async function fetchData(){
  try {
    const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    return res.data;
  } catch(err) {
    console.error(err);
  }
}

function getDataInMap(appData, val) {
  let filteredData = new Map();
  appData.tickets.forEach((element) => {
    if (!filteredData.get(element[val])) filteredData.set(element[val], []);
    filteredData.get(element[val]).push(element);
  });

  return filteredData;
}

function getUserData(appData) {
  let userData = new Map();
  appData.users.forEach((e) => {
    userData.set(e.id, e);
  });

  return userData;
}
export { fetchData, getDataInMap, getUserData };
