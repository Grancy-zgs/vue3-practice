# vue3 自定义指令
- debounce.ts 防抖
- throttle.ts 节流

## 打包命令

npx rollup -c

## 使用

1. 安装自定义指令 npm 包

```
npm i -D pintechs-vue3-directives
```

  如果安装时依赖冲突报错，则使用--legacy-peer-deps 命令

```
npm i -D pintechs-vue3-directives --legacy-peer-deps
```

2. 在需要使用的项目中的 main.ts 中引入并使用

```
import { useDirectives } from "pintechs-vue3-directives";
useDirectives(app);
```

3. 在组件中使用

其中event是监听事件的类型，fn是自定义方法，delay是防抖节流延迟时间
```
<el-input
  placeholder="请输入内容"
  v-model="label"
  v-debounce="{ event: 'input', fn: testInputDebounce, delay: 1000 }"
></el-input>
<el-button
  type="primary"
  v-throttle="{ event: 'click', fn: testButtonThrottle, delay: 1000 }"
></el-button>
```
