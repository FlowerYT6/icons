// Auto-generated example icons.js
const FlowerIcons = {
  "home": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"/></svg>"
};

function getFlowerIcon(name) {
  return FlowerIcons[name] || '';
}

function insertFlowerIcon(name, element) {
  if (FlowerIcons[name]) {
    element.innerHTML = FlowerIcons[name];
  }
}

// Custom Element: <flower-icon name="home"></flower-icon>
class FlowerIcon extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    if (name && FlowerIcons[name]) {
      this.innerHTML = FlowerIcons[name];
    } else {
      this.innerHTML = '<!-- icon not found -->';
    }
  }
}

customElements.define('flower-icon', FlowerIcon);

if (typeof module !== 'undefined') {
  module.exports = { FlowerIcons, getFlowerIcon, insertFlowerIcon };
}
