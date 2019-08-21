getPath = elem => {
  let cssSelector = '';
  let selectorElem, selectorAncestorElem;
  const getProps = elem => {
    const tag = elem.tagName.toLowerCase();
    if (tag === 'body') return tag;
    let selector = tag;
    if (elem.id !== '') {
      selector = `${tag}#${elem.id}`;
    } else if (elem.className !== '') {
      selector = `${tag}.${elem.className.replace(/\s+/g, '.')}`;
    }
    return selector;
  };
  const getUniqueAncestor = elem => {
    let ancestorElem = elem.parentElement;
    selectorAncestorElem = getProps(ancestorElem);
    while (selectorAncestorElem !== 'body') {
      if (document.querySelectorAll(selectorAncestorElem).length === 1) break;
      ancestorElem = ancestorElem.parentElement;
      selectorAncestorElem = getProps(ancestorElem);
    }
    return ancestorElem;
  };

  const getPathFromAncestor = (elem, ancestorElem) => {
    if (elem === ancestorElem) {
      return `${selectorAncestorElem}`;
    }
    let selectorElem = getProps(elem);
    const fromAncestorUnique = elem =>
      ancestorElem.querySelectorAll(selectorElem).length === 1;
    const inChildUnique = elem =>
      elem.parentElement.querySelectorAll(selectorElem).length === 1;
    const numInChild = elem =>
      Array.from(elem.parentElement.children).indexOf(elem) + 1;
    let relativeSelectorElem = fromAncestorUnique(elem)
      ? `${selectorAncestorElem} ${selectorElem}`
      : inChildUnique(elem)
      ? `${getPathFromAncestor(
          elem.parentElement,
          ancestorElem
        )} > ${selectorElem}`
      : `${getPathFromAncestor(
          elem.parentElement,
          ancestorElem
        )} > ${elem.tagName.toLowerCase()}:nth-child(${numInChild(elem)})`;
    return relativeSelectorElem;
  };

  selectorElem = getProps(elem);
  cssSelector =
    document.querySelectorAll(selectorElem).length === 1
      ? selectorElem
      : getPathFromAncestor(elem, getUniqueAncestor(elem));
  return cssSelector;
};
