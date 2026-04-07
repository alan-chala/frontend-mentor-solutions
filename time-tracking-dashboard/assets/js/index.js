const currentElements = document.querySelectorAll(".current");
const previousElements = document.querySelectorAll(".previous");
const linkElements = document.querySelectorAll("a");

let jsonData = [];

linkElements.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const timeFrame = e.currentTarget.innerText.toLowerCase();
    e.preventDefault()
    displayData(timeFrame);
  });
});

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
  
  const filteredData = jsonData.map(item => item.timeframes[timeframe]);

  filteredData.forEach((item, index) => {
    currentElements[index].innerText = `${item.current}hrs`;
    previousElements[index].innerText = `${item.previous}hrs`;
  })

} 

getData();
displayData("weekly");
