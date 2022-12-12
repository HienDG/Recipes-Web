import { SEARCH_QUERIES, LETTERS } from "./fake-data";

const MENU_LIST = [];
let temp = [];
for (let i = 0; i < LETTERS.length; i++) {
  for (let j = 0; j < SEARCH_QUERIES.length; j++) {
    if (LETTERS[i] === SEARCH_QUERIES[j][0]) {
      temp.push(SEARCH_QUERIES[j]);
    }
  }
  MENU_LIST.push({ key: LETTERS[i], queries: temp });
  temp = [];
}

export { MENU_LIST };
