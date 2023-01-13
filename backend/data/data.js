const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Sourish Bakshi",
        email: "sourish@example.com",
      },
      {
        name: "Sourav",
        email: "sourav@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Sourish Bakshi",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Sourav",
        email: "sourav@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Argha",
        email: "argha@example.com",
      },
      {
        name: "Sourav",
        email: "sourav@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Argha",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Sourish Bakshi",
        email: "sourish@example.com",
      },
      {
        name: "Sourav",
        email: "sourav@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anisha",
        email: "anisha@example.com",
      },
      {
        name: "Sourav",
        email: "sourav@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Anisha",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Sourish Bakshi",
        email: "jon@example.com",
      },
      {
        name: "Sourav",
        email: "sourav@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = {
  chats,
};
