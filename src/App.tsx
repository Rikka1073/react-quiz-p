import { useState } from "react";
import "./App.css";

const QUESTION = "Reactはどのようなものですか？";
const ANSWERS = ["データベース", "フレームワーク", "ライブラリ", "言語"];
const CORRECT_ANSWER = "ライブラリ";

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [result, setResult] = useState("");
  const onclickUser = (answer: string) => {
    setUserSelect(answer);
    if (answer === CORRECT_ANSWER) {
      setResult("正解です");
    } else {
      setResult("残念、不正解です");
    }
  };

  return (
    <>
      <div className="mx-auto w-5/6 bg-orange-100 h-screen">
        <div className="text-center pt-10">
          <p className="text-2xl">{QUESTION}</p>
        </div>
        <div className="text-center mt-2 flex gap-3 justify-center">
          {ANSWERS.map((answer, index) => {
            return (
              <div
                key={index}
                className={`border - 2 border-green-200 rounded-lg px-3 py-2 ${
                  answer === userSelect && "bg-black text-white"
                }`}
              >
                <div onClick={() => onclickUser(answer)}>{answer}</div>
              </div>
            );
          })}
        </div>
        <div className="text-center pt-10">
          <p className="text-2xl">結果表示</p>
          <p className="text-xl text-red-600">{result}</p>
        </div>
      </div>
    </>
  );
}

export default App;
