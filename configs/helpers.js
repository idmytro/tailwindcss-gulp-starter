
const keysToOptions = keys => keys.reduce((o, v) => ({ ...o, [v]: v }), {});

module.exports = {
  keysToOptions
};
