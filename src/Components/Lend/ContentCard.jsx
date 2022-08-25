import React, { useState } from "react";
import LendButton from "./LendButton";
import "../../Styles/contentCard.scss";
import { ImLocation } from "react-icons/im";
import { Progress } from "@chakra-ui/react";
import { Link as RouterLinik } from "react-router-dom";
import LendAlert from "./LendAlert";

const ContentCard = ({ item }) => {
  //  console.log(item)
  const [lend, setLend] = useState(25000);
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(false);
  const [lendRef, setLendRef] = useState("Lend");
  const [wide, setWide] = useState(100);

  const handleAdd = () => {
    setLendRef("Added to Basket");
    setAdd(true);
    setWide(160);
  };

  return (
    <div className="contentCard">
      <div className="leftContent">
        <div className="imgDiv">
          <img src={item.image} alt="" />
        </div>
        <Progress
          hasStripe
          height="32px"
          isAnimated="true"
          value={
            (Number(item.funded) /
              (Number(item.required) + Number(item.funded))) *
            100
          }
          colorScheme="pink"
          style={{ borderRadius: "6px", border: "1px solid gray" }}
        />
        <div className="fundDetails">
          <div className="funded">
            <p>Funded</p>
            <p>₹ {item.funded}</p>
          </div>
          <div className="requires">
            <p>Still Requires</p>
            <p>₹ {item.required}</p>
          </div>
        </div>
        {!add && <LendButton name={"Complete the Loan"} id={"lendBtn"} />}
      </div>

      <div className="rightContent">
        <div className="aboutLend">
          <h2>{item.title}</h2>
          <div>
            <ImLocation />
            <h6>{item.location}</h6>
          </div>
          <p>Purpose: {item.Purpose}</p>
          <p className="description">
            {item.description}
            <RouterLinik to="/fund">
              <p>Read more</p>
            </RouterLinik>
          </p>
        </div>

        <div className="lendMoney">
          {!add && (
            <>
              <button>₹</button>
              <input
                type="number"
                value={lend}
                onChange={(e) => setLend(e.target.value)}
              />
            </>
          )}

          <div
            onClick={() => {
              setCount((prev) => prev + 1);
              handleAdd();
            }}
          >
            <LendAlert
              name={lendRef}
              loanAmount={lend}
              count={count}
              wide={wide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
