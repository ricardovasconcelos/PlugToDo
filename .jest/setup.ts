import 'jest-styled-components'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

declare const window: any

window.matchMedia = window.matchMedia || function() {
  return {
     matches : false,
     addListener : function() {},
     removeListener: function() {}
  };
};
