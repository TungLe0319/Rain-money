import { Budget } from "../Models/Budget.js";
import {appState} from "../AppState.js"
import { saveState } from "../Utils/Store.js";
class BudgetsService{

  constructor(){


  }

  createBudget(formData){
    let budget = new Budget(formData)
    appState.budgets= [budget, ...appState.budgets]
    console.log('createBudget',budget);
    saveState('budgets', appState.budgets)
  }
}

export const budgetsService= new BudgetsService()