// Function that gives the weather for a day of the week

const determineWeather = (dayOfWeek) => {
  let weather
  const day = dayOfWeek.toLowerCase() // case-insensitive comparison

  // else if version: note === to compare (a single = assigns)
  if (day === "monday") {
    weather = "Sunny all day"
  } else if (day === "tuesday") {
    weather = "Rainy all day"
  } else if (day === "wednesday") {
    weather = "Cloudy"
  } else if (day === "thursday") {
    weather = "Foggy"
  } else if (day === "friday") {
    weather = "Snow"
  } else if (day === "saturday") {
    weather = "Sunny / rain afternoon"
  } else if (day === "sunday") {
    weather = "Rainy / Chance of meatballs"
  }

  // switch version: cleaner for one variable vs. many exact values
  switch (day) {
    case "monday":
      weather = "Sunny all day"
      break // stops fallthrough into the next case
    case "tuesday":
      weather = "Rainy all day"
      break
    case "wednesday":
      weather = "Cloudy"
      break
    case "thursday":
      weather = "Foggy"
      break
    case "friday":
      weather = "Snow"
      break
    case "saturday":
      weather = "Sunny / rain afternoon"
      break
    case "sunday":
      weather = "Rainy / Chance of meatballs"
      break
    default:
      weather = "Not a valid day" // nothing matched
  }

  return weather
}


// Switch with a number
const numbers = [1, 2, 3]
const passInNumbers = numbers[1] // index 1 is the second item (2)
let count = 0

function checkCount(passInNumbers) {
  switch (count) {
    case 1:
      // do this
      break
    case 2:
      // do this
      break
    case 3:
      // do this
      break
    default:
      // not your birthday
      break
  }
}

// Same thing with else if
if (count === 1) {
  // do this
} else if (count === 2) {
  // do this
}


// Birthday example
let birthday = 7

if (birthday === 7) {
  // happy birthday
} else if (birthday === 6) {
  // tomorrow's your birthday
} else {
  // nothing
}


// Ternary: condition ? valueIfTrue : valueIfFalse
// "?" = true result, ":" = false result
const age = 20
const oldEnoughToDrive = age >= 16 ? "Can drive" : "Not old enough"

// Same logic as a normal if/else
let oldEnoughToDrive2
if (age >= 16) {
  oldEnoughToDrive2 = "Can drive"
} else {
  oldEnoughToDrive2 = "Not old enough"
}