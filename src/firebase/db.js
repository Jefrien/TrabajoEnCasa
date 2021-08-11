import { getDatabase, ref, set, get } from "firebase/database";

const addPoint = (to, nextval, negativeVal) => {
  const db = getDatabase();
  const postListRef = ref(db, "/points/" + to);
  return set(postListRef, {
    name: to == "dani" ? "Nelson Daniel" : "Carlos Fernando",
    type: to,
    points: nextval,
    negatives: negativeVal,
  });
};

const onChangePoints = (to) => {
    const db = getDatabase();
    const refPoints = ref(db, '/points/' + to);
    return get(refPoints);    
}

export { addPoint, onChangePoints  }