import "./App.css";
import { ANSWERS, QUESTION, UseselectAnswer } from "./hooks/UseselectAnswer";

function App() {
  const { onclickUser, userSelect, result } = UseselectAnswer();
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
