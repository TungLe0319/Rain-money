import { appState } from '../AppState.js';
import { generateId } from '../Utils/generateId.js';
export class Budget {
  /**
   *
   * @param {*} data
   */
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.purchased = data.purchased || false;
    this.id = data.id || generateId();
  }

  get BudgetTemplate() {
    return /*html*/ `
<div class="col-md-12">
<form onsubmit="app.sourcesController.createSource('${this.id}')">
<div class="card bg-dark text-light rounded elevation-2">
  <div class="p-2 d-flex justify-content-between">
    <input
      type="checkbox"
      placeholder="Budget-Item "
      class="ms-2 "
    />
    <span class="text-danger">
    ${this.name}
    </span>
    <div class="d-flex justify-content-between">
      <div >$360</div>
      <div>Of</div>
      <div class="text-danger">${this.price}</div>
    </div>
  </div>
  <ul id="sourceItems" class="list-group p-1">
    ${this.SourceTemplate}
   
  </ul>

 

    <div class="p-2 ">
      <div class="col-auto">
        <label for="" class="col-form-label">add source</label>
      </div>

      <div class="d-flex">
          <div class="col-auto">
        <input type="text"  class="form-control" name="body">
        <label for="body" class="visually-hidden">PayDay</label>
      </div>
      <div class="col-auto mx-2">
        <input type="number"  class="form-control" name="price">
        <label for="price" class="visually-hidden">AmountGained</label>
      </div>
      
      <button class="btn btn-primary p-1 m-1 w-100" >Add</button>
      </div>
     
    </div>

  </form>

</div>

`;
  }

  get SourceTemplate() {
    let template = '';

    this.Sources.forEach((source) => (template += source.SourceTemplate));
    return template;
  }

  get Sources() {
    let sources = appState.sources.filter(
      (source) => source.budgetId == this.id
    );
    return sources;
  }
}
