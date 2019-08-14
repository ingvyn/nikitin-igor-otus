getPath = elem => {
  let cssSelector = '';
  const getProps = elem => {
    let tag = elem.tagName.toLowerCase();
    let numInChild =
      tag === 'BODY'
        ? 0
        : Array.from(elem.parentElement.children).indexOf(elem) + 1;
    let id = elem.id;
    return { tag: tag, numInChild: numInChild, id: id };
  };
  let { tag, numInChild, id } = getProps(elem);
  if (id === '') {
    cssSelector = numInChild
      ? `${getPath(elem.parentElement)} > ${tag}:nth-child(${numInChild})`
      : 'body';
  } else cssSelector = `${tag}#${id}`;
  return cssSelector;
};
