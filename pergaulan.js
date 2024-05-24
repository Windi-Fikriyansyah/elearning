const correctAnswer = ["C", "B", "D", "E", "A", "C", "B", "A", "C", "D", "D", "D", "A", "B", "D"];
const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswer = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value,
        form.q11.value,
        form.q12.value,
        form.q13.value,
        form.q14.value,
        form.q15.value,
    ];
    console.log(userAnswer);
    userAnswer.forEach((ans, index) => {
        if (ans === correctAnswer[index]) {
            score++;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }
    });

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector(
        "p"
    ).textContent = `You scored ${score}/${userAnswer.length} `;
});