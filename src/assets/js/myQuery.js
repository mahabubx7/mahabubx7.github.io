/**
 * @name: myQuery.js
 * @description: jQuery like lib. (custom version of jQuery smaller!)
 * @version: 1.0.0
 * @author: me <Mahabub | github.com/mahabubx7>
 */

function M$(selector) {
  var elements;

  if (typeof selector === 'string') {
    elements = document.querySelectorAll(selector);
  } else if (selector instanceof HTMLElement) {
    elements = [selector];
  } else if (selector instanceof NodeList) {
    elements = selector;
  } else if (selector instanceof Document) {
    elements = [document];
  } else {
    throw new Error('Invalid selector');
  }

  if (!elements || !elements.length || elements.length === 0) {
    throw new Error(`Element with selector ${selector} not found`);
  }

  Object.assign(elements, methods);
  return elements;
}

let methods = {};

methods.addClass = function (classNames) {
  this.forEach((element) => {
    element.classList.add(classNames);
  });
  return this;
};

methods.removeClass = function (classNames) {
  this.forEach((element) => {
    element.classList.remove(classNames);
  });
  return this;
};

methods.toggleClass = function (classNames) {
  this.forEach((element) => {
    element.classList.toggle(classNames);
  });
  return this;
};

methods.css = function (property, value) {
  this.forEach((element) => {
    element.style[property] = value;
  });
  return this;
};

methods.on = function (event, callback) {
  this.forEach((element) => {
    element.addEventListener(event, callback);
  });
  return this;
};

methods.hide = function (display = 'none') {
  this.forEach((element) => {
    element.dataset.prevDisplay = element.style.display;
    element.style.display = display;
  });
  return this;
};

methods.show = function (display = 'block') {
  this.forEach((element) => {
    const prevDisplay = element.dataset.prevDisplay || display;
    element.style.display = prevDisplay;
  });
  return this;
};

methods.toggle = function (display = 'block') {
  this.forEach((element) => {
    if (element.style.display === 'none') {
      this.show.call([element], display);
    } else {
      this.hide.call([element], 'none');
    }
  });
  return this;
};

methods.html = function (html) {
  this.forEach((element) => {
    element.innerHTML = html;
  });
  return this;
};

methods.append = function (html) {
  this.forEach((element) => {
    element.innerHTML += html;
  });
  return this;
};

methods.prepend = function (html) {
  this.forEach((element) => {
    element.innerHTML = html + element.innerHTML;
  });

  return this;
};

methods.attr = function (attribute, value) {
  this.forEach((element) => {
    element.setAttribute(attribute, value);
  });
  return this;
};

methods.removeAttr = function (attribute) {
  this.forEach((element) => {
    element.removeAttribute(attribute);
  });
  return this;
};

methods.val = function (value) {
  if (value === undefined) {
    return this[0].value;
  }
  this.forEach((element) => {
    element.value = value;
  });
  return this;
};

methods.text = function (text) {
  if (text === undefined) {
    return this[0].textContent;
  }
  this.forEach((element) => {
    element.textContent = text;
  });
  return this;
};

methods.each = function (callback) {
  this.forEach((element, index) => {
    callback(index, element);
  });
  return this;
};

methods.find = function (selector) {
  return M$(selector, this[0]);
};

methods.parent = function () {
  return M$(this[0].parentNode);
};

methods.children = function () {
  return M$(this[0].children);
};

methods.siblings = function () {
  return M$(this[0].parentNode.children);
};

methods.next = function () {
  return M$(this[0].nextElementSibling);
};

methods.prev = function () {
  return M$(this[0].previousElementSibling);
};

methods.first = function () {
  return M$(this[0]);
};

methods.last = function () {
  return M$(this[this.length - 1]);
};

methods.eq = function (index) {
  return M$(this[index]);
};

methods.ready = function (callback) {
  document.addEventListener('DOMContentLoaded', callback);
};

window.M$ = M$; // expose to global scope
