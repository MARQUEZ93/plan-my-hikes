const best = (parkName) => {
    return `What is the one of the single best experiences of ${parkName}?`
};

const hidden_gem = (parkName) => {
    return `What is a hidden gem of ${parkName}?`
};

const busy = (parkName) => {
    return `What are the most crowded months to visit ${parkName}?`
};

const tips = (parkName) => {
    return `What are some unique advice/tips for ${parkName}?`
};

const tough = (parkName) => {
    return `What is one of the toughest hikes in ${parkName} that is lesser known? Include hike duration & specific details for why this hike is demanding.`
}

const schedule = (parkName) => {
    return `Please provide a detailed itinerary for ${parkName} for 6 nights. The itinerary must include overnight details, park entrance details, parking details, trail names & hike duration. If the park is too small for 6 nights, for example a park then can be done entirely in 1 day, it is okay if the schedule reflects that & is less than 6 nights.`
};

const camping = (parkName) => {
    return `What is the one of the best camping trails in ${parkName}? Include parking details, whether a reservation is necessary, hike duration & why is this trail is good for camping?`
};

module.exports = { best, hidden_gem, busy, tips, tough, schedule, camping };