export const changeIconOnMouseMove = (e, setMouse) => {
  if (e.clientY - e.target.offsetTop < 50) setMouse("ab");
  if (e.clientY - e.target.offsetTop > 50) setMouse("agc");
  if (e.clientY - e.target.offsetTop > 100) setMouse("abcd");
  if (e.clientY - e.target.offsetTop > 150) setMouse("abcde");
  if (e.clientY - e.target.offsetTop > 200) setMouse("abcdef");
  if (e.clientY - e.target.offsetTop > 250) setMouse("abcdefg");
  if (e.clientY - e.target.offsetTop > 300) setMouse("abcdefgh");
  if (e.clientY - e.target.offsetTop > 350) setMouse("abcdefghi");
  if (e.clientY - e.target.offsetTop > 400) setMouse("abcdefghik");
  if (e.clientY - e.target.offsetTop > 450) setMouse("abcdefghikl");
  if (e.clientY - e.target.offsetTop > 550) setMouse("abcdefghiklm");
};
