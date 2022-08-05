import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Answer from "./components/answer/Answer";
import Intro from "./components/intro/Intro";
import Quiz from "./components/quiz/Quiz";
import Result from "./components/result/Result";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.contents}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/answer" element={<Answer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
