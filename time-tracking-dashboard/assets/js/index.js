const currentElements = document.querySelectorAll(".current");
const previousElements = document.querySelectorAll(".previous");
const linkElements = document.querySelectorAll(".timeframes a");

let jsonData = [];
let activeTimeframe = "weekly";

linkElements.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const timeFrame = e.currentTarget.textContent.trim().toLowerCase();
    setActiveTimeframe(e.currentTarget);
    displayData(timeFrame);
  });
});

function setActiveTimeframe(activeLink) {
  linkElements.forEach((link) => link.classList.remove("active"));
  activeLink.classList.add("active");
}

async function getData() {
  try {
    const resp = await fetch("./assets/data/data.json");

    if (!resp.ok) {
      throw new Error(`Error HTTP: ${resp.status}`);
    }

    const data = await resp.json();
    jsonData = data;
  } 
  catch (error) {
    console.error("An error has occured: ", error);
  }
}

function displayData(timeframe) {
  const filteredData = jsonData.map((item) => item.timeframes[timeframe]);

  filteredData.forEach((item, index) => {
    currentElements[index].textContent = `${item.current}hrs`;
    previousElements[index].textContent = `${item.previous}hrs`;
  });

} 

async function initializeDashboard() {
  await getData();
  const defaultLink = Array.from(linkElements).find(
    (link) => link.textContent.trim().toLowerCase() === activeTimeframe,
  );

  if (defaultLink) {
    setActiveTimeframe(defaultLink);
  }

  displayData(activeTimeframe);
}

initializeDashboard();
