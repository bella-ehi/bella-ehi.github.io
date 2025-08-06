const container = document.querySelector('.mission-container');
let scrollAmount = 260; // Approx width of one box + gap
let interval;

// Only run scroll logic if the container exists
if (container) {
  function startAutoScroll() {
    interval = setInterval(() => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  container.addEventListener('mouseenter', stopAutoScroll);
  container.addEventListener('mouseleave', startAutoScroll);

  // Start auto-scrolling on page load
  startAutoScroll();
}

// === Fact Generator ===
document.addEventListener("DOMContentLoaded", () => {
  const facts = [
    "Only 3% of tech CEOs are women.",
      "Girls in Nigeria are less likely to finish secondary school due to gender bias.",
      "Empowering women leads to stronger economies.",
      "Only 1 in 5 professionals in tech globally is a woman.",
      "Educated women are more likely to educate their children.",
      "In Northern Nigeria, 1 in 2 girls are married before the age of 18.",
      "Women-led startups receive less than 3% of total VC funding.",
      "Art therapy has proven benefits for women recovering from trauma.",
      "In sub-Saharan Africa, women spend 3x more time on unpaid care work than men.",
      "Digital literacy programs improve job prospects for underprivileged women.",
      "Nigeria has the highest number of out-of-school girls in the world.",
      "Women make up 49% of Nigeria’s population, but less than 6% of lawmakers.",
      "Microloans to women in Africa have led to higher repayment rates than men.",
      "When women work, they invest 90% of their income back into their families.",
      "Lack of menstrual hygiene products causes many Nigerian girls to miss school.",
      "Technology access in Nigeria is lower for women, limiting career opportunities.",
      "Women are 14 times more likely to die in climate disasters than men.",
      "STEM fields in Nigeria have a gender gap with fewer girls enrolled in science.",
      "Educating girls can reduce child marriage and improve maternal health.",
      "UNICEF reports that Nigerian girls face higher risks of violence and abuse.",
      "Skills training empowers women to become financially independent.",
      "Only 17% of women in Nigeria have access to the internet compared to 34% of men.",
      "Girls who complete secondary school are 6 times less likely to marry early.",
      "Art and storytelling can be powerful tools for healing and advocacy.",
      "Every extra year of education for a girl can increase her future income by 10%."
  ];

  let factIndex = 0;

  const button = document.querySelector("button");
  const display = document.getElementById("fact-display");

  function showNextFact() {
    if (display) {
      display.textContent = facts[factIndex];
      factIndex = (factIndex + 1) % facts.length;
    }
  }

  if (button) {
    button.addEventListener("click", showNextFact);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("getInvolvedForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form && thankYou) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      form.reset(); 
      thankYou.classList.remove("hidden");

      setTimeout(() => {
        thankYou.classList.add("hidden");
      }, 25000);
    });
  }
});

// Mailing listt
const form = document.getElementById("mailingForm");
const message = document.getElementById("mailingMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset form and show message
  form.reset();
  message.classList.add("show");
  message.classList.remove("hide");

  // Show message immediately
  message.style.display = "block";

  // Fade out after 4 seconds
  setTimeout(() => {
    message.classList.add("hide");
  }, 10000);

  // Hide completely after fade out
  setTimeout(() => {
    message.style.display = "none";
    message.classList.remove("show");
  }, 11000);
});