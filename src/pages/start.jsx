import phpLogo from "../assets/new-php-logo.svg";
import mysteriousRing from "../assets/The-Romantic-Mens-Wedding-Rings-Manly-Bands.webp";
import zceLogo from "../assets/zce-php-engineer-logo-l.jpg";

export const Start = ({ setPage }) => {

  return <>

    <h1 style={{ display: `none` }}>Hey! Don't look in my code! It's messy! ...while I've got you though, you are pretty
      great.</h1>

    <main style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <a href="https://php.net" target="_blank">
          <img src={phpLogo} className="logo" alt="PHP logo"/>
        </a>
        <img
          style={{ height: `14rem`, filter: `brightness(0.1)` }}
          src={mysteriousRing}
          className="logo" alt="A mysterious ring immersed in shadow"/>
        <a href="https://www.zend-zce.com" target="_blank">
          <img src={zceLogo} className="logo react" alt="Zend Certified PHP Engineer logo"/>
        </a>
      </div>
      <h1>
        <span>Zend Certified <span
          style={{ textDecoration: `line-through`, textDecorationStyle: `double` }}>Engineer</span></span>
        <span style={{ transform: `rotate(-45deg)`, display: `inline-block`, position: `absolute` }}> Fiancee </span>
      </h1>
      <p style={{ fontSize: `0.7rem` }}>(now with 100% less PHP)</p>

      <p className="subtitle">
        Hello Mike!
      </p>
      <p className="subtitle">
        I challenge your knowledge of the arcane lore (as well as some that's closer to home)<br/>
      </p>

      <button onClick={() => setPage(`test`)}>START</button>

      {/*<Timer/>*/}

      <p>Oh and don't refresh, I did not add localstorage or anything xoxo</p>
    </main>
  </>;
};
