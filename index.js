const countries = {
    pakistan: {
      states: {
        punjab: [
          "Lahore", "Islamabad", "Faisalabad", "Sialkot", "Gujranwala", "Multan",
          "Rawalpindi", "Bahawalpur", "Sargodha", "Gujrat"
        ],
        sindh: [
          "Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Shikarpur",
          "Jacobabad", "Dadu", "Mirpur Khas", "Khairpur"
        ],
        khyberPakhtunkhwa: [
          "Peshawar", "Abbottabad", "Mardan", "Swat", "Charsadda", "Kohat",
          "Dera Ismail Khan", "Bannu", "Nowshera", "Malakand"
        ]
      }
    },
    india: {
      states: {
        maharashtra: [
          "Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad",
          "Kalyan", "Navi Mumbai", "Solapur", "Kolhapur"
        ],
        karnataka: [
          "Bengaluru", "Mysuru", "Mangaluru", "Hubli-Dharwad", "Belagavi",
          "Gulbarga", "Shivamogga", "Davangere", "Tumkur", "Bellary"
        ],
        tamilNadu: [
          "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
          "Vellore", "Tiruppur", "Kanchipuram", "Erode", "Thanjavur"
        ]
      }
    },
    china: {
      states: {
        beijing: ["Beijing", "Tianjin", "Shijiazhuang", "Tangshan", "Qinhuangdao"],
        shanghai: [
          "Shanghai", "Suzhou", "Hangzhou", "Ningbo", "Nanjing", "Wuxi"
        ],
        guangzhou: [
          "Guangzhou", "Shenzhen", "Foshan", "Zhuhai", "Dongguan", "Zhongshan"
        ]
      }
    }
  };
  

const selectCountry = document.getElementById("country");
const selectState = document.getElementById("state");
const selectCity = document.getElementById("city");

selectCountry.addEventListener("change", function () {
  const selectedCountry = selectCountry.value;
  const states = Object.keys(countries[selectedCountry].states);
  
  // Populate state dropdown
  selectState.innerHTML = "<option value=''>Select State</option>";
  states.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    selectState.appendChild(option);
  });

  // Enable state dropdown and disable city dropdown
  selectState.disabled = false;
  selectCity.disabled = true;
  selectCity.innerHTML = "<option value=''>Select City</option>";
});

selectState.addEventListener("change", function () {
  const selectedState = selectState.value;
  const cities = countries[selectCountry.value].states[selectedState];

  // Populate city dropdown
  selectCity.innerHTML = "<option value=''>Select City</option>";
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    selectCity.appendChild(option);
  });

  // Enable city dropdown
  selectCity.disabled = false;

  // Auto-pick the first city
  if (cities.length > 0) {
    selectCity.value = cities[0];
  }
});
