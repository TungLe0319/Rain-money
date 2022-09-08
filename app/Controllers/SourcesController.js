import { Source } from "../Models/Source.js";
import { sourcesService } from "../Services/SourcesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

export class SourcesController{

constructor(){

}

// NOTE FORM STUFF
createSource(budgetId){
try {
  window.event.preventDefault()
  console.log('create Sources working');
  let form = window.event.target
  let formData = getFormData(form)
formData.budgetId=budgetId
console.log('okay?', formData);
sourcesService.createSource(formData)

form.reset()
} catch (error) {
  console.error('[CREATE_SOURCE]', error);
}

}
}

