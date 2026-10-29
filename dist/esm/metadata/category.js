function taggedCategory(category, tags) {
  return Object.fromEntries(
    Object.entries(tags).map(([name, terms]) => [name, { category, tags: terms }])
  );
}
export {
  taggedCategory
};
