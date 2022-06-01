export const NameValid = (data) => {
  let msg = "";
  let res = false;
  if (data === "") {
    msg = "Enter Name";
  } else if (data.length < 3) {
    msg = "Enter Valid Name";
  } else {
    msg = "";
    res = true;
  }
  return { res: res, msg: msg };
};

export const cardValid = (data) => {
  let msg = "";
  let res = false;
  if (data === "") {
    msg = "Enter card number";
  } else if (data.length < 16) {
    msg = "Enter card numbe";
  } else {
    msg = "";
    res = true;
  }
  return { res: res, msg: msg };
};

export const cvvValid = (data) => {
  let msg = "";
  let res = false;
  if (data === "") {
    msg = "Enter cvv number";
  } else if (data.length !== 4) {
    msg = "Enter cvv number";
  } else {
    msg = "";
    res = true;
  }
  return { res: res, msg: msg };
};
