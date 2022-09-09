import { appState } from '../AppState.js';
import { Source } from '../Models/Source.js';
import { saveState } from '../Utils/Store.js';

class SourcesService {
  createSource(formData) {
    let source = new Source(formData);
    appState.sources = [source, ...appState.sources];
    saveState('sources', appState.sources);
  }

  removeSource(id) {
    let leftovers = appState.sources.filter((source) => source.id !== id);
    appState.sources = leftovers;
    saveState('sources', appState.sources);
  }
}
export const sourcesService = new SourcesService();
