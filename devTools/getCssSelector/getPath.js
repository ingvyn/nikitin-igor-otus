getPath = elem => {
  let cssSelector = '';

  const getProps = elem => {
    const tag = elem.tagName.toLowerCase();
    if (tag === 'body') {
      return { inDocumentUnique: true, selector: tag };
    }
    const numInChild =
      Array.from(elem.parentElement.children).indexOf(elem) + 1;
    let selector = tag;
    if (elem.id !== '') {
      selector = `${tag}#${elem.id}`;
    } else if (elem.className !== '') {
      selector = `${tag}.${elem.className.replace(/\s/g, '.')}`;
    }

    return {
      tag: tag,
      inDocumentUnique: document.querySelectorAll(selector).length === 1,
      inChildUnique: elem.parentElement.querySelectorAll(selector).length === 1,
      selector: selector,
      numInChild: numInChild
    };
  };

  const {
    tag,
    inDocumentUnique,
    inChildUnique,
    selector,
    numInChild
  } = getProps(elem);
  cssSelector = inDocumentUnique
    ? selector
    : inChildUnique
    ? `${getPath(elem.parentElement)} > ${selector}`
    : `${getPath(elem.parentElement)} > ${tag}:nth-child(${numInChild})`;
  return cssSelector;
};
