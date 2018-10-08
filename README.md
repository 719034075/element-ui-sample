# element-ui-sample
element-ui-sample

> 该demo在目录下运行`npm run dev`即可。8080别冲突。

该示例直接用`CDN`引入`Element`资源。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

以及`Vue`资源。

```html
<!-- 先引入 Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```


# 注意事项

1. `Element`中的<el-xxx>标签都需要有`Vue`实例注册才会进行编译成对应的标准html5标签。否则达不到预期效果。

即便我们可能没有用到一些响应事件。

2. vue文件不要和一些内置的标签重名，可能发生调用冲突。

3. 遇到JSX语法。需要安装对应的编译插件。

    - 1. 安装相关依赖
```cmd
npm install --save-dev babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx
```

    - 2. 在`.babelrc`文件中配置插件

```.babelrc
{
  "presets": [
    ["env", { "modules": false }],
    ["es2015", { "modules": false }],
    "stage-3"
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]],
  "transform-vue-jsx"//重点是这条，用来编译vue的jsx语法
  ]
}
```

4. 如果遇到webstorm动不动就卡的情况。除了忽略`node_modules`文件夹和调高内存之外。还可能是因为git for windows的缘故。把webstorm内置的版本控制移除即可。

`crtl+alt+s`->`version controller`

把项目remove出版本控制即可。转用git bash命令行来版本控制。

```
git pull
git commit -m "xxx"
git push
```

5.

> W3C 标准中有如下规定：
>
> *When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.*
>
> 即：当一个 `form` 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 `<el-form>` 标签上添加 `@submit.native.prevent`。
