class CheckboxList extends HTMLElement {
  get boxes() {
    // A DOM query selector that selects all checkboxes other than "check all" checkbox
    const BOXES_SELECTOR = 'input[type="checkbox"]:not([checkbox-list-all])';
    return Array.from(this.querySelectorAll(BOXES_SELECTOR));
  }

  createdCallback() {
    this.allCheckbox = this.querySelector('[checkbox-list-all]');
  }

  attachedCallback() {
    this.addEventListener('change', this.changed.bind(this));
  }

  detachedCallback() {
    this.removeEventListener('change', this.changed.bind(this));
  }

  /* will be triggered when the element with checkbox-list-all attribute is changed */
  changed(event) {
    if (event.target === this.allCheckbox) {
      this.boxes.forEach( box => { box.checked = this.allCheckbox.checked; });
    } else {
      this.setAllCheckbox();
    }
  }

  setAllCheckbox() {
    const allChecked = this.boxes.every(checkbox => checkbox.checked);
    const noneChecked = this.boxes.every(checkbox => !checkbox.checked);

    if (!allChecked && !noneChecked) {
      this.allCheckbox.indeterminate = true;
    }
    if (allChecked) {
      this.allCheckbox.checked = true;
      this.allCheckbox.indeterminate = false;
    }
    if (noneChecked) {
      this.allCheckbox.checked = false;
      this.allCheckbox.indeterminate = false;
    }
  }
}

// Register element and expose DOM API under formsjs name-space
window.CheckboxList = document.registerElement('checkbox-list', {
  prototype: CheckboxList.prototype,
});
