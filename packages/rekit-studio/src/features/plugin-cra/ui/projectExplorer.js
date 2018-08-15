import store from '../../../common/store';
import history from '../../../common/history';

export default {
  handleSelect(elementId) {
    const { elementById } = store.getState().home.projectData;
    const ele = elementById[elementId];
    switch (ele.type) {
      case 'component':
      case 'action':
      case 'initial-state':
      case 'file':
        history.push(`/element/${encodeURIComponent(ele.id)}`);
        break;
      case 'routes':
        history.push(`/element/${encodeURIComponent('src/features/' + ele.feature + '/route.js')}`);
        break;
      default:
        break;
    }
  }
};