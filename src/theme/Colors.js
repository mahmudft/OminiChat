const accentColors = {
  colors: {
    accentDanger: '#E94242',
    accentWarning: '#FDCF41',
    accentSuccess: '#2CC069',
    accentSafe: '#7BCBCF',
  },
};

const light = {
  colors: {
    themeColor: '#FFFFFF',
    brandColor: '#002DE3',
    onSurface: '#EDEDED',
    text: '#0F1828',
    ...accentColors.colors,
  },
};

const dark = {
  colors: {
    themeColor: '#0F1828',
    brandColor: '#375FFF',
    onSurface: '#152033',
    text: '#FFFFFF',
    ...accentColors.colors,
  },
};

export default {light, dark};
