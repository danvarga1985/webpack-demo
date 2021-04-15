import { inputsAreValid } from "./utils/input-are-valid";

export class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  // Compose an error message by iterating through the user inputs, adding every faulty input to the message.
  handleAdditionError(inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}