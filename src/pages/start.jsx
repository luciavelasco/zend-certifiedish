import phpLogo from "../assets/new-php-logo.svg";
import zceLogo from "../assets/zce-php-engineer-logo-l.jpg";
import { NUMBER_OF_QUESTIONS } from "../constants";
import { Timer } from "./times";

export const Start = ({ setPage }) => {

  return <>

    <h1 style={{display: `none`}}>Hey! Don't look in my code! It's messy! ...while I've got you though, you are pretty great.</h1>

    <main style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div>
        <a href="https://php.net" target="_blank">
          <img src={phpLogo} className="logo" alt="PHP logo"/>
        </a>
        <a href="https://www.zend-zce.com" target="_blank">
          <img src={zceLogo} className="logo react" alt="Zend Certified PHP Engineer logo"/>
        </a>
      </div>
      <h1>
        <span>Zend Certified <span
          style={{ textDecoration: `line-through`, textDecorationStyle: `double` }}>Engineer</span></span>
        {/*<span style={{textDecoration: `line-through`}}>Certified</span>*/}
        <span style={{ transform: `rotate(-45deg)`, display: `inline-block`, position: `absolute` }}> Fiancee </span>
      </h1>


      {/*<p className="subtitle">*/}
      {/*  This ZCE-style test will challenge your PHP knowledge. Answer {NUMBER_OF_QUESTIONS} questions in {NUMBER_OF_QUESTIONS} minutes.*/}
      {/*</p>*/}
      <p className="subtitle">
        Hello adventurer!
      </p>
      <p className="subtitle">
        I challenge your PHP knowledge, as well as some lore that's closer to home.
        You may call on the aid of your acolytes and apprentices, if you wish.
        Answer {NUMBER_OF_QUESTIONS} questions by the deadline.
        <br/>
        <br/>
        <br/>
      </p>

      <button onClick={() => setPage(`test`)}>START</button>

      <Timer/>
    </main>
  </>;
};


/*
TO DO LIST:
`set up`
- [ ] Email pizza
- [ ] Order pizza
`zce`
- [ ] Get ZCE test deployed as pages
- [X] Add non-ZCE questions
- [X] Make it test those Qs too
- [ ] Add intro
- [ ] Add riddle/end
`admin`
- [ ] Message Pete a brief (budget, may want sensible shoes, can buy whatever he wants but should be wearing shirt and trousers, blazer/waistcoat optional)
`prep`
- [ ] Portion fruit/veg (optional)



------

FRIDAY TO DO LIST
(get up at/by 8am)
` At home`
- Get clothes (put dress in)
- Get veg/fruit
- Get ring sizer
- Go into town (leave by 10am) (get off at cheese co)
`Other`
- *CALL PIZZA EXPRESS (11am)*
- Message Libby
`In town` (by 11am)
- Pick up cheese
- Pick up hamper
- Pick up bouquet
`End`
- Meet Libby (needs to be back by 2pm - 12.30 pick up or ideally 12)
- Check into Orchardleigh and drop stuff off at Boathouse (can we do that before check in?)
`At Orchardleigh`
- Get dressed + makeup (by 3pm)
- Prepare hamper
 */