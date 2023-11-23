import phpLogo from "../assets/new-php-logo.svg";
import zceLogo from "../assets/zce-php-engineer-logo-l.jpg";
import { NUMBER_OF_QUESTIONS } from "../constants";

export const Start = ({ setPage }) => {

  return <>

    <main style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
    <div>
      <a href="https://php.net" target="_blank">
        <img src={phpLogo} className="logo" alt="PHP logo" />
      </a>
      <a href="https://www.zend-zce.com" target="_blank">
        <img src={zceLogo} className="logo react" alt="Zend Certified PHP Engineer logo" />
      </a>
    </div>
    <h1>Zend <span style={{textDecoration: `line-through`}}>Certified</span> Engineer</h1>

    <button onClick={() => setPage(`test`)}>START</button>

    <p className="subtitle">
      This ZCE-style test will challenge your PHP knowledge. Answer {NUMBER_OF_QUESTIONS} questions in {NUMBER_OF_QUESTIONS} minutes.
    </p>
    </main>
  </>
}
