import { appState } from "../AppState.js"
import { Source } from "../Models/Source.js"
import { saveState } from "../Utils/Store.js"

class SourcesService{

createSource(formData){
  let source = new Source(formData)
  appState.sources = [source,...appState.sources]
  saveState('sources',appState.sources)
  console.log(drawTotal());
}

drawTotal(){
  let total = 0
  appState.sources.forEach(source =>{
    total += source.price
    console.log(total);
  })
}



removeSource(id){
let leftovers= appState.sources.filter(source=>source.id !== id)
appState.sources=leftovers
saveState('sources',appState.sources)
}

// NOTE  $360 in the for
}
export const sourcesService = new SourcesService()
/**
 * createItem(formData) {
    let item = new Item(formData)
    appState.items = [item, ...appState.items]
    console.log(appState.items);
    saveState('items', appState.items)
  }
 * 
 */