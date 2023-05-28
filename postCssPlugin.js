module.exports = (options) => {
    const isCssClassOrId = (selector) => {
        return selector.startsWith('.') || selector.startsWith('#');
    }

    for( let i = 0; i < options.nodes.length; i++ ) {
        if(!isCssClassOrId(options.nodes[i].selector)) {
            options.nodes.splice(i, 1);
        }
    }
  
    return;
  }
