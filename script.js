// Smooth scroll to contact section
document.getElementById("consultBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Simple form UX improvement
const form = document.getElementById("contactForm");

form.addEventListener("submit", function () {
  const button = form.querySelector("button");
  button.textContent = "Sending...";
  button.disabled = true;
});

// Mini AI Recommendation Demo (Simulated)
document.getElementById("aiBtn").addEventListener("click", function () {
  const input = document.getElementById("aiInput").value.toLowerCase();
  const result = document.getElementById("aiResult");

  if (!input) {
    result.textContent = "Please describe your problem to get a recommendation.";
    return;
  }

  if (input.includes("support") || input.includes("customer")) {
    result.textContent = "Recommended Solution: AI Chatbot + Customer Support Automation.";
  } else if (input.includes("sales") || input.includes("marketing")) {
    result.textContent = "Recommended Solution: AI-powered Analytics & Recommendation System.";
  } else if (input.includes("data")) {
    result.textContent = "Recommended Solution: Machine Learning Models for Data Insights.";
  } else {
    result.textContent = "Recommended Solution: Custom AI Strategy & Workflow Automation.";
  }
});
