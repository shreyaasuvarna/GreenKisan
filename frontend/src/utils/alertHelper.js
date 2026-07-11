// export const addAlert = (title, message) => {
//   const existing = JSON.parse(localStorage.getItem("alerts") || "[]");

//   const newAlert = {
//     title,
//     message,
//     date: new Date().toLocaleString(),
//     read: false,
//   };

//   const updated = [newAlert, ...existing];
//   localStorage.setItem("alerts", JSON.stringify(updated));
// };

export const addAlert = (title, message) => {
  try {
    const existing = JSON.parse(localStorage.getItem("alerts") || "[]");

    const newAlert = {
      type: "info",
      title,
      message,
      read: false,
      handled: true,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("alerts", JSON.stringify([newAlert, ...existing]));
  } catch (err) {
    console.error("Failed to add alert:", err);
  }
};
