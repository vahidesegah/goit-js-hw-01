function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const bordertWidth = parseFloat(border);
  
    const Npx = contentWidth + paddingWidth * 2 + bordertWidth * 2;
    return Npx;
  }
  
  console.log(getElementWidth('50px', '8px', '4px'));
  console.log(getElementWidth('60px', '12px', '8.5px'));
  console.log(getElementWidth('200px', '0px', '0px'));