import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Source{

  constructor(data){

this.body = data.body 
this.price = data.price
this.budgetId= data.budgetId
this.id= data.id || generateId
  }





  get SourceTemplate(){
    return /*html*/`
    
    <li class="list-group-item d-flex">
    <div>${this.body}</div>
    <div class="mx-4">${this.price}</div>
    <div><i class="mdi mdi-trash-can"></i></div>
    
    </li>
    `
  }
}

