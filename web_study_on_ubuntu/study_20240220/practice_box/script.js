let table = document.getElementById('bagua-table');

/* your code */
let onFocus;

table.onclick = function(event) {
  let target = event.target.closest("td");
  if (!target) return;

  // 创建一个textarea标签，设置类名称，文本内容
  let textArea = document.createElement("textarea");
  // textArea.className = "selectbox";
  textArea.innerHTML = target.innerHTML;
  textArea.style.cssText = `
                  height: ${target.clientHeight}px;
                  width: ${target.clientWidth}px;
                  border: none;
                `;

  // 聚焦textarea元素，并将td替换成textarea
  target.replaceWith(textArea);
  textArea.focus();
  
  // 创建按钮
  let buttonOK = document.createElement("button");
  let buttonCancel = document.createElement("button");
  buttonOK.innerHTML = "Cancel";
  buttonCancel.innerHTML = "OK";
  textArea.after(buttonOK);
  textArea.after(buttonCancel);

  // 按下OK按时，失去焦点，并修改文本
  buttonOK.onclick = function() {
    removeButton(textArea.value);
  }

  // 按下Cancel时，失去焦点，不修改文本
  buttonCancel.onclick = function() {
    removeButton(target.innerHTML);
  }

  function removeButton(val) {
    // 失去焦点
    textArea.blur();
    // 替换文本内容
    target.innerHTML = val;
    // textarea标签替换回td
    textArea.replaceWith(target);

    // 移除按钮
    buttonOK.remove();
    buttonCancel.remove();
  }

  // 这里处理一下，当按到enter时，也失去焦点
  textArea.onkeydown = function(event) {
      if (event.key === "Enter") {
        removeButton(textArea.value);
      };
  };

  // 失去焦点后
  textArea.onblur = function() {
    removeButton(textArea.value);
  };

  onFocus = textArea;
  
  if (!onFocus) {
    // 这里有问题，待修改
    target.onclick = function() {
      table.addEventListener('click', function() {
        return false;
      });
    };
  };
};