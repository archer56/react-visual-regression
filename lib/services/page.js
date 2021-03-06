const navigateTo = async (currTest, page) => {
  try {
    await page.goto(currTest.url);
  } catch {
    throw new Error(`Failed, could not load ${currTest.url}`);
  }
};

const setViewport = async (currTest, page) => {
  try {
    await page.setViewport({ width: currTest.width, height: 768 });
  } catch {
    throw new Error(`Failed, could not set viewport to ${currTest.width}`);
  }
};

const hideElements = async (elements = [], page) => {
  if (!elements.length) return;
  const selectors = elements.join(',');
  await page.addStyleTag({ content: `${selectors}{visibility: hidden;}` });
};

const waitFor = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve();
    }, time)
  });
}

module.exports = {
  navigateTo,
  setViewport,
  hideElements,
  waitFor,
};
