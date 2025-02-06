document.addEventListener("DOMContentLoaded", function calculateEstimate() {
  function calculateEstimate(e) {
    e.preventDefault();
  }

  let error = [];
  const buildingType = document.querySelector(
    'input[name="gender"]:checked'
  )?.id;
  const foundationType = document.getElementById("foundation-type");
  const location = document.getElementById("location");
  const floors = parseInt(document.getElementById("floor")?.value, 10);
  const roofType = document.getElementById("roof-type");
  const interiorDesign = document.getElementById("interiorDesign");
  const exteriorDesign = document.getElementById("exteriorDesign");
  const buildingArea = parseInt(
    document.getElementById("buildingArea")?.value,
    10
  );

  console.log("First Input Captured:");
  console.log(
    "Building Type:",
    buildingType,
    foundationType,
    location,
    "floors:",
    floors,
    roofType,
    interiorDesign,
    exteriorDesign,
    "buildingArea:",
    buildingArea
  );

  let cost = {
    residential: 30000,
    commercial: 50000,
    industrial: 70000,
  };
  let foundationCosts = {
    concrete: 1.0,
    basement: 1.3,
    crawl: 1.1,
  };
  let locationMultipliers = {
    urban: 1.5,
    subUrban: 1.2,
    rural: 1.0,
  };
  let roofMultiplier = {
    Flat: 1.0,
    gableRoof: 1.2,
    mansardRoof: 1.5,
  };

  let interiorMultiplier = {
    minimalist: 1.0,
    industrial: 1.2,
    bohemian: 1.3,
  };

  let exteriorMultiplier = {
    cottage: 1.0,
    ranchStyle: 1.2,
    craftsman: 1.3,
  };

  if (!buildingType) {
    error.push("Please select a building type.");
    showError(buildingType, "building type required");
  }
  let totalCost =
    baseCost *
    buildingArea *
    floors *
    foundationMultiplier[foundationType] *
    locationMultiplier[location] *
    roofMultiplier[roofType] *
    interiorMultiplier[interiorDesign] *
    exteriorMultiplier[exteriorDesign];

  console.log(totalCost);
  function showError(element, message) {
    const errorDiv = element.parentElement.querySelector(".error");
    errorDiv.textContent = message;
    element.classList.add("incorrect");

    totalElement.textContent = `KES ${totalCost.toLocaleString()}`;
  }
});
