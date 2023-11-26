import axios from 'axios';

const dummydata = {
  tickets: [
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: ["Feature request"],
      userId: "usr-1",
      status: "Todo",
      priority: 4,
    },
    {
      id: "CAM-4",
      title:
        "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 1,
    },
    {
      id: "CAM-2",
      title: "Implement Email Notification System",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "In progress",
      priority: 0,
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "Todo",
      priority: 1,
    },
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "Backlog",
      priority: 2,
    },
    {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: ["Feature Request"],
      userId: "usr-3",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "Todo",
      priority: 2,
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: ["Feature Request"],
      userId: "usr-4",
      status: "Done",
      priority: 1,
    },
  ],
  users: [
    { id: "usr-1", name: "Anoop sharma", available: false },
    { id: "usr-2", name: "Yogesh", available: true },
    { id: "usr-3", name: "Shankar Kumar", available: true },
    { id: "usr-4", name: "Ramesh", available: true },
    { id: "usr-5", name: "Suresh", available: true },
  ],
};


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
