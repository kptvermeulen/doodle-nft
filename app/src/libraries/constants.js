const LOCAL_URL = "http://localhost:80";
const API_URL = "https://doodlebackend.boxingboyz.com";

const PRODUCTION = true;

const SERVER_URL = PRODUCTION ? API_URL : LOCAL_URL;

export const ADDSCORE_URL = SERVER_URL + "/add-score";
export const GETLEADERBOARD_URL = SERVER_URL + "/get-leaderboard";
export const TEST_URL = SERVER_URL + "/test";
