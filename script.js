const question_container = document.getElementById("question_container");

const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    let faqHTML = "";

    data.forEach((faq) => {
      faqHTML += `
        <div class="flex_question">
          <div class="flex_top">
            <div class="question_title">${faq.question}</div>
           
            <img src="./assets/images/icon-plus.svg" class="icon" id="icon" alt="" />
          </div>
          <div class="answer" style="display: none;">${faq.answer}</div>
        </div>
      `;
    });

    question_container.innerHTML = faqHTML;

    document.querySelectorAll(".flex_top").forEach((topElem) => {
      topElem.addEventListener("click", () => {
        const answerElem = topElem.nextElementSibling;
        const plusIcon = topElem.querySelector('img[alt=""]');

        const isAnswerVisible = answerElem.style.display === "block";

        answerElem.style.display = isAnswerVisible ? "none" : "block";

        console.log(isAnswerVisible);
        isAnswerVisible
          ? (plusIcon.src = "./assets/images/icon-plus.svg")
          : (plusIcon.src = "./assets/images/icon-minus.svg");
      });
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();
