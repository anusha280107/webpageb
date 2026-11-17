import { useState } from 'react';
import Reveal from './Reveal';
import { useProgress } from '../context/ProgressContext';
import { fireConfetti } from '../utils/confetti';
import { quiz } from '../data/siteData';
import './Quiz.css';

export default function Quiz() {
  const { complete } = useProgress();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = quiz.questions.length;
  const q = quiz.questions[step];
  const answered = selected !== null;

  const choose = (i) => {
    if (answered) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 >= total) {
      setFinished(true);
      complete('quiz');
      fireConfetti({ count: 150, origin: { x: 0.5, y: 0.6 } });
    } else {
      setStep((s) => s + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const result =
    [...quiz.results].sort((a, b) => b.min - a.min).find((r) => score >= r.min) || quiz.results[0];

  return (
    <section id="quiz" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{quiz.eyebrow}</p>
          <h2 className="section-title">{quiz.title}</h2>
          <p className="section-sub">{quiz.subtitle}</p>
        </Reveal>

        <Reveal className="quiz">
          {!finished ? (
            <>
              <div className="quiz__progress" aria-hidden="true">
                <span style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }} />
              </div>
              <p className="quiz__count">
                Question {step + 1} of {total}
              </p>
              <h3 className="quiz__question">{q.question}</h3>

              <div className="quiz__options">
                {q.options.map((opt, i) => {
                  let state = '';
                  if (answered && i === q.correct) state = 'is-correct';
                  else if (answered && i === selected) state = 'is-wrong';
                  return (
                    <button
                      key={i}
                      type="button"
                      className={`quiz__option ${state}`}
                      onClick={() => choose(i)}
                      disabled={answered}
                    >
                      <span className="quiz__letter">{String.fromCharCode(65 + i)}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className="quiz__feedback">
                  <p className="quiz__note script">{q.note}</p>
                  <button type="button" className="btn btn--primary" onClick={next}>
                    {step + 1 >= total ? 'See my result' : 'Next question'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="quiz__result">
              <p className="quiz__score">
                {score} / {total}
              </p>
              <h3 className="quiz__result-title">{result.title}</h3>
              <p className="quiz__result-msg script">{result.message}</p>
              <button type="button" className="btn btn--ghost" onClick={restart}>
                {quiz.restartLabel}
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
