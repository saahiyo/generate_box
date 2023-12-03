document.addEventListener("DOMContentLoaded", function() {
  var heightRange = document.getElementById("heightRange");
  var widthRange = document.getElementById("widthRange");
  var heightValue = document.getElementById("heightValue");
  var widthValue = document.getElementById("widthValue");
  var resizableBox = document.getElementById("resizableBox");
  var codeContainer = document.getElementById("generatedCode");

  // Initial CSS generation
  updateCSS();

  heightRange.addEventListener("input", function() {
    resizableBox.style.height = heightRange.value + "px";
    heightValue.innerText = heightRange.value + "px";
    updateCSS();
  });

  widthRange.addEventListener("input", function() {
    resizableBox.style.width = widthRange.value + "px";
    widthValue.innerText = widthRange.value + "px";
    updateCSS();
  });

  // Function to update the .box style in CSS code
  function updateCSS() {
    var generatedCSS = `
      .box {
        height: ${resizableBox.style.height};
        width: ${resizableBox.style.width};
        background-color: ${getComputedStyle(resizableBox).backgroundColor};
        margin: ${getComputedStyle(resizableBox).margin};
        transition: ${getComputedStyle(resizableBox).transition};
      }
    `;

    codeContainer.innerText = generatedCSS;
  }
});
