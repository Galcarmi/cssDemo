module.exports = (options) => {
    debugger
    const isCssClassOrId = (selector) => {
        return selector.startsWith('.') || selector.startsWith('#');
    }

    const isCssClassStartsWithGlobal = (selector) => {
        return selector.startsWith(':global');
    }

    const isCssClassStartsWithLocal = (selector) => {
        return selector.startsWith(':local');
    }

    const isCssSelectorNotValid = (selector) => {
        debugger
        const trimmedSelector = selector.trim();

        if(isCssClassStartsWithGlobal(trimmedSelector)) {
            return true;
        }
        if(isCssClassStartsWithLocal(trimmedSelector)) {
            return false;
        }
        
        return !isCssClassOrId(selector);
    }

    const indexesToRemove = [];

    for( let i = 0; i < options.nodes.length; i++ ) {
        if(isCssSelectorNotValid(options.nodes[i].selector)) {
            indexesToRemove.push(i);
        }
    }

    for( let i = indexesToRemove.length - 1; i >= 0; i-- ) {
        options.nodes.splice(indexesToRemove[i], 1);
    }
    debugger
  
    return;
  }
