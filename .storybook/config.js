import { configure, setAddon } from '@kadira/storybook'

import WithPropsCombinationsAddon from '../src/'

setAddon(WithPropsCombinationsAddon)

configure(() => {
  require('../stories/index.js');
}, module);