walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) {
    return;
  }
  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;

  v = v.replace(/\bCIA\b/g, "INGSOC");
  v = v.replace(/\bCia\b/g, "Ingsoc");
  v = v.replace(/\bcia\b/g, "ingsoc");
	v = v.replace(/\bc.i.a\b/g, "ingsoc");
	v = v.replace(/\bC.I.A\b/g, "INGSOC");
	v = v.replace(/\bc.i.a.\b/g, "ingsoc");
	v = v.replace(/\bC.I.A.\b/g, "INGSOC");
	v = v.replace(/\bthe C.I.A.\b/g, "INGSOC");
	v = v.replace(/\bThe C.I.A.\b/g, "INGSOC");

  textNode.nodeValue = v;
}
