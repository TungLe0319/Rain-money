import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Source{

  constructor(data){

this.body = data.body 
this.price = parseInt(data.price)
this.budgetId= data.budgetId
this.id= data.id || generateId()



  }





  get SourceTemplate(){
    return /*html*/`
    
    <li class="list-group-item d-flex">
    <div>${this.body}</div>
    <div class="mx-4">${this.price}</div>
    <div><i onclick="app.sourcesController.removeSource('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></div>
    
    </li>
    `
  }
}

