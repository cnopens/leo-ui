import './styles/index.less';
import './utils/iconfont';

import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Carousels from './components/Carousels';
import CarouselsItem from './components/CarouselsItem';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import Edit from './components/Edit';
import Form from './components/Form';
import FormItem from './components/FormItem';
import Icon from './components/Icon';
import Input from './components/Input';
import Load from './components/Load';
import Masonry from './components/Masonry';
import MasonryItem from './components/MasonryItem';
import Page from './components/Page';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import Select from './components/Select';
import Table from './components/Table';
import TableSort from './components/TableSort';
import Upload from './components/Upload';

import DragSelect from './directives/DragSelect';
import Heart from './directives/Heart';
import Tooltip from './directives/Tooltip';

import CSV from './utils/csv';
import Indicator from './utils/indicator';

const components = [
  Button,
  ButtonGroup,
  Carousels,
  CarouselsItem,
  Checkbox,
  CheckboxGroup,
  Edit,
  Form,
  FormItem,
  Icon,
  Input,
  Load,
  Masonry,
  MasonryItem,
  Page,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableSort,
  Upload
];

const directives = [
  Heart,
  Tooltip,
  DragSelect
];

const install = (Vue, opts = {}) => {
  if (install.installed) return;

  // 组件
  components.forEach(component => {
    Vue.use(component);
  });

  // 指令
  directives.forEach(directive => {
    Vue.use(directive);
  });

  Vue.prototype.$CSV = CSV;
  Vue.prototype.$Indicator = Indicator;
  Vue.prototype.$prefix = opts.prefix || 'leo';
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Button,
  ButtonGroup,
  Carousels,
  CarouselsItem,
  Checkbox,
  CheckboxGroup,
  Edit,
  Form,
  FormItem,
  Icon,
  Input,
  Load,
  Masonry,
  MasonryItem,
  Page,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableSort,
  Upload,

  Heart,
  Tooltip,
  DragSelect,

  CSV,
  Indicator,
};

export default {
  install,
  version : process.env.VERSION
}