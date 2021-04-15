import { inputsAreValid } from "./utils/input-are-valid";
import { parseInputs } from "./utils/parse-inputs";

export const run = (alertService, componentService) => {
  alertService.hideErrors();
  
  componentService.onClick(() => { // addEventListener
    alertService.hideErrors();
    const inputs = componentService.getInputs(); //[value1, value2] - string
    const parsedInputs = parseInputs(...inputs); //[value1, value2] - int

    
    if (inputsAreValid(...parsedInputs)) { // inputs are number type
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB); // set the result in the dom
    } else { // display the invalid inputs with an error messege
      componentService.setResult(""); 
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

