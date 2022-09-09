import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { budgetsService } from "../Services/BudgetsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawBudget(){
let template = ''
appState.budgets.forEach(budget => template += budget.BudgetTemplate)
setHTML('budgettemplates',template)
}


export class BudgetsController{

  constructor(){
   _drawBudget()
// console.log('budgetController');
// console.log(appState.budgets);
appState.on('budgets',_drawBudget)
appState.on('sources', _drawBudget)
  }

createBudget(){


  try {
    window.event.preventDefault()
  const form= window.event.target
  let formData= getFormData(form)
budgetsService.createBudget(formData)
console.log(formData);
form.reset()

    
  } catch (error) {
    console.error('createBudget', error);
  }
}


togglePurchased(){
  
}
}