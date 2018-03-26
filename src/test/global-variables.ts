Object.defineProperty(window, 'gapi', {  
  value: {
    load() {},
    client: {
      tasks: {
        tasklists: {
          list() { return new Promise(resolve => resolve({result: {}}))}
        }
      }
    }
  }
});