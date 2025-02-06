document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".button")
    .addEventListener("click", function calculateEstimate(e) {
      e.preventDefault();

      let error = [];
      const totalElement = document.getElementById("total");

      const buildingType = document.querySelector(
        'input[name="buildingType"]:checked'
      )?.value;
      const foundationType = document.getElementById("foundation-type")?.value;
      const location = document.getElementById("location")?.value;
      const floors = parseInt(document.getElementById("floor")?.value, 10);
      const roofType = document.getElementById("roof-type")?.value;
      const interiorDesign = document.getElementById("interiorDesign")?.value;
      const exteriorDesign = document.getElementById("exteriorDesign")?.value;
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
      console.log(cost);
      let foundationCosts = {
        concrete: 1.2,
        basement: 1.3,
        crawl: 1.4,
      };
      console.log(foundationCosts);
      let locationMultipliers = {
        urban: 1.2,
        subUrban: 1.3,
        rural: 1.4,
      };
      console.log(locationMultipliers);
      let roofMultiplier = {
        Flat: 1.2,
        gableRoof: 1.3,
        mansardRoof: 1.4,
      };
      console.log(roofMultiplier);
      let interiorMultiplier = {
        minimalist: 1.2,
        industrial: 1.3,
        bohemian: 1.4,
      };
      console.log(interiorMultiplier);
      let exteriorMultiplier = {
        cottage: 1.2,
        ranchStyle: 1.3,
        craftsman: 1.4,
      };
      console.log(exteriorMultiplier);
      if (!buildingType) {
        error.push("Please select a building type.");
        // showError(buildingType, "building type required");
      }

      console.log("Building Type:", cost?.value);
      console.log("Building Area:", buildingArea);
      console.log("Floors:", floors);
      console.log("Foundation Type:", foundationType?.value);
      console.log("Location:", location?.value);
      console.log("Roof Type:", roofType?.value);
      console.log("Interior Design:", interiorDesign?.value);
      console.log("Exterior Design:", exteriorDesign?.value);

      let totalCost = Math.floor(
        cost[buildingType] *
          buildingArea *
          floors *
          foundationCosts[foundationType] *
          locationMultipliers[location] *
          roofMultiplier[roofType] *
          interiorMultiplier[interiorDesign] *
          exteriorMultiplier[exteriorDesign]
      );

      console.log(totalCost);

      if (totalElement) {
        totalElement.textContent = `KES ${totalCost.toLocaleString()}`;
      } else {
        console.log("Total element not found!");
      }

      function showError(element, message) {
        const errorDiv = element.parentElement.querySelector(".total");
        errorDiv.textContent = message;
        element.classList.add("incorrect");
      }
    });
});
