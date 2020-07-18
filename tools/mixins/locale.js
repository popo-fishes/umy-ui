import { t } from 'umy-ui/tools/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
