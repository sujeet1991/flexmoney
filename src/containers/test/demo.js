import React, { Component, Fragment } from "react";
import { NameValid, cardValid, cvvValid } from "../../helper/validation";
import TextBox from "../../components/input";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      exM: "",
      exY: "",
      cvv: "",
      error: {},
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler = (nName, data) => {
    console.log(nName, "nName=", data);
    let allState = this.state;
    const reNumber = /^[0-9\b]+$/;
    const reChar = /^[A-z\b]+$/;
    if (nName === "name") {
      if (data === "" || reChar.test(data)) {
        allState[nName] = data;
      }
    } else if (nName === "cardNumber") {
      if (data === "" || reNumber.test(data)) {
        allState[nName] = data;
      }
    } else if (nName === "cvv") {
      if (data === "" || reNumber.test(data)) {
        allState[nName] = data;
      }
    } else {
      allState[nName] = data;
    }

    this.setState((prevState) => ({
      ...prevState,
      allState,
    }));
  };

  formValidation = () => {
    let { name, cardNumber, exM, exY, cvv, error } = this.state;
    let allError = error;
    let isFlag = false;
    let nameCheck = NameValid(name);
    let cardCheck = cardValid(cardNumber);
    let cvvCheck = cvvValid(cvv);
    if (!nameCheck.res) {
      allError["nameError"] = nameCheck.msg;
    } else if (!cardCheck.res) {
      allError["cardNumberError"] = cardCheck.msg;
    } else if (exM === "" || exY === "") {
      allError["exMexYError"] = "Enter Expiry ";
    } else if (!cvvCheck.res) {
      allError["cvvError"] = cvvCheck.msg;
    } else {
      allError["nameError"] = "";
      allError["cardNumberError"] = "";
      allError["exMexYError"] = "";
      isFlag = true;
    }
    this.setState((prevState) => ({
      ...prevState,
      allError,
    }));
    return isFlag;
  };
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  submitData = async (data) => {
    let check = this.formValidation();
    let { name, cardNumber, exM, exY, cvv, error } = this.state;
    if (check) {
      fetch("https://run.mocky.io/v3/0b14a8da-5fc7-4443-8511-53d687399bc9", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestId: this.getRandomInt(2000, 400000),
          requestDate: new Date().getTime(),
          cardNo: cardNumber,
          cvv: cvv,
          expiryMonth: exM,
          expiryYear: exY,
          name: name,
        }),
      })
        .then((res) => {
          if (res.success) {
            window.open("https://instacred.me/buy", "_blank");
            //window.location.href = "https://instacred.me/buy";
          }
        })
        .catch((error) => {
          alert("cross origin error");
          console.log(error, "error");
        });
    }
  };

  render() {
    let { name, cardNumber, exM, exY, cvv, error } = this.state;
    let eyarData = [];
    for (let i = 2022; i <= 2040; i++) {
      console.log(i, "sujeet");
      eyarData.push(i);
    }
    return (
      <Fragment>
        <div class="container">
          <div class="price">
            <h1>Payment Method </h1>
          </div>
          <div class="card__container">
            <div class="card">
              <div class="row credit">
                <div class="left">
                  <input id="cd" type="radio" name="payment" />
                  <div class="radio"></div>
                  <label for="cd">Debit/ Credit Card</label>
                </div>
              </div>
              <div class="row cardholder">
                <TextBox
                  error={this.state.error}
                  label={"Name"}
                  name="name"
                  changeHandler={this.changeHandler}
                  value={name}
                  placeholder={"e.g. Sujeet kamar"}
                  id="cardholdername"
                  type="text"
                />
                {/* <div class="info">
                  <label for="cardholdername">Name</label>
                  <input
                    onChange={(e) => this.changeHandler("name", e.target.value)}
                    value={name}
                    name="name"
                    placeholder="e.g. Sujeet kamar"
                    id="cardholdername"
                    type="text"
                  />
                  <span className="erroMsg">{error["nameError"]}</span>
                </div> */}
              </div>
              <div class="row number">
                <div class="info">
                  <label for="cardnumber">Card number</label>
                  <input
                    onChange={(e) =>
                      this.changeHandler("cardNumber", e.target.value)
                    }
                    value={cardNumber}
                    id="cardNumber"
                    type="text"
                    pattern="[0-9]{16,19}"
                    maxlength="19"
                    placeholder="8888-8888-8888-8888"
                  />
                  <span className="erroMsg">{error["cardNumberError"]}</span>
                </div>
              </div>
              <div class="row details">
                <div class="left">
                  <label for="expiry-date">Expiry</label>
                  <select
                    onChange={(e) => this.changeHandler("exM", e.target.value)}
                    value={exM}
                    id="expiry-date"
                    name="exM"
                  >
                    <option>MM</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <span>/</span>
                  <select
                    id="expiry-date"
                    onChange={(e) => this.changeHandler("exY", e.target.value)}
                    value={exY}
                    name="exY"
                  >
                    <option>YYYY</option>
                    {eyarData.map((curr, index) => {
                      return <option value={curr}>{curr}</option>;
                    })}
                  </select>
                  <span className="erroMsg">{error["exMexYError"]}</span>
                </div>
                <div class="right">
                  <label for="cvv">CVC/CVV</label>
                  <input
                    type="text"
                    onChange={(e) => this.changeHandler("cvv", e.target.value)}
                    value={cvv}
                    name="cvv"
                    maxlength="4"
                    placeholder="123"
                  />
                  <span className="erroMsg">{error["cvvError"]}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <button onClick={() => this.submitData()} type="button">
              <i class="ion-locked"></i> Confirm and Pay
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Demo;
