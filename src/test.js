import dropdown from '.';

const colorList = ['red', 'green', 'blue'];

// Change colors of the page
const colorChangeHandler = (e) => {
  const color = e.target.textContent;
  document.body.style.color = color;
};
const colors = dropdown('Color', colorList, colorChangeHandler);
colors.append('#root');

// Change background color of the page
const backgroundColorChangeHandler = (e) => {
  const color = e.target.textContent;
  document.body.style.backgroundColor = color;
};
const backgroundColor = dropdown(
  'Background Color',
  colorList,
  backgroundColorChangeHandler,
);
backgroundColor.append('#root');

// Change font size
const fontSizeChangeHandler = (e) => {
  const size = e.target.textContent;
  document.body.style.fontSize = size + 'rem';
};
const fontsize = dropdown('Font Size', [1, 2, 3], fontSizeChangeHandler);
fontsize.append('#root');
