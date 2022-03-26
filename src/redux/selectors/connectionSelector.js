import { JWT_TOKEN } from "../actionTypes/connectionActionType";

const jwtToken = (state) => state.connection.jwtToken;

export default { jwtToken }