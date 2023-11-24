import { useEffect, useState } from "react";
import Markdown from 'react-markdown'

export const Question = ({ data, setAnswer, answer }) => {
  const [selected, setSelected] = useState(answer)

  useEffect(() => {
    setSelected(answer)
  }, [data, answer])

  return <section>
    <Markdown>{data[0]}</Markdown>
      {data
        .slice(1, -1)
        .map((v, i) =>
          <button
            style={{
              ...(i === selected ? { border: `solid 1px #646cff`} : {}),
              backgroundColor: `inherit`,
              display: `block`,
              textAlign: `left`,
              width: `100%`,
            }}
            key={v}
            onClick={() => {
              setSelected(i)
              setAnswer(i);
            }}
          >{[`A`, `B`, `C`, `D`, `E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`][i]})
            {v.indexOf(`\`\`\``) !== -1 ? <Markdown>{v}</Markdown> : ` ${v}`}
          </button>)
      }
  </section>
}