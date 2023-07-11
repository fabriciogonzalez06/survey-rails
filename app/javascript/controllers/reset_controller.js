import { Controller } from "@hotwired/stimulus";

const restoreForm = (id) => {
  document.getElementById(id).reset();
};

export default class extends Controller {
  resetForm() {
    const timer = setInterval(() => {
      document.getElementById("modal").remove();
      clearInterval(timer);
    }, 100);
  }

  questionForm(e) {
    const timer = setInterval(() => {
      restoreForm(e.target.id);
      clearInterval(timer);
    }, 100);
  }

  optionForm(e) {
    const timer = setInterval(() => {
      restoreForm(e.target.id);
      clearInterval(timer);
    }, 100);
  }
}
