import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Answer from "./pages/answer/Answer";
import Intro from "./pages/intro/Intro";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

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
