export interface fields {
  /**
   * 字段名称
   */
  fieldName: string;
  /**
   * 标签名称
   */
  label: string;
  /**
   * 提示信息
   */
  tip: string;
  /**
   * 占位内容
   */
  placeholder?: string;
  /**
   * 表单显示规则
   */
  showRule: string;
  /**
   * 是否必填
   */
  required: boolean;
  /**
   * 校验规则
   */
  rule: string;
  /**
   * 默认内容
   */
  default?: string | number;
  type?: number;
  size?: string | number;
  itemConfig?: any;
}
interface FormConfig {
  ControlType: string;
  data: fields;
}
const beforeBaseFormCofig: () => FormConfig[] = function () {
  return [
    {
      ControlType: "Text",
      data: {
        fieldName: "fieldName",
        tip: "",
        label: "字段名称",
        placeholder: "请输入字段名称",
        value: "",
        showRule: "{}",
        required: true,
        rule: "[]",
      },
    },
    {
      ControlType: "Text",
      data: {
        fieldName: "label",
        tip: "",
        label: "标签名称",
        placeholder: "请输入标签名称",
        value: "标签名称",
        showRule: "{}",
        required: true,
        rule: "[]",
      },
    },
  ];
};
const afterBaseFormConfig: () => FormConfig[] = function () {
  return [
    {
      ControlType: "Switch",
      data: {
        fieldName: "required",
        tip: "",
        label: "是否必填",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    {
      ControlType: "TextArea",
      data: {
        fieldName: "tip",
        tip: "",
        label: "提示",
        placeholder: "请输入提示",
        value: "标签名称",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    {
      ControlType: "Rule",
      data: {
        fieldName: "rule",
        tip: "",
        label: "校验规则",
        showRule: "{}",
        required: false,
        rule: "[]",
        default: "[]",
      },
    },
    {
      ControlType: "JsonEditor",
      data: {
        fieldName: "showRule",
        tip: "",
        label: "显示条件",
        showRule: "{}",
        required: false,
        rule: "[]",
        default: "[]",
      },
    },
  ];
};
/**
 * 配置
 */
const fieldsMap: any = {
  Text: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "",
  },
  TextArea: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "",
  },
  Switch: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    value: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: false,
  },
  Slider: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: 0,
    min: 0,
    max: 100,
  },
  Selected: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    itemConfig: {
      value: "选项1",
      items: [
        {
          label: "选项1",
          value: "选项1",
          select: true,
          id: 1,
        },
        {
          label: "选项2",
          value: "选项2",
          select: false,
          id: 2,
        },
      ],
    },
  },
  Selecteds: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    itemConfig: {
      value: ["选项1"],
      items: [
        {
          label: "选项1",
          value: "选项1",
          select: true,
          id: 1,
        },
        {
          label: "选项2",
          value: "选项2",
          select: false,
          id: 2,
        },
      ],
    },
  },
  RichText: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "",
  },
  Radio: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    value: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: false,
    itemConfig: {
      value: "选项1",
      id: 1,
      items: [
        {
          label: "选项1",
          value: "选项1",
          select: true,
          id: 1,
        },
        {
          label: "选项2",
          value: "选项2",
          select: false,
          id: 2,
        },
      ],
    },
  },
  KeyValueConfigMult: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    value: "",
    showRule: "{}",
    required: false,
    rule: "[]",
  },
  KeyValueConfig: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    value: "",
    showRule: "{}",
    required: false,
    rule: "[]",
  },
  JsonEditor: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "[]",
    json: true,
  },
  InputNumber: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: 0,
    type: '1',
    size: "large",
  },
  Divider: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    color: "#000",
    dividerColor: "#000",
  },
  DateTime: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "1",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "1",
  },
  Date: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "请输入",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "",
  },
  ColorSelect: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    placeholder: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: "#409EFF",
  },
  CheckBox: {
    fieldName: "",
    label: "标签名称",
    tip: "",
    value: "",
    showRule: "{}",
    required: false,
    rule: "[]",
    default: false,
    itemConfig: {
      value: ["选项1"],
      items: [
        {
          label: "选项1",
          value: "选项1",
          select: true,
          id: 1,
        },
        {
          label: "选项2",
          value: "选项2",
          select: false,
          id: 2,
        },
      ],
    },
  },
};
type fieldMap = "default" | "placeholder" | "min" | "max" | "itemConfig" | "type" | "size" | "color" | "dividerColor" | "InputNumber" | "multiple";

type morenFields = Record<fieldMap, FormConfig>;

function getMoren(fieldName: string, component: string): fields {
  const map: morenFields = {
    default: {
      ControlType: "Text",
      data: {
        fieldName: "default",
        tip: "",
        label: "默认值",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    placeholder: {
      ControlType: "Text",
      data: {
        fieldName: "placeholder",
        tip: "",
        label: "输入占位文字",
        placeholder: "请输入占位文字",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    multiple: {
      ControlType: "Switch",
      data: {
        fieldName: "multiple",
        tip: "",
        label: "是否多选",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    min: {
      ControlType: "Text",
      data: {
        fieldName: "min",
        tip: "",
        label: "最小范围",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    max: {
      ControlType: "Text",
      data: {
        fieldName: "max",
        tip: "",
        label: "最大范围",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    itemConfig: {
      ControlType: "KeyValueConfigMult",
      data: {
        fieldName: "itemConfig",
        tip: "",
        label: "默认值",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    type: {
      ControlType: "Radio",
      data: {
        fieldName: "type",
        tip: "",
        label: "按钮位置",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
        itemConfig: {
          value: "1",
          id: 1,
          items: [
            {
              label: "默认",
              value: "1",
              select: true,
              id: 1,
            },
            {
              label: "右边",
              value: "2",
              select: false,
              id: 2,
            },
          ],
        },
      },
    },
    size: {
      ControlType: "Radio",
      data: {
        fieldName: "size",
        tip: "",
        label: "计数器尺寸类型",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
        itemConfig: {
          value: "large",
          id: 1,
          items: [
            {
              label: "large",
              value: "large",
              select: true,
              id: 1,
            },
            {
              label: "medium",
              value: "medium",
              select: false,
              id: 2,
            },
            {
              label: "small",
              value: "small",
              select: false,
              id: 3,
            },
            {
              label: "mini",
              value: "mini",
              select: false,
              id: 4,
            },
          ],
        },
      },
    },
    color: {
      ControlType: "ColorSelect",
      data: {
        fieldName: "color",
        tip: "",
        label: "颜色设置",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    dividerColor: {
      ControlType: "ColorSelect",
      data: {
        fieldName: "dividerColor",
        tip: "",
        label: "颜色设置",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
      },
    },
    InputNumber: {
      ControlType: "InputNumber",
      data: {
        fieldName: "",
        label: "标签名称",
        tip: "",
        placeholder: "",
        showRule: "{}",
        required: false,
        rule: "[]",
        default: 0,
        type: 1,
        size: "large",
      },
    },
  };
  if (map[fieldName] && map[fieldName].ControlType == component) {
    return map[fieldName];
  } else {
    map[fieldName].ControlType = component;
    return map[fieldName];
  }
}

interface Config {
  fieldName: string;
  component: string;
}

interface FormConfigReturn {
  data: () => fields;
  morenConfig: () => fields[];
}

function getFormConfig(componentName: string, config?: Config[]): FormConfigReturn {
  const configList: any = [];
  if (config && config.length > 0) {
    config.forEach((item) => {
      configList.push(getMoren(item.fieldName, item.component));
    });
  }

  return {
    data() {
      return JSON.parse(JSON.stringify(fieldsMap[componentName]));
    },
    morenConfig() {
      return [...beforeBaseFormCofig(), ...configList, ...afterBaseFormConfig()];
    },
  };
}

export { getFormConfig };
