import {combineReducers} from "redux";
import {reducerData} from "./reducer-data/reducer-data.js";
import {reducerGame} from "./reducer-game/reducer-game.js";
import {reducerUser} from "./reducer-user/reducer-user.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: reducerData,
  [NameSpace.GAME]: reducerGame,
  [NameSpace.USER]: reducerUser,
});
