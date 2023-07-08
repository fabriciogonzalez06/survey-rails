import { Controller } from "@hotwired/stimulus";

const restoreForm = (id) => {
  document.getElementById(id).reset();
};

export default class extends Controller {
  resetForm() {
    document.getElementById("modal").remove();
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
