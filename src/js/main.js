const importDoc = document.currentScript.ownerDocument;

class CheckboxList {
  createdCallback() {
    const template = importDoc.querySelector('template');
    const templateContent = document.importNode(template.content, true);

    this.createShadowRoot().appendChild(templateContent);
  }

  attachedCallback() {
    // TODO;
  }

  detachedCallback() {
    // TODO
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    //  TODO
  };
}

// Register element and expose DOM API under formsjs name-space
window.CheckboxList = document.registerElement('forms-js', {
  prototype: CheckboxList.prototype,
});
