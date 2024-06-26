## JSX
在JS代码中编写HTML的模版结构
* 所有标签都必须闭合
* 必须被一个父元素包裹
> JSX是JS的语法扩展，需要使用解析工具做解析之后才能在浏览器运行

* JS编译网站: https://babeljs.io

### JSX高频场景

#### JSX中使用JS表达式
通过大括号语法`{}`识别JS中的表达式(常见的变量、函数调用、方法调用、JS对象等)。

### JSX列表渲染

### JSX实现条件渲染
1. 通过逻辑与运算符&&
2. 使用三元表达式(a?b:c)

### JSX实现复杂条件渲染
自定义语句+if函数判断

## Reacr基础事件绑定
* 和JS基本一致(on+事件名称)

* 如果需要调用自定义参数，JSX中需要使用括号函数的写法
```jsx
<button onClick={() => handleCLick2("Dennis")}>click2 me</button>
```
* 同时需要自定义参数和事件对象参数
```jsx
const handleCLick2 = (name, e) => {
  console.log(name, e);
  // 顺序要保持一致
}
<button onClick={(e) => handleCLick2("Dennis", e)}>click2 me</button>
```

## React组件
一个组件就是一个用户界面的一部分，可以有自己的逻辑和外观，组件之间可以相互嵌套，也可以重复使用多次

在React中，一个组件就是**首字母大写的函数**，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件**当成标签书写**即可。
* 也可以使用箭头函数

## useState基础使用
useState是一个React Hook（函数），它允许我们向组件添加一个**状态变量**，从而控制影响组件的渲染效果
* 数据驱动视图，状态变量一旦发生变化，组件的视图UI也会跟着发生变化
```jsx
const [count, setCount] = useState(0);
// useState是一个函数，返回值是一个数组
// 数组中的第一个参数时状态变量，第二个参数时set函数，用来修改状态变量
// useState的参数将作为参数count的初始值
```

### 修改状态的规则
#### 状态不可变
状态是只读的，应该始终是**替换它而不是修改它**

#### 修改对象状态
对于对象类型的状态变量，应该始终传给set方法一个**全新的对象**来进行修改（和前面的逻辑一样，必须使用set方法修改状态变量）
```jsx
const [form, setForm] = useState({
  name: "Dennis",
});
const handleCLick4 = () => {
  setCount({
    ...form,
    name: "Yue"
  });
};
```

#### 组件的样式处理
行内样式控制和类名样式控制
* 推荐使用css的`class`类名进行控制

### classnames优化类名控制
非常方便的通过条件动态控制class类名的显示
```js
className = { classNames('nav-item', { active: type === item.type }) };
```

## 受控表单绑定
使用react组件(useState)的状态控制表单的状态。
```jsx
const [value, setValue] = useState("");

<input
 type = "text"
 value = { value }
 onChange = { (e) => setValue(e.target.value) }
/>
```

## React中获取DOM
需要使用useRef钩子函数获取/操作DOM, 分为两步:
1. 使用useRef创建ref对象，并与JSX绑定
2. 在DOM可用时，通过inputRef.current属性拿到DOM对象
```jsx
const inputRef = useRef(null);

<input type="text" ref = {inputRef} />

console.log(inputRef.current);
```

## 组件通信
组件之间的数据传递，根据组件嵌套关系的不同，有不同的通信方法
### 父子通信
#### 父传子
父组件传递数据
子组件接受数据，使用props参数，props是一个对象，包含父组件传递过来的所有数据
```jsx
import { useState, useRef } from 'react'

// 父组件传递数据
// 子组件接受数据，使用props.name接收

function Son(props) {
  
  console.log(props)
  return (
    <div>
      this is son, {props.name}, {props.obj}
    </div>
  )
}

function App() {
  const name = 'this is app name';
  return (
    <div className="App">
      <Son 
        name = {name} 
        age = {18}
        list = {'vue', 'react'}
        obj = {{name: 'jack'}}
        child = {<span></span>}
      />
    </div>
  );
}

export default App;
```

* props可以传递任意的数据
  * 数组，字符串，对象，JSX等
* props是只读对象
  * 子组件只能读取props中的数据，不能直接进行修改，父组件的数据只能由父组件修改

#### 特殊的prop children
当我们在子组件中的标签内嵌套内容时，父组件会自动在名为children的prop属性中接收该内容
```jsx
function Son(props) {
  return (
    <div>
      <span>{props.children}</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Son>
        <span>this is span</span>
      </Son>
    </div>
  );
}
```

#### 子传父
将子组件中的数据传递给父组件
1. 在子组件中调用父组件的函数，传递实参
2. 在父组件中使用useState获取子组件中的数据
```jsx
// 在子组件中调用父组件的函数，并传递参数

function Son({onGetSonMsg}) {
  const sonMsg = 'this is son msg';
  return (
    <div>
      this is Son
      <button onClick={() => onGetSonMsg(sonMsg)}>sedMsg</button>
    </div>
  )
}

function App() {
  // 使用useState接收子组件的数据
  const [msg, setMsg] = useState('');
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg); // 获取子组件传递进来的数据，存贮到状态变量中
  }
  return (
    <div className="App">
      this is App, {msg}
      {/* 获取父组件的方法 */}
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
}
```

### 兄弟通信
* 使用状态提升实现兄弟组件通信
  * 借用状态提升机制，通过父组件进行兄弟组件之间的数据传递
  * A子传父，父传B子，从而实现A传B

### 跨层通信
* 使用Context机制跨层级组件通信
  * 使用createContext方法创建一个上下文对象Ctx
  * 在顶层组件中通过Ctx.Provider组件提供数据
  * 在底层组件中通过useContext钩子函数获得数据
```jsx
// 1. 使用createContext创建上下文对象
const MsgContext = createContext();

// 2. 在顶层组件中使用Provide提供数据

// 3. 在底层组件中使用useContext钩子函数获得数据


function A () {
  return (
    <div>
      this is A componet
      <B></B>
    </div>
  )
}

function B () {
  const msg = useContext(MsgContext);
  return (
    <div>
      this is B componet, {msg}
    </div>
  )
}

function App() {
  const msg = 'this is App msg';
  
  return (
    <div className="App">
      {/* 通过value接收数据 */}
      <MsgContext.Provider value={msg}>
        this is App
        <A></A>
      </MsgContext.Provider>
    </div>
  );
}
```

## useEffect
一个React Hook函数用于在React组件中创建不是由事件引起而是由渲染本身引起的操作，比如发送AJAX请求，更改DOM等。
* 比如在组件渲染完成之后，向服务器要数据的动作
```jsx
useEffect(
  // 副作用函数，在函数内部可以放置要执行的操作
  () => {}, 
  // 可选参数，在数组里面放置依赖项，不同依赖项会影响第一个参数函数的执行
  // 为空时，函数只会请求一次
  []
)
```

### useEffect依赖参数说明
* 没有依赖项: 组件初始渲染+组件更新时执行
* 空数组依赖项: 只在初始渲染时执行一次
* 添加特性依赖项: 组件初始渲染+特性依赖变化时执行
```jsx

function App() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  // 情况1，没有依赖项
  // 只要组件内有更新，都会执行
  // useEffect(() => {
  //   console.log("副作用函数执行了!");
  // }, [])

  // 情况2，空数组依赖项
  // 只在组件更新时执行
  // useEffect(() => {
  //   console.log("副作用函数执行了!");
  // }, [])

  // 情况3，特定依赖项
  // 只在组件更新时, 以及特定依赖项更新时执行
  useEffect(() => {
    console.log("副作用函数执行了!");
  }, [count1])
  return (
    <div className="App">
      this is App
      <button onClick={() => setCount(count+1)}>+{count}</button>
      <button onClick={() => setCount1(count1+1)}>+{count1}</button>
    </div>
  );
}
```
### 清除副作用
在useEffect中编写的由渲染本身引起的对接组件间外部的操作，社区经常把它叫做副作用操作。
* 清除副作用最长用的时候是卸载组件
```jsx
useEffect(() => {
  // 实现副作用操作逻辑
  ...
  return () => {
    // 清除副作用逻辑
  }
}, [])
```

## 自定义HOOK实现
自定义HOOK是以use打头的函数，通过自定义HOOK函数可以用来实现逻辑的封装和复用
```jsx
function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return [value, toggle];
}

function App() {

  const [value, toggle] = useToggle();

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
```

### ReactHooks使用规则
1. 只能在组件中或者自定义Hook函数中使用
2. 自能在组件顶层中调用，不能嵌套在局部上下文中（if/for/其他函数）


### 关于学习案例的优化
* `json-server`: 工具可以用来模拟接口服务，
* `axios`(一个广泛使用的前端请求库): 发送接口请求

## Redux
常用的集中状态管理工具，可以独立于框架运行
1. 创建reducer函数，基于`action.type`状态变化，返回新的state；
2. Reducer函数会执行不同状态对应的操作, 通过`state.count`修改state值
3. 通过`Redux.createStore(reducer)`创建stor实例，订阅状态变化情况(在状态变化的同时，获取最新state)
4. 通过`store.dispatch`方法修改状态`action.type`(这里状态的变化，会导致state变化)
5. 获取最新状态

```html
<script src="https://cdn.jsdelivr.net/npm/redux@latest/dist/redux.min.js"></script>

<button id="decrement">-</button>
<span id="count">0</span>
<button id="increment">+</button>

<script>
  // 1. 定义reducer函数
  // 作用: 根据不同的action对象，返回不同的新的state
  // action: 对象，根据type标记当前想要做什么样的修改
  function reducer(state = {count: 0}, action) {
    // 数据不可变，基于原始状态生成一个新的状态
    if (action.type === "INCREMENT") {
      return { count: state.count + 1 };
    }
    if (action.type === "DECREMENT") {
      return { count: state.count - 1 };
    }
    return state;
  }
  // 2. 使用reducer函数生成store实例
  const store = Redux.createStore(reducer);

  // 3. 通过store实例的subscribe订阅数据变化
  // 回调函数在每次state发生变化的时候自动执行
  store.subscribe(() => {
    console.log("state变化了", store.getState());

    // 5. 通过store实例的getState方法获取最新状态更新到视图中
    let val = document.getElementById('count');
    val.innerText = store.getState().count;
  })

  // 4. 通过store实例的dispatch函数提交action更改状态
  const inBtn = document.getElementById('increment')
  inBtn.addEventListener('click', () => {
    // 增
    store.dispatch({
      type: 'INCREMENT'
    })

  })
  const dBtn = document.getElementById('decrement')
  dBtn.addEventListener('click', () => {
    // 减
    store.dispatch({
      type: 'DECREMENT'
    })
  })

</script>
```

### redux配套工具
* Redux Toolkit
  * 编写Redux逻辑的工具集合集，简化书写方式
* react-redux
  * 用来链接react和redux的中间件
```shell
# 安装2个插件
npm i @reduxjs/toolkit react-redux
```

### store文件构成
在使用集中状态管理工具时，基本上都会新建一个`store`文件夹
在其中设置一个`modules`模块和一个`index.js`入口文件
* store
  * modules
    * channelStore.js
    * counterStore.js
      * 使用createSlice创建counterStore
        * 定义name, initialStore, reducers等
        * 导出reducer, 状态变更函数
        ```jsx
        import { createSlice } from '@reduxjs/toolkit';

        const counterStore = createSlice({
          name: 'counter',
          // 初始化状态
          initialState: {
            count: 0
          },
          // 状态变化方法, 同步方法，支持直接修改
          reducers: {
            decrement(state) {
              state.count -= 1;
            },
            increment(state) {
              state.count += 1;
            },
            addNum(state, action) {
              state.count += action.payload;
            }
          }
        });

        // 解构出来actionCreater函数
        const {increment, decrement, addNum} = counterStore.actions;
        // 获取reducer函数
        const countReducer = counterStore.reducer;

        // 按需导出对应的action函数
        export {increment, decrement, addNum};
        // 导出自定义的reducer函数
        export default countReducer;
        ```
  * index.js
    * 在这里生成store，并导出(`使用configureStore模块`)
    ```jsx
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './modules/counterStore';

    const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });

    export default store;
    ```
* 在项目的index.js文件中注入store（`使用react-redux的Provider注入store`）
  * 使用`useSelector`获取状态变量
  * 通过`useDispatch`修改action状态
  ```jsx
  import store from './store';
  import { Provider } from 'react-redux';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // 注入store
  <Provider store={store}>
    <App />
  </Provider>
  );
  ```
* 在组件中使用!
```jsx
// 获取action变更方法
import { increment, decrement, addNum } from './store/modules/counterStore';
// 获取状态变量的值，提交action变更的方法
import { useSelector, useDispatch } from 'react-redux';
```

### 在React组件中使用store中的数据
需要使用`useSelector`钩子函数，作用是把store中的数据映射到组件中
```jsx
const { count } = useSelector(state => state.counter);
```

### 在React组件中修改store中的数据
使用`useDispatch`钩子函数，作用是生成提交action对象的dispatch函数(修改action.type)
```jsx
const dispatch = useDispatch();

<button onClick={() => dispatch(increment())}>+</button>
```

## React-Router
一个路径path对应一个组件component，当我们在浏览器中访问一个path的时候，path对应的组件会在页面中进行渲染


### 路由导航
路由系统中的多个路由之间需要进行路由跳转，并且在跳转的同时有可能需要传递参数进行通信

#### 声明式导航
在模版中通过`<Link/>`组件描述出要跳转到哪里去；
语法说明：铜鼓哦给组件的to属性指定要跳转到路由path
```jsx
<Link to="/article"><Link/>
```

#### 编程式导航
通过`useNavigate`钩子得到导航方法，然后通过调用方法以命令式的形式进行路由跳转
```jsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录
      <button onClick={() => navigate('/article')}>跳转到文章页</button>
    </div>
  )
};
```

#### 路由导航传参
##### searchParms传参
1. 在目标path配置
```jsx
<button onClick={() => navigate('/article?id=1001&name=jack')}>serachParms</button>
```
2. 在接收path配置
```jsx
const [ parms ] = useSearchParams();
const id = parms.get('id');
const name = parms.get('name');
return <div>我是文章{id}{name}</div>
```

##### parms传参
1. 在目标path配置
```jsx
navigate('/article/1001/jack')
```
2. 在路由router中设置
```jsx
{
  path: "/article/:id/:name",
  element: <Article></Article>
}
```
3. 在接收path中设置
```jsx
const parms = useParams();
return <div>我是文章{parms.id}{parms.name}</div>
```

### 嵌套路由
在一级路由中嵌套了其他路由，嵌套至一级路由内的路由又称作二级路由
1. 使用children属性配置路由嵌套关系(在router中配置)
2. 使用`<Outlet/>`组件配置二级路由渲染位置(在一级路由中渲染配置)

### 默认二级路由
其中一个二级路由在一级路由访问的同时，被渲染，并默认显示出来
```jsx
{
  // 设置为二级路由，一级路由访问时，它也能得到渲染
  index: true,
  // path: '/About',
  element: <About></About>
},
// 同时还要在router中将About的path修改一下
// <Link to="/About">关于</Link>
<Link to="/">关于</Link>
```

### 404路由
1. 准备一个NotFound组件
2. 在路由表数组的末尾，以*作为path配置路由
```jsx
{
  path: "*",
  element: <NotFound></NotFound>
}
```

### 两种路由模式
#### history模式
createBrowerRouter创建，需要后端支持
#### hash模式
createHashRouter创建，不需要后端支持

### 别名路径配置
1. 路径解析配置(webpack), 把@/解析为src/
  * craco
```shell
npm i -D @craco/craco

# 然后在项目根目录中创建配置文件
# craco.config.js
# 配置文件中添加路径解析配置
# 包文件中配置启动和打包命令
```
```js
// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
};
```

2. 路径联想配置(vscode), 输入@/时，自动联想出来对应src/下的子级目录
  * 项目根目录中增加文件jsconfig.json
```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

### 数据Mock
在没有实际后端接口的支持下先进行接口数据的模拟，进行正常的业务功能开发
* 常见Mock方式
  1. 前端直接写假数据(纯静态，没有服务)
  2. 自研Mock平台(成本太高)
  3. json-server等工具(有服务，成本低)

### 使用CRM初始化项目环境

1. 项目创建之后，将文件夹分好（方便模块化开发）
* apis: 接口
* assets: 静态资源
* components: 通用组件
* pages: 页面级组件
* router: 路由Router
* store: Redux状态
* utils: 工具函数

2. 安装必要依赖
```shell
# 状态管理
npm i @redux/toolkit react-redux
# 安装完成后，将状态管理相关的基础样板代码写好

# 路由管理
npm i react-router-dom
# 安装完成后，将路由管理相关的基础样板代码写好

# 请求相关
npm i axios
# 封装axios，方便统一批量处理接口

# 模拟接口
# 在没有后端接口的情况下，通过该插件模拟接口
npm i json-server
# 安装完成后，调整package.json，方便快捷启动

# 类名处理插件
npm i classnames

# 使用crace，配置路径联想
npm i -D @craco/craco

# 时间处理插件 
npm i dayjs

# UI组件
# 这里拿ant-design举例，相关的使用方法，一般通过看官方文档解决
npm i antd --save

# 初始化样式的第三方工具
npm install normalize.css
```

### 登录持久化
Redux存入Token之后如果刷新浏览器，Token会丢失（持久化就是放置刷新时丢失token）
* 问题原因:Redux是基于浏览器内存的 存储方式，刷新时状态恢复为初始值
解决方案:
1. 获取并存Token(Redux,LocalStorage)
```jsx
// 同步修改方法
reducers: {
  setToken(state, action) {
    state.token = action.payload
    // localStorage存一份
    localStorage.setItem('token_key', action.payload)
  }
}
```
2. 初始化Token(LocalStorage ? LocalStorage : 空字符串)，优先从本地取
```jsx
initialState: {
  token: localStorage.getItem('token_key') || ''
}
```

#### 封装Token的存取方法
Aixos请求拦截器请求头中注入Token
* 在请求拦截器中注入
```js
// config.headers.Authorization
// 一个HTTP请求头，用于指定HTTP请求的身份认证信息(固定写法)
```
```jsx
// 添加请求拦截器
// 在请求发送之前，拦截，并进行自定义配置[参数处理]
request.interceptors.request.use((config)=> {
  // 操作config，注入token数据
  // 1. 获取token
  const token = getToken();
  // 2. 注入（按照后端格式要求，做token拼接）
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
}, (error)=> {
  return Promise.reject(error)
})
```

##### 使用Token做路由权限控制
有些路由页面内容信息敏感，需要根据Token的有无控制当前路由是否可以跳转（路由权限控制）
* 技术方案
在路由组件中, 使用高阶组件`HOC Components` 进行判断
  * 是否有Token(`HOC Components`)
    * 有 -> 正常返回路由组件
    * 无 -> 强制跳回登录

##### Layout-处理Token失效
为了用户隐私和安全考虑，在用户长时间未在网站中做任何操作且规定的失效事件到达之后，当前的Token就会失效，失效之后，不能再作为用户令牌标识请求隐私数据
失效之后前端需要做的事情：
1. 在axios拦截中监控401状态码
2. 清除失效Token，跳转登录


#### Home-Echarts基础图表实现

##### Echarts组件封装

#### 功能模块维护
把分散维护的接口请求，按照业务模块以函数的形式统一封装到apis模块中

* react-quill富文本编辑器
```shell
npm i react-quill@2.0.0-beta.2 --legacy-peer-deps
```

### 项目打包和本地预览
1. 项目打包
将项目中的源代码和资源文件进行处理，生成可在生产环境中运行的静态文件的过程
命令: `npm run build`

2. 本地预览（模拟运行服务器）
```shell
# 全局安装serve
sudo npm install -g serve

# 运行
serve -s build
```

#### 打包优化-配置路由懒加载
路由懒加载: 值路由的JS资源只有被访问时才会动态获取，目的是为了优化项目首次打开的时间

* 如何配置?
1. 路由修改为由React提供的lazy函数进行动态导入
2. 使用React内置的Suspense组件包裹路由中element选项对应的组件

* 包体积分析
通过可视化的方式，只管体现项目中各种打包之后的体积大小，方便优化
借助`source-map-explorer`
```shell
npm i source-map-explorer

# 安装后在package.json中配置运行命令
# 之后运行即可查看
```

##### 打包优化CDN
什么是CDN？
一种内容分发网络服务，当用户请求网站内容时，由离用户最近的服务器将缓存的资源内容传递给用户

哪些资源可以放到CDN服务器？
体积较大的非业务JS文件，比如react、react-dom
1. 体积较大，需要利用CDN文件在浏览器缓存的特性，加快加载时间
2. 非业务JS文件，不需要经常做变动，CDN不用频繁更新缓存

项目中怎么做？
1. 把需要做CDN缓存的文件排除在打包之外(react, react-dom)
2. 以CDN的方式重新引入资源(react, react-dom)

**分析说明**：通过 craco 来修改 webpack 配置，从而实现 CDN 优化
**核心代码**
`craco.config.js`
```javascript
// 添加自定义对于webpack的配置
const path = require('path')
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    },
    // 配置webpack
    // 配置CDN
    configure: (webpackConfig) => {
      let cdn = {
        js:[]
      }
      whenProd(() => {
        // key: 不参与打包的包(由dependencies依赖项中的key决定)
        // value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
        // 配置现成的cdn资源地址
        // 实际开发的时候 用公司自己花钱买的cdn服务器
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
          ]
        }
      })

      // 通过 htmlWebpackPlugin插件 在public/index.html注入cdn资源url
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )

      if (isFound) {
        // 找到了HtmlWebpackPlugin的插件
        match.userOptions.files = cdn
      }

      return webpackConfig
    }
  }
}
```

`public/index.html`
```html
<body>
  <div id="root"></div>
  <!-- 加载第三发包的 CDN 链接 -->
  <% htmlWebpackPlugin.options.files.js.forEach(cdnURL => { %>
    <script src="<%= cdnURL %>"></script>
  <% }) %>
</body>
```

## hooks学习的补充内容

### useReducer
```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return state + action.payload;
    default:
      return state;
  }
}

function App() {
  // 类似useState，只能使用dispatch修改状态
  // dispatch的参数必须是一个对象: dispatch({type: "INC"})
  // 这里的0表示state的初始状态
  const [state, dispatch] = useReducer(reducer, 0); 
  return (
    <div className="App">
      <div>this is App</div>
      <button onClick={() => dispatch({type: 'INC'})}>+</button>
      <div>
        {state}
      </div>
      <button onClick={() => dispatch({type: 'DEC'})}>-</button>
      {/* 支持在对象中传递自定义参数 */}
      <button onClick={() => dispatch({type: 'SET', payload: 100})}>更新</button>
    </div>
  );
}

export default App;

```

### useMemo
数据计算时会用到
```jsx
// useMemo
// 作用：在组件渲染时缓存计算的结果

import { useMemo } from 'react'
import { useState } from 'react'

function fib(n) {
  console.log('斐波那契函数执行了')
  return n <= 0 ? 1 : n * fib(n - 1)
}

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const sumByCount = useMemo(() => {
    return fib(count1);
  }, [count1])
  // 计算斐波那契之和

  return (
    <>
      {sumByCount}
      <button onClick={() => setCount1(count1 + 1)}>+count1:{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>+count2:{count2}</button>
    </>
  )
}

export default App
```

### React.memo
允许组件在Props没有改变的情况下跳过渲染
* 默认机制：只要父组件重新渲染，子组件就会重新渲染
使用React.memo将子组件包裹
```jsx
const MemoSon = memo(function Son() {
  return <div>this is Son</div>
})

function App() {
  return (
    <div className="App"> 
      this is App
      <MemoSon></MemoSon>
    </div>
    
  )
}
```
#### props的比较机制
* 简单类型 -> 直接使用Object.is比较
* 引用类型 -> 既是都是空数组，依然会更新
解决方案：使用useMemo，保证引用类型的props只在页面初始加载时渲染

### useCallback
在组件多次重新渲染时缓存函数
```jsx
import { useCallback } from "react";
import { useState, memo } from "react";

const Input = memo(function Input({onChange}) {
  console.log("子组件被渲染了");
  return <input onChange={(e) => onChange(e.target.value)}></input>
})

function App() {
  const changeHandler = useCallback((value) => console.log(value), []);
  const [count, setCount] = useState(0);
  return (
    <div className="App"> 
      this is App
      <Input onChange={ changeHandler }></Input>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
    
  )
}

export default App;
```

### forwardRef
在父组件中拿到子组件元素
```jsx
import { forwardRef } from "react";
import { useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref}></input>
})

function App() {
  const inputRef = useRef(null);
  const showRef = () => {
    console.log(inputRef);
    inputRef.current.focus();
  }
  return (
    <div className="App"> 
      this is App
      <Input ref={inputRef} ></Input>
      <button onClick={showRef}> focus</button>
    </div>
  )
}

export default App;
```

### useInperativeHandle
通过ref暴露子组件中的方法
```jsx
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

const Input = forwardRef((props, ref) => {
  // 实现聚焦逻辑
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  }
  // 把聚焦方法暴露出去
  useImperativeHandle(ref, () => {
    return {
      // 暴露的方法
      focusHandler
    };
  })
  return <input type="text" ref={inputRef}></input>
})

function App() {
  const sonRef = useRef(null);
  const focusHandler = () => {
    sonRef.current.focusHandler();
  }
  return (
    <div className="App"> 
      this is App
      <Input ref={sonRef} ></Input>
      <button onClick={focusHandler}>focus</button>
    </div>
    
  )
}

export default App;
```

### zustand
上手难度更低
* 可以按照业务模块将数据分类管理

## React与TypeScript
使用vite创建ts项目
```shell
# react-ts-app 项目名称
# --template后面跟的是项目类型
npm create vite@latest react-ts-app -- --template react-ts
```
#### useState与ts

##### useState自动推导
* 会根据useState的默认值来自动推导类型，不需要显示的标注类型
  * 场景：明确的初始值

##### useState传递泛型参数
```tsx
// react + ts
import { useState } from "react";

type User = {
  name: string,
  age: number,
}

function App() {
  // 初始值必须是一个User | () => User
  // const [user, setUser] = useState<User>({
  //   name: 'jack',
  //   age: 18
  // });
  const [user, setUser] = useState<User>(() => {
    return {
      name: 'jack',
      age: 18
    }
  });
  // setUser修改的结果也必须是 User | () => User | undefined

  return (<>this is App {list}</>);
}

export default App
```

* 初始值为null
```tsx
import { useState } from "react";

type User = {
  name: string,
  age: number,
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  const changeUser = () => {
    setUser(null);
    setUser({
      name: "jack",
      age: 18
    });
  };
  // 为了类型安全，通过可选链做类型守卫
  // 只有user不为null，才进行点运算
  return (<>this is App {user?.age}</>);
}

export default App
```

#### Props与TS

##### 基础使用
为组件prop添加类型，本质是给函数的参数做类型注解


### 使用vite创建开发环境

#### 配置路径别名
配置时需要安装node类型包
`npm i @types/node -D`

* 路径解析
`vite.config.ts`文件中
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 添加路径解析代码
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
})

```

* 路径联想
`tsconfig.json`or `jsconfig.json`文件中
```js
// 文件目录索引
"baseUrl": ".",
"paths": {
  "@/*": [
    "src/*"
  ]
},
```

#### axios和ts的配合使用


#### 自定义hook函数优化

* 组件中尽量只进行数据的消费
* 可以将数据请求相关都封装成自定义hook