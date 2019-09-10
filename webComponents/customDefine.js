let treeScheme = {
  id: 1,
  items: [
    {
      id: 2,
      items: [
        {
          id: 3,
          items: [
            {
              id: 4
            }
          ]
        },
        {
          id: 5
        }
      ]
    },
    {
      id: 6,
      items: [
        {
          id: 7,
          items: [
            {
              id: 8
            }
          ]
        },
        {
          id: 9,
          items: [
            {
              id: 10
            },
            {
              id: 11
            }
          ]
        }
      ]
    }
  ]
};
class CustomTree extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['ident'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.innerHTML = `<span>tree: ${newValue}</span>`;
  }
}
class CustomLeaf extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['ident'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.innerHTML = `<span>leaf: ${newValue}</span>`;
  }
}
customElements.define('my-tree', CustomTree);
customElements.define('my-leaf', CustomLeaf);

const childElementsAppend = (elArr, rootElement) => {
  elArr.forEach(el => {
    if (el.items === undefined) {
      const myLeaf = new CustomLeaf();
      myLeaf.setAttribute('ident', el.id);
      rootElement.appendChild(myLeaf);
    } else {
      const myTree = new CustomTree();
      myTree.setAttribute('ident', el.id);
      rootElement.appendChild(myTree);
      childElementsAppend(el.items, myTree);
    }
  });
};
const myTree = new CustomTree();
myTree.setAttribute('ident', treeScheme.id);
document.body.appendChild(myTree);
treeScheme.items !== undefined && childElementsAppend(treeScheme.items, myTree);
