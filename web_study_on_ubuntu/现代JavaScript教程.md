说明：由于javascript高级程序设计第四版翻译和内容排版不是那么适合新手，因此打算调整学习方式，并查漏补缺；看完后再抽空看javascript高级程序设计第四版
* 在javascript.info看在线版本教程`javascript.info`

# 基础知识

## 现代模式, "use strict"
可以在脚本最上方添加`use strict`，开启严格模式

## 变量
现在主要使用let声明变量（旧版本主要使用var声明）

## 常量
使用const声明的是常量（值不会变的变量）

* 通常使用大写字母表示**硬编码**的常量（在执行之前就知道值是什么）

## 数据类型
* 原始数据类型
1. `Number`: 保存`±(2^53-1)`范围的数字
2. `BigInt`: 比`Number`的范围更大
3. `String`: 字符串
4. `Boolean`: 逻辑类型, 布尔值
5. `null`: 只有一个值null
6. `undefined`: 未被赋值
7. `Symbol`

* 非原始数据类型
8. `Object`


* `typeof`运算符: 返回参数的类型

## 交互
* `alert`: 弹出一个带有信息的小窗口, **模态窗**
* `prompt`: 参数*title*和一个可选参数*default*
  * `title`: 显示给用户的文本
  * `default`: 可选的第二个参数，指定`input`框的初始值
```js
result = prompt("hello! ", "world!");
alert(`hello! ${result}`); // hello! world!
```
* `confirm`: 显示一个带有`question`以及确定和取消两个按钮的模态窗口

```js
let isBoss = confirm("Are you the boss?");

alert(isBoss);  // 当按下确定按钮时，返回true；取消按钮返回false
```

## 类型转换

### 字符串转换
`alert(value)`将`value`转换为字符串类型，然后显示。
也可以使用`String(value)`将`value`转换为字符串类型。

### 数字型转换
在算术函数和表达式中，会自动进行number类型转换
```js
alert("6"/"2");  // 3
```
使用`Number(value)`将`value`转换为number类型
```js
alert(Number("  123 "));      // 123
alert(Number("  123z "));     // NaN
alert(Number(true));          // 1
alert(Number(false));         // 0
alert(Number(null));          // 0
alert(Number(undefined));     // NaN
```

### 布尔型转换
```js
alert(Number("  123 "));      // true
alert(Number("0"));           // false
alert(Number(0));             // false
alert(Number(""));            // false
alert(Number(null));          // false
alert(Number(undefined));     // false
```

## 基础运算，数学运算
* 加减乘除
* 取余%
* 求幂**

注意
```js
// 取决于第一个元素是number还是字符串
console.log("1"+2+2); // "122"
console.log(1+2+"2"); // "32"
```
* 减法始终将字符串转化为数字

一元运算符比二元运算符拥有更高的优先级
```js
let apples = "2";
let apples = "2";
let oranges = "3";

// +将字符串转换为数字，等同于Number(apples)，该方法仅对字符串有效
console.log(+apples + +oranges); // 5
```

### 自增/自减
```js
let counter = 2;
console.log(counter++); // 3，等同于 counter = counter + 1
console.log(counter--); // 1，等同于 counter = counter - 1
```
* 只能用于变量
* 还有前置写法(++counter/--counter)
  * 区别在于，前置写法返回的是新的值，后置返回旧值


## 值的比较


### 字符串比较
字符串是按字符逐个进行比较

### 不同类型比较
会先将其转化为数字再判定大小

```js
let a = 0;
alert(Boolean(a)); // false;

let b = "0";
alert(Boolean(b)); // true;

// 普通相等无法区分o和false
alert(a==b);   // true

// 严格相等可以区分
alert(a===b);  // false
```
* 严格相等`===`在进行比较时不会进行任何的类型转换


## 条件分支: if 和 '?'

### if语句
```js
let year = prompt('In which year was ECMAScript- specification published?', '');

if (year>2015) {
    alert('Too early...');
} else if (year<2015) {
    alert('Too late');
} else {
    alert('Exaxtly!');
}
```

### 条件运算符 '?'
```js
let result = condition ? value1 : value2;
// 计算条件结果，为真返回`value1`，否则返回`value2`
```

## 逻辑运算符

### `||` (或)
当2个操作数中有一个为真时，返回`true`，否则返回`false`


#### 或运算寻找第一个真值
1. 获取变量列表或者表达式中的第一个真值
```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous" ); // SuperCoder
// 遇到第一个true时停止
```
2. 短路求值
```js
true || alert("not printed");  // 不会打印
false || alert("printed");     // printed
```

### `&&` (与)
当2个操作数都是真时，返回`true`，否则返回`false`

#### 与运算寻找第一个假值
```js
let result = value1 && value2 && value3;
// 在遇到第一个false后立刻返回

alert( 1 && 2 && 3 ); // 3
// 如果都是真值，则会返回最后一个
```

* `&&`的优先级高于`||`


### `!` (非)
表示布尔非运算符
```js
result = !value;
// 将操作数转化为布尔类型: true/false
// 返回相反的值

alert( !true ); // false
alert( !0 );    // true
```

* `!!` 将某个值转化为布尔类型
```js
alert( !!0 );        // false
alert( !!"Dennis" ); // true

// 类似于 Boolean(0)的效果
```

### 作业
```js
let person = prompt("Who is there?", "");

if ( person === "Admin" ) {
    let password = prompt("Password?", "");

    if ( password === "TheMaster" ) {
        alert("Welcome!");
    } else if ( password === null || password === "" ) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if ( person === null || person === "" ) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
```

## 空值合并运算符'??'
返回第一个已定义的操作数
* 当一个值不是`null`或者`undefined`时，则称其为**已定义的**
```js
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

alert( firstName ?? lastName ?? nickName ?? "Anonymous" ); // SuperCoder
```
### 与`||`比较
* `||` 返回第一个**真**值
* `??` 返回第一个**已定义的**值

### 优先级
??的优先级是4，和||相同
* 优先级顺序可以查看MDN
> `https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence`

#### `?? || &&` 一起使用
* 一般情况下禁止一起使用，除非使用括号明确指定了优先级

## 循环: `while`和`for`

### `while`循环
* 条件为真时，执行循环体
```js
while(condition) {
  // 循环体
};
```

### `do...while`循环
* 循环体至少执行一次，然后检查条件是否为真
```js
do {
  // 循环体
} while(condition);
```

### `for`循环
```js
for (begin; codition; step) {
  // 循环体
}
```
```js
for (let i=0; i<3; i++) {
    alert(i); // 0, 1, 2
}
```

#### 省略语句段
for循环中的任何语句段都可以被省略
```js
let i = 0;

// 省略begin语句段
for (; i<3; i++) {
    alert(i); // 0, 1, 2
}

// 省略step语句段
for (; i<3; ) {
    alert(i++); // 0, 1, 2
}

for (;;) {
  // 两个;必须保留
  // 无限循环
}
```

### 跳出循环
* 通常条件为假时，循环终止
* 也可以使用`break`指令强制退出循环

### 继续下一次迭代
* `continue`
  * 停止当前这一次迭代，并强制开启新一轮循环

```js
for (let i = 0; i < 10; i++) {
    // 当余数是0时，停止本次迭代
    if ( i % 2 == 0 ) continue;
    alert(i); // 1, 3, 5, 7, 9
}
```
> 不能与三元运算符`?`一起使用

### break/continue标签
```js
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; i < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '')

        // 如果input是空值或被取消时( !input = true )，则跳出这2个循环
        if (!input) break outer;
    }
}

alert('Done!');
```
使用标签跳出当前循环的外部


### 作业
```js
outer: for (let input = prompt("请输入一个大于等于100的数字", ""); input; ) {
    if (!input || input > 100) {
        break outer;
    } else {
        let input = prompt("请输入一个大于等于100的数字", "")
    }
}

alert("Great!");
```

```js
// 求素数
start: for (let num = prompt("请输入大于2的数字", ""); num>=2; num--) {
    for (let i = 2; i < num; i++) { 
        // 只能被1和本身整除
        // 如果能被1和本身之外的整数整除，则不是素数
        if (num % i == 0) continue start;
    }
    
    alert(num);
}
```

## `switch`语句

```js
let a = 2 + 2;

switch (a) {
    case 3:
        alert("to small!");
        break;
    case 4:
        alert("Exactly!");
        break;
    case 5:
        alert("too big");
        break;
    default:
        alert("I don't know such values");
}
// 在没有break的情况下，将会执行 "casr 4"之后的所有alert
```

### `case`分组
```js
let a = 2 + 2;

switch (a) {
    case 4:
        alert("Exactly!");
        break;

    // 3和5显示相同的信息
    case 3:
    case 5:
        alert("Wrong!");
        break;
    default:
        alert("I don't know such values");
}
```

### 类型很关键
switch中的相等是严格相等
```js
let age = prompt("Enter a value?")

switch (age) {
    case "0":
    case "1":
        alert("One or zero");
        break;
    case "2":
        alert("Two");
        break;
    case 3: // 无效分支
        alert("Never executes!");
        break;
    default:
        alert("An unknown value");
}
```

### 作业
```js
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}

// 替换为if写法
if (browser === "Edge") {
    alert( "You've got the Edge!" );
} else if (
    browser==='Chrome'  || 
    browser==='Firefox' || 
    browser==='Safari'  || 
    browser==='Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
```

```js

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}

// 替换为switch写法
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2, 3");
        break;
}
```

## 函数

### 函数声明
```js
function showMessage() {
    alert( "hello world!" );
}

showMessage();
```

#### 局部变量
在函数中声明的变量，尽在函数内部可见

#### 外部变量
也可以访问外部变量
* 当函数内部声明了一个和外部变量同名的变量时，则会使用局部的该变量，**遮蔽**外部变量

### 参数
* parameter 函数声明中括号内列出的变量
* arguments 调用函数时传递给函数的值

### 默认值

### 返回值
* `return`
  * 空的return或者没有return的函数返回值是`undefined`
  * return和返回值之间不要添加新行

### 函数命名
常用的函数开头
* "get..." 返回一个值 
* "calc..." 计算某些内容
* "create..." 创建某些内容
* "check..." 检查某些内容并返回boolean值
* "show..." 显示某些内容

> 一个函数尽量只包含一个功能（1个行为） 



## 函数表达式
```js
let sayHi = function() {
    alert("Hello");
};
```
> 函数表达式允许省略函数名


### 函数是一个值
### 回调函数
```js
function ask(question, yes, no) {
    if (confirm(question)) {
        yes(); // 回调函数
    } else {
        no();  // 回调函数
    }
}

function showOk() {
    alert("You argeed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

// 更简洁的写法
function ask(question, yes, no) {
    if (confirm(question)) {
        yes(); // 回调函数
    } else {
        no();  // 回调函数
    }
}

ask(
    "Do you agree?", 
    // 使用匿名函数
    function() {alert("You argeed.");},
    function() {alert("You canceled the execution.");}
);
```

### 函数声明 VS 函数表达式

* 函数表达式从创建那一刻开始，可以使用
* 函数声明在未被定义之前，就可以被调用

日常工作中优先使用函数声明

## 箭头函数，基础知识
```js
let func = (arg1, arg2, arg3, ..., argN) => expression;

// 等价于
let func = function(arg1, arg2, arg3, ..., argN) {
    return expression;   
};
```
多行使用时需要添加`{}`，并需要return
```js
let sum = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum(2, 3)); // 5
```

### 作业
```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// 用箭头函数重写
let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

```

## JavaScript特性回顾

---

# 代码质量

### `Sources`面板
包含文件导航，代码编辑和JavaScript调试 3个板块

### 控制台

#### `debugger`命令
使用`debugger`命令来暂停代码
```js
function hello(name) {
    let phrase = `hello, ${name}!`;

    debugger; // 调试器会在这里停止

    say(phrase);
}
```

### 使用Mocha进行自动化测试
#### 行为驱动开发BDD
* 测试
* 文档
* 示例

#### 规范
```js
describe("title", function() {...})
```
```js
describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        // 检查2**3是否=8
    })
})
```

#### 行为规范
* Mocha 核心框架，提供了包括通用型测试函数`describe`和`it`，以及用于运行测试的主函数
* Chai 提供很多断言支持的库
* Sinon 用于监视函数、模拟内建函数的其他函数的库

```html
<!DOCTYPE html>
<html>
<head>
  <!-- add mocha css, to show results -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- add mocha framework code -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    mocha.setup('bdd'); // minimal setup
  </script>
  <!-- add chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
   // chai has a lot of stuff, let's make assert global
    let assert = chai.assert; 
  </script>
</head>

<body>
  <script>
    function pow(x, n) {
      /* function code is to be written, empty now */
      let result = x**n;
      return result;
    }
  </script>

  <!-- the script with tests (describe, it...) -->
  <script>
    describe("pow", function() {
        it("raises to n-th power", function() {
            assert.equal(pow(2, 3), 8);
            assert.equal(pow(3, 4), 81);
        });

        /*
        第二种写法，2个测试
        it("2 raises to power 3 is 8", function() {
            assert.equal(pow(2, 3), 8);
        });
        it("3 raises to power 4 is 81", function() {
            assert.equal(pow(3, 4), 81);
        });
        */
    })
  </script>

  <!-- the element with id="mocha" will contain test results -->
  <div id="mocha"></div>

  <!-- run tests! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
```
#### 改进实现
```js
describe("pow", function() {
    
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

})
```



#### 嵌套描述
```js
describe("pow", function() {
        
    describe("raises x to power 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    // 在此处添加更多的测试代码，describe和it都可以添加在这

})
```

> `before/after`
设置对应函数，在运行测试之前/之后执行。
> `beforeEach/afterEach`
设置对应函数在执行**每一个**`it`之前/之后执行

```js
describe("test", function() {

    before( () => alert("Testing started - before all tests") );
    after( () => alert("Testing finished - before all tests") );

    beforeEach( () => alert("Before a test - enter a test") );
    afterEach( () => alert("After a test - enter a test") );

    it("test 1", () => alert(1));
    it("test 2", () => alert(2));

})
```

#### 延伸规范
```js
it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
});

it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
});
```
此时需要修改pow函数
```js
function pow(x, n) {
    /* function code is to be written, empty now */
      
    if (n<0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = x**n;
    return result;
    
}
```

### Polyfill转译器
使用转译器/垫片让代码在还不支持最新特性的旧引擎上工作

#### 转译器
一种可以将源码转移成另一种源码的特殊软件

#### 垫片

---
# Object(对象): 基础知识

多词属性
```js
let user = {
    name = "Dennis",
    age = 29,
    "Like birds" = false,
    // 需要添加引号
}

// 调用时使用中括号
alert(user["Like birds"]); // false
```

#### 计算属性
```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // 属性名从变量fruit中得到的
};

// 如果输入的是apple，则该属性的名字是apple
alert(bag.apple);
```

### 属性值简写
```js
let user = {
    name, // 等同于name: name
    age,  // 等同于age: age
};
```

### 属性名称限制
不能使用编程语言的某个保留字，如`for`、`let`等

### 属性存在性测试，`in`操作符
```js
let user = { 
    name:'Dennis', 
    age:29, 
};

alert( "name" in user); // true
```

### `for...in 循环`
```js
for (key in object) {
    //遍历存在的所有的key
}
```
#### 像对象一样排序
如果是整数属性，则按照数字大小进行排序，如果不是，则按照创建时的顺序排序


### 作业
```js
// 作业
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 作业：检查对象中是否有属性，有则返回false，否则返回true
function isEmpty(key, obj) {
    for (key in obj) {
        // 进入循环，说明有属性，直接返回false
        return false;
    }
    return true;
}

let schedule = {};
alert(isEmpty(schedule));

// 作业：对象属性求和
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (key in salaries) {
    sum += salaries[key];
}
alert(sum);

// 将所有是number的属性值*2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (key in obj) {
        if (+obj[key]) {
            obj[key] = obj[key]*2;
        }
    }
}
```

## 对象引用和复制

* 当一个对象变量被复制——引用被复制，而对象自身并没有被复制


### 克隆与合并, `Object.assign`
```js
// Object.assign(dest, [src1, src2...])
```
* dest 目标对象
* src 源对象
* 该方法将所有源对象的属性拷贝到目标对象`dest`中

```js
let user = { name: "Dennis" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);

console.log(user);
// 目标对象中和源对象相同的属性会被覆盖
```

### 深层克隆
```js
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

//alert(user.sizes.height); // 182

let clone = Object.assign({}, user);
console.log(clone);

//alert(clone.sizes === user.sizes); 
// true, 同一个对象

user.sizes.height++;
alert(clone.sizes.height);  // 183

user.name = "Dennis";
alert(clone.name); // "John"
```
此时，`clone`和`user`共用一个sizes（因为user.sizes是一个对象，会以引用形式拷贝）


### 垃圾回收

#### 可达性
**可达**值是那些以某种方式可访问或可用的值。它们一定是存储在内存中的。
1. 举例(这些值明显不可能被释放)：
* 当前执行的函数，它的局部变量和参数
* 当前嵌套调用链上的其他函数、它们的局部变量和函数
* 全局变量
这些值被称作**根(roots)**

2. 如果一个值可以通过引用链从根访问任何其他值，则该值是可达的

`JavaScript`引擎中有一个被称作**垃圾回收器**的东西在后台执行。监视所有对象的状态，并删掉那些已经不可达的对象


* 对外引用不重要，只有传入引用才可以使对象可达

##### 无法到达的岛屿
几个对象相互引用，但外呼没有对其任意对象的引用，这些对象也可能是不可达的，并被从内存中删除

#### 内部算法
垃圾回收的基本算法`mark-and-sweep`

垃圾回收的过程类
* 就好像从根溢出一大桶油漆，它流经所有引用并标记所有可到达的对象。然后移除未标记的

## 对象方法, `this`

```js
let user = {
    name: "John",
    age: 30,
};

user.sayHi = function() {
    alert("Hello!");
}

user.sayHi();

// 作为对象属性的函数被称为方法
```

#### 方法简写
```js
let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert("Hello!");
    }
};

user.sayHi();
```

### 方法中的`this`
```js
let user = {
    name: "John",
    age: 30,
    sayHi() {
        // this 指的是"当前的对象"
        alert(this.name);
    }
};

user.sayHi(); 
```

#### `this`不受限制
`this`可以用于任何函数，即使它不是对象的方法
```js
function sayHi() {
    alert(this.name);
}

let user = {
    name: "John",
};

user.f = sayHi;

user.f(); // John（this == user）
```

#### 箭头函数没有自己的`this`
如果在箭头函数中引用this，这个值会取决于外部"正常的"函数
```js
let user = {
    name: "John",
    sayHi() {
        let arrow = () => alert(this.name);
        arrow();
    }
};

user.sayHi(); // John
```

### 作业
```js

// 作业
let calculator = {
    read() {
        this.a = +prompt("请输入第一个值", 0);
        this.b = +prompt("请输入第二个值", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();

alert(calculator.sum());
alert(calculator.mul());

// 作业
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // 显示当前的 step
        alert( this.step );
        return this
    }
};

ladder.up().up().down().showStep().down().showStep();
```

## 构造器和操作符`new`

### 构造函数
两个约定
1. 命名以大写字母开头
2. 只能由`new`操作符来执行

#### 构造器中的方法
```js
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}

let john = new User("John");
john.sayHi(); // My name is John
```

### 作业
```js

// 让 a == b
let obj = {};

function A() {
    return obj
};
function B() {
    return obj
};

let a = new A;
let b = new B;

alert( a == b ); // true

// 作业：创建 new Calculator
function Calculator() {

    this.read = function() {
        this.a = +prompt("请输入第一个值", 0);
        this.b = +prompt("请输入第二个值", 0);
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b
    }
}

let calculator = new Calculator();

calculator.read();

alert(calculator.sum());
alert(calculator.mul());


// 作业：创建new Accumulator
function Accumulator(startingValue=1) {
    this.value = startingValue;

    this.read = function() {
        return this.value += +prompt("请输入一个数字", 0);
    };
}

let accumulator = new Accumulator(11); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

alert(accumulator.value); // 显示这些值的总和
```

## 可选链`?.`
如果可选链`?.`**前面的值**为`undefined`或者`null`，它会停止运算并返回`undefined`

```js
let user = {};
alert(user?.address?.street); // undefined
```
> 不要过渡使用可选链
只将`?.`使用在一些东西可以不存在的地方

> `?.`前的变量必须已经声明
否则会报错

### 其他变体`?.()`, `?.[]`
* `?.()` 用于调用一个可能不存在的函数
* `?.[]` 用于访问可能不存在的属性

```js
let user = {};

let key = "firstname";

alert(user.read?.()); // undefined
alert(user?.[key]);   // undefined
```

## `Symbol`类型
只有2种类型可以作为对象的属性键(key):
* 字符串
* symbol

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```
symbol是带有可选描述的"原始唯一值"
> symbol不会被自动转换为字符串
```js
alert(id1); // 类型错误

// 使用toString()
alert(id1.toString()); // Symbol("id")

// 使用symbol.description属性
alert(id1.description); // id
```

### 隐藏属性
symbol允许我们创建对象的隐藏属性，代码的任何其他部分都不能意外访问或重写这些属性。

```js
let user = {
    name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // 1
```

#### 对象字面量中的`symbol`
需要使用方括号
```js
let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123,
};
```

#### symbol会被`for...in`跳过
```js
for (let key in user) alert(key); // name
```

### 全局symbol
从**全局symbol注册表**中读取symbol，可以保证每次访问相同名字的symbol时，返回的都是相同的symbol。
```js
// 从全局注册表中读取。如果该symbol不存在，则创建
let id = Symbol.for("id");

// 再次读取
let idAgain = Symbol.for("id");

alert(id === idAgain); // true
```

#### `Symbol.keyFor`
在全局注册表中查找symbol的键（只适用于全局symbol）
```js
let sym1 = Symbol.for("name");
let sym2 = Symbol.for("age");

alert( Symbol.keyFor(sym1) ); // name
```
* 不管是不是全局symbol，都有`description`属性

### 系统symbol
JS内部自带的

## 对象 —— 原始值转换
JS中`obj1+obj2`得到的结果不可能是另一个对象，而是先将`obj`自动转换为原始值，然后对原始值进行运算，得到的结果也是原始值！

### 转换规则
1. 所有对象都是true，所以不存在布尔值转换。只有数字和字符串转换

### hint
类型转换在各种情况下有三种变体，称为`hint`
* string
* number
* default
  * 少数情况下发生

#### `Symbol.toPrimitive`
```js
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: ${this.name}}` : this.money;
    }
};

alert(user); // hint: string -> {name: John}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```
#### `toString/valueOf`
```js
let user = {
    name: "John",
};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```
```js
let user = {
    name: "John",
    money: 1000,

    toString() {
        return `{name: ${this.name}}`;
    },

    valueOf() {
        return this.money;
    }

};

alert(user); // {name: John}
alert(+user); // 1000
alert(user + 500); // 1500
```
如果没有`Symbol.toPrimitive`和`valueOf`, `toString`将会处理所有原始转换
```js
let user = {
    name: "John",

    toString() {
        return this.name;
    },

};

alert(user); // John
alert(user + 500); // John500
```
实际运用中，通常只实现`obj.toString()`作为字符串转换的**全能**方法就足够了。

---
# 数据类型

原始类型不是对象

## 数字类型
1. 常规数字以`IEEE-754`存储（双精度浮点数）
2. BigInt，用于表示任意长度的整数


### 编写数字的更多方法
```js
let billion = 1000000000;

// 可行, _扮演语法糖的角色，使数字具有更强的可读性
let billion = 1_000_000_000;

// 10亿，e9表示 1000000000
let billion = 1e9;
```

### 十六进制，二进制，八进制

十六进制数字被广泛用于表示颜色，编码字符以及其他一些东西
```js
alert( 0xff ); // 255
alert( 0xFF ); // 255
```
二进制和八进制很少使用

### toString(base)
`num.toString(base)`返回在给定base进制数字系统中num的字符串表示形式
```js
let num = 255;

// 十六进制
alert( num.toString(16) ); // ff

// 2进制
alert( num.toString(2) );  // 11111111
```
> 如果想直接在数字上调用该方法，使用两个..
```js
alert(123..toString(2));
```

### 舍入
* `Math.floor` 向下舍入
* `Math.ceil` 向上舍入
* `Math.round` 四舍五入
* `Math.trunc` 取整

保留小数点后N位
* 乘除法
```js
let num = 1.234546;

alert(Math.round((num*100))/100); // 123

```
* `toFixed(n)`
```js
let num = 1.234546;

alert(num.toFixed(1)); // 1.2
```

### 不精确的计算
```js
alert( 0.1 + 0.2 == 0.3); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004
```
使用二进制数字系统无法精确存储0.1或0.2，`IEEE-754`数字格式通过将数字舍入到接近的可能数字。

### 测试: `isFinite`和`isNaN`

* ±Infinity是一个特殊的值，比任何值都大（小）
* NaN代表error
都属于Number类型，但不是普通数字

* `isNaN(value)` 将其参数转换为数字，测试它是否是`NaN`
```JS
alert( isNaN(NaN) );   // true
alert( isNaN("str") ); // true
```
* `isFinite(value)` 将其参数转换为数字
  * `NaN/Infintity/-Infinity`会返回`false`
  * 常规数字返回`true`
```js
console.log( isFinite("15") );     // true
console.log( isFinite("str") );    // false
console.log( isFinite(Infinity) ); // false
```
> 空字符串和仅有空格的字符串被所有数字函数视为0

### `parseInt`和`parseFloat`
从字符串中读取数字，直到无法读取为止，并返回已经收集到的数字。
```js
console.log( parseInt("100px") );      // 100
console.log( parseInt("111as11sd") );  // 111
console.log( parseInt("as11sd") );     // NaN 
// 如果字符串的开头不是数字，则直接返回NaN

console.log( parseFloat("1.111as11sd") );   // 1.111
console.log( parseFloat("1.1.2.3") );       // 1.1
```

### 其他数学函数
内建的`Math`对象包含了小型的数学函数和常量库
举例:
1. `Math.random()` 返回一个`[0, 1)`的随机数
2. `Math.max(a, b ,c...)`和`Math.min(a, b ,c...)` 返回最大值和最小值
3. `Math.pow(n, power)` 返回n的给定`power`


### 作业
```js

// 作业1: 返回两次输入的总和
alert(
    +prompt("输入一个数字", 0) + +prompt("输入一个数字", 0)
);

// 作业2: 为什么6.35.toFixed(1) == 6.3 ?
console.log( 1.35.toFixed(1) ); // 1.4
console.log( 6.35.toFixed(1) ); // 6.3

// 修正
console.log( 6.35.toFixed(20) );         // 6.34999999999999964473

// 6.35 * 10 = 63.5
// 63.5 -> 64 -> 6.4
console.log( Math.round((6.35*10))/10 ); // 6.4

// 作业3: 重复，直到输入一个数字
function readNumber() {
    let num = prompt("请输入一个数字", 0);

    if (num===null || num==="") {
        alert(null);
    } else if (isFinite(num)) {
        alert(+num);
    } else {
        readNumber();
    }
}

readNumber()

// 作业4: 从min到max的随机数
// -> 我做的
function random(min, max) {
    let num = Math.random()*10;
    if ( num >= max ) {
        return num - max;
    } else if (num < min) {
        return num + min;
    } else {
        return num;
    }
}

console.log(random(1,6));

// 答案
function random(min, max) {
    return min + Math.random() * (max - min);
}

```

## 字符串

### 访问字符
使用方括号或者`cahtAt()`方法
```js
let str = "Hello";

// 如果没有找到字符，返回undefined
console.log(str[1]); // e

// 如果没有找到字符，返回空字符串
console.log(str.charAt(1)); // e
```
### 字符串是不可变的
字符串不可更改

### 改变大小写
* `toLowerCase()`
* `toUpperCase()`

### 查找子字符串
* `str.indexOf`
```js
let str = "Widget with id";

console.log( str.indexOf("id") ); // 1

// 第二个可选参数，从第n个位置开始查找
console.log( str.indexOf("id", 3) ); // 12
```

```js
let str = 'As sly as a fox, as strong as an ox';

let target = "as";

let pos = 0;
while(true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert(foundPos);

    pos = foundPos + 1;
}
```

* `str.lastIndexOf(substr, pos)`
  * 从字符串的末尾开始搜索

#### 按位(bitwise) NOT技巧
* `bitwise NOT` ~ 运算符
  * 将数字转换为32-bit整数
    * ~n = ~(n+1)
```js
alert(~2); // -3
alert(~1); // -2
alert(~0); // -1
alert(~-1); // 0
```
简写indexOf检查
```js
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // 正常运行
}
```

#### includes, startsWith, endsWith
* `includes` str是否包含某个子字符串
* `startsWith` str是否是以某个子字符串开头
* `endsWith` str是否是以某个子字符串结尾
```js
let str = "Widget";

console.log(str.includes("id"));    // true
console.log(str.includes("id", 3)); // false

console.log(str.startsWith("Wi")); // true 
console.log(str.endsWith("et"));   // true
```

### 获取子字符串
* `substring`
* `substr` 
* `slice`
```js
let str = "Widget";

// 允许负值
console.log(str.slice(1, 2));   // i
console.log(str.slice(1));      // idget

console.log(str.substring(1));  // idget

// 允许前大后小
console.log(str.substring(1, 4));  // idg
console.log(str.substring(4, 1));  // idg

// 从索引4开始，长度为1
console.log(str.substr(4, 1));  // e
// 从索引4开始，长度为2
console.log(str.substr(4, 2));  // et
```

### 比较字符串
按照字母顺序逐字比较
1. 小写字母总是大于大写字母
2. 带变音符号的总目存在"乱序"情况
所有字符串都是用UTF-16编码。
* `str.codePointAt(pos)` 返回pos位置的字符代码
```js
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90
```
* `String.fromCodePoint(code)` 通过code创建字符
```js
alert(String.fromCodePoint(90));  // Z
```
字符通过数字代码进行比较。越大的代码意味着字符越大。

### 作业
```js

// 作业1: 一个返回首字母大写的函数
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("dennis"));

// 作业2: 检查spam
function checkSpam(str) {

    let str1 = str.toLowerCase();

    return str1.includes("viagra") || str1.includes("xxx")
}

alert( checkSpam("buy ViAgRA now") );
alert( checkSpam("free XxxX") );

// 作业3: 截断文本
function truncate(str, maxlength) {

    let strLength = str.length;

    if (strLength > maxlength) {
        return str.slice( 0, (maxlength-3) ) + "...";
    } else {
        return str;
    }
    // 简写
    // return (strLength > maxlength) ? str.slice( 0, (maxlength-3) ) + "..." : str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20)); 


// 提取货币
function extractCurrencyValue(str) {
    const regex = /\d+/i;
    return str.match(regex);
}

alert(extractCurrencyValue("$120"));
```

## 数组

```js
let arr = new Array();
let arr = [];
```
元素从0开始编号。
元素可替换。
可以添加新元素。
`length`属性表示数组中的元素总个数
```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'banana';
alert( fruits[2] );

fruits[3] = 'Lemon';

alert( fruits.length ); // 4
```

### 使用`at`获取最后一个元素
```js
// JS中无法使用以下方法来获取最后一个元素
// fruits[-1]

fruits.at(-1); // Lemon
```

### pop/push, shift/unshift方法

#### 队列方法(先进先出)
* push 在末端添加一个元素
* shift 取出队列首端的一个元素

#### 栈方法(后进先出)
* push 在末端添加一个元素
* pop 从末端取出一个元素


##### 作用于数组末端
* push
* pop

#### 作用于数组首端
* shift 在首端取出元素
* unshift 在首端添加元素

`push`和`unshift`都能一次添加多个元素

### 内部
数组是一种特殊的对象
```js
let fruits = ["Apple", "Orange", "Plum"];

// 通过引用负值
let arr = fruits;

// 指向同一个数组
alert(arr === fruits); // true
```
> 要将数组视为作用于**有序数据**的特殊结构

### 性能
pop/push的速度比较快，shift/unshift比较慢

### 循环
```js 
for (let fruit of fruits) {
    alert(fruit);
}
// 数组是对象，理论上也可以用for...in，但不推荐，速度会更慢
```

### `length`
length其实是最大数字索引值+1。
如果手动减少length的长度，数组会被截断。
```js
let fruits = ["Apple", "Orange", "Plum"];

fruits.length = 2;

alert(fruits); // Apple,Orange
```

### 多维数组
数组的项也可以是数组。
```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5
```

### 不要使用 == 比较数组

### 作业
```js

// 作业1: 操作数组
let styles = ["Jazz", "Blues"];
console.log(styles);        // ["Jazz", "Blues"]

styles.push("Rokc-n-Roll");
console.log(styles);        // ['Jazz', 'Blues', 'Rokc-n-Roll']

function findMiddleIndex(arr) {
    let index = Math.round(arr.length/2)-1;
    return index;
}

styles[findMiddleIndex(styles)] = "Classics";
console.log(styles);         // ['Jazz', 'Classics', 'Rokc-n-Roll']

console.log(styles.shift()); // Jazz
console.log(styles);         // ['Classics', 'Rokc-n-Roll']

styles.unshift("Rap", "Reggae");
console.log(styles);         // ['Rap', 'Reggae', 'Classics', 'Rokc-n-Roll']


// 作业2: 输入数字求和
function sumInput() {
    let arr = [];
    let num = 0;

    while(true) {

        let input = prompt("请输入一个数字", 0);

        if (input===null || input==="" || !isFinite(input)) break;

        arr.push(input);
        num += isFinite(input);

    }

    return num;
}

alert(sumInput());

// 作业3
function getMaxSubSum(arr) {

    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        // 一项一项按顺序加
        partialSum += item; 
        // 每次按顺序加一项之后，都比下大小，留下当前最大值
        maxSum = Math.max(maxSum, partialSum);
        // 如果始终＜0，就等于0
        if (partialSum<0) partialSum=0;
    }
    // 遍历完成后，返回最大连续子数组的和
    return maxSum
    
}

console.log(getMaxSubSum([1,1,-3,4]));
```

## 数组方法

#### `splice`
`arr.splice`可以处理数组的添加，删除和插入
```js
let arr = ["I", "go", "home"];

arr.splice(1, 1); // 从索引1开始删除1个元素

console.log(arr); // ["I", "home"]

arr.splice(0, 2, "Let's", "dance");
// 从索引0开始，删除2个元素，并使用后面的元素替代

console.log(arr);
```

#### `slice`
```js
arr.slice([start], [end]);
// 会返回一个新数组

let arr = ["I", "go", "home"];

// 将[0,1)的元素切片
console.log(arr.slice(0, 1)); // ["I"]
```

#### `concat`
```js
let arr = [1, 2];

// 连接并生成一个新数组
console.log( arr.concat([3, 4], 5, 6) );
// [1, 2, 3, 4, 5, 6]
```
通常只复制数组中的元素。其他对象会被当做一个整体被添加，但如果类数组对象有`Symbol.isConcatSpreadable`属性，那么它就会被concat当做数组来处理，对象中的元素会被添加进数组。
```js
let arr = [1, 2];

let arrayLike = {
    0: "somthing",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

console.log(arr.concat(arrayLike));
// something, else
```

### 遍历: `forEach`
允许为数组的每个元素都运行一个函数
```js
let arr = [1, 2];

arr.forEach(alert);
// 1
// 2

arr.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array} `)
});
// 1 is at index 0 in [1, 2];
// 2 is at index 1 in [1, 2];
```

### 在数组中搜索
* `indexOf(item, from)` 从左向右查找，从from开始搜索item，找到则返回索引，否则返回-1
* `lastIndexOf(item, from)` 从右向左查找，从from开始搜索item，找到则返回索引，否则返回-1
* `includes(item, from)` 从from开始搜索item，找到则返回true，否则返回false
```js

let arr = [1, 2, false, 2];

console.log( arr.includes(2, 2) ); // false
console.log( arr.includes(2) );    // true
console.log( arr.indexOf(2) );     // 1
console.log( arr.lastIndexOf(2) ); // 3
```

> includes可以处理NaN
```js
const arr = [NaN];

alert( arr.includes(NaN) );  // true
alert( arr.indexOf(NaN) );   // -1
```
#### `find`
#### `findIndex`
#### `findLastIndex`
```js
let users = [
    {id:1, name: "John",},
    {id:2, name: "Pete",},
    {id:3, name: "Mary",},
    {id:4, name: "John",},
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// findIndex、findLastIndex 语法和find的相同
// 寻找John的索引，从前往后查找
alert( users.findIndex( item => item.name == 'John' ) ); // 0

// 寻找John的索引，从后往前查找
alert( users.findLastIndex( item => item.name == 'John' ) ); // 3

```

* `filter`
搜索使函数返回true的元素
```js
let users = [
    {id:1, name: "John",},
    {id:2, name: "Pete",},
    {id:3, name: "Mary",},
    {id:4, name: "John",},
];

// 返回一个符合条件的新数组
let user = users.filter(item => item.id > 2);

console.log( user.length );  // 2
```

### 转换数组

#### `map`
`arr.map`对数组的每个元素都调用函数，并返回结果数组
```js
let users = ["aaa", "22", "ccccc"].map(item => item.length) ;

alert(users); // 3, 2, 5
```

#### `sort(fn)`
对数组进行**原位**排序（原位：在原数组内排序，不生成新数组）

```js
let users = [1, 15, 3, 2];

// 默认按照字符串进行排序
alert(users.sort()); // 1, 15, 2, 3

// 可以使用函数参数
// 当元素都是数字时
alert( users.sort( (a, b) => a - b ) ); // 1, 2, 3, 15
```

#### `reverse`
颠倒`arr`中元素的顺序
```js
let users = [1, 15, 3, 2];

alert(users.reverse()); // 2, 3, 15, 1
```

#### `split`和`join`
```js
// 这是一个字符串
let names = 'Bilbo, Gandalf, Nazgul';

// 使用", "分割，并获得一个数组
let arr = names.split(", ");

console.log(arr);
// ['Bilbo', 'Gandalf', 'Nazgul']

// 存在第二个可选参数，对数组长度的限制
let arr1 = names.split(", ", 1);
console.log(arr1); // ['Bilbo']


```

* `arr.join(glue)` 
  * 与split相反
创建一串由`glue`粘合的`arr`项
```js
// 这是一个数组
let names = ['Bilbo', 'Gandalf', 'Nazgul'];

// 使用", "粘合，并获得一个字符串
let str = names.join(", ");
// 这是一个字符串
console.log(str); // Bilbo, Gandalf, Nazgul
```

#### `reduce`/`reduceRight`
遍历数组，并计算（两个方法的区别在于计算的顺序）

```js
let value = arr.value(function(accumulator, item, index, array) {
    // ...
}, [initial])
```
* `accumulator` 上一个函数调用的结果，第一次等于`initial`（如果提供initial的话）
* `item` 当前数组的元素
* `index` 当前索引
* `array` 数组本身
```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum +current, 0);
// 从数组的第一个元素开始计算
// 第一次时，sum = 0, sum + current => 0 + 1 ; 因为传递了initial=0
// 第二次时，sum = 1, sum + current => 1 + 2 ; 没有传递initial，所以sum是上一次调用的结果
// 第三次时，sum = 3, sum + current => 3 + 3 ; 以此类推...直到遍历完整个数组的元素

alert(result);  // 15
```

### `Array.isArray`
数组是基于对象的，不构成单独的语言类型。
该方法用于判断`Array.isArray(value)`中的value是否是一个数组
```js
console.log( Array.isArray({}) ); // false
console.log( Array.isArray([]) ); // true

// typeof无法区分
console.log( typeof {} ); // object
console.log( typeof [] ); // object
```

### `thisArg`
几乎所有调用函数的数组方法都支持接收一个可选参数`thisArg`（sort除外）


> 注意 sort, reverse和splice方法修改的是数组本身


### 作业
```js
// 作业1
function camelize(size) {
    let arr = size.split("-");
    let arr1 = arr.map(
        // 这里因为如果开头是-, 那么替换后就是一个空字符串""
        // 空字符串没有字符，所以没有index（我的理解）
        (item, index) => index == false ? item : item[0].toUpperCase() + item.slice(1)
    );
    return arr1.join("");
}

/*我的回答
function camelize(size) {
    let arr = size.split("-");
    let arr1 = arr.map(
        item => item.length == 0 ? item : item[0].toUpperCase() + item.slice(1)
    );
    return arr1.join("");
}

let str1 = '-background-color';

console.log( camelize(str1) );
*/


let str1 = '-background-color';

console.log( camelize(str1) );

// 作业：映射到names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)

alert( names ); // John, Pete, Mary


// 作业：映射到对象
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map( 
    item => item = {id: item.id, fullName: item.name+" "+item.surname}
)

console.log(usersMapped)

// 作业：过滤范围
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1（匹配值）

alert( arr ); // 5,3,8,1（未修改）

function filterRange(arr, a, b) {
    return arr.filter( item => item>=a && item<=b );
}

// 作业：原位过滤
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]<a || arr[i]>b) {
            arr.splice(i, 1);
            i--; // 删除元素后，需要把索引减一位，因为此时原数组索引已经发生了改变
        }
    }
}

// 作业: 降序
let arr = [5, 2, 1, -10, 8];

// ……你的代码以降序对其进行排序
arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10

// 作业: 复制和排序数组
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    let newArr = arr.map(item => item);

    return newArr.sort()

    // 更简洁的方法
    // return arr.sort().sort()
}

// 作业: 创建一个可扩展的calculator（还需要再次理解）
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }

    this.calculate = function(str) {

        let arr = str.split(" ");
        let a = +arr[0];
        let b = +arr[2];
        let m = arr[1];

        if (!this.methods[m] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[m](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

// 作业: 按年龄对用户排序
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge(arr) {
    return arr.sort( (a,b) => a.age - b.age );
}

// 作业: 随机排列数组
let arr = [1, 2, 3];
        
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        return array;
    }
}

console.log(shuffle(arr));

// 作业: 获取平均年龄
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 我的回答
function getAverageAge(arr) {
    let ageSum = 0;
    for (let a of arr) {
        ageSum += a.age;
    }

    return ageSum / arr.length;
}

// 答案
function getAverageAge(users) {
    // 将数组所有项求和，使用reduce方法 
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// 作业: 数组去重
function unique(arr) {
    /* your code */

    let result = [];

    for (let str of arr) {// 遍历数组
        if (!result.includes(str)) {
            // 如果不包含该元素，则推进新数组
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// 作业: 从数组创建键(值)对象
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}

console.log(usersById);
```

## `Iterable object`(可迭代对象)
可迭代对象是数组的泛化（任何对象都可以被定制为可在`for...of`循环中使用的对象）

### `Symbol.iterator`
```js
let range = {
    from: 1,
    to: 5,
};
// 希望能使用for...of循环
```
在对象内部添加该方法`Symbol.iterator`，使对象可迭代
1. 该方法必须返回一个**迭代器**iterator（一个有next()方法的对象）
2. 此时for..of仅适用于这个被返回的对象(迭代器)
3. next()方法返回的结果格式必须是`{done: Boolean, value: any}`，当`{done: true}`时，表示循环结束

```js
let range = {
    from: 1,
    to: 5,
};

// 1. for..of调用首先调用这个
range[Symbol.iterator] = function() {

    // ....它返回迭代器对象 iterator object
    // 2. 接下来for..of要求下面的迭代器对象返回下一个值
    return {
        current: this.from,
        last: this.to,

        // 3. next()在for..of的每一轮循环迭代中被调用
        next() {
            // 4. 它会返回 {done:.., value:...}格式的对象
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// 现在它可以运行了
for (let num of range) {
    alert(num);
}
```
> range自身没有next()方法
> 仅仅是调用了通过调用range[Symbol.iterator]()创建了另一个对象（所谓的迭代器对象）

合并之后的简化版本
```js
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

// 现在它可以运行了
for (let num of range) {
    alert(num);
}
```

### 字符串是可迭代的

### 可迭代(iterable)和类数组(array-like)
* `iterable`是实现了`Symbol.iterator`方法的对象
* `Array-like`是有索引和`length`属性的对象，看起来很像数组

可迭代对象和类数组对象通常都**不是数组**，不能使用`push`和`pop`等方法。

#### `Array.from`
接收一个可迭代对象或类数组，并获取一个真正的数组
```js
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World（pop 方法有效）
```
```js
Array.from(obj[, mapFn, thisArg]);

// 可选参数
// mapFn可以是一个函数，该函数在元素被添加到数组之前应用到每个元素
```
```js
let range = "12345"
let arr = Array.from(range, num => num * num);

console.log(arr); // [1, 4, 9, 16, 25]
```

使用Array.from创建代理感知的slice方法(能够处理UTF-16扩展字符)
```js
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join("");
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) );

// 原生方法不支持识别UTF-16扩展字符
alert( str.slice(1, 3) ); // 乱码
```

## Map and Set(映射和集合)

### Map
带键的数据项的集合，允许任何类型的键(key)
方法和属性：
* new Map(): 创建map
* map.set(key, value): 根据键存储值
* map.get(key): 根据键返回值
* map.has(key): 判断是否包含某个键
* map.delete(key): 删除指定键的值
* map.clear(): 清空map
* map.size: 返回当前map的元素个数
```js
let map = new Map();

map.set(1, "str1");
map.set("1", "num1");
map.set(true, "bool1"); 

console.log(map.get(1)); // str1
console.log(map.get("1")); // num1

console.log(map.size); // 3
```
**Map还可以使用对象作为键**
```js
let john = { name: "Jhon" };

map.set(john, 123);
console.log(map.get(john)); // 123
```

### Map迭代
* map.keys(): 用来遍历键
* map.values(): 用来遍历值
* map.entries(): 用来遍历键值对[key, value]
```js
// 遍历所有的键
for (let k of map.keys()) {
    //alert(k);
}
// 遍历所有的值
for (let v of map.values()) {
    //alert(v);
}
// 遍历所有的键值对
// 也可以直接 let e of map
for (let e of map.entries()) {
    alert(e);
}
```
除此之外，`Map`有内建的`forEach`方法，与`Array`类似
```js
map.forEach((value, key, map) => {
    alert(`${key}: ${value}`);
})
```
### Object.entries: 从对象创建Map
```js
let obj = {
    name: "John",
    age: 30,
}

let map = new Map(Object.entries(obj));

console.log(map.get('name')); // John
```
### Object.fromEntries: 从Map创建对象

```js
let price = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 3],
])

console.log(price.meat); // 3
```

### Set
一个特殊的类型集合，值的集合(没有键)，每一个值只会出现一次。
主要方法如下:
* new Set(iterable): 创建一个set
* set.add(value): 添加一个值，返回set本身
* set.delete: 删除值，删除成功会返回true
* set.has(value): 是否包含某个值
* set,clear(): 清空set
* set.size: 返回元素个数
```js
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john); // john已经存在，这次添加不会影响set长度

console.log(set.size); // 3
```

### Set迭代(iteration)
可以使用`for...of`或`forEach`

### 作业
```js
// 作业1: 过滤数组中唯一的元素
function unique(arr) {
    // Array.from将可迭代对象为真正的数组
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

// 作业2: 迭代键
let map = new Map();

map.set("name", "John");

// 这里要使用Array.from将可迭代对象转换为真正的数组
let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");

console.log(keys);
```

## WeakMap and WeakSet(弱映射和弱集合)

### WeakMap
`WeakMap`和`Map`的区别：键必须是对象，不能是原始值
WeakMap只有以下方法
* weakMap.get(key)
* weakMap.set(key, value)
* weakMap.delete(key)
* weakMap.has(key)
```js
let john = { name: 'john' };

let weakMap = new WeakMap();

weakMap.set(john, "...");

console.log(weakMap)

john = null;  // 覆盖引用

// john被清除后，weakMap中的引用被清理掉了
console.log(weakMap.john); // undefined
```

### WeakSet
1. WeakSet只能被添加对象
2. 对象只有在某个地方被访问的时候，才存在于`WeakSet`中（和WeakMap类似）
3. 只支持add(), has(), delete()方法


## Object.keys, values, entries

以下方法对普通对象也适用
* Object.keys(obj)
* Object.valuse(obj)
* Object.entries(obj)
> 不同之处在于，普通对象使用这些方法返回的是"真正的"数组

### 作业
```js
// 作业: 属性求和
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(arr) {
    let num = 0;
    for (value of Object.values(arr)) {
    num += value;
    }
    return num;
}

// 作业: 计算属性数量
let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2

function count(obj) {
    return Object.keys(obj).length;
}
```

## 解构赋值

### 数组解构
```js
let arr = ["John", "Smith"];

let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);   // Smith
```
可以和split函数(或者其他返回值为数组的函数)结合使用
```js
let [firstName, surname] = "John Smith".split(" ");

console.log(firstName); // John
console.log(surname);   // Smith
```
> 注意细节
1. 解构并不意味着破坏（原来的数组或对象并不会被改变）
2. 忽略使用逗号的元素
```js
// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
```
3. 等号右侧可以是任何可迭代对象（数组或者Map，Set等都可以）
4. 复制给等号左侧的任何内容
```js
let user = {};

// 可以是对象的属性
[user.firstName, user.surname] = "John Smith".split(" ");

alert(user.firstName); // John
alert(user.surname);   // Smith
```
5. 与.entries()方法进行循环操作
```js
let user = {
    name: "John",
    age: 30
};

for (let [key, value] of Object.entries(user)) {
    alert(`${key}: ${value}`);
}
```
6. 交换变量
```js
let guest = "Jane";
let admin = "Pete";

// 变量的值被交换
[guest, admin] = [admin, guest];

alert( `${guest} ${admin}` ); // Pete Jane
```

#### 其余的`...`
```js
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// 其余数组项未被分配到任何地方
```
可以使用`...`来收集其余项
```js
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest 是包含从第三项开始的其余数组项的数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

### 默认值
当数组比左边的列表短，缺少的对应变量会被复制undefined，如果想要一个默认值给未赋值的变量，可以使用`=`
```js
let [name1, name2="Caesar", rest] = ["Julius",];

console.log(name2); // Caesar
console.log(rest);  // undefined
```

### 对象解构
```js
// 基本语法
let {var1, var2} = {var1:..., var2:...};
```
```js
let options = {
    title: "Menu",
    width: 100,
    height: 200,
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```
* 将属性赋值给另一个名字的变量
```js
let {title, width: w, height: h} = options;

alert(title);  // Menu
alert(w);  // 100
alert(h); // 200
```
* 通过`=`设置默认值
```js
let options = {
    title: "Menu",
    width: 100,
};

let {title, width: w=100, height: h=100} = options;
// let {title, width=100, height=100} = options;

alert(title);  // Menu
alert(w);  // 100
alert(h); // 100
```
* 默认值可以是任意表达式，甚至是函数调用。但只会在未提供对应的值时才会被计算/调用

* 也可以仅提取我们所需要的内容
```js
let options = {
    title: "Menu",
    width: 100,
};

// 只提取title
let {title} = options;

alert(title);  // Menu
```
#### 剩余模式`...`
与数组的结构赋值一样，也可以使用`...`来存储剩余对象
```js
let options = {
    title: "Menu",
    width: 100,
};

let {title, ...rest} = options;

alert(title);  // Menu
alert(rest.width);   // 100
```

### 嵌套解构
如果一个对象或数组嵌套了其他的对象和数组，可以使用嵌套解构来提取更深层的数据

#### 智能函数参数
通过解构赋值，用一个对象来传递所有参数，而函数负责把这个对象解构乘各个参数


### 作业
```js

// 作业1 解构赋值
let user = { name: "John", years: 30 };
let {name, years: age, isAdmin=false} = user


alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// 作业2 最高薪资

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {

    let maxSum = 0;
    let maxKey = '';

    for (let [key, value] of Object.entries(obj)) {
        if (value>maxSum) {
            maxSum = value;
            maxKey = key;
        }
    }
    return `${maxKey}: ${maxSum}`;
}

alert( topSalary(salaries) );
```

## 日期和时间

### 创建
```js
new Date();
```
* 不同的参数
```js
let now = new Date();

alert(now);

// 传入时间戳
let Dec31_1969 = new Date(-24*3600*1000);
alert(Dec31_1969);

// 传入字符串日期
let date = new Date("2023-10-21");
alert(date);

// new Date(year, month, date, hours, minutes, seconds, ms)
// 只有前2个参数是必须的
```

### 访问日期组建
* `getFullYear()` 获取年份(4位数)
* `getMonth()` 获取月份(从0-11)
* `getDate()` 获取当月的具体日期(从1-31)
* `getHours(), getMinutes(), getSeconds(), getMilliseconds()`
  * 获取小时，分钟，秒，毫秒
* `getDay()` 获取一周中的第几天(从0-6)
* `getTime()` 返回日期的时间戳
* `getTimezoneOffset()` 返回UTC与本地时区之间的时间差, 以分钟为单位

### 设置日期组建
* `setFullYear(year, [month], [date])`
* `setMonth()`
* `setDate()`
* `setHours()`
* `setMinutes()`
* `setSeconds()`
* `setMilliseconds()`
* `setTime()`

### 自动校准
在设置时间时，如果给了一个超出范围的数值，它会自动校准
```js
let date = new Date(2023, 5, 33);
alert(date); 
// Sun Apr 02 2023 00:00:00 GMT+0800 (香港标准时间)
// 会直接给出5月31日之后的第二天，也就是2023-06-02
```

### 日期转化为数字，日期差值
当`date`对象被转化为数字时，得到的是对应的时间戳
```js
let date = new Date();
alert(+date); 
// 1698071698598
```

### Date.now()
该方法会返回当前的时间戳
```js
let date = Date.now();
console.log(date); 
// 1698071910526
```
LPFK-NQGL

### 基准测试

### 对字符串调用Date.parse
`Date.parse(str)`方法从一个字符串中读取日期
```js
let ms = Date.parse("2023-10-22");

// 返回一个时间戳
console.log(ms); // 1697932800000
```

### 作业
```js
// 作业1 显示星期
let date = new Date(2023, 10, 24);  
alert( getWeekDay(date) );        

function getWeekDay(date) {
    let weekArr = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return weekArr[date.getDay()];
}

//N天之前的日期
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate()-days); 
    return dateCopy.getDate()
}

// 获取某个月的最后一天
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
}

alert( getLastDayOfMonth(2023,2) );

// 今天过去多少秒
alert( getSecondsToday() );

function getSecondsToday() {
    let start = new Date();

    let end = Date.now();

    return (end - start.setHours(0,0,0,0))/1000;
}

// 距离明天还有多少秒
alert( getSecondsToTomorrow() );

function getSecondsToTomorrow() {
    let start = new Date();
    let end = new Date(start.getFullYear(), start.getMonth(), start.getDate()+1)

    return (end-start)/1000;
}
// 格式化相对日期
alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// 昨天的日期，例如 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    let now = new Date();
    let start = new Date(date);

    let timeGap = start - now;

    if (timeGap<=1000 && timeGap>=(0-1000)) {
        return "right now";
    } else if (timeGap<=(1000*60) && timeGap>=(0-(1000*60))) {
        return "n sec. ago";
    } else if (timeGap<=(1000*60*60) && timeGap>=(0-(1000*60*60))) {
        return "m min. ago";
    } else {
        return `${start.getDate()}.${start.getMonth()}.${start.getFullYear()} ${start.getHours()}:${start.getMinutes()}`
    }
}
```

## JSON方法, toJSON

### JSON.stringify
* `JSON.stringify` 将对象转换为JSON
* `JSON.parse` 将JSON转换回对象

```js
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // string
console.log(json);
```
方法`JSON.stringify()`得到的`json`字符串是一个被称为`JSON编码`或`序列化`或`字符串化`或`编组化`的对象
* JSON中的字符串使用双引号，JSON中没有单引号或者反引号。
* 对象属性名称也是双引号
`JSON.stringify()`也可以应用于原始数据类型
> 支持的数据类型:
> Objects, Arrays
> strings, numbers, boolean values`true/false`, null

无法识别: 
> 函数属性, Symbol类型的键值, 存储undefined的属性

### 排除和转换: replacer
```js
// JSON.stringify的完整语法
let json = JSON.stringify(value[, replacer, space])
```
* `value` 要编码的值
* `replacer` 要编码的属性数组或映射函数`function(key, value)`
  * 
* `space` 用于格式化的空格数量
  * 这个参数主要应用于日志记录和美化输出

### 自定义`toJSON`

### JSON.parse
```js
let value = JSON.parse(str, [reviver]);
```
* `str` 要解析的JSON字符串
* `reviver` 可选函数`function(key, value)`, 该函数将为每个(key, value)调用, 并可以对值进行转换

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// 使用第二个参数，将字符串date转换为Date对象
let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( meetup.date.getDate() );
```

### 作业
```js
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// 循环引用
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
    /*
    我做的
    if (key=='self') return undefined;
    if (key=='occupiedBy') return meetup.occupiedBy
    if (key=='place') return room.number
    return value;
    */
    // 答案
    // 排除value=meetup的情况
    return (key != "" && value == meetup) ? undefined : value;
}));
```
---
# 函数进阶内容
## 递归和堆栈

### 递归遍历
```js
let company = { // 是同一个对象，简洁起见被压缩了
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(dep) {
    if (Array.isArray(dep)) {
        return dep.reduce((pre, result) => pre+result.salary, 0);
    } else {
        let sum = 0;
        for (let salar of Object.values(dep)) {
            sum += sumSalaries(salar);
        }
        return sum;
    }
}

alert(sumSalaries(company)); // 7700
```

### 递归解构

#### 链表
链表元素是一个使用以下元素通过递归定义的对象
* value
* next 属性引用下一个链表元素，或者代表末尾的null
```js
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```


### 作业
```js
// 对正整数求和到给定值
// 递归方法
function sumTo(num) {
    if (num<=1) {
        return num;
    } else {
        return num + sumTo(num-1);
    }
}

alert(sumTo(100));
```

## Rest参数与Spread语法

### Rest参数...
在JS中，函数可以传入任意数量的参数
```js
function sum(a, b) {
    return a+b;
}

// 虽然能接收，但是只有前2个起作用
alert(sum(1,2,3,4,5)); // 3
```
在函数定义中声明一个数组来收集参数。语法: `...变量名`
```js
function sumAll(...args) { // args是一个数组
    let sum = 0;

    for (let a of args) sum += a;
    return sum;
}

alert(sumAll(1,2,3,4,5)); // 15
alert(sumAll(1,2,3));     // 6
```
* Rest参数必须放到参数列表的末尾

### `arguments`变量
这是一种特殊类数组对象，可以在函数中被访问。
```js
function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
}

showName("Julius", "Dennis");
// 2 Julius Dennis

showName("Ilya");
// 1 Ilya undefined

```
> 建议优先使用Rest参数

### `Spread`语法
看起来和`rest`参数很像，也使用`...`，但二者用途完全相反
```js
let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5
```
在函数调用中使用`...spread`，可以把可迭代对象**展开**到参数列表中

```js
let str = "hello";

// 变成了一个数组
alert([...str]); // h,e,l,l,o
```
该语法与Array.from存在细微差别
* Array.from适用于类数组对象和可迭代对象
* Spread只适用于可迭代对象

### 复制`array/object`
spread可以浅复制对象或数组
```js
let arr = [1, 2, 3, 5];

let arrCopy = [...arr];

alert( arr === arrCopy ); // false
// 可以通过相同的方式复制对象
```

## 变量作用域, 闭包

### 代码块
在代码块`{...}`内声明的变量，只在该代码块内可见
```js
{
    let message = "hello";
    alert( message ); // hello
}

alert(message); // 无法找到该变量
```
对于`if`, `for`, `while`等`{...}`内部的变量，依然是仅在内部可见。

### 嵌套函数
在一个函数内部创建另一个函数，该函数被称为**嵌套**函数。
```js
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

alert(counter(0)); // 0
alert(counter(1)); // 1
alert(counter(2)); // 2
```
嵌套函数可以直接作为结果返回，之后可以在其他地方使用，并能够随时使用外部变量。

### 语法环境

#### Step 1. 变量
每个运行的函数，代码块以及整个脚本，都被称为**词法环境**
词法环境由2个部分组成:
1. 环境记录: 存储所有局部变量作为其属性的对象
2. 对外部词法环境的引用

#### Step 2. 函数声明
函数也是一个值，但函数声明的初始化会被立即完成。

#### Step 3. 内部和外部的词法环境

#### Step 4. 返回函数

> 在JS中，所有的函数都是天生的闭包

### 垃圾收集
通常情况，函数调用完成后，会将词法环境和其中的所有变量从内存中删除。
但是，如果有一个嵌套函数在函数结束后仍可达，则该嵌套的函数不会从变量中被删除。

#### 实际开发中的优化
V8的副作用，V8会尝试优化删除一些可达的函数（嵌套的函数）

### 作业
```js
// 作业1 
alert(sum(1)(2));
alert(sum(5)(-1));

function sum(num) {
    return function(value) {
        return num + value;
    }
}

// 作业2
function func() {
    // 引擎从函数开始就知道局部变量 x，
    // 但是变量 x 一直处于“未初始化”（无法使用）的状态，直到遇到 let，此时“死区”结束
    // 因此答案是 error

    console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = 2;
}

// 作业3
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

arr.filter((item, arr) => item >=3 && item <= 6);
arr.filter((item, arr) => item===1 || item===2 || item===10);

function inBetween(a, b) {
    // 我的答案
    return function(x) {
        if (x>=a && x<=b) return x;
    }
    // 简单写法
    // return x>=a && x<=b;
}

function inArray(arr) {
    return function(x) {
        for (let a of arr) {
            if (x===a) return x;
        }
    }
    // 简单写法，使用arr.includes()方法
    return function(x) {
        return arr.includes(x);
    }
}

// 作业4
let users = [
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log( users.sort(byField('name')) );
console.log( users.sort(byField('age')) );

function byField(value) {
    return function() {
        let num = -1;
        if (this.value>num) return 1;
    }
    // 答案
    // return (a, b) => a[value] > b[value] ? 1 : -1;
}

// 作业5
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function() { // 创建一个 shooter 函数，
            // 应该显示其编号
            // 原错误：alert(i)
            alert(shooters.indexOf(shooter));  // 修改后
        };
        shooters.push(shooter); // 将此 shooter 函数添加到数组中
        i++;
    }

    // ……返回 shooters 数组
    return shooters;
}

let army = makeArmy();
console.log(army);

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[5](); // 10，其他的也是这样。

```
## 老旧的`var`
var声明与let类似，但现在版本一般不适用它

### `var`没有块级作用域
* `var`声明的变了只有函数作用域和全局作用域
### `var`允许重新声明
### `var`声明的变量，可以在其声明语句前被使用
* 声明会被提升，但赋值不会
```js
function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();
```

### IIFE
在只有var的时代，程序员发明的一种模仿块级作用域的方法。
```js
// 像这样
(function() {
    // 使该变量变为私有变量
    var message = "Hello";

    alert(message); // Hello

})();
```

## 全局对象
* 全局对象的所有属性都可以被直接访问
* 使用`var`进行声明
* 一般使用直接的方式访问全局对象的属性，如`window.x`。
> 一般不建议使用全局变量

### 使用polyfills

## 函数对象，NFE
在JS中，函数的类型是对象
把函数想象成可被调用的**行为对象**(action object)。
除了直接调用，也支持把它们当做对象来处理：增/删属性，按引用传递等。

### 属性name
函数对象包含一些便于使用的属性
* `name` 用来访问函数的名字
```js
function sayHi() {
    alert("Hi!")
}

alert(sayHi.name); // sayHi
```

### 属性length
返回函数参数的个数
```js
function sayHi() {
    alert("Hi!")
}

alert(sayHi.length); // 0
```

### 自定义属性
可以添加自定义属性
```js
function sayHi() {
    alert("Hi!");

    sayHi.counter++;
}
sayHi.counter = 0;

sayHi();
sayHi();
sayHi();

alert(sayHi.counter); // 3
```
和闭包的区别：当变量绑定到函数上时，可以在外部访问到该自定义属性；处于函数内的变量，在外部无法访问

### 命名函数表达式 NFE
```JS
// 普通函数表达式
let sayHi = function(who) {
    alert(`hello! ${who}`);
}

// 加个名字
let sayHi = function func(who) {
    alert(`hello! ${who}`);
}
```
区别:
1. 添加名字后，它允许函数在内部引用自己
2. 在函数外是不可见的

```js
let sayHi = function func(who) {
    if (who) {
        alert(`hello, ${who}`);
    } else {
        func("Guest");
    }
};

sayHi(); // hello, Guest
```

### 作业
```js
// 作业1 修改makeCounter函数
function makeCounter() {

    let count = 0;

    function counter() {
        return count++;
    };


    counter.set = function(value) {
        return count = value;
    }
    counter.decrease = function() {
        return count--;
    }

    return counter;

}

let counter = makeCounter();

alert(counter.set(2)); // 0

// 作业2 任意数量的括号求和
alert( sum(1)(2) ) == 3; // 1 + 2
alert( sum(1)(2)(3) ) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {
    let count = a;

    function func(b) {
        count += b;
        return func;
    };

    func.toString = function() {
        return count;
    };

    return func;
}

```

## `new Function`语法

### 语法
```js
let func = new Function([arg1, arg2, ...argN], functionBody);
```

### 闭包
通常是指一个特殊的属性`[[Enviroment]]`，用来记录函数自身的创建时的环境的函数
* 使用`new Function`创建的函数，无法访问外部变量，只能访问全局变量
```js
function getFunc() {
    let value = "test";

    let func = new Function('alert(value)');

    return func;
}

getFunc()(); // value is not defined

// 2
var value = "test";

function getFunc() {

    let func = new Function('alert(value)');

    return func;
}

getFunc()(); // test
```

## 调度: `setTimeout`和`setInterval`
有的时候我们想等待特定一段时间之后再执行一个函数（计划调用）
目前有2种实现方式
1. `setTimeout`
    * 将函数推迟到一段时间间隔之后再执行
2. `setInterval`
    * 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该间隔时间重复运行该函数

### `setTimeout`
```js
let timerId = setTimeout(func|code, [delay], [arg1], [arg2]...,[argN])

// 示例
function sayHi() {
    alert("hello!");
}

setTimeout(sayHi, 1000); // 函数会在1秒之后执行

// 带参数的情况
function sayHi(name) {
    alert(`hello! ${name}`);
}

setTimeout(sayHi, 1000, 'dennis'); // 函数会在1秒之后执行 hello! dennis
```
> 注意，传入的是一个函数名，不要带括号

#### 用clearTimeout来取消调度
使用`clearTimeout()`取消某个待执行的调度
```js
let timerId = setTimeout(() => {}, 1000);
clearTimeout(timerId);
```

### `setInterval`
与`setTimeout`的语法一致，不同的是，会按照间隔时长，定期执行。
```js
let timerId = setTimeout( () => { alert("hello!") }, 1000 );

// 每秒钟显示
let timerId = setInterval( () => { alert("hello!") }, 1000 );

// 5秒钟后停止
setTimeout(() => {
    clearInterval(timerId);
    alert("stop!");
}, 5000);
```

### 嵌套的`setTimeout`
这种方式也可以实现周期性调度，这种方式比`setInterval`更灵活
```js
let timerId = setTimeout(function tick() {
    alert("tick");
    timerId = setTimeout(tick, 2000); // 调用tick函数，形成嵌套
}, 2000);
// 灵活之处在于，可以嵌套方式可以根据实际情况调整后续的执行间隔
```
嵌套的`setTimeout`能够更加精确的设置两次执行之间的延时。

### 零延时的setTimeout
```js
setTimeout(() => alert("World"));
// 这个调度会在当前脚本执行完成"之后"立即执行

alert("Hello");

// 先显示Hello, 再显示World
```
> 在浏览器中，零延时实际上并不为零
> HTML5的标准中，经过5重嵌套后，时间间隔被强制设定为至少4毫秒

### 作业
```js
// 作业1
function printNumbers(from, to) {
    let num = from;
    let timerId = setTimeout(function func() {
        alert(num);
        if (num < to) {
            setTimeout(func, 1000);
        }
        num++;
    }, 1000);
}

function printNumbers1(from, to) {
    let num = from;
    let timerId = setInterval(function func() {
        alert(num);
        if (num === to) clearTimeout(timerId);
        num++;
    }, 1000);
}
```

## 装饰器模式和转发, call/apply

### 透明缓存
```js
function slow(x) {
    alert(`Called with ${x}`);
    return x;
}
// cachingDecorator 是一个装饰器
function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {       // 判断缓存中是否有对应的结果
            return cache.get(x);  // 从缓存中读取结果
        } else {
            let result = func(x); // 否则调用func 
            cache.set(x, result); // 并将结果缓存下来
            return result;
        }
    }
}

slow = cachingDecorator(slow);

alert( slow(1) );
alert( "Again" + slow(1) );
```
分离`cachingDecorator`的好处
* `cachingDecorator`可以重用。可以应用于其他函数
* 缓存的逻辑独立于主函数
* 如果需要，可以组合多个装饰器

### 使用`func.call`设定上下文
让其可以适用于对象
```js
function sayHi() {
    alert(this.name);
}

let user = { name: "John" };

sayHi(user); // 
sayHi.call(user); // John
```
* `func.call(context, arg1, arg2...)`
  * 第一个参数作为`this`
```js
// 对worker.slow的结果进行缓存
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod();
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        } else {
            let result = func.call(this, x); // 指定this
            cache.set(x, result);
            return result;
        }
    }
}

alert( worker.slow(1) );

worker.slow = cachingDecorator(worker.slow);

alert( worker.slow(2) );
```

### 传递多个参数
使用`...arguments`
```js
let worker = {
    slow(min, max) {
        alert(`Called with ${min}, ${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
        // 调整
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            // 调整
            let result = func.call(this, ...arguments);
            cache.set(key, result);
            return result;
        }
    }
}

function hash(args) {
    return args[0] + "," + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(2, 3) );
alert( "Again " + worker.slow(2, 3) );
```

### func.apply
使用`func.apply(this, ...arguments)`替代`func.call(call, ...arguments)`
```js
func.apply(context, args);
// this = context


func.apply(context, args); 
// 等同于
func.call(context, ...args); 

```
与call的区别是apply, apply期望的是一个包含这些参数的类数组对象`args`
* Spread语法`...`允许将**可迭代对象**`args`作为列表传递给call
* `apply`只接受**类数组**`args`
  * 对于真正的数组，apply可能更快
将所有参数连同上下文一起传递给另一个函数被称为"呼叫转移"
```js
// 最简形式
let wrapper = function() {
    return func.apply(this, arguments);
}
```

### 借用一种方法
对前面的`hash`函数进行改进 
```js
function hash() {
    alert([].join.apply(arguments));
}

hash(1, 2);
```
> 这个技巧叫做方法借用

### 装饰器和函数属性
如果原始函数有属性，则在装饰后不再提供这些属性

### 作业
```js
// 作业1 间谍装饰器
function work(a, b) {
    alert( a + b ); // work 是一个任意的函数或方法
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    
    wrapper.calls = [];
    
    return wrapper;
}

// 延时装饰器
function f(x) {
    alert(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"

function delay(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

// 防抖装饰器（没理解）
let f = debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

function debounce(func, ms) {
    
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments);
        }, ms);
    };
}

// 节流装饰器
function throttle(func, ms) {
            
    // 设置一个打开的开关
    let flag = true;

    function wrapper() {
        
        // 开关一直处于关闭状态 
        flag = false;
        if (!flag) {
            return;
        }

        // 定时器到时间之后
        setTimeout(function() {
            // 再把开关打开，然后运行
            flag = true;
            func.apply(this, arguments);
        }, ms)
    }
    return wrapper;
}
```

## 函数绑定

### 丢失`this`
一旦方法被传递到与对象分开的某个地方，this就会丢失。
```js
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}`);
    }
};

setTimeout(user.sayHi, 1000); // Hello, undefined
// 这里其实试图获取的是window.fitstName，但该变量并不存在，因此会返回undefined
```
### 解决方案1: 包装器
使用一个包装函数
```js
setTimeout(function() {
    user.sayHi();
}, 1000); // Hello, John

// 使用箭头函数
setTimeout(() => user.sayHi(), 1000);
```
但当user的值在定时器触发之前进行了修改，那么会调用修改后的内容

### 解决方案2: bind
函数内建方法`bind`，可以绑定this
```js
// 基本语法
let boundFunc = func.bind(context);
```
`func.bind(context)`返回的结果是一个特属的类似于函数的**外来对象**，可以像函数一样被调用
```js
let user = {
    firstName: "John",
};

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(user);

funcUser();
```
```js
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}`);
    }
};

// 可以在没有对象的情况下运行
let sayHi = user.sayHi.bind(user);

setTimeout(sayHi, 1000); // Hello, John

// 即使user的值在定时器触发之前发生了修改
// sayHi还是会使用预先绑定的值
user = {
    sayHi() { alert("Another user in setTimeout!"); }
};
```
> 如果一个对象有多个方法
```js
// 通过循环可以将所有方法都传递进去
for ( let key of obj) {
    if (typeof obj[key] === 'function') {
        obj[key] = obj[key].bind(obj);
    }
}
```

### 部分应用函数
bind不仅可以绑定`this`，还可以绑定参数
```js
let bound = func.bind(context, [arg1]...[argN]);
```

```js
function mul(a, b) {
    return a * b;
}

let doubule = mul.bind(null, 2);
// 将null 绑定为上下文
// 将2作为函数的第一个参数

alert(doubule(3)); // = mul(2, 3) = 6
```
### 在没有上下文情况下的partial
绑定参数，但不想绑定`this`的情况
```js
// 我理解这就是一个装饰器
function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

// 用法
let user = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}`);
    }
};

// 绑定第一个参数time
user.sayNow = partial(user.say, new Date().getHours() + ":" + new Date().getMinutes());

// 输入第二个参数
user.sayNow("hello"); // [22:45] John: hello
```

### 作业

```js

// 作业2
function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Pete"} );

f(); // John
// 绑定函数对象仅在创建的时候记忆上下文
// 一个函数不能够被重复绑定

// 作业3
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

// askPassword(user.loginOk, user.loginFail);
// 错误中无法定位到this，需要添加bind方法进行定位
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 作业4
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

// 我的回答
askPassword(user.login.bind(user, 1), user.login.bind(user, 0));

// 答案
askPassword(() => user.login(true), () => user.login(false));
askPassword(user.login.bind(user, true), user.login.bind(user, false));
```

## 深入理解箭头函数

### 箭头函数没有`this`

### 箭头函数没有`arguments`


---
# 对象属性配置

## 属性标志和属性描述符

### 属性标志
除了`value`之外，还有三个特殊的特性，这些特性在常规情况下均默认为true
* `writable` - 如果为true，则值可以被修改，否则就只是可读的
* `enumerable` - 如果为true，则会被在循环中列出
* `configurable` - 如果为true，则属性可以被删除
```js
// 允许查询有关属性的完整信息
let descriptor = Object.getOwnProjectDescriptor(obj, propertyName)
// obj 需要查询的对象
// proertyName 属性的名称
// 返回属性的完整信息，一个对象
```
```JS
let user = {
    name: "John"
}

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));
/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```
#### 修改标志
```js
object.defineProperty(obj, propertyName, descriptor)
```
`obj`, `propertyName`
需要修改的对象及其属性

`descriptor`
要修改的属性描述符对象
```js
let user = {
    name: "John"
}

Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
});

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 4));
/*
{
    "value": "John",
    "writable": false,
    "enumerable": true,
    "configurable": true
}
*/
```

### 只读
通过将`writable`设置为false来实现

### 不可枚举
```js
let user = {
    name: "John",
    toString() {
        return this.name;
    },
};

// 默认情况下，两个属性均会被列出
//for (let key in user) alert(key); 
// name toString

// 使用Object.defineProperty
Object.defineProperty(user, "toString", {
    enumerable: false,
});

for (let key in user) alert(key); // name

// 也会被排除在外 
alert(Object.keys(user)); // name
```

### 不可配置
`configurable: false`, 对应的属性不能被删除，对应的特性不能被修改
> 意味着开发者无法再次通过defineProperty进行特性修改
> 但不妨碍我们对对象的值的修改
```js
let user = {
    name: "John",
    age: 28,
};

Object.defineProperty(user, "age", {
    configurable:false,
});

// 无法删除
delete user.age;

alert(user.age); // 28

//还是可以修改该属性的值
//user.age = 29;
```

### `Object.defineProperties`
允许一次定义多个属性的特性
```js
Object.defineProperties(obj, {
    pro1: descriptor1,
    pro2: descriptor2,
    //...罗列需要修改特性的属性
}, {
    //...需要修改的特性
})
```

### `Object.getOwnPropertyDescriptors`
一次获取所有属性的特性描述
```js
let user = {
    name: "John",
    age: 28,
};

let descriptor = Object.getOwnPropertyDescriptors(user);

console.log(JSON.stringify(descriptor, null, 4));
/*
{
    "name": {
        "value": "John",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "age": {
        "value": 28,
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
}
*/
```

### 设定一个全局的密封对象
一些限制访问整个对象的方法（很少使用）
* `Object.preventExtensions(obj)` 禁止向对象添加新属性
* `Object.seal(obj)` 禁止添加/删除属性
* `Object.freeze(obj)` 禁止添加/删除/更改属性
* `Object.isExtensible(obj)` 如果添加属性被禁止，则返回 false，否则返回 true。
* `Object.isSealed(obj)` 如果添加/删除属性被禁止，并且所有现有的属性都具有 configurable: false则返回 true。
* `Object.isFrozen(obj)` 如果添加/删除/更改属性被禁止，并且所有当前属性都是 configurable: false, writable: false，则返回 true。

## 属性的getter和setter
对象属性分两种
* 数据属性
* 访问器属性
  * getter, setter

### getter和setter
```js
let user = {
    name: "John",
    surname: "Smith",
    age: 28,

    // getter
    get fullname() {
        return `${this.name} ${this.surname}`;
    },
    
};

alert(user.fullname); // John Smith

// 没有setter时，赋值操作会报错
user.fullname = "Alice Cooper" // 不会生效
```
添加setter
```js
let user = {
    name: "John",
    surname: "Smith",
    age: 28,

    // getter
    get fullname() {
        return `${this.name} ${this.surname}`;
    },

    // setter
    set fullname(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

user.fullname = "Alice Cooper"
alert(user.name);    // Alice
alert(user.surname); // Cooper
```

### 访问器描述符
访问器属性没有`value`和`writable`，只有`get`和`set`
* get
* set
* enumerable
* configurable

### 更聪明的getter/setter
可以用作属性的包装器，从而对对象属性做出更多的限制或者要求
```js
let user = {

    // getter
    get name() {
        return this.name;
    },

    // setter
    set name(value) {
        if (value.length < 4) {
            alert("名字太短了");
            return;
        }
        this.name = value;
    }
};

user.name = 'jon' // 名字太短了
```

### 兼容性
访问器允许随时通过使用`getter`和`setter`替换**正常的**数据属性
```js
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // 在不修改对象原有属性的情况下，通过这个方法来控制和调整
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getUTCFullYear();
            return todayYear - this.birthday.getUTCFullYear();
        }
    });
}

let john = new User("John", new Date(2021,2,1)); 

alert(john.birthday);
alert(john.age);     // 2
```

---

# 原型，继承

## 原型继承
* 这里我理解有点像子类继承父类的属性

### [[Prototype]]
对象的特殊隐藏属性`Prototype`，该属性是内部的且隐藏的
```js
// 通过__proto__调用该属性
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

// 将raabit的原型设置为animal
rabbit.__proto__ = animal;

alert(rabbit.eats);  // true
alert(rabbit.jumps); // true
```
```js
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    },
};
let rabbit = {
    jumps: true,
    __proto__: animal,
};

// 通过原型获得了一个walk方法
rabbit.walk(); // Animal walk
```
原型链可以很长
```js
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    },
};
let rabbit = {
    jumps: true,
    __proto__: animal,
};

let longEar = {
    earlenght: 10,
    __proto__:rabbit,
};

// 先在rabbit中寻找，然后再在animal中寻找
alert(longEar.eats); // true
```
> __proto__是Prototype因历史原因留下来的getter/setter


### 写入不使用原型
原型仅用于读取属性
```js
let animal = {
  eats: true,
  walk() {
    /* rabbit 不会使用此方法 */
  }
};

let rabbit = {
  __proto__: animal
};

// 相当于为rabbit创建了一个walk方法，之后再调用时，不需要再从原型中寻找
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
```
访问器属性例外，访问器属性能够被读取使用，且能够被修改
```js
let user = {
    name: "John",
    sureName: "Smith",

    set fullName(value) {
        [this.name, this.sureName] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.sureName}`;
    },
}

let admin = {
    __proto__: user,
    isAmind: true,
};

admin.fullName = "Alice Cooper";

// 原型的fullName被保护了
alert(user.fullName);  // John Smith

// admin的fullName可以被单独修改，不会影响到原型
alert(admin.fullName); // Alice Cooper
```
### `this`的值
this值不受原型的影响
在一个方法调用中，`this`始终是点符号`.`前面的对象。

### for...in循环
`for...in`循环会迭代继承的属性
```js
let animal = {
    eats: true,
    walk() {
        /* rabbit 不会使用此方法 */
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// 会遍历继承的key
for(let prop in rabbit) {
    alert(prop); // jumps eats walk
}
// 可以通过内建方法`obj.hasOwnProperty(key)`进行过滤；
// 根据obj是否包含名为key的属性，返回值是true/false

// 只会返回自己的key
alert(Object.keys(rabbit)); // jumps
```
> 几乎所有键值获取方法都忽略继承的属性

### 作业
```js
// 作业1
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

alert( pockets.glasses );

// 作业2
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    },
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// 这只仓鼠找到了食物
speedy.eat("apple");
alert( speedy.stomach ); // apple

// 这只仓鼠也找到了食物，为什么？请修复它。
alert( lazy.stomach ); // apple
```

## F.prototype
```js
let animal = {
    eats: true,
}

let animal1 = {
    eats: false,
}

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal; // 表示继承animal


let rabbit = new Rabbit("White Rabbit");

// 仅在使用了new F时，prototype才会生效
alert(rabbit.eats); // true

// 不会影响旧的值
Rabbit.prototype = animal1; // 表示继承animal1
let rabbit1 = new Rabbit("White Rabbit");
alert(rabbit1.eats); // false
```

### 默认的F.prototype，构造器属性
每个函数都有`prototype`属性，是一个只有属性`constructor`的对象，指向函数自身。
```js
function Rabbit() {}

// 默认的prototype
// Rabbit.prototype = { constructor: Rabbit };
alert( Rabbit.prototype.constructor === Rabbit ); // true

// 可以继承给所有rabbits
let rabbit = new Rabbit();
alert( rabbit.constructor === Rabbit ); // true
```
可以使用`constructor`来创建一个新对象
```js
let rabbit2 = new rabbit.constructor("Black Rabbit");
```
```js
function Rabbit() {}

// 不要将 Rabbit.prototype 整个覆盖
// 可以向其中添加内容
Rabbit.prototype.jumps = true
// 默认的 Rabbit.prototype.constructor 被保留了下来
```

### 作业
```js
// 作业1
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// 情况1
Rabbit.prototype = {};
alert( rabbit.eats );  // true 原有值不受影响

// 情况2
Rabbit.prototype.eats = false;
alert( rabbit.eats );  // false
// 这里直接通过prototype修改了eats的值，会影响到其他的rabbit

// 情况3
delete rabbit.eats;
alert( rabbit.eats );  // true

// 情况4
delete Rabbit.prototype.eats;
alert( rabbit.eats );  // undefined
// 这里直接在prototype中删除eats属性

// 作业2
function User(name) {
    this.name = name;
}

let user1 = new User("John");

let user2 = new user1.constructor("Pete");

alert(user2.name); // Pete

// 如果这里重写了
// User.prototype = {};
// alert( user2.name ) // undefined 
```

## 原生的原型

### Object.prototype
```js
let obj = {};
alert( obj ) // [object Object]
```
此时该对象的[[prototype]]指向`Object.prototype`

### 其他内建原型
`Array`/`Date`/`Function`等，都有prototype
```js
let arr = [1,2,3];
alert( arr.__proto__ === Array.prototype ); // true
alert( arr.__proto__.__proto__ === Object.prototype ); // true

let date = new Date();
alert( date.__proto__ === Date.prototype ); // true

function func() {}
alert( func.__proto__ === Function.prototype ); // true
```

### 基本数据类型
它们并不是对象，但如果我们试图操作它们的属性，那么临时包装器对象将会通过内建的构造器被创建（`String`, `Number`等）。提供方法然后消失。

### 更改原生原型
原生的原型可以被修改，但不建议。

### 作业
```js
// 作业1 给函数添加一个 "f.defer(ms)" 方法
function f() {
    alert("Hello!");
}

Function.prototype.defer = function(ms) {
    setTimeout(this,ms)
}

f.defer(1000); // 1 秒后显示 "Hello!"


// 作业2 将装饰器 "defer()" 添加到函数
function f(a, b) {
    alert( a + b );
}

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => {
            f.apply(this, args)
        }, ms);
    }
}

f.defer(1000)(1,2);
```

## 原型方法，没有__proto__的对象
使用`obj.__proto__`设置或读取原型被认为已经过时且不推荐使用
现代获取/设置原型的方法：
* `Object.getPrototypeOf(obj)` - 返回对象的原型
* Object.setPrototypeOf(obj, proto) - 设置对象的原型为`proto`

* 另外一种强大的特殊方法
  * Object.create(proto, [descriptors]) - 利用给定的`proto`作为原型[[Prototype]]和可选的属性描述来创建一个空对象
```js
let animal = {
    eats: true,
};

// 创建一个以animal为原型的新对象
let rabbit = Object.create(animal);
alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

// 将rabbit的原型修改为{}
Object.setPrototypeOf(rabbit, {});

let rabbit1 = Object.create(animal, {
    jumps: {
        value:true,
    }
});

alert(rabbit1.jumps); // true
```

### 原型简史
> 如果速度很重要，就请不要修改已存在的对象的[[Prototype]]

### `Very plain` objects
通过创建一个没有原型的对象解决用户输入`__proto__`的问题
* 原型为null时，对象才真正是空的
```js
let obj = Object.create(null);
// 或者obj = {__proto__:null}
```

### 作业
```js
// 作业1 为 dictionary 添加 toString 方法
let dictionary = Object.create(null, {
    // 你的添加 dictionary.toString 方法的代码
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// 添加一些数据
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // 这里 __proto__ 是一个常规的属性键

// 在循环中只有 apple 和 __proto__
for(let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}

// 你的 toString 方法在发挥作用
alert(dictionary); // "apple,__proto__"


// 作业2 调用方式的差异
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// alert( rabbit.sayHi() ); // Rabbit
// alert( Rabbit.prototype.sayHi() ); // undefined
// alert( Object.getPrototypeOf(rabbit).sayHi() ); // undefined
alert( rabbit.__proto__.sayHi() ); // undefined
```
---
# 类

## Class基本语法

### `class`语法
```js
// 基本语法
class MyClass {
    // class方法
    constructor() {...}
    method1() {...}
    method2() {...}
    method3() {...}
    ...
}

// 使用new MyClass() 来创建具有上述列出方法的新对象
let user = new MyClass();
```
> 注意：类方法之间没有逗号

### 什么是class
```js
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// User是一个函数
alert(typeof User); // function

// 更确切的说，是User的原型的constructor方法
alert(User === User.prototype.constructor); // true


alert(User.prototype.sayHi); // sayHi() { alert(this.name); }

// 获取原型中的方法
alert(Object.getOwnPropertyNames(User.prototype)); // constructor,sayHi
```

### 不仅仅是语法糖
1. 通过`class`创建的函数具有特殊的内部标记
   * `IsClassConstructor: true`
   * 必须使用`new`来进行调用
2. 类方法不可枚举
3. 类总是使用`use strict`。类构造中的所有代码都自动进入严格模式

## 类表达式
类可以在另外一个表达式中被定义，传递，返回，赋值等
如果类表达式有名字，那么改名字仅在内部可见

### Getter/setters
```js
class User {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length <4) {
            alert("Name is to short!");
            return;
        } 
        this._name = value;
    }
}

let user = new User("John");

alert(user.name);

user1 = new User("Jon"); // Name is to short!
```
### 计算属性名称[...]
```js
class User {

    constructor(name) {
        this.name = name;
    }

    ['say' + 'Hi']() {
        alert("Hello!");
    }
}

new User().sayHi();  // sayHi
```
### Class字段
`类字段`是一种允许添加任何属性的语法
```js
class User() {
    name = "John";

    sayHi() {
        alert(`Hello ${this.name}!`);
    }
}

alert(User.prototype.name); //undefined

let user = new User();
alert(user.name); // John
```
类字段会在每个独立对象中被设定好，而不是在原型中`User.prototype`。

#### 使用类字段制作绑定方法
```js
class Button {
    constructor(value) {
        this.value = value;
    }

    // 修改这里，防止this在其他作用域中被调用时丢失
    click = () => {
        alert(this.value);
    }
    // click = () => {...}
}

let button = new Button("hello");

// this丢失
setTimeout(button.click, 1000); 
```

### 作业
```js
// 作业 重写为class
class Clock {
constructor({ template }) {
    this.template = template;
}

render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours; 

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins; 

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
    
    console.log(output);
}

stop() {
    clearInterval(this.timer);
}

start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
}

}

let clock = new Clock({template: 'h:m:s'});
clock.start();
```

## 类继承

### `extends`关键字
扩展另一个类的语法`class Child extends Parent`
```js
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");

// JS会首先在rabbit上查找对应的方法，如果没招到，则再从原型上查找
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still.
rabbit.hide(); // White Rabbit hides!
```
> extends后面允许任意表达式

### 重写方法
如果我们在`Rabbit`中指定了我们自己的方法，如`stop()`，则会优先使用它。
```js
class Rabbit extends Animal {
    stop() {
        // 这个方法会被rabbit.stop()优先使用
    }
}
```
Class还提供了`super`关键字
* 执行`super.method(...)`来调用一个父类方法
* 执行`super(...)`来调用一个父类constructor(仅在当前constructor中)
```js
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // 调用父类的stop
        this.hide();
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still.  White Rabbit hides!.
```
> 箭头函数没有`super`

### 作业
```js
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendClock extends Clock {
    constructor(options) {
        super(options);
        let {precision = 1000} = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }

}

let clock = new Clock({template: 'h:m:s'});
clock.start();
```

## 静态属性和静态方法
把一个方法作为一个整体赋值给类，这样的方法被称为`静态的static`。
```js
// 在声明中以static开通
class User {
    static staticMethod() {
        alert(this === User);
    }
}
User.staticMethod(); // true
```
> 静态方法属于整个类，不属于单独某个特定对象
```js
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

// 静态方法只能在类上面调用
articles.sort(Article.compare);

alert(articles[0].title); // CSS
```
> 静态方法只能在类上面调用，而不是单个对象上


### 静态属性
```js
class Article {
    static publisher = "Levi Ding";
}
alert( Article.publisher ); // Levi Ding
// 等同意给Article赋值
Article.publisher = "Levi Ding";
```
### 继承静态属性和方法
```js
class Animal {
    // 静态属性
    static planet = "Earth";

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }

    // 静态方法
    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

// 继承自Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 4),
]

rabbits.sort(Rabbit.compare);
alert(rabbits[0].name); // Black Rabbit

alert(Rabbit.__proto__ === Animal);                     // true
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
```

### 作业
```js
class Rabbit extends Object {
    constructor(name) {
        super(name); // 需要添加该行代码
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error
```

## 私有的和受保护的属性和方法

### 内部接口和外部接口

* 内部接口：可以通过该类的其他方法访问，但不能从外部访问的方法和属性
* 外部接口：可以从外部访问的方法和属性

JS中，分为两种类型的对象字段（属性和方法）
* 公共的：可以从任何地方访问
* 私有的：只能从类的内部访问

### 受保护的`waterAmount`
```js
class CoffeeMachine {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        alert(`Created a coffee-machine, poewr: ${power}`);
    }

}

let coffeeMachine = new CoffeeMachine(100);

// 加水
coffeeMachine.waterAmount = 200;
```
#### 受保护的属性通常以下划线`_`作为前缀
```js
class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value<0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

}

let coffeeMachine = new CoffeeMachine(100);

// 加水
coffeeMachine.waterAmount = -10;
alert(coffeeMachine._waterAmount); // 0
```

### 只读的`power`
通过只设置power而不设置setter来实现
```js
class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value<0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

let coffeeMachine = new CoffeeMachine(100);

// 加水
coffeeMachine.waterAmount = -10;
coffeeMachine.power = 25;
alert(coffeeMachine.power); // 100
```
> getter/setter
大多时候使用`get.../set...`函数
```js
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);
```
> 受保护的字段是可以被继承的

### 私有的`#waterLimit`
私有属性和方法以`#`开头，只可以在类的内部被访问。
```js
class CoffeeMachine {
    #wtaerLimit = 200;

    #fixWaterAmount(value) {
        if (value < 0) value = 0;
        if (value > this.#wtaerLimit) return this.#wtaerLimit;
    }

    setWaterAmount(value) {
        this.#wtaerLimit = this.#fixWaterAmount(value);
    }

}

let coffeeMachine = new CoffeeMachine();

// 无法访问
coffeeMachine.#fixWterAmount(123);
```
私有字段与公共一段不会发生冲突（可以重名）
> 私有字段不能通过this[name]访问

## 扩展内建类
内建的类都可以扩展
```js
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new PowerArray(1,2,4,5,9);
alert(arr.isEmpty()); // false

// 返回一个由≥10的元素组成的新数组
let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr);             // 
alert(filteredArr.isEmpty());   // true
```
```js
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // 使用的静态getter`Symbol.species`返回Array
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1,2,4,5,11);
alert(arr.isEmpty()); // false

// 返回一个由≥10的元素组成的新数组
let filteredArr = arr.filter(item => item >= 10);

// filteredArr此时是一个Array，不是PowerArray
alert(filteredArr);             // 
alert(filteredArr.isEmpty());   // Error: filteredArr.isEmpty is not a function
```
> Symbol.species也适用于其他集合，如Map、Set

#### 内建类没有静态方法继承
内建类相互间不继承静态方法

## 类检查:`instanceof`
`instanceof`用于检查一个对象是否属于某个特定的class。同时会考虑到继承

### `instanceof`操作符
```js
// 语法
obj instanceof Class;
```
```js
// 示例
class Rabbit {}
let rabbit = new Rabbit();

alert(rabbit instanceof Rabbit); // true

// 可以和构造函数一起使用
function Rabbit() {}
alert(new Rabbit() instanceof Rabbit); // true

// 可以和Array之类的内建Class一起使用
let arr = [1,2,3];
alert(arr instanceof Array); // true
alert(arr instanceof Object); // true
// 因为从原型上来讲，Array是继承自Object
```
静态方法`Symbol.hasInstance`用来检查是某个对象否包含某个方法或属性
```js
// 设置 instanceOf 检查
// 并假设具有 canEat 属性的都是 animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

alert(obj instanceof Animal); // true：Animal[Symbol.hasInstance](obj) 被调用
```
### 使用Objcet.prototype.toString来揭示类型
```js
let objectToString = Object.prototype.toString;

let arr = [];
alert(objectToString.call(arr)); // [object Array]
// call方法会在上下文中执行函数objectToString
```
#### Symbol.toStringTag
使用特殊的对象属性`Symbol.toStringTag`自定义对象的toString方法行为结果
```js
let user = {
    [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]
```

## Mixin模式

### 一个Mixin实例
```js
// mixin
let sayHiMixin = {
    sayHi() {
        alert(`hello ${this.name}`);
    },
    sayBye() {
        alert(`Bye ${this.name}`);
    },
};

// 用法
class User {
    constructor(name) {
        this.name = name;
    }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);

// 可以打招呼了
let user = new User("John");
user.sayHi(); // hello, John
```
这里只是一个简单的方法拷贝。所以`User`可以从另一个类继承。
Mixin可以在自己内部使用继承
```js
let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {

    __proto__: sayMixin,

    sayHi() {
        // 调用父类方法
        super.say(`hello ${this.name}`);
    },
    sayBye() {
        super.say(`Bye ${this.name}`);
    },
};

// 用法
class User {
    constructor(name) {
        this.name = name;
    }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);

// 可以打招呼了
let user = new User("John");
user.sayHi(); // hello, John
```

### EventMixin
```js
let eventMixin = {
/*
* 订阅事件，用法:
* meneu.on('select', function(item) {...})
*/
on(eventName, handler) {
if (!this._eventHandlers) this._eventHandlers = {};
if (!this._eventHandlers[eventName]) {
    this._eventHandlers[eventName] = [];
}
this._eventHandlers[eventName].push(handler);
},

/*
* 取消订阅，用法
* menu.off('select', handler)
*/
off(eventName, handler) {
let handlers = this._eventHandlers?.[eventName];
if (!handlers) return;
for( let i = 0; i < handlers.length; i++) {
    if (handlers[i] === handler) {
        handlers.splice(i--, 1);
    }
}
},

/*
* 生成具有给定名称和数据的事件
* this.trigger('select', data1, data2);
*/
trigger(eventName, ...args) {
if (!this._eventHandlers?.[eventName]) {
    // 该事件名称没有对应的事件处理程序
    return;
}

// 调用事件处理程序
this._eventHandlers[eventName].forEach(
    handler => handler.apply(this, args)
);
}
};

// 用法
// 创建一个class
class Menu {
choose(value) {
    this.trigger("select", value);
}
}

// 添加带有事件方法的mixin
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on("select", value => alert(`Value selected: ${value}`));

menu.choose("123"); // Value selected: 123
// 暂时没搞懂
```

## 错误处理, `try...catch`
通过`try...catch`，捕获错误

### `try...catch`语法
```js
try {
    // 代码...
} catch(error) {
    // 错误捕获
}
```
> 仅对运行时的error有效

### Error对象
* `name` 错误名称
* `message` 关于错误的文字描述
* `stack` 当前的调用栈
```js
try {
    test;
} catch(err) {
    alert(err.name);    // ReferenceError
    alert(err.message); // test is not defined
    alert(err.stack);   // ReferenceError: test is not defined

    // 直接显示error整体
    alert(err);         // ReferenceError: test is not defined
}
```
### 可选的`catch`绑定
!!! - 最近新增的特性
如果我们不需要error的详细信息，则可以忽略`catch`
```js
try {
    //...
} catch {
    //...
}
```
### 使用`try...catch`
```js
let json = '{"bad json}';

try {
    let user = JSON.parse(json);
    alert(user.name);
} catch(err) {
    alert("很抱歉，数据有错误，我们会尝试再请求一次");
    alert(err.name);    // SyntaxError
    alert(err.message); // Unterminated string in JSON at position 11 (line 1 column 12)
}
```
### 抛出我们自定义的error

#### `throw`操作符
```js
throw <error object>
```
```js
let json = '{"name": "John"}';

try {
    let user = JSON.parse(json);
    
    if (!user.age) {
        // 自定义error
        throw new SyntaxError("数据不全: 没有age");
    }

    alert(user.age);

} catch(err) {
    alert("JSON Error: " + err.message);
    // JSON Error: 数据不全: 没有age
}
```

### 再次抛出`Rethrowing`
catch应该只出炉它知道的error，并抛出所有其他error
```js
let json = '{"name": "John"}';

try {
    let user = JSON.parse(json);
    
    if (!user.age) {
        throw new SyntaxError("数据不全: 没有age");
    }

    blabla(); // 意料之外的error

    alert(user.age);

} catch(err) {
        // 检查err是否在此类错误中
        if (err instanceof SyntaxError) {
        alert("JSON Error: " + err.message);
        } else {
        throw err; // 再次抛出
        }
}
// 这种情况下只抛出它知道如何处理的error，跳过了其他所有error
```

### try...catch...finally
```js
try {
    // 尝试执行的代码
} catch(err) {
    // 处理error
} finally {
    // 总是会执行的代码
}
```
```js
let num = +prompt("输入一个正整数?", 35);

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("不能是负数，并且必须是整数。");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch (err) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

alert(result || "出现了 error");
alert(`执行花费了${diff}ms`);
```
### 作业
```js

```
## 自定义Error, 扩展Error

```js
class ValidationError extends Error {
    constructor(message) {
        super(message); // 在子类中调用super
        this.name = "ValidationError";
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

try {
    test();
} catch(err) {
    alert(err.name);    // ValidationError
    alert(err.message); // Whoops!
    alert(err.stack);   // 

    alert(err); // ValidationError: Whoops!
}
```

```js
class ValidationError extends Error {
    constructor(message) {
        super(message); // 在子类中调用super
        this.name = "ValidationError";
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError (`No filed: name`);
    }
    if (!user.age) {
        throw new ValidationError (`No filed: age`);
    }

    return user;

}

try {
    let user = readUser('{"age": 25}');
} catch(err) {
    if (err instanceof ValidationError) {
        alert("Invalid data: " + err.message);
    } else if (err instanceof SyntaxError) {
        alert("JSON Syntax Error: " + err.message);
    } else {
        throw err; // 未知的error
    }
}
```

### 深入继承

```js
class ValidationError extends Error {
    constructor(message) {
        super(message); // 在子类中调用super
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        // 通过该方式获取错误的名称
        this.name = this.constructor.name;
        this.property = property;
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new PropertyRequiredError (`No filed: name`);
    }
    if (!user.age) {
        throw new PropertyRequiredError (`No filed: age`);
    }

    return user;

}

try {
    let user = readUser('{"age": 25}');
} catch(err) {
    if (err instanceof ValidationError) {
        alert("Invalid data: " + err.message); // Invalid data: No property: No filed: name
        alert(err.name);                       // PropertyRequiredError
        alert(err.property);                   // No filed: name
    } else if (err instanceof SyntaxError) {
        alert("JSON Syntax Error: " + err.message);
    } else {
        throw err; // 未知的error
    }
}
```

### 包装异常

### 作业

```js
// 创建一个继承自SyntaxError的类
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true（因为它继承自 SyntaxError）
```

---

# Promise, async/await

## 简介: 回调

```js
function loadScript(src, callback) {
    // 创建一个<script>标签，并将其附加到页面 
    let script = document.createElement('script');
    script.src = src;
    
    // callback函数在脚本加载完成时执行
    script.onload = () => callback(script);

    document.head.append(script);
}

// 在给定路径下加载并执行脚本
// 该调用在加载函数执行完成后才会运行
loadScript('/clock.js', function() {
    // 在脚本加载完成后，回调函数才会执行
    newFunction();
});
// 因为是"异步"调用，该调用之后的代码不会等到脚本加载完成才执行
```

### 在回调中回调

### 处理Error

```js
function loadScript(src, callback) {
    // 创建一个<script>标签，并将其附加到页面 
    let script = document.createElement('script');
    script.src = src;
    
    // callback函数在脚本加载完成时执行
    script.onload = () => callback(script);

    // 处理error
    script.onerror = () => callback(new Error(`Script load error ${src}`))

    document.head.append(script);
}

loadScript('/clock.js', function(error, script) {
    if (error) {
        //处理error
    } else {
        //脚本加载成功
        newFunction();
    }
});
// 约定速成的规则
// callback中的第一个参数是为error保留的。一旦出现error，优先处理
```

### Promise

```js
// 构造器语法
let promise = new Promise(function(resolve, reject) {
    // executor(生产者代码)
})
```

当executor获得了结果

* resolve(value) —— 任务成功完成并带有结果`value`
* reject(error) —— 如果出现了error, `error`即为error对象
  由`new Promise`构造器构造的对象`promise`具有一些内部属性
* `state`: `pendding`
  * resolve调用时，变为`fulfilled`
  * reject调用时，变为`rejected`
* `result`: `undefined`
  * resolve调用时，变为`value`
  * reject调用时，变为`error`

```js
//一个简单的executor函数
let promise = new Promise(function(resolve, reject) {
    // 当promise被构造完成时，自动执行此函数

    // 1秒后发出工作已经被完成的信号，并带有结果"done"
    setTimeout(() => resolve("done"), 1000);
})
```

```js
let promise = new Promise(function(resolve, reject) {
    // 当promise被构造完成时，自动执行此函数

    // 1秒后发出工作已经被完成的信号，并带有error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
    // 可以立即执行
    // reject(new Error("Whoops!"))
})
```

> executor只能有一个结果或一个error，不能同时存在
> resolve/reject可以立即执行

### 消费者: then, catch

#### then

```js
// 语法如下
promise.then(
    function(result) {/* handle a successful result */};
    // 在promise resolved 且收到结果后执行

    function(error) {/* handle an error */};
    // 在promise rejected 且收到error信息后执行
)
```

```js
let promise = new Promise(function(resolve, reject) {
    // 当promise被构造完成时，自动执行此函数

    // 1秒后发出工作已经被完成的信号，并带有结果"done"
    setTimeout(() => resolve("done"), 1000);
    //setTimeout(() => reject(new Error("Whoops!")), 1000);
})

promise.then(
    result => alert(result), // 1秒钟后显示done
    //error => alert(error)    // rejected后运行 Error: Whoops!
)
```

#### catch

如果我们只对error感兴趣，可以使用null作为第一个参数: `.then(null, errorHandlingFunction)`。

```js
let promise = new Promise(function(resolve, reject) {
    // 当promise被构造完成时，自动执行此函数

    setTimeout(() => reject(new Error("Whoops!")), 1000);
})

// .catch(f) 等同于 .then(null, f)
promise.catch(alert); // 1秒钟后显示 Error: Whoops!
```

### 清理: finally

无论promise被resolve还是reject，都会执行`.fnally(f)`。

```js
let promise = new Promise(function(resolve, reject) {
    // 当promise被构造完成时，自动执行此函数

    setTimeout(() => resolve("done"), 1000);
})

promise.then(
    result => alert(result),
); // 1秒钟后显示 done
promise.finally(() => alert("Promise ready"));
```

```js
let promise = new Promise(function(resolve, reject) {
    // 当promise被构造完成时，自动执行此函数

    setTimeout(() => reject(new Error("Whoops")), 1000);
})

// 先出发finally
promise.finally(() => alert("Promise ready"));
promise.catch(
    alert
); // 1秒钟后显示 Whoops
```

### 示例: loadScript

```js
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

let promise = loadScript('/clock.js');

promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

promise.then(script => alert("Another handler..."));
```

### 作业

```js
// 作业1
let promise = new Promise(function(resolve, reject) {
    resolve(1); 

    setTimeout(() => resolve(2), 1000); // 被忽略
});

promise.then(alert);

// 作业2 基于 promise 的延时
function delay(ms) {
    // 你的代码
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    })
    // 答案return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

// 作业3 带有 promise 的圆形动画
// 说明：该作业在将后续章节做完后再完成
showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});

function showCircle(...arguments) {
    return new Promise(function(resolve, reject) {
        
    })
}
```
## Promise链

```js
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

loadScript("/one.js")
.then(script => loadScript("/two.js"))
.then(script => loadScript("/three.js"))
.then(script => {
    one();
    two();
    three();
});
```

### 更复杂的示例: fetch

## 使用promise进行错误处理

### 隐式try...catch

```js
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(alert);

// 等同于
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(alert);
```

## Promise API

### Promise All
所有promise都准备好后执行
```js
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(alert);
// 1,2,3
```
一个比较真实的案例
```js
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
.then(responses => {
    // 所有响应都被陈工resolved
    for (let response of responses) {
        // 遍历并展示
        alert(`${response.url}: ${response.status}`);
        // https://api.github.com/users/iliakan: 200
        // https://api.github.com/users/remy: 200
        // https://api.github.com/users/jeresig: 200
    }

    return responses;
})
// 将响应数据映射到response.json()数组中以读取它
.then(responses => Promise.all(responses.map(r => r.json())))
// 所有JSON结果都被解析
.then(users => users.forEach(user => alert(user.name)));
// Ilya Kantor
// Remy Sharp
// John Resig
```
#### 如果任意一个promise被reject，由`promise.all`返回的promise就会立即reject
```js
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!
```
> 如果出现error，其他promise会被忽略

### Promise.allSettled
等待所有的promise都被settle，无论结果如何。都会返回结果
* `{status: "fulfilled", value: result}`
* `{status: "rejected", reason: error}`
```js
Promise.allSettled(urls.map(url => fetch(url)))
.then(results => {// (*)
    results.forEach((result, num) => {
        if (result.status == "fulfilled") {
            alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
            alert(`${urls[num]}: ${result.reason}`);
        }
    });
});
// https://api.github.com/users/iliakan: 200
// https://api.github.com/users/remy: 200
// https://no-such-url: TypeError: Failed to fetch
```
### Promise.race
只等待第一个settled的promise，并获取结果（无论是resolve还是error）
```js
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1
```
### Promise.any
只等待第一个`status: "fulfilled"`的promise，并返回结果，如果给出的promise都rejected，则会报错`AggregateError`
```js
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 3
// 第一个失败了，所以返回的是3
```
### Promise.resolve/reject
在后续的`async/await`语法更好用，这里跳过

## Promisification
将一个接受回调的函数转换为一个返回promise的函数
```js
// 将回调一章中的例子Promise化
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err);
            resolve(script);
        });
    });
};

loadScriptPromise('/clock.js')
    .then(result => alert(result))
    .catch(err => alert(err));
```
#### promisify(f)
```js
function promisify(f) {
    return function(...args) {// 返回一个包装函数(wrapper-function)
        return new Promise((resolve, reject) => {
            function callback(err, result) { // 对f的自定义回调
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }

            args.push(callback); // 将自定义的回调附加到f参数(args)的末尾

            f.call(this, ...args); // 调用原始函数
        });
    };
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

let loadScriptPromise = promisify(loadScript);

loadScriptPromise('/clock.js')
    .then(result => alert(result))
    .catch(err => alert(err));
```
```js
// promisify(f, true) 来获取结果数组
function promisify(f， manyArgs = false) {
    return function(...args) {// 返回一个包装函数(wrapper-function)
        return new Promise((resolve, reject) => {
            function callback(err, ...result) { // 对f的自定义回调
                if (err) {
                    reject(err);
                } else {
                    // 如果manyArgs被指定，则使用所有回调的结果resolve
                    resolve(manyArgs ? resluts : results[0]);
                }
            }

            args.push(callback); // 将自定义的回调附加到f参数(args)的末尾

            f.call(this, ...args); // 调用原始函数
        });
    };
}
```
> 先记录一下，promisification暂时不懂

## 微任务(Microtask)
promise的处理程序`.then`, `.catch`, `.finally`都是异步
```js
let promise = Promise.resolve();

promise.then(() => alert("promise done!"));

alert("code finished"); // 优先显示
```

### 微任务队列(Microtask queue)
ECMA为异步任务的管理规定了一个内部队列`PromiseJobs`(微任务队列)
* 队列先进先出
* 在其他JS引擎中的任务运行完成后，才会开始执行微任务队列

### 未处理的rejection

## async/await
使用promise的一种特殊语法

### async function
```js
async function f() {
    return 1;
}

f().then(alert); // 1
```
`async`这个单词表示这个函数总是返回一个promise。其他的值被自动包含在resolved的promise中。

### await
`await`关键词只在`async`函数内工作
```js
// 只在async函数内工作
let value = await promise;
```
```js
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!")
        }, 1000);
    });

    // 等待，直到promise resolve
    let result = await promise;

    alert(result); // done!

}

f();
```
`await`会暂停函数，直到promise状态变为`settled`
> 不能在普通函数中使用await

```js
async function showAvatar() {

    // 读取github用户信息
    let githubResponse = await fetch(`https://api.github.com/users/`);
    let githubUser = await githubResponse.json();

    // 显示头像
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // 等待3秒
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;

}

showAvatar();
```

### Error处理
使用try...catch捕获error
```js
async function f() {
    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
        alert(err);
    }
}

f(); // TypeError: Failed to fetch
```
没有使用try...catch时，将会返回rejected，可以通过生成的promise调用catch来处理error
```js
async function f() {
    let response = await fetch('http: no-such-url');
}

f().catch(alert); // TypeError: Failed to fetch
```

### 作业
```js
// 用async/await重写
async function loadJson(url) {

    let response = await fetch(url);

    if (response.status == 200) {
        let responseUrl = await response.json();
        return responseUrl;
    }
    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404

// 使用 async/await 重写 "rethrow"
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {

    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    }
    throw new HttpError(response.status);
}

// 询问用户名，直到 github 返回一个合法的用户
async function demoGithubUser() {
    let user;
    while(true) {
        let name = prompt("Enter a name?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break; // 没有error，退出循环
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                // 抛出
                alert("No such user, please reenter.");
                return demoGithubUser();
            } else {
                // 未知error，再次抛出
                throw err;
            }
        };
    }

    alert(`Full name: ${user.name}`);
    return user;
}

demoGithubUser();

// 作业3
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
// ……这里你应该怎么写？
// 我们需要调用 async wait() 并等待以拿到结果 10
// 记住，我们不能使用 "await"
    wait().then(result => alert(result));
}

f();
```
---
# Generator，高级iteration

## generator
按需一个接一个的返回多个值

### generator函数
```js
// 示例
function* generatorSequence() {
    yield 1;
    yield 2;
    return 3;
}
```
generator在被调用时，会返回一个叫做`generator object`的特殊对象
* 调用生成器函数会产生一个**生成器对象**
* 生成器对象一开始处于暂停执行的状态
* 生成器实现了`Iterator`接口，因此可以使用`next()`方法
* 生成器在初次调用`next()`方法之后开始执行

##### 通过yield中断执行
生成器函数遇到`yield`关键字之后，执行会停止，函数作用域的状态会被保留
* 在生成器对象上调用`next()`恢复执行

### generator是可迭代的
```js
let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }

};

alert([...range]); // 1,2,3,4,5
```
### generator组合
```js
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

function* generatePasswordCodes() {

    // 0...9
    yield* generateSequence(48, 57);

    // A...Z
    yield* generateSequence(65, 90);

    // a...z
    yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str);
// 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```
yield*指令将执行**委托**给另外一个generator

### `yield`是一条双向路
调用`generator.next(arg)`，能够将参数arg传递到generator内部
```js
function* gen() {
    let result = yield "2+2=?";

    alert(result);
}

let generator = gen();

let question = generator.next().value;

generator.next(4); // 将结果传递进去
```
### generator.throw
```js
function* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)

        alert(result);
    } catch(e) {
        alert(e); // 显示这个 error
    }   
}

let generator = gen();

let question = generator.next().value;
// generator.next(4);

generator.throw(new Error("The answer is not found in my database")); // (2)
```
### generator.return
完成执行并返回给定的value

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```

##### 提前终止生成器
1. `return()`
    * 所有生成器都有`return()`方法
    * 强制生成器进入关闭状态，且无法恢复
2. `throw()`
    * 会在暂停的时候将一个提供的错误注入到生成器对象中，如果错误未处理，生成器就会关闭
    * 如果生成器函数**内部**处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行

### 作业
```js
let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073

function* pseudoRandom(seed) {
    let value = seed;

    while(value) {
        value = value * 16807 % 2147483647;
        yield value;
    }
};
```

## 异步迭代和generator

### 异步可迭代对象
1. 使用`Symbol.asyncIterator`取代`Symbol.iterator`
2. next()方法应该返回一个`promise`
   1. 应该使用`async next()`
3. 使用`for await (let item of iterable)`循环来迭代异步可迭代对象
   1. 记得使用`await`
```js
let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {

                //使用await返回一个promise
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

async function f() {
    for await (let value of range) {
        alert(value);
    }
}

f();
```
> Spread语法`...`无法异步工作

### 回顾生成器`generator`
```js
function* gen(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let value of gen(1, 10)) {
    alert(value);
}
```
```js
let range = {
    from:1,
    to:5,

    // 创建一个生成器函数，使其返回一个generator
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

for (let value of range) {
    alert(value);
}
```

### 异步generator(finally)
```js
async function* gen(start, end) {

    for (let i = start; i <= end; i++) {

        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;

    }

}

(async () => {

    let generator = gen(1, 5);
    for await (let value of generator) {
        alert(value);
    }

})();
```
#### 异步可迭代对象range

```js
let range = {
    from: 1,
    to: 5,

    // 创建一个返回promise的生成器函数
    // 和[Symbol.asyncIterator]: async function*() {..} 的意思一致
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
                //使用await返回一个promise
                await new Promise(resolve => setTimeout(resolve, 1000));

                yield value;
        }
    }
};

async function f() {
    for await (let value of range) {
        alert(value);
    }
}

f();
```
### 实际案例
```js
async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while(url) {
        const response = await fetch(url, {
            headers: {"User-Agent": 'Our script'},
        });

        const body = await response.json();

        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        nextPage = nextPage?.[1];

        url = nextPage;

        for (let commit of body) {
            yield commit;
        }
    }
}

(async () => {
    let count = 0;

    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
        console.log(commit.author.login);

        if (++count == 100) {
            break;
        }
    }
})();
```
---
# 模块

## 模块(Module)简介

### 什么是模块?

一个模块就是一个文件，或者一个脚本

* export 关键字标记了可以从当前模块外部访问的变量和函数
* import 关键字允许从其他模块导入功能

```js
// one.js 文件
// export 表示该函数可以在外部被调用访问
export function one() {
    alert(1);
}
```

```html
<script type="module">
    // 引用模块的script标签必须带有type="module"
    import { one } from '/one.js';
    one(); // 1
</script>
```

### 核心功能

* 始终使用`use strict`

#### 模块级作用域

两个`type="module"`的脚本之间，无法看到彼此的顶级变量

```html
<script type="module">
  // 变量仅在这个 module script 内可见
  let user = "John";
</script>

<script type="module">
  alert(user); // Error: user is not defined
</script>
```

#### 模块代码仅在第一次导入时被解析

模块在被导入时解析，并传入到所有的导入中

```js
// admin.js
export let admin = {
    name: "John",
};
```

```html
<script type="module">
    import { admin } from './admin.js';
    admin.name = "Pete";
</script>
<script type="module">
    import { admin } from './admin.js';
    alert(admin.name); // admin.name
</script>
```

在一个脚本中针对模块的修改，会同步到另外一个模块


#### import.meta

```html
<script type="module">
    alert(import.meta.url); // 脚本的 URL
    // 对于内联脚本来说，则是当前 HTML 页面的 URL
</script>
```

#### 在一个模块中, `this`是undefined

### 浏览器特定功能

#### 模块脚本是延迟的

* 模块脚本会与其他资源并行加载
* 模块脚本会等到HTML文档完全准备就绪然后才会运行
* 脚本的相对顺序会影响他们的执行顺序

```html
<script type="module">
    alert(typeof button); // object
    // 因为模块要等HTML文档完全准备就绪才运行，所以它会看到下面的button
</script>

<script>
    alert(typeof button); // undefined
    // 常规脚本会立即运行
</script>

<button id="button">Button</button>
```

#### Async适用于内联脚本

* 对于非模块脚本，async特性仅适用于外部脚本
  * 异步外部脚本会在准备好后立即运行，独立于其他HTML文档
* 对于模块脚本
  * 内部模块脚本也可以使用async特性

#### 外部脚本

1. 具有相同src的外部脚本仅运行一次
2. 从另一个源获取的外部脚本需要`CORS header`
   * 远程服务器必须提供表示允许获取的header`Access-Control-Allow-Origin`

#### 不允许裸模块

`import`必须给出相对或绝对的URL路径

#### 兼容性, `nomodule`

旧版本浏览器不理解`type='module'`，可以使用nomodule来标识其他脚本

### 构建工具

通常在开发中会使用一些特殊工具，例如`webpack`，将各个模块打包到一起，然后部署到生产环境的服务器。

* 构建工具做以下这些事儿：
  1. 从一个打算放在 HTML 中的 <script type="module"> “主”模块开始。
  2. 分析它的依赖：它的导入，以及它的导入的导入等。
  3. 使用所有模块构建一个文件（或者多个文件，这是可调的），并用打包函数（bundler function）替代原生的 import 调用，以使其正常工作。还支持像 HTML/CSS 模块等“特殊”的模块类型。
  4. 在处理过程中，可能会应用其他转换和优化：
     * 删除无法访问的代码。
     * 删除未使用的导出（“tree-shaking”）。
     * 删除特定于开发的像 console 和 debugger 这样的语句。
     * 可以使用 Babel 将前沿的现代的 JavaScript 语法转换为具有类似功能的旧的 JavaScript 语法。
     * 压缩生成的文件（删除空格，用短的名字替换变量等）。

## 导入和导出

### 在声明前导出
使用`export`来标记任意声明为导出（变量，函数，类都可以）
* 被标记的声明可以在外部引用或修改

### 导出与声明分开
```js
function sayHi(user) {
    alert(`hello! ${user}`);
}

function sayBye(user) {
    alert(`Bye! ${user}`);
}

export {sayBye, sayHi};
```
### import *
```js
import * from './say.js'
```
* 将某个脚本中所有支持导出的内容全部导出

### import as
```js
// 自定义名字
import {sayHi as hi, sayBye as bye} from './say.js'
```
### export as
```js
function sayHi(user) {
    alert(`hello! ${user}`);
}

function sayBye(user) {
    alert(`Bye! ${user}`);
}

export {sayHi as hi, sayBye as bye};
```
### export default
如果一个模块中仅有一个声明(变量，函数或者类)，可以使用默认导出
```js
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// main.js
import User from './user.js' 
// 不需要使用花括号{}
```
使用默认导出还是命名导出，建议团队多人协作时保持统一风格

### 重新导出
```js
// 将sayHi从say.js中再导出一次
export {sayHi} from './say.js'
```
在希望通过某个单个入口暴露包功能的场景下适用
```js
// 📁 auth/index.js

// 导入 login/logout 然后立即导出它们
import {login, logout} from './helpers.js';
export {login, logout};

// 将默认导出导入为 User，然后导出它
import User from './user.js';
export {User};
...
```
这样使用该package的人可以import {login} from './auth/index.js'。
* 默认导出的重新导出，需要明确写明`export {default as User}`才可以
* `export * from './user.js'`只会导出命名导出的内容

## 动态导入
之前的静态导入中，语法都比较简单且严格

### import() 表达式
`import(module)`表达式加载并返回一个promise
```js
// say.js
export function sayHi(user) {
    alert(`Hello! ${user}`);
};

export function sayBye(user) {
    alert(`Bye! ${user}`);
};

export default class {
    constructor(name) {
        this.name = name;
    }
};

export {sayHi as hi, sayBye as bye};
```
```html
<script>
// main.html
    async function load(user) {
        let say = await import('/say.js');

        say.hi(user);
        say.bye(user);
        alert(say.default);
    }

    load("Dennis");

</script>
```

---

# 杂项

## Proxy和Reflect

### Proxy

```js
let proxy = new Proxy(target, handler);
```

* target 要包装的对象（可以是任何东西，包括函数）
* handler 代理配置:带有捕捉器的对象。
  * get捕捉器用于读取target的属性
  * set捕捉器用于写入target的属性

```js
let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
alert(target.test); // 5

alert(proxy.test);  // 5

for (let key in proxy) alert(key);  // test
for (let key in target) alert(key); // test
```

该示例没有定义捕捉器，因此proxy将所有操作都直接转发给了target对象。

* 没有任何捕捉器，这种proxy被称为target的透明包装器

捕捉器的内部方法除了get和set之外，还有很多，这里不一一展开，后续使用过程中查询文档

* get 读取属性
* set 写入属性
* has in操作符
* deletePropertoy delete操作符
* apply 函数调用
* construct new操作符
  ...

### 带有get捕获器的默认值

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    // 这个案例的逻辑有点奇怪
    // 为什么元素在数组中之后，要把该元素当做索引进行查询呢？
    get(target, prop) {
        if (prop in target) {
        return target[prop];
        } else {
        return 0; // 默认值
        }
    }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0（没有这个数组项）
```

```js
let dictionary = {
    "Hello": "Hola",
    'Bye': 'Adios'
}

dictionary = new Proxy(dictionary, {
    get (target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    }
});

alert(dictionary["nihao"]); // nihao 未被翻译
alert(dictionary["Hello"]); // hola
```

### 使用set捕捉器进行验证

```js
set(target, property, value, receiver)
```

* target 目标对象，该对象作为第一个参数传递给new Proxy
* property 目标属性名称
* value 目标属性的值
* receiver 和get捕捉器类似，仅与setter访问器属性相关

```js
let numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, val) {
        if (typeof val === 'number') {
            target[prop] = val;
            return true;
        } 
        return false;
    }
});

numbers.push(1);
numbers.push(2);

alert(numbers);

numbers.push("test"); // TypeError
```

> 注意: set在成功时，必须返回true

### 使用`ownkeys`和`getOwnPropertyDescrptor`进行迭代

使用ownkeys捕捉器拦截`for...in`对对象的遍历

```js
let user = {
    name: 'John',
    age: 30,
    _password: '***'
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// ownkeys过滤掉了_password
for (let key in user) alert(key); // name, age

// 对这些方法的效果相同：
alert( Object.keys(user) ); // name,age
alert( Object.values(user) ); // John,30
```

`Object.keys`仅返回带有`enumerable`标志的属性，`enumerable: false`的属性不会被返回。

### 具有`deleteProperty`和其他捕捉器的受保护属性

```js
let user = {
    name: 'John',
    age: 30,
    _password: '***'
};

user = new Proxy(user, {
    // 拦截读取属性列表
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    },

    // get 拦截属性读取
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
    },
    // set 拦截属性写入
    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },
    // 拦截属性删除
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
                delete target[prop];
            return true;
        }
    }
});

// ownkeys过滤掉了_password
for (let key in user) alert(key); // name, age

// get不允许读取_password
try {
    alert(user._password);
} catch(e) {
    alert(e.message);
}

// set不允许修改_password
try {
    user._password = '11111';
} catch(e) {
    alert(e.message);
}

// deleteProperty不允许删除_password
try {
    delete user._password;
} catch(e) {
    alert(e.message);
}
```

### 带有has捕捉器的`in range`

```js
let range = {
    from: 1,
    to: 10
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.from && prop <= target.to;
    }
})

alert(100 in range); // false
alert(1 in range);   // true
```

### 包装函数`apply`

* `apply(target, thisArg, args)`
  * target 目标对象
  * thisArg this的值
  * args 参数列表
    包装函数不会转发属性读取/写入操作，包装之后就失去了对原始函数属性的访问。
    Proxy可以将所有东西转发到目标对象。

```js
function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArgs, args) {
            setTimeout(() => target.apply(thisArgs, args), ms);
        }
    });
}

function sayHi(user) {
    alert(`Hello! ${user}`);
}

alert(sayHi.length); // 1 不影响对原始属性的访问

sayHi("Dennis"); // Hello! Dennis
```

### Reflect

一个内建对象，可以简化`Proxy`的创建

* 对于每个可被 Proxy 捕获的内部方法，在 Reflect 中都有一个对应的方法，其名称和参数与 Proxy 捕捉器相同。

```js
let user = {
  name: "John",
};

user = new Proxy(user, {
    // 这里get和set仅显示一条消息提醒，未做任何其他操作
    get(target, prop, receiver) {
        alert(`GET ${prop}`);
        return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
        alert(`SET ${prop}=${val}`);
        return Reflect.set(target, prop, val, receiver); // (2)
    }
});

let name = user.name; // 显示 "GET name"
user.name = "Pete"; // 显示 "SET name=Pete"
```

#### 代理一个getter

```js
let user = {
    _name: "Guest",
    get name() {
        return this._name;
    }
};

let userProxy = new Proxy(user, {
    get(target, prop, receiver) { // receiver = admin

        // 这种情况下，由于admin对象没有name方法，会在对象的原型中寻找，此时target = user
        // return target[prop] 

        // 这里的receiver指定了this的指向 -> admin
        return Reflect.get(target, prop, receiver); // (*) target = admin

        // 更短的呈现，依然奏效
        return Reflect(...arguments);
    }
});


let admin = {
    __proto__: userProxy,
    _name: "Admin"
};

alert(admin.name); // Admin
```

### Proxy的局限性

#### 内建对象: 内部插槽(Internal slot)

* 内建对象具有"内部插槽"，这些对象的访问无法被代理（Array除外）

* 私有字段，也是通过内部插槽实现的

#### Proxy != target

* 代理对象和原始对象不同，不是同一个对象

### 可撤销Proxy

```js
// 一个可撤销的代理，没有任何捕捉器
let {proxy, revoke} = Proxy.revocable(target, handler);
// 返回一个带有proxy和revoke函数的对象，以将其禁用
// 随时通过revoke()将其禁用
```

* 示例

```js
let object = {
    data: 'Valuable data'
};

let {proxy, revoke} = Proxy.revocable(object, {});

alert(proxy.data); // Valuable data

revoke(); // 撤销代理
// 从代理中删除对目标对象的所有内部引用，因此它们之间再无连接。

alert(proxy.data); // Cannot perform 'get' on a proxy that has been revoked
```

将`revoke`绑定到对应代理`proxy`

```js
// 使用WeakMap的原因是，它不阻止垃圾回收
let revokes = new WeakMap();

let object = {
    data: 'Valuable data'
};

let {proxy, revoke} = Proxy.revocable(object, {});

alert(proxy.data); // Valuable data

// 通过weakmap将对应的revoke绑定到proxy
revokes.set(proxy, revoke);

// 提取revoke
revokeProxy = revokes.get(proxy);

revokeProxy(); // 撤销代理

alert(proxy.data);
```

### 作业

```js
// 作业1 读取不存在的属性时出错
let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        /* 你的代码 */
        get(target, prop) {
            if (prop in target) {
                return target[prop];
            } else {
                throw new ReferenceError(`Property doesn't exist: ${prop}`);
            }
        }
    });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Property doesn't exist: "age"

// 作业2 访问 array[-1]
let array = [1, 2, 3];

array = new Proxy(array, {
    /* 你的代码 */
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = target.length + +prop;
        } 
        return Reflect.get(...arguments);
    }
});

alert( array[1] );  // 2
alert( array[-2] ); // 2

// 作业3 可观察的（Observable）

```

## Eval: 执行代码字符串

```js
let code = "alert('hello! world!')";
eval(code); // hello! world!
```

现在使用的比较少

## 柯里化(Currying)

```js
// 执行柯里化转换
function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

// 用法
function sum(a, b) {
    return a +b;
}

let curriedSum = curry(sum);

alert(curriedSum(1)(3)); // 4
```

#### loadsh的库`_.curry`

```js
function sum(a, b) {
    return a +b;
}

let curriedSum = _.curry(sum); // 使用loadsh的_.curry

alert(curriedSum(1, 3)); // 4
alert(curriedSum(1)(2)); // 3
```

#### 柯里化的好处

1. 柯里化之后的函数方法依然可以正常调用
2. 可以很方便的生成部分应用函数

### 高级柯里化实现

```js
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
alert( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
alert( curriedSum(1)(2)(3) ); // 6，全柯里化
```

## Reference Type

一种深入的语言特性，了解为主

## BigInt

一种特殊类型的数字，支持任意长度

```js
// 创建方式:在一个整数字面量后面加 n 或者调用 BigInt 函数
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // 与 10n 相同
```

### 数学运算

```js
// 大多数情况下和常规数字一样
alert(1n + 2n); // 3
```

* 但不能和常规数字一起混合使用

> 不支持一元加法

```js
alert(+1n); // Cannot convert a BigInt value to a number
```

### 比较运算

* 可以和常规数字一起比较`>`和`<`
* 但 不能严格相等

```js
alert(1n === 1); //false
alert(1n == 1);  //true
```

### 布尔运算

和常规数字一样

## Unicode 字符串内幕

---

# 浏览器: 文档, 事件, 接口

## 浏览器环境，规格

根对象: window

1. `window`是JS代码的全局对象
2. 代表浏览器窗口

```js
function sayHi() {
    alert("Hello");
}

window.sayHi();

alert(window.innerHeight); // 内部窗口高度
```

### 文档对象模型(DOM)

* `document`是页面的主要"入口点"，使用它来创建或更改页面上的任何内容。

```html
<body>
    <script>

        // 将背景颜色修改为红色
        document.body.style.background = "red";

        // 在 1 秒后将其修改回来
        setTimeout(() => document.body.style.background = "", 1000);

    </script>
</body>
```

### 浏览器对象模型(BOM)

dom之外的所有内容的其他对象

* navigator 浏览器和操作系统的背景信息
* location 允许我们读取当前URL
  等等

## DOM树

DOM将HTML表示为标签的树形结构

* 标签被称为元素节点
* 元素内的文本形成文本节点 `#text`

#### 自动修正：浏览器会自动修正HTML

### 其他节点类型

除了元素和文本节点，注释也是DOM的一部分

> HTML中的所有内容都会成为DOM的一部分

## 遍历DOM


### 在最顶层: documentElement和body

* `<html> = document.documentElement`
* `<body> = document.body`
* `<head> = document.head`

> 脚本无法访问运行时不存在的元素
> 如果一个脚本在`<head>`中，那么无法访问到`document.body`元素
> DOM中的`null`意味着不存在

### 子节点: childNodes, firstChild, lastChild

* 子节点: 给定元素的子元素
* 子孙元素: 给定元素中的所有元素

#### `childNodes`列出所有子节点

```js
document.body.style.background = "red";

setTimeout(() => document.body.style.background='', 1000);

// 显示文本节点和元素
for (let i = 0; i < document.body.childNodes.length; i++) {
    alert(document.body.childNodes[i]);
}
```

#### `firstChild`和`lastChild`分别是第一个和最后一个子元素

#### DOM集合

`childNodes`是一个**集合**(一个类数组的可迭代对象)

1. 可以使用`for...of`
2. 但无法使用数组方法

> DOM集合是只读的
> 实时的
> 不要使用`for...in`遍历，使用`for...of`

### 兄弟节点和父节点

* 下一个兄弟节点 `nextSibling`
* 上一个兄弟节点 `previousSibling`
* 父节点 `parentNode`

### 纯元素导航

对于很多任务来说，我们并不想要文本节点或注释节点。我们希望操纵的是代表标签的和形成页面结构的元素节点。
只考虑元素节点的导航链接

* `children` 仅作为元素节点的子节点
* `firstElementChild`, `lastElementChild` 第一个/最后一个子元素
* `previousElementSibling`, `nextElementSibling` 前/后兄弟元素
* `parentElement` 父元素

```js
// 只显示元素
for (let elm of document.body.children) {
    console.log(elm);
}
```

### 更多链接, 例如: 表格

`<table>`元素支持 (除了上面给出的，之外) 以下属性:

* `table.rows` 每一行`<tr>`元素的集合
* `table.caption/tHead/tFoot` 引用元素`<caption>`, `<thead>`, `<tfoot>`
  `<thead>`，`<tfoot>`，`<tbody>` 元素提供了`rows`属性：
* `tbody.rows` 表格内部`<tr>`元素的集合

`<tr>`：

* `tr.cells` 给定`<tr>`中的`<td>`和`<th>`单元格的集合
* `tr.sectionRowIndex` 给定的`<tr>`在封闭的`<thead>/<tbody>/<tfoot>`中的位置（索引）。
* `tr.rowIndex` 在整个表格中`<tr>`的编号（包括表格的所有行）。

`<td>`和`<th>`：

* `td.cellIndex` 在封闭的`<tr>`中单元格的编号。

### 作业
```js

// 作业1
alert(document.body.children[1]);
//alert(document.body.childNodes[3]);

alert(document.body.children[2]);
alert(document.body.children[2].lastElementChild);


// 作业2 兄弟节点

// 作业3
for (let i=0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}
```
## 搜索: getElement*, querySelector*

### document.getElementById 或者只用id
```html
<div id="'elem">
    <div id="elem-content">Element</div>
</div>
<script>

    // 获取该元素
    let elem = document.getElementById('elem');

    // 修改属性
    elem.style.background = "red";
    // 可以直接使用elem，elem是对id='elem'的DOM元素的引用
    // 但不推荐

</script>
```
* 如果没有一个和id同名的变量，那么它具有优先权

> 不要使用不要直接使用以id命名的全局变量来访问元素

### querySelectorAll
`elem.querySelectorAll(css)`返回给定的CSS选择器匹配的所有元素
```html
<ul>
    <li>The</li>
    <li>test</li>
</ul>
<ul>
    <li>has</li>
    <li>passed</li>
</ul>
<script>

    let elements = document.querySelectorAll('ul > li:last-child');

    for (let elem of elements) {
        alert(elem.innerHTML); // test, passed
    }
    // 支持伪类
</script>
```
### querySelector
`querySelector(css)`返回给定CSS选择器的第一个元素

### matches
`elem.matches(css)`返回true或false

### closest
`elem.closest(css)`查找与CSS选择器匹配的最近的标签（向上查找）

### getElementsBy*
> 注意有s
* `elem.getElementsByTagName(tag)` 查找具有给定标签的元素
* `elem.getElementsByClassName(classname)` 返回具有给定CSS类的元素
* `document.getElementsByName(name)` 返回具有给定name特性的元素, 很少使用
> 以上方法返回的是一个集合

### 实时的集合
`getElementsBy*`返回的都是一个**实时的集合**
`querySelectorAll`返回的是一个**静态的集合**

### 作业
```js
```

## 节点属性: type, tag和content

### DOM节点类
每个DOM节点都属于相应的内建类

* EventTarget: 一切的根类(抽象类)
* Node: DOM节点的基础(抽象类)
* Document: DOM的入口, 一般会被`HTMLDocument`继承
* CharaData: 一个抽象类，被以下类继承
    * Text: 对应元素内部文本的类
    * Comment: 注释类
* Element: DOM元素类的基础
* HTMLDocument: 所有元素的基础类

> console.log(elem)与console.dir(elem)
```js
// 显示DOM树
console.log( document.body );

// 将元素显示为DOM对象，及相关属性
console.dir( document.body );
```
> 规范中的IDL(一种特殊的接口描述语言，用来描述DOM类)

### `nodeType`属性
现在用的比较少, 1表示元素节点，3表示文本节点

### 标签nodeName和tagName
```js
// 除了元素节点，也使用于其他类型的节点(text, comment等)
alert( document.body.nodeName ); // BODY

// 仅适用于ELement节点
alert( document.body.tagName ); // BODY
```
### innerHTML: 内容
```js
// 展示元素节点中的内容
alert(document.body.innerHTML);

// 也可以修改节点中的内容
document.body.innerHTML = "The new Body!";
```
小心：`innerHTML+=` 会进行完全重写

### outerHTML: 元素的完整HTML
```html
<div id="elem">Hello <b>World</b></div>

<script>
    alert(elem.outerHTML); 
    // <div id="elem">Hello <b>World</b></div>
</script>
```
注意：与 innerHTML 不同，写入 outerHTML 不会改变元素。而是在 DOM 中替换它。

### nodeValue/data: 文本节点内容
* innerHTML仅对元素节点有效
两者在实际使用中几乎相同
```html
Hello
<!--Comment-->
<script>
    let text = document.body.firstChild;
    alert(text.nodeValue); //Hello

    let comment = text.nextSibling;

    alert(comment.data); // Comment
</script>
```
### textContext: 纯文本
仅对元素内的文本有访问权限
* 使用该方法进行写入比较好用，它允许以"安全方式"写入文本

### `hidden`属性
指定元素是否可见，可以在HTML中使用
```html
Hello
<!--Comment-->
<div hidden>"你好"</div>
<div id="elem">"你好嘛？"</div>
<script>
    
    let elem = document.getElementById(elem);
    elem.hidden = true;
    // 可以通过赋值来修改DOM是否可见

</script>
```

## 特性和属性

### DOM属性
DOM节点是常规的JS对象，我们可以更改他们
```js
// 为某个DOM节点创建一个新的属性
document.body.myData = {
    name: 'Caesar',
    title: 'Imperator',
}

// 为其添加方法
document.body.sayTagName = function() {
    alert(this.tagName);
}

alert(document.body.myData.title); // Imperator

document.body.sayTagName(); // BODY

// 甚至可以修改内建属性的原型
// 修改Element.prototype为所有元素添加新的方法
Element.prototype.sayHi = function() {
    alert(`Hello! I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello! I'm HTML
document.body.sayHi(); // Hello! I'm BODY
```

### HTML特性
当一个元素有id或其他**标准的**特性，就会生成对应的DOM属性。
**非标准的**特性则不会。
```html
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // 非标准的特性没有获得对应的属性
    alert(document.body.something); // undefined
  </script>
</body>
```
> 注意: 一个元素的标准特性对另一个元素来说可能是未知的

一些访问特性的方法
* `elem.hasAttribute(name)`: 检查特性是否存在
* `elem.getAttribute(name)`: 获取这个特性值
* `elem.setAttribute(name, value)`: 设置这个特性值
* `elem.removeAttribute(name)`: 移除这个特性
* `elem.attributes`: 所有特性的集合, 具有name和value属性

HTML特性的特征
1. 大小写不敏感
2. 值总是字符串类型

### DOM属性-HTML特性同步
一般情况下，改变特性，对应的属性也会发生改变，反之亦然。
* 例外情况：input只能从特性同步到属性，反过来不行
### DOM属性是多类型
HTML特性的值总是字符串，但DOM属性的值则可以是其他类型。

### 非标准的特性, dataset
> 所有以`data-`开头的特性均被保留供程序员使用。他们可以在`dataset`属性中使用
```html
<body data-about="Elephants">
    <script>
        alert(document.body.dataset.about); // Elephants
        // 特性data-about
        // 在属性中调用时，使用dataset.about
    </script>
</body>
```
#### 大多数情况下，优先使用DOM属性

### 作业
```html
<body> 
<div data-widget-name="menu">Choose the genre</div>
<script>

    let elem = document.querySelector('[data-widget-name]');
    alert(elem.innerHTML);
    alert(elem.dataset.widgetName);
    alert(elem.getAttribute('data-widget-name'));

</script>
</body>
```
```html
<a name="list">the list</a>
<ul>
    <li><a href="http://google.com">http://google.com</a></li>
    <li><a href="/tutorial">/tutorial.html</a></li>
    <li><a href="local/path">local/path</a></li>
    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
    <li><a href="http://nodejs.org">http://nodejs.org</a></li>
    <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
    // 为单个链接设置样式
    let links = document.querySelectorAll('a');

    for (let link of links) {

        let href = link.getAttribute('href');

        if (!href) continue;

        if (!href.includes("://")) continue;

        if (href.startsWith('http://internal.com')) continue;

        link.style.color = 'orange';

    }
</script>
```

## 修改文档

### 创建一个元素
* `document.createElement(tag)`
    * 创建一个新**元素节点**
* `document.createTextNode(text)`
    * 用给定的文本创建一个**文本节点**

#### 创建一条消息
```html
<body>
    <script>
        // 1. 创建 <div> 元素
        let div = document.createElement('div');
        
        // 2. 将元素的类设置为 "alert"
        div.className = "alert";
        
        // 3. 填充消息内容
        div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
        
        // 插入
        document.body.append(div);
    </script>
</body>
```
* 一些其他插入方法
    * `node.append()`: 在`node`**末尾**插入节点或字符串
    * `node.prepend()`: 在`node`**开头**插入节点或字符串
    * `node.before()`: 在`node`**前面**插入节点或字符串
    * `node.after()`: 在`node`**后面**插入节点或字符串
    * `node.replaceWith()`:将`node`替换为给定的字符串或节点

### insertAdjacentHTML/Text/Element
* `insertAdjancentHTML(where, html)`
    * `"beforebegin"`: 将`html`插入到`elem`自己的前面
    * `"afterbegin"`: 将`html`插入到`elem`第一个子节点之前
    * `"beforereend"`: 将`html`插入到`elem`第一个子节点之后
    * `"afterreend"`: 将`html`插入到`elem`自己的后面
```html
<div id="div"></div>
<script>
    div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
    div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>
```

### 节点移除
`node.remove()`
```js
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
    
document.body.append(div);

// 节点在1秒钟之后消失
setTimeout(() => div.remove(), 1000);
```
> 所有的插入方法都会自动从旧位置删除该节点

### 克隆节点: cloneNode
* `elem.cloneNode(true)`
    * 克隆一个包含所有特性和子元素的"深"克隆
* `elem.cloneNode(false)`
    * 克隆不包含子元素
```HTML
<div class="alert" id="div">
    <strong>Hi there!</strong> You've read an important message.
</div>
<script>
    
    let div = document.getElementById('div');

    let div2 = div.cloneNode(true);
    div2.querySelector('strong').innerHTML = 'Bye there!';

    div.after(div2); // 在已有DIV的后面显示克隆

</script>
```
### DocumentFragment
一个特殊的DOM节点对象，用作来传递节点列表的包装器。
```html
<ul id="ul"></ul>

<script>
    function getListContent(val) {
        let fragment = new DocumentFragment();

        for (let i=1; i<val; i++) {
            let li = document.createElement('li');
            li.append(i);
            fragment.append(li); // 这里插入的是<li>i</li>
        }

        return fragment;
    }
    // DocumentFragment很少被显示使用

    ul.append(getListContent(5));
</script>
```

### 老式的insert/remove方法
> 用于理解旧版本，目前不适用于新代码的开发中


### 作业

```js
function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

function clear(elem) {
    elem.innerHTML = '';
}
```
```html
<ul id="ul"></ul>
<script>
    let elem = document.querySelector('ul');
    
    let value = prompt("请输入列表内容", "test");
    while (value) {
        let li = document.createElement('li');
        li.innerHTML = value;
        elem.append(li);
        value = prompt("请输入列表内容", "test");
    }
</script>
```
```html
<ul id="container"></ul>
<script>

    let data = {
        "Fish": {
            "trout": {},
            "salmon": {}
        },

        "Tree": {
            "Huge": {
            "sequoia": {},
            "oak": {}
            },
            "Flowering": {
            "apple tree": {},
            "magnolia": {}
            }
        }
    };

    let container = document.getElementById('container');
    createTree(container, data); // 将树创建在 container 中

    function createTree(elem, obj) {
        elem.append(createTreeDom(obj));
    }

    function createTreeDom(obj) {
        
        // 创建ul标签
        let ul = document.createElement('ul');

        // 如果长度为0，则直接返回
        if (!Object.keys(obj).length) return;

        // 遍历对象，并将key赋值进列表
        for (let key in obj) {
            let li = document.createElement('li');
            li.innerHTML = key;


            // 这里处理嵌套对象
            let childrenUl = createTreeDom(obj[key]);
            // 如果嵌套对象中有内容，则添加
            if (childrenUl) {
                li.append(childrenUl);
            }

            // 最后将list添加进ul中
            ul.append(li);
        }

        // 返回列表
        return ul;
    }

</script>
```
```html
<ul>
    <li>Animals
        <ul>
        <li>Mammals
            <ul>
            <li>Cows</li>
            <li>Donkeys</li>
            <li>Dogs</li>
            <li>Tigers</li>
            </ul>
        </li>
        <li>Other
            <ul>
            <li>Snakes</li>
            <li>Birds</li>
            <li>Lizards</li>
            </ul>
        </li>
        </ul>
    </li>
    <li>Fishes
        <ul>
        <li>Aquarium
            <ul>
            <li>Guppy</li>
            <li>Angelfish</li>
            </ul>
        </li>
        <li>Sea
            <ul>
            <li>Sea trout</li>
            </ul>
        </li>
        </ul>
    </li>
</ul>
<script>
    // 查找所有的li标签集合
    let elements = document.querySelectorAll('li');

    for (elem of elements) {
        // 获取子节点的数量
        let listCount = elem.querySelectorAll('li').length;
        // 如果没有子节点，跳过本次循环
        if (!listCount) continue;

        // 如果有子节点，则展示数量
        elem.firstChild.data += ' [' + listCount + ']';
    }
</script>
```

```html
 <table>
    <thead>
        <tr>
            <th>MO</th>
            <th>TU</th>
            <th>WE</th>
            <th>TH</th>
            <th>FR</th>
            <th>SA</th>
            <th>SU</th>
        </tr>
    </thead>
</table>
<script>

    function createCalendar(year, month) {
        
        let table = document.querySelector("table");
        let tbody = document.createElement("tbody");
        table.append(tbody);

        // 1. 确定当月需要几行?就添加几个tr
        // 根据当月第一天处在周几进行判断
        let mon = month-1;
        let date = new Date(year, mon);
        
        // 获取第一天是周几
        let firstWeekday = getDay(date);

        // 获取当月有多少天
        let daysInMonth = getDaysInMonth(date);

        // 得到第一天需要填充的位置
        trLine = Math.ceil((daysInMonth - (6-firstWeekday)) / 7) + 1;

        // 添加格子，每行7个单元格
        for (let i=0; i < trLine; i++) {
            let tr = document.createElement('tr')
            tbody.append(tr);
            for (let j=0; j<7; j++) {
                let td = document.createElement("td");
                tr.append(td);
            }
        }

        // 获取格子数量，第一天从第几个格子开始?
        let firstTd = getDay(date)-1; // 从0开始基数
        for (let k=1; k<=daysInMonth; k++) {
            let tbody = document.querySelector('tbody');
            let td = tbody.querySelectorAll('td');
            td[firstTd].innerHTML += k;
            firstTd++;
        }

        // 把周日的0变成7
        function getDay(date) {
            let day = date.getDay();
            if (day===0) day = 7;
            return day;
        }

        // 获取当月的总天数
        function getDaysInMonth(date) {
            return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        }

    }

    createCalendar(2022,2)

</script>
```
```html
<div id="clock">
    <span id="hours">hh</span>:<span id="minutes">mm</span>:<span id="seconds">ss</span>
</div>
<button id="start" onclick="clockStart()">Start</button>
<button id="stop" onclick="clockStop()">Stop</button>
<script>
    
    function update() {
        let date = new Date();

        let clock = document.getElementById("clock");


        let hour = date.getHours();
        if (hour<10) hour = '0' + hour;
        clock.children[0].innerHTML = hour;

        let minu = date.getMinutes();
        if (minu<10) minu = '0' + minu;
        clock.children[1].innerHTML = minu;

        let seco = date.getSeconds();
        if (seco<10) seco = '0' + seco;
        clock.children[2].innerHTML = seco;
    }

    let timerId;
    function clockStart() {
        if (!timerId) {
            timerId = setInterval(update, 1000);
        }
        update();
    }

    function clockStop() {
        clearInterval(timerId);
        timerId = null;
    }

</script>
```
```html
<ul id="ul">
    <li id="one">1</li>
    <li id="two">4</li>
</ul>
<script>
    let two = document.getElementById("two");

    two.insertAdjacentHTML("beforebegin", "<li>2</li><li>3</li>");
</script>
```
## 样式和类

### className和classList 
* className: 获取元素的CSS类名称
* classList
  * add: 添加类
  * remove: 移除类
  * toggle: 如果类不存在就添加，存在就移除
  * contains(class): 检查给定类，返回true/false
```html
<body class="main page"> 
   <script>
        console.log(document.body.className); 
        // main page
    

        document.body.classList.add("article");
        console.log(document.body.classList); // 一个特殊的对象
        // ['main', 'page', 'article', value: 'main page article']
   </script>
</body>
```
### 元素样式
* `elem.style` 
  * 对应style特性中所写的内容
```
background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
```

### 充值样式属性
* `elem.style.display`
```js
// 如果设置了body样式，这个则隐藏了样式
document.body.style.display = "none";

// 1秒钟之后，移除设置
setTimeout(() => document.body.style.display="", 1000)
```
* 一个特殊方法，用于删除CSS样式
  * `elem.style.removeProperty('style property')`
* `style.cssText`
  * 进行样式重写
```html
<div id="div">111</div>
<script>
    
    div.style.cssText=`color: red !important;
        background-color: yellow;
        width: 100px;
        text-align: center;
    `;

</script>
</body>
```
### 注意单位
在设置样式时，应该带上单位，否则无效
```js
document.body.style.margin = '20px';
```

### 计算样式: getComputedStyle
* getComputedStyle(element)
  * 返回一个包含元素CSS样式的对象
```js
<style>
    body {
        clip: red;
        margin: 5px;
    }
</style>
<div id="div">111</div>
<script>
    
    let computedStyle = getComputedStyle(document.body);

    alert(computedStyle.color) // rgb(0,0,0)

</script>
```
### 作业
```js
// 在窗口的右上角附近显示一个带有文本 "Hello" 的元素
showNotification({
    top: 10, // 距窗口顶部 10px（默认为 0px）
    right: 10, // 距窗口右边缘 10px（默认为 0px）
    html: "Hello!", // 通知中的 HTML
    className: "welcome" // div 的附加类（可选）
});

function showNotification(obj) {
    div = document.createElement("div");
    
    if (!obj.className) div.classList.add(obj.className);
    
    div.style.top = obj.top + 'px';
    div.style.right = obj.right + 'px';
    div.innerHTML = obj.html;
    
    document.body.append(div)

    // 1.5秒之后移除该元素
    setTimeout(() => {
        div.remove()
    }, 1500);
}
```

## 元素大小和滚动

### offsetWidth/Height
显示元素的width/height，包括边框
```html
<div id="example">
    ...Text...
</div>
<style>
    #example {
        width: 300px;
        height: 200px;
        border: 25px solid #E8C48F;
        padding: 20px;
        overflow: auto;
    }
</style>
<script>
    let div = document.getElementById("example");
    console.log(div.offsetWidth);  // 389
    console.log(div.offsetHeight); // 289
</script>
```

### clientTop/Left
测量元素的边框宽度(border)

### clientWidth/Height
元素边框内区域的大小， 包括`content width`和`padding`，不包含滚动条宽度

### scrollWidth/Height
类似`clientWidth/Height`，但包含滚动出（隐藏）的部分
```js
// 将元素展开到完整内容的高度
element.style.height = `${element.scrollHeight}px`;
```

### scrollLeft/scrollTop
元素隐藏、滚动部分的`width/height`
* scrollTop就是元素已经滚动了多少

### 不要从CSS中获取width/height
优先使用DOM元素的几何属性

## Window大小和滚动

### 浏览器窗口的width/height
* `document.documentElement.clientWidth`
* `document.documentElement.clientHeight`

### 文档的width/height

### 获得当前滚动
* `scrollLeft`
* `scrollTop`

### 滚动:scrollTo, scrollBy, scrollIntoView
* `scrollBy(x, 10)`
  * 滚动至相对于当前位置`(x, y)`的位置
* `scrollTo`
  * 将页面滚动至绝对坐标
* `scrollIntoView(top)`
  * `top=true`，页面滚动，使元素的上边缘与窗口顶部对其
  * `top=false`, 使元素的下边缘与窗口底部对其
  
### 禁止滚动
```js
document.body.style.overflow = "hidden";

// 恢复滚动
document.body.style.overflow = "";
```

## 坐标

两种坐标系

1. 相对于窗口
   * clientX/clientY
2. 相对于文档
   * pageX/pageY
     文档在滚动后，会有超出窗口的部分

### 元素坐标: getBoundingClientRect

* `elem.getBoundingClientRect()`
  * 返回最小矩形的窗口坐标
  * 主要属性如下
    * x/y: 矩形远点相对窗口的X/Y坐标
    * width/height: 矩形的宽/高
    * top/bottom: 顶部/底部边缘的Y坐标
    * left/right: 左/右矩形边缘的X坐标
  * left = x
  * top = y
  * right = x + width
  * bottom = y + height

### elementFromPoint(x, y)

* `document.elementFromPoint(x, y)`: 返回在窗口坐标(x,y)处嵌套最多的元素

```js
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

// 更改样式，并随着滚动窗口，对应的元素会发生变化
elem.style.background = "red";
alert(elem.tagName);
```

### 用于`fixed`定位

```js
let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html) {
let message = document.createElement("div");

// 弹性布局，因此弹出的消息仍然处于刚开始的位置
// 也就是该消息会在窗口的某一个位置不变，即时我们在之后滚动了滚轴
message.style.cssText = "position: fixed; color:red";

let coords = elem.getBoundingClientRect();

// 依赖矩形的坐标位置
message.style.left = coords.left + "px";
message.style.top = coords.bottom + "px";

message.innerHTML = html;

return message;
}

let message = createMessageUnder(elem, "hello world");
document.body.append(message);
setTimeout(() => {
    message.remove();
}, 5000);
```

### 文档坐标
文档坐标与`position:absolute`类似，根据文档进行定位
* pageX: clientY + 文档的垂直滚动出的部分的高度
  * clientY: 坐标距离窗口顶部的高度
* pageY: clientX + 文档水平滚动出的部分的宽度
  * clientX: 坐标距离窗口左侧的宽度
```js
// 获取文档的窗口坐标的函数
function getCoords(elem) {
    // 获取元素的坐标信息
    let box = elem.getBoundingClientRect()

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}
```

### 作业
```js
// 作业1
let div =document.getElementById("field");
coords = div.getBoundingClientRect();
// 1
console.log(coords.left, coords.top);
// 2
console.log(coords.right, coords.bottom);
// 3 left + 边框宽度，top + 边框高度
console.log(coords.left + div.clientLeft, coords.top + div.clientTop);
// 4 left + 边框宽度 + 内边距 + 内容宽度, top + 边框高度 + 内边距 + 内容高度
console.log(coords.left + div.clientLeft + div.clientWidth, coords.top + div.clientTop + div.clientHeight);

// 作业2
// 其中一种计算方式
elem.style.cssText = `position: fixed; top: ${coords.top}px;`;
elem.style.left = coords.left + "px";
elem.style.top = coords.top - coords.offsetHeight + "px";

// 作业3

```

--- 
# 浏览器: 文档, 事件, 接口

## 浏览器事件简介
常用DOM事件
#### 鼠标事件
* `click`: 鼠标点击元素时
* `contextmenu`: 右键元素时
* `mouseover`/`moseout`: 鼠标指针移入/离开一个元素时
* `mousedown`/`mouseup`: 鼠标按下/释放鼠标按钮时
* `mousemove`: 鼠标移动时

#### 键盘事件
* `keydown`和`keyup`: 按下和松开一个按键时

#### 表单(form)元素事件
* `submit`: 访问者提交了一个`<form>`时
* `focus`: 访问者聚焦于一个元素时，例如聚焦于一个`<input>`

#### Document事件
* `DocumentLoaded`: HTML的加载和处理均完成，DOM被完全构建完成时

#### CSS事件
* `transitionend`: 当一个CSS动画完成时

### 事件处理程序
* 使用**处理程序**`handler`: 一个在事件发生时运行的函数

#### HTML特性
处理程序可以设置在HTML中名为`on<event>`的特性中
* 例如: `onclick`
```js
<input type="text" value="Click me" onclick="alert('Click!')">
```

#### DOM属性
使用DOM属性来分配处理程序
```html
<input id="elem" type="text" value="Click me">
<script>
    let elem = document.getElementById("elem");
    elem.onclick = function() {
        alert("Click!");
    }
</script>
```

### addEventListener
为一个事件分配多个处理程序
```js
element.addEventListener(event, handler[, options]);
```
* event: 事件名
* handler: 处理程序
* options: 具有以下属性的附加可选对象
  * once: 如果为true, 那么会在被处罚后自动删除监听器
  * capture: 事件的处理阶段
  * passive: 如果为true, 那么处理程序将不会调用`preventDefault()`
* 移除处理程序
  * `element.removeEventListener(event, handler[, options])`

通过多次调用`addEventListener`来允许添加多个处理程序
```js
let elem = document.getElementById("elem");

function handler1() {
    alert("Click!");
}
function handler2() {
    alert("Thanks!")
}
elem.addEventListener("click", handler1);
elem.addEventListener("click", handler2);
```
> `DOMContentLoaded`事件只能通过`addEventListener`来进行分配

### 事件对象
事件发生时，浏览器会创建一个`event`**对象**
```js
let elem = document.getElementById("elem");

function handler(event) {
    alert(event.type + " at " + event.currentTarget);
    // click at [object HTMLInputElement]

    alert("Coordinates: " + event.clientX + ":" + event.clientY)
    // Coordinates: 133:16
}
elem.addEventListener("click", handler);
```
* `event.type`: 事件类型
* `event.currentTarget`: 处理事件的元素
* `event.clientX / event.ClientY`指针的窗口相对坐标

### 对象处理程序: handleEvent
将一个对象分配为事件处理程序，当事件发生时，调用该对象的`handleEvent`方法
```html
<button id="elem">Click me</button>
<script>
    let elem = document.getElementById("elem");

    let obj = {
        handleEvent(event) {
            alert(event.type + " at " + event.currentTarget);
            // click at [object HTMLButtonElement]
        }
    }

    elem.addEventListener("click", obj);
</script>
```
```html
<button id="elem">Click me</button>
<script>
    let elem = document.getElementById("elem");

    class Menu {
        handleEvent(event) {
            switch(event.type) {
                case 'mousedown':
                    elem.innerHTML = "Mouse button pressed";
                    break;
                case 'mouseup':
                    elem.innerHTML += "...and released.";
                    break;
            }
        }
    }

    let menu = new Menu();
    elem.addEventListener("mousedown", menu);
    elem.addEventListener("mouseup", menu);
</script>
```

### 作业
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>作业1</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/study_css_html/index.css">
    <style>
        #field {
            width: 200px;
            height: 150px;
            border: 10px solid black;
            background-color: #00FF00;
            overflow: hidden;
            position: relative; /*相对定位*/
            cursor: pointer;    /*鼠标指针样式*/
        }
        #ball {
            position: absolute; /*绝对定位*/ 
            left: 0;
            top: 0;
            transition: all 1s; /*控制运动动画*/
        }
    </style>
</head>
<body>
    lick on a field to move the ball there.
    <br> The ball should never leave the field.

    <div id="field">
        <img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    </div>
    <script>
        let ball = document.getElementById("ball");
        let field = document.getElementById("field");

        // coords
        let fieldCoords = field.getBoundingClientRect();
        let ballCoords = ball.getBoundingClientRect();

        console.log(field.clientHeight, field.clientWidth);

        field.onclick = function(event) {
            ballCoords = {
                left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2,
                top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,
            }
            
            // 限制左边和上边
            if (ballCoords.left <0) ballCoords.left = 0;
            if (ballCoords.top <0) ballCoords.top = 0;

            // 限制下边和右边
            if (ballCoords.left+ball.clientWidth > field.clientWidth) {
                ballCoords.left = field.clientWidth - ball.clientWidth
            }
            if (ballCoords.top+ball.clientHeight > field.clientHeight) {
                ballCoords.top = field.clientHeight - ball.clientHeight
            }
            
            // 最终结果
            ball.style.left = ballCoords.left + "px";
            ball.style.top = ballCoords.top + "px";
        }
    </script>
</body>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/style.css">
    <style>
      #option {
        cursor: pointer;
      }
      #option::before {
        content: "▼";
      }
      .menu.open #option::before {
        content: "▶";
      }
      ul {
        display: block;
      }
      .menu.open ul {
        display: none;
      }
    </style>
</head>
<body>

  <div id="box" class="menu">
    <span id="option">Sweeties (click me)!</span>
    <ul>
      <li>Cake</li>
      <li>Donut</li>
      <li>Honey</li>
    </ul>
  </div>
  <script>
    let box = document.getElementById("box");

    let option = document.getElementById("option");
    option.onclick = function() {
      box.classList.toggle("open");
    }
  </script>

</body>
</html>
```
### 作业
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代javascript教程</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/study_css_html/index.css">
    <style>
        body {
            margin: 10px auto;
            width: 470px;
        }

        h3 {
            margin: 0;
            padding-bottom: .3em;
            font-size: 1.1em;
        }

        p {
            margin: 0;
            padding: 0 0 .5em;
        }

        .pane {
            background: #edf5e1;
            padding: 10px 20px 10px;
            border-top: solid 2px #c4df9b;
            position: relative;
        }

        .remove-button {
            font-size: 110%;
            color: darkred;
            right: 10px;
            width: 24px;
            height: 24px;
            border: none;
            background: transparent;
            cursor: pointer;
            position: absolute;
        }
    </style>
</head>
<body>

    <div>
        <div class="pane">
            <h3>Horse</h3>
            <p>The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.</p>
        </div>
        <div class="pane">
            <h3>Donkey</h3>
            <p>The donkey or ass (Equus africanus asinus) is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.</p>
        </div>
        <div class="pane">
            <h3>Cat</h3>
            <p>The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin.
            </p>
        </div>
    </div>
    <script>
        let panes = document.getElementsByClassName("pane");

        for (let pane of panes) {
            // 将HTML内容添加到pane的前面, afterbegin：指插入到第一个子节点之前
            pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>')
            
            
            pane.firstChild.onclick = function() {
                pane.remove(); // 移除元素
                
                // pane.hidden = true; 
                // 这种方法只是隐藏元素
            }
        }
    </script>
</body>
</html>
```

### 作业3
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代javascript教程</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/study_css_html/index.css">
    <style>
        .arrow {
            padding: 0;
            background: #ddd;
            border-radius: 15px;
            border: 1px solid gray;
            font-size: 24px;
            line-height: 24px;
            color: #444;
            display: block;
            position: absolute;
        }
        .start {
            left: 5px;
            top: 63px;
        }
        .end {
            right: 5px;
            top: 63px;
        }
        .arrow:focus {
            outline: none;
        }

        .arrow:hover {
            background: #ccc;
            cursor: pointer;
        }

        .gallery {
            width: 390px;
            height: 130px;
            overflow: hidden; /* 超出的部分隐藏 */
            top: 10px;
            left: 30px;
            position: relative;
        }

        ul {
            height: 130px;
            width: 9999px;
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 0;
            position: absolute;
            transition: margin-left 250ms; /* 动画效果 */
        }

        ul img {
            width: 130px;
            height: 130px;
            display: block; /* removes extra space near images */
        }

        ul li {
            display: inline-block; /* removes extra space between list items*/
        }

        .box {
            width: 450px;
            height: 150px;
            background-color: #ddd;
            border-radius: 1em;
            border: 1px solid rgb(168, 166, 166);
            position: relative;
        }
    </style>
</head>
<body>
    <!-- create your markup and styles -->

    <div class="box">
        <button class="arrow start">⇦</button>
        <div class="gallery">
            <ul>
                <li><img src="https://en.js.cx/carousel/1.png"></li>
                <li><img src="https://en.js.cx/carousel/2.png"></li>
                <li><img src="https://en.js.cx/carousel/3.png"></li>
                <li><img src="https://en.js.cx/carousel/4.png"></li>
                <li><img src="https://en.js.cx/carousel/5.png"></li>
                <li><img src="https://en.js.cx/carousel/6.png"></li>
                <li><img src="https://en.js.cx/carousel/7.png"></li>
                <li><img src="https://en.js.cx/carousel/8.png"></li>
                <li><img src="https://en.js.cx/carousel/10.png"></li>
            </ul>
        </div>
        <button class="arrow end">⇨</button>
    </div>



    <script>
        // label the images to visually track them, just for convenience,
        // this code can be removed
        let box = document.getElementById("box");
        let list = document.querySelector("ul");
        let listElems = list.querySelectorAll("li");
        
        let i = 1;
        for (let li of listElems) {
            li.style.position = 'relative';
            li.insertAdjacentHTML(
                "beforeend", 
                `<span style="position:absolute; left:0; top:0;">${i}</span>`
            );
            i++;
        }

        let width = 130;
        let count = 3;
        let position = 0;

        // 点击的时候修改margin-left的值
        document.querySelector(".start").onclick = function() {
            position += width * count;
            if (position>0) {
                position = -width * (listElems.length - count)
            }
            position = Math.min(position, 0);
            list.style.marginLeft = position + "px";
        }

        function end() {
            position -= width * count;
            if (position<= -width * listElems.length) {
                position = 0;
            }
            position = Math.max(position, -width * (listElems.length - count));
            list.style.marginLeft = position + "px";
        }
        document.querySelector(".end").addEventListener("click", end);

        // 每2s自动滚动
        setInterval(() => {
            end();
        }, 2000);

    </script>
</body>
</html>
```


## 冒泡和捕获

### 冒泡

当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。

```html
<form action="" onclick="alert('form')">FORM
    <div onclick="alert('div')">DIV
        <p onclick="alert('p')">P</p>
    </div>
</form>
```

> 几乎所有事件都会冒泡

### event.target

获取引发事件的那个嵌套层级最深的元素，目标元素

* 与`this(=event.currentTarget)`的区别
  * this: 是当前正在运行的处理程序, 当前元素
  * 引发事件的目标元素，在冒泡过程中不会变化

## 停止冒泡

`event.stopPropagation()`

> 不要在没有需要的情况下停止冒泡!

## 捕获

* 了解即可，在开发中很少使用
  DOM事件的传播3阶段

1. 捕获阶段: 事件(从window)向下走进元素
2. 目标阶段: 事件到达目标元素
3. 冒泡阶段: 事件从元素上(向上)开始冒泡

```js
// 在捕获阶段捕获时间
elem.addEventListener(..., {capture: true});
// 简化版本
elem.addEventListener(..., true);
```

* true: 在捕获阶段设置处理程序
* false(默认值): 在冒泡阶段处理程序
  如果设置了再捕获阶段处理程序，则移除时需要正确删除

```js
elem.removeEventListener(..., true);
```

## 事件委托


### 委托示例: 标记中的行为
```js
let menu = document.getElementById("menu");

class Menu {
    constructor(elem) {
        this._elem = elem;
        // 通过bind方法，将this指定为当前的按钮
        elem.onclick = this.onClick.bind(this);
    }

    save() {
        alert("saving");
    }

    load() {
        alert("loading");
    }

    serach() {
        alert("seraching");
    }

    onClick(event) {
        // 获取elem的只读属性 data-action的内容
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}
new Menu(menu);
```

### 行为模式
使用事件委托将**行为**以**声明方式**添加到具有特殊特性和类的元素中
1. 将自定义特性添加到描述其行为的元素
2. 用文档范围级的处理程序追踪事件，如果事件发生在具有特定特性的元素上：则执行行为(action)

#### 行为: 计数器
```html
<body>
    Counter: <input type="button" value="1" data-counter>
    Oner more counter: <input type="button" value="2" data-counter>
    <script>
        document.addEventListener('click', function(event) {
            if (event.target.dataset.counter != undefined) {
                // 如果这个元素存在data-counter特性，则执行
                event.target.value++;
            }
        })
    </script>
</body>
```
> 对于文档级的处理程序，始终使用addEventListener

#### 行为: 切换器
```html
<body>
    <button data-toggle-id="subscription-mail">
        Show the subscription form
    </button>
    <form id="subscription-mail" hidden>
        Your mail: <input type="email" name="" id="">
    </form>
    <script>
        document.addEventListener('click', function(event) {
            let id = event.target.dataset.toggleId;
            if (!id) return;

            let elem = document.getElementById(id);

            elem.hidden = !elem.hidden;
        })
    </script>
</body>
```

### 作业
```js
// 作业1的JS解决方案
document.addEventListener('click', function(event) {
    if (event.target.className!="remove-button") return;
    
    // 找到距离最近的祖先div
    let div = event.target.closest('div');
    div.remove();
})

```
```html
<!-- 作业2 树形菜单 -->
<style>
    .tree span:hover {
        font-weight: bold;
    }
    .tree span {
        cursor: pointer;
    }
</style>
<script>
    let tree = document.getElementById("tree");

    for (let li of tree.querySelectorAll("li")) {
        let span = document.createElement("span");
        li.prepend(span); // 在第一个子节点之前插入一个span
        span.append(span.nextSibling); // 把文本移入span标签内部
        // 这里是因为span标签具有有限的宽度
    
    }

    tree.onclick = function(event) {
        // 使用大写
        if (event.target.tagName!="SPAN") return;

        // 查看点击内容的父元素是否是ul，如果不是，则不工作
        let childrenContainer = event.target.parentNode.querySelector("ul");
        if (!childrenContainer) return;

        // 如果是, 则改变状态
        childrenContainer.hidden = !childrenContainer.hidden;
    }

</script>
```
```html
<!-- 可排序的表格 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代javascript教程</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/study_css_html/index.css">
    <style>
      table {
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid black;
        padding: 4px;
      }
      th {
        cursor: pointer;
      }
      th:hover {
        background: yellow;
      }
    </style>
</head>
<body>
    <table id="grid">
      <thead>
        <tr>
          <th data-type="number">Age</th>
          <th data-type="string">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>John</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pete</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Ann</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Eugene</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Ilya</td>
        </tr>
      </tbody>
    </table>
    </table>
    <script>
      let table = document.getElementById("grid");

      table.addEventListener('click', function(event) {

        let th = event.target;

        // 如果点击的单元格错误，则直接返回
        if (th.tagName != 'TH') return;

        sortGrid(th.cellIndex, th.dataset.type);

      })

      function sortGrid(colNum, type) {
        
        // 获取表格内容
        let tbody = table.querySelector("tbody");

        // 将表格身体中的行转换为数组
        let rowsArray = Array.from(tbody.rows);

        let compare;

        switch(type) {
          case 'number':
            // 如果是数值，则直接获取差值，方便排序
            compare = function(rowA, rowB) {
              return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
          case 'string':
            // 如果是string, 则转换为1，-1, 方便后续排序
            compare = function(rowA, rowB) {
              return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
        }

        // 根据compare值进行排序
        /*
        这里可以理解为
        rowsArray.sort((rowA, rowB) => {
          // 视type类型进行返回不同值
          rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          // OR
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        })
        */ 
        rowsArray.sort(compare); 

        // 排序好的结果重新导入表格
        tbody.append(...rowsArray);
      }
      
    </script>
</body>
</html>
```
```html
<!-- 工具提示行为 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代javascript教程</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/study_css_html/index.css">
    <style>
      body {
        height: 2000px;
        /* make body scrollable, the tooltip should work after the scroll */
      }

      .tooltip {
        /* some styles for the tooltip, you can use your own instead */
        position: fixed;
        padding: 10px 20px;
        border: 1px solid #b3c9ce;
        border-radius: 4px;
        text-align: center;
        font: italic 14px/1.3 sans-serif;
        color: #333;
        background: #fff;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
      }
      p {
        z-index: 1;
        display: block;
      }
    </style>
</head>
<body>
  <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
  <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
  <button data-tooltip="the tooltip is longer than the element">Short button</button>
  <button data-tooltip="HTML<br>tooltip">One more button</button>

  <p>Scroll the page to make buttons appear on the top, check if the tooltips show up correctly.</p>
  <script>
      // 获取按钮元素的列表
      let buttonList = document.querySelectorAll("button");

      

      // 设置一个盒子接收提示信息
      let div = document.createElement("div");

      for (let button of buttonList) {

        button.addEventListener('mouseover', function(event) {
          // 获取button的left
          buttonCoords = button.getBoundingClientRect();
          

          // 将div添加进body
          document.body.prepend(div);
          // 设置div的风格
          div.className='tooltip'
          
          // 设置文本内容
          div.innerHTML = event.target.dataset.tooltip;
          
          // 设置div的top和left
          divCoords = div.getBoundingClientRect();
          
          // 上方也需要判断
          let top = buttonCoords.top - div.offsetHeight - 5;
          if (top<0) {
            top = buttonCoords.top + button.offsetHeight + 5;
          }
          
          // 判断左侧是否有足够距离让元素居中展示
          let left = buttonCoords.left + (button.offsetWidth - div.offsetWidth)/2
          if (left<0) left = 5;

          div.style.top = top + "px";
          div.style.left = left + "px";

        })

        button.addEventListener('mouseout', function(event) {
          div.remove()
        })

      }
  </script>
</body>
</html>
```

## 浏览器默认行为

### 阻止浏览器行为

两种方式

1. 使用`event`对象。`event.preventDefault()`方法
2. `on<event>`返回`false`

```html
<a href="/" onclick="return false">Click here</a>
OR
<a href="/" onclick="event.preventDefault()">here</a>
```

#### 示例: 菜单

* 菜单选项一般使用`<a>`标签实现，这样可以用右键单击新窗口打开链接，但使用`<button>`或者`<span>`则不行

```html
<ul id="menu" class="menu">
    <li><a href="/html">HTML</a></li>
    <li><a href="/javascript">JavaScript</a></li>
    <li><a href="/css">CSS</a></li>
</ul>
<script>
    let menu = document.getElementById("menu");

    menu.onclick = function(event) {
        if (event.target.tagName != "A") return;

        // 返回href属性的值
        let href = event.target.getAttribute('href');
        alert(href);

        // 禁止浏览器的自动跳转
        return false;
    }
</script>
```

### 处理程序选项`passive`

```js
addEventListener()
// 可选项: passive: true
// 向浏览器发出信号，表明处理程序不会调用preventDefault()
```

### event.defaultPrevented

当默认行为被阻止，该属性为true，否则为false

* 在某些情况替代**停止冒泡**，告诉其他事件处理程序，该事件已经被处理

```html
<button>Right-click shows browser context menu</button>  
<button oncontextmenu="alert('Draw our menu'); return false">
    Right-click shows our context menu
    <!--代替默认的鼠标右键事件-->
</button>
```

```html
<p>Right-click for the document menu (added a check for event.defaultPrevented)</p>
<button>Right-click shows browser context menu</button>  
<script>
    let button = document.querySelector("button");
    button.oncontextmenu = function(event) {
        // 阻止浏览器的默认行为
        event.preventDefault();
        // 用该事件代替
        alert("Button context menu");
    }
    document.oncontextmenu = function(event) {
        // 是否阻止了浏览器的默认行为？如果阻止，则直接返回
        // 该参数在当浏览器阻止了默认行为，会变成true，否则就是false
        if (event.defaultPrevented) return;

        // 阻止浏览器的默认行为
        event.preventDefault();
        // 用该事件代替
        alert("Doucement context menu");
    }
</script>
```

### 作业

```html
<fieldset id="contents">
<legend>#contents</legend>
<p>
    How about to read <a href="https://wikipedia.org">Wikipedia</a> or visit <a href="https://w3.org"><i>W3.org</i></a> and learn about modern standards?
</p>
</fieldset> 
<script>
    let content = document.getElementById("contents");

    content.onclick = function(event) {

        function handleLink(href) {
            let value = confirm(`Are you sure leave for ${href}?`);
            if (!value) return false;
        }

        // 获取距离当前元素最近的祖先元素a，也可以是自身
        let target = event.target.closest("a");

        if (target && content.contains(target)) {
            // node.contains() 用来判断当前节点是否是给定节点的后代
            return handleLink(target.getAttribute("href"))
        }

    }
</script>
```

```html
<!-- 图册 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代javascript教程</title>
    <meta charset="utf-8">
    <style>
      body {
        margin: 0;
        padding: 0;
        font: 75%/120% sans-serif;
      }

      #largeImg {
        border: solid 1px #ccc;
        width: 550px;
        height: 400px;
        padding: 5px;
      }

      #thumbs a {
        border: solid 1px #ccc;
        width: 100px;
        height: 100px;
        padding: 3px;
        margin: 2px;
        float: left;
      }

      #thumbs a:hover {
        border-color: #FF9900;
      }

      #thumbs li {
        list-style: none;
      }

      #thumbs {
        margin: 0;
        padding: 0;
      }
    </style>
</head>
<body>
  <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>

  <ul id="thumbs">
    <!-- the browser shows a small built-in tooltip on hover with the text from "title" attribute -->
    <li>
      <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
    </li>
  </ul>
  <script>
    let thumbs = document.getElementById("thumbs");
    let largeImg = document.getElementById("largeImg");
    
    thumbs.onclick = function(event) {

      let tag = event.target.closest("a");
      if (tag) {
        // 阻止默认事件
        event.preventDefault();

        // 用自定义事件替代
        largeImg.setAttribute("src", tag.getAttribute("href"));

      }

    }
  </script>
</body>
</html>
```

## 创建自定义事件


### 事件构造器

根据内建的`Event`类创建

```js
let event = new Event(type[, options]);
```

* type 事件类型
* options 具有两个可选属性的对象
  * bubbles: true/false → 如果为true, 事件会冒泡
  * cancelable: true/false → 如果为true, 默认行为会被阻止
  * 默认情况下，以上2者都为false

### dispatchEvent
在事件对象被创建后，使用`elem.dispatchEvent(event)`调用并运行


### 冒泡示例

创建一个事件，并允许冒泡

```html
<h1 id="elem">Hello from the script!</h1>
<script>
    document.addEventListener("hello", function(event) {
        alert("hello from " + event.target.tagName);
    });

    // 允许冒泡
    let event = new Event("hello", {bubbles: true});

    let elem = document.getElementById("elem");
    elem.dispatchEvent(event); // hello from H1
</script>
```

### MouseEvent, KeyboardEvent及其他

一些其他事件对象

* UIEvent
* FocusEvent
* MouseEvent
* WheelEvent
* KeyboardEvent
  ...
  当需要创建这些事件时，不使用`new Event`而是使用`new UIEvent`等
* 与`new Event`不同的是，他们的`options`可选属性对象不仅仅局限于`bubbles`和`cancelable`

### 自定义事件

一些我们自己自定义的全新事件类型, 应该使用`new CustomEvent`

* 额外提供一个特殊的字段
  * detail 可以传递任何自定义信息

### event.preventDefault()


### 事件中的事件时同步的

如果在一个事件中嵌套了另一个事件，那么该事件会被立即处理

---

# UI事件

## 鼠标事件


### 鼠标事件类型
* `mousedown/mouseup`
  * 点击/释放按钮
* `mouseover/mouseout`
  * 指针从元素上移入/移出
* `mousemove`
  * 鼠标在元素上移动时触发
* `click`
  * 点击鼠标左键
  * 在`mousedown/mouseup`之后触发
* `dbclick`
  * 同一时间内双击某个元素（现在使用较少）
* `contextmenu`
  * 按下鼠标右键时触发
  
### 事件顺序
例如: 按下鼠标左键`mousedown` → 释放鼠标左键`mouseup` → `click`事件

### 鼠标按钮
点击相关属性`event.button`
  * 不同按键触发后，有不同的对应数值
  
### 组合键: shift, alt, ctrl, meta
对应的事件属性
* `shiftKey`: Shift
* `altKey`: Alt
* `ctrlKey`: Ctrl
* `metaKey`: Mac的`Cmd`
在对应事件期间按下相应按键，则会返回`true`
```html
<button id="button">Alt+Shift+Click on me!</button>

<script>
    let button = document.getElementById("button") ;
    button.onclick = function(event) {
        if (event.altKey && event.shiftKey) {
        alert("Hooray!");
        }
    };
</script>
```

### 坐标: clientX/Y, pageX/Y
* 相对于窗口的坐标: clientX/Y
* 相对于文档的坐标: pageX/Y
```html
<input onmousemove="this.value=event.clientX+':'+event.clientY" value="Mouse over me">
```

> 防止复制
> 使用`oncopy`事件

### 作业
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代javascript教程</title>
    <meta charset="utf-8">
    <style>
        .selected {
          background: #0f0;
        }

        li {
          cursor: pointer;
        }
    </style>
</head>
<body>
  Click on a list item to select it.
  <br>

  <ul id="ul">
    <li>Christopher Robin</li>
    <li>Winnie-the-Pooh</li>
    <li>Tigger</li>
    <li>Kanga</li>
    <li>Rabbit. Just rabbit.</li>
  </ul>

  <script>
    // ...your code...
    let ul = document.getElementById("ul");

    ul.onclick = function(event) {
      let li = event.target;

      if (li.tagName!="LI") return;

      if (event.ctrlKey || event.metaKey) {
        // 如果有就移除，否则添加
        li.classList.toggle('selected');
      } else {
        // 找到其他所有类名称selected的li
        let selected = ul.getElementsByClassName('selected');
        // 遍历
        for (let elem of selected) {
          // 移除已有的
          elem.classList.remove('selected');
        }
        // 为当前元素添加类名称
        li.classList.add('selected');
      }
    }

    ul.onmousedown = function() {
      return false;
    }
  </script>
</body>
</html>
```

## 移动鼠标: mouseover/out, mouseenter/leave

### 事件mouseover/mouseout, relatedTarget
这些事件具有`relatedTarget`属性，是对`target`属性的补充
* 对于`mouseover`
  * `event.target`: 鼠标目前所在的那个元素
  * `event.relatedTarget`: 鼠标之前所在的那个元素
* 对于`mouseout`
  * `event.target`: 鼠标离开的那个元素
  * `event.relatedTarget`: 鼠标目前所在的那个元素
> 当relatedTarget是nul时，意味着鼠标来自窗口之外，或者它离开了窗口

### 跳过元素
* 鼠标移动时会触发`mousemove`事件

> mouseover触发，就一定会有mouseout


### 移动到子元素时mouseout
在移动到元素的后代时，也能触发`mouseout`


### 事件mouseenter/mouseleave
与mouseover/mouseout的区别
1. 在元素内部与后代之间的转换，不会被记录
2. `mouseenter/mouseleave`不会冒泡


### 事件委托
由于`mouseenter/mouseleave`不会冒泡，在进行事件委托时选用`mouseover/mouseout`


### 作业

```html
<!--作业1-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/style.css">
    <style>
      body {
        height: 2000px;
        /* 在页面滚动后，工具提示也应该正常展示 */
      }

      .tooltip {
        position: fixed;
        z-index: 100;

        padding: 10px 20px;

        border: 1px solid #b3c9ce;
        border-radius: 4px;
        text-align: center;
        font: italic 14px/1.3 sans-serif;
        color: #333;
        background: #fff;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
      }

      #house {
        margin-top: 50px;
        width: 400px;
        border: 1px solid brown;
      }

      #roof {
        width: 0;
        height: 0;
        border-left: 200px solid transparent;
        border-right: 200px solid transparent;
        border-bottom: 20px solid brown;
        margin-top: -20px;
      }

      p {
        text-align: justify;
        margin: 10px 3px;
      }
    </style>
</head>
<body>
  <div data-tooltip="这是房子的内部" id="house">
    <div data-tooltip="这里是屋顶" id="roof"></div>

    <p>从前有一个猪妈妈，她养了三只小猪。</p>

    <p>三只小猪长得很快快，妈妈对它们说：“你们太大了，不能住在这里了，你们自己去盖房子吧，但要小心不要让狼抓到你们。”</p>

    <p>三只小猪出发了。 “我们会注意不要让狼抓住我们，”他们说。</p>

    <p>很快，它们遇到了一个男人。<a href="https://en.wikipedia.org/wiki/The_Three_Little_Pigs" data-tooltip="继续阅读...">鼠标悬浮在我上</a></p>

  </div>
  <script>
    let house = document.getElementById("house");
    
    let tooltip;
    
    house.onmouseover = function(event) {
      
      let box = event.target.closest('[data-tooltip]');
      
      if (!box) return;
      
      let div = document.createElement('div');
      div.innerHTML = box.dataset.tooltip;
      div.className = 'tooltip';
      document.body.append(div);

      // 设置div的位置
      let boxCoords = box.getBoundingClientRect();
      
      let top = boxCoords.top - div.offsetHeight - 5;
      if (top<0) {
        top = boxCoords.top + box.offsetHeight + 5;
      }
      
      let left = boxCoords.left + (box.offsetWidth - div.offsetWidth)/2
      if (left<0) left = 5;
      
      div.style.top = top + "px";
      div.style.left = left + "px";

      tooltip = div;
      
    }
    
    house.onmouseout = function(event) {
      
      if (tooltip) {
        tooltip.remove();
        tooltip = false;
      }
    }
    
  </script>
</body>
</html>
```

```html
<!-- 作业2 -->
<!-- 好难啊！！这个作业后续来补充，先将其他内容看完 -->
```

## 鼠标拖放事件

### 拖放算法
基础步骤
1. 在`mousedown`上: 根据需要准备移动的元素
2. 在`mousemove`上: 通过更改`position: absolute`情况下的`left/top`来移动它
3. 在`mouseup`上: 执行与完成的拖放相关的所有行为


## 指针事件
指针事件是为了适应其他输入设备而诞生的现代化解决方案（鼠标，触控笔，触控屏幕等）

### 指针事件类型
命名基本和鼠标事件类似
* `pointerdown`
* `pointerup`
* 后缀和鼠标事件一致...
* 额外多了3个
  * `pointercancel`
  * `pointercapture`
  * `lostpointercature`
### 指针事件属性
拥有和鼠标事件完全相同的属性
* 额外的其他属性
  * `pointerId`: 触发当前事件的指针唯一标识符
  * `pointerType`: 指针设备类型
  * `isPrimary`: 当前指针为首要指针(多点触控时，按下的第一根手指)时为true
* `width`: 指针接触设备区域的宽度
* `height`: 指针接触设备区域的长度
* `presure`: 触摸压力(0~1之间的浮点数)
* `tangentialPressure`: 归一化后的切向压力
* `tilX, tilY, twist`: 用于描述触控笔和屏幕表面的相对位置

### 多点触控


### 事件: pointercancel
将会在一个正处于活跃状态的指针交互由于某些原因被中断时触发。

### 指针捕获

## 键盘: keydown和keyup
当鼠标按下时，触发`keydown`事件，弹起时，触发`keyup`事件。

### `event.code`和`event.key`
```js
function keyboard(event) {
  console.log(event.code, event.key);
}
document.addEventListener('keydown', keyboard);
// event.code: KeyZ
// event.key: z
```
> 注意大小写

#### 自动重复
当按下一个按键够长时间，`keydown`会被一次又一次的重复触发

### 默认行为
```html
<script>
function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') ||
    ['+','(',')','-','ArrowLeft','ArrowRight','Delete','Backspace'].includes(key);
    // 放款阻止输入的条件
}
</script>
<input onkeydown="return checkPhoneKey(event.key)" placeholder="Phone, please" type="tel">
```
### 作业
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>practice</title>
</head>
<body>
  <script>
    runOnKeys(
      () => alert("Hello!"),
      "KeyQ",
      "KeyW"
    );
    
    function runOnKeys(func, ...args) {
      let pressed = new Set();
      let arr = args;

      document.addEventListener('keydown', function(event) {
          pressed.add(event.code);

          // 检查pressed中是否包含条件中的按键
          for (let arg of args) {
            if (!pressed.has(arg)) return;
          }

          // 执行完成后清空set
          pressed.clear();

          // 执行条件1中的函数
          func();
        }
      );
      
      // 松下按键时，删除code
      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });
    };
  </script>
</body>
</html>
```

## 滚动
`scroll`事件，允许对页面或元素滚动动作做出反应

### 防止滚动
通过在导致滚动的事件上，使用`event.preventDefault()`来阻止滚动事件（例如在`pageUp`和`pageDown`的`keydown`事件上）。
* 通过CSS的`overflow`启动滚动的方式更加可靠。
---
# 表单，控件

## 表单属性和方法
表单`form`有许多特殊的属性和事件

### 导航: 表单和元素
文档中的表单是特殊集合`document.forms`的成员。既是所谓的**命名的集合**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>example</title>
</head>
<body>
  <form name="my">
    <input type="text" name="one" value="1">
    <input type="text" name="two" value="2">
    <input type="text" name="one" value="3">
  </form>
  <script>
    // 获取表单
    let form = document.forms.my;

    // 获取表单中的元素
    // 如果同时有多个同名的元素，返回的则是一个集合
    let elem = form.elements.one;

    alert(elem[1].value); // 3
  </script>
</body>
</html>
```
> 无论标签在第几层，都可以通过`form.elements`找到

* 一个表单中有无数个子表单`<fieldset>`，也具有`field.elements`属性。

> 更简短的方式: `form.name`
> 例如刚才的例子，直接使用`form.one`依然可以找到对应的`input`。

### 反向引用: element.form
通过`element.form`来找到对应元素所在的表单
```html
<form name="my">
  <input type="text" name="one" value="1">
</form>
<script>
  // 获取表单
  let form = document.forms.my;

  // 获取表单中的元素
  let elem = form.elements.one;

  alert(elem.form.name); // my
</script>
```
### 表单元素
表单控件
#### input和textarea
通过`input.value`或者`input.check`(布尔值)来访问复选框(checkbox)和单选按钮(radio button)中的value。
> 注意不要使用`input.innerHTML`

#### select和option
`<select>`的3个重要属性
* `select.options`: `<option>`的子元素集合
* `select.value`: 当前选取的`<option>`的*value*
* `select.selectedInedx`: 当前选取的`<option>`的编号
```html
<select name="" id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>
<script>
  let select = document.getElementById("select");

  select.options[2].selected = true; // 设置选中第三项
  console.log(select.options[0]);    // 第一个选项<option>
  console.log(select.selectedIndex); // 2 当前选中的<option>的index
  console.log(select.value);         // banana 当前选中的<option>的value
</script>
```
通过`<select>`的特性`multiple`来允许多选(很少被用到)
```html
<select name="" id="select" multiple >
  <option value="apple" selected>Apple</option>
  <option value="pear" selected>Pear</option>
  <option value="banana">Banana</option>
</select>
<script>
  let select = document.getElementById("select");

  let selected = Array.from(select.options)
                  .filter(option => option.selected) // 获取已选中的option
                  .map(option => option.value);      // 获取已选中option的value，并返回一个数组
  alert(selected); // apple, bear
</script>
```
#### new Option
```js
// 通过简短语法创建一个<option>元素
option = new Option(text, value, defaultSelected, selected);
```
* text: `<option>`中的文本
* value: `<option>`中的value
* defaultSelected: 如果为`true`，那么`selected`HTML-特性（attribute）就会被创建，
* selected: 如果为`true`，那么这个`<option>`就会被选中
> 在实际使用过程中，通常应该同时设置defaultSelected和selected为相同的值(true/false)，或者同时忽略

## 聚焦: focus/blur

聚焦(focus)到一个元素通常意味着: "准备在此处接受数据"
失去焦点(blur)通常意味着: "数据已经输入完成"

### focus/blur事件

聚焦触发`focus`事件，失去焦点触发`blur`事件

```html
<style>
    .invalid {
        border-color: red;
    }
    #error {
        color: red;
    }
</style>
Your email please: <input type="email" id="input">
<div id="error"></div>
<script>
    let input = document.getElementById("input");
    let error = document.getElementById("error");
    input.onblur = function() {
        if (!input.value.includes("@")) {
            input.classList.add("invalid"); // 不是邮箱的情况
            error.innerHTML = "Please enter a correct email";
        }
    };

    input.onfocus = function() {
        // 聚焦的同时，删除错误状态
        if (this.classList.contains('invalid')) {
            // 如果邮箱输入错误，移除错误提示
            this.classList.remove('invalid');
            error.innerHTML = "";
        }
    }
</script>
```

### focus/blur方法

通过`elem.focus()`和`elem.blur()`方法，可以设置和移除元素上的焦点。

### 允许在任何元素上聚焦: tabindex

在默认情况下，很多元素不支持聚焦。(用户可以交互的元素都支持`focus/blur`)

* 使用HTML特性`tabindex`可以改变这种情况
* 任何具有`tabindex`特性的元素，都会变成可以聚焦的，在通过`tab`切换时
  * `tabindex="0"`: 会让该元素排在所有具有`tabindex>=1`的元素后面
  * `tabindex="-1"`: 只允许以编程的方式聚焦元素，但`elem.focus()`依然有效
  * 其他情况会按照数值大小顺序切换

### focus/blur委托

`focus`和`blur`事件不会向上冒泡

* 处理方法1

```js
// 将处理程序置于捕获阶段
focus.addEventListener("focus", () => form.classList.add("focused"), true);
focus.addEventListener("blur", () => form.classList.add("focused"), true);
```

* 处理方法2
  使用`focusin`和`focusout`事件，和`focus/blur`完全一样，只是它们会冒泡。

> 必须使用`elem.addEventListener`来分配它们

```js
focus.addEventListener("focusin", () => form.classList.add("focused"));
focus.addEventListener("focusout", () => form.classList.add("focused"));
```

## 事件: change, input, cut, copy, paste

### 事件: change
当元素完成更改时，触发`change`事件。
文本框在失去聚焦的时候，就会触发`change`事件。
```html
<!-- 失去聚焦后，触发change事件，显示输入的内容 -->
<input type="text" onchange="alert(this.value)">
<input type="button" value="Button">
```
对于其他`select, input type=checkbox/radio`等，会再更改选项后立即触发`change`事件。

### 事件: input
当用户对输入值做出修改后，就会触发`input`事件。
与键盘事件不同，只要值修改了，`input`事件就会触发（包含非键盘带来的值变更：鼠标复制粘贴等）。
> 无法阻止oninput中的任何事件
> 因为输入更改后，立即触发，所以无法使用`event.preventDefault()`。

### 事件: cut, copy, paste
剪切，复制/粘贴的时候触发。
属于`ClipboardEvent`类。
可以使用`event.preventDefault()`来中止行为。


## 表单: 事件和方法提交
提交表单时，触发`submit`事件，用与在将表单发送到服务器之前对表单进行校验，或者中止提交，并使用Js来处理表单。
`form.submit()`方法允许从js启动表单发送。

### 事件: submit
提交表单的两种方式
1. 点击`<inpupt type="submit">`
2. 在`input`字段中按下`enter`按键
* 都会触发`submit`事件。可以通过处理程序检查数据是否准确，有错误则显示，并调用`event.preventDefault()`来阻止数据回传至服务器。

> 在`input`中按`entry`键时，会触发一次`click`事件
```html
<form onsubmit="return false">
  <input type="text" value="Focus here and press enter">
  <input type="submit" value="Submit" onclick="alert('click')">
</form>
```
### 方法: submit
通过`form.submit()`方法，手动将表单提交到服务器
```js
let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">';

// 该表单必须在文档中才能提交
document.body.append(form);

form.submit();
```
#### 模态框
用户关闭模态框之前，无法和其他内容交互

# 加载文档和其他资源
## 页面生命周期: DOMContentLoaded, load, beforeunload, unload
* `DOMContentLoaded`: 浏览器已经完全加载HTML，并构建了DOM树，但外部资源可能尚未加载完成
  * 对应事件：DOM已就绪
* `load`: HTML准备就绪，且外部资源也加载完成
  * 对应事件: 外部资源已加载完成
* `beforeunload/unload`: 当用户离开页面时
  * `beforeunload`事件: 用户正在离开：可以检查更改，并询问是否确定离开。
  * `unload`事件: 用户几乎已经离开了，但我们仍然可以进行一些操作，例如发送统计数据。

### DOMContentLoaded
发生在`document`对象上。
必须使用`addEventListener`来捕获。
```js
document.addEventListener("DOMContentLoaded", ready);
// 不支持 document.onDOMContentLoaded = ...
```
```html
<script>
  function ready() {
    alert("DOM is ready");
  }
  // 先显示 DOM is ready
  document.addEventListener("DOMContentLoaded", ready);
</script>
<!-- 图片会在之后加载 -->
<img src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" alt="">
```
#### DOMContentLoaded和脚本
js脚本会在HTML构建`DOM`之前运行它。
因为不确定js脚本是否存在修改DOM的情况，`DOMContentLoaded和脚本`所以必须等脚本执行结束。

> 不会阻塞`DOMContentLoaded`的脚本
1. 具有`async`特性的异步脚本
2. 使用`document.createElement('script')`动态生成并添加到网页中的

#### DOMContentLoaded和样式
外部样式不会影响DOM
* 注意: 如果样式表在脚本前面，则会影响DOMContentLoaded
```html
<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // 在样式表加载完成之前，脚本都不会执行
  alert(getComputedStyle(document.body).marginTop);
</script>
```
#### 浏览器内建的自动填充
Firefox，Chrome 和 Opera 都会在 DOMContentLoaded 中自动填充表单。
例如带有账号和密码的登录表单。

### window.onload
当整个页面，包括样式、图片和其他资源被加载完成，会触发`window.onload`事件。
```html
<script>
  window.onload = function() {
    // 页面加载完毕
    alert("Page loaded");
    // 此时会显示图片尺寸
    alert(`Image Size: ${img.offsetHeight} x ${img.offsetWidth}`);
  }
</script>
<img src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" alt="" id="img">
```

### window.onunload
当访问者离开页面时，`window.onunload`事件就会触发。

### window.onbeforeunload
如果访问者触发了离开页面的导航或试图关闭窗口，该事件就会要求进行更多确认。
> `event.preventDefault()`不会在`onbeforeunload`事件中生效

### readyState
`document.readyState`属性会为我们提供当前加载状态的信息
3个值
* `loading`: 文档正在被加载
* `interactive`: 文档被全部读取
* `complete`: 文档被全部读取, 并且所有资源（包括外部资源）全部记载完成。
```js
function work()
if (document.readyState == 'loading') {
  // 仍在加载，等待事件
  document.addEventListener("DOMContentLoaded", work);
} else {
  // DOM准备就绪！
  work();
}
```
#### readystatechange
`readystatechange`事件会在状态改变时触发

## 脚本： async, defer
通过`async`和`defer`特性解决HTML加载笨重脚本带来的延迟问题。

### defer
`defer`特性让浏览器在不等待脚本加载完成的情况下，继续处理HTML，构建DOM。
* 具有`defer`特性的脚本不会阻塞页面
* 具有`defer`特性的脚本总是要等到DOM解析完毕
```html
<!-- 1 -->
<p>...content before scripts...</p>

<script>
  // 4
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
</script>

<!-- 3 -->
<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- 2 -->
<p>...content after scripts...</p>
```
##### 具有`defer`特性的脚本保持其相对顺序，就像常规脚本一样。
按前后顺序执行

> defer特性仅适用于外部脚本

### async
异步特性，意味着脚本时完全独立的。
* 浏览器不会因`async`脚本而阻塞。
* 其他脚本不会等待`async`脚本加载完成，`async`脚本也不会等待其他脚本。
* `DOMContentLoaded`和异步脚本(`async`脚本)不会彼此等待。
> 异步脚本以加载的优先顺序执行（谁先加载，谁先执行）。
> 该特性仅适用于外部脚本

### 动态脚本
可以使用js动态的创建一个脚本，并将其附加到文档中
```js
let script = document.createElement('script');
script.src = "/article/script-async-defer/long.js";
document.body.append(script); // 脚本在添加后，立即开始加载
```
**默认情况下，动态脚本的行为时"异步"的。**
但如果我们设置了`script.async=false`，则会改变这个规则。


## 资源加载: onload, onerror
跟踪外部资源加载是否成功：
* `onload`: 成功加载
* `onerror`: 出现错误

### 加载脚本

#### script.onload
在脚本加载完成时触发

#### script.onerror
发生在脚本加载期间的error，会被`onerror`事件跟踪识别到

> `onload/onerror`事件仅追踪加载本身。

### 其他资源
`onload/onerror`基本上适用于具有外部`src`的任何资源。

### 跨源策略
如果我们使用的是其他域的脚本，并脚本中存在error，那么我们无法获取`error`的详细信息。
* 一个源（域/端口/协议三者）无法获取另一个源（origin）的内容。
要允许跨源访问，`<script>`标签中需要具有`crossorigin`特性，并且远程服务器必须提供特殊的header。
* `crossorigin="anonymous"`: 如果服务器的响应带有包6含 * 或我们的源（origin）的 header Access-Control-Allow-Origin，则允许访问。浏览器不会将授权信息和 cookie 发送到远程服务器。
* `crossorigin="use-credentials"`: 如果服务器发送回带有我们的源的 header Access-Control-Allow-Origin 和 Access-Control-Allow-Credentials: true，则允许访问。浏览器会将授权信息和 cookie 发送到远程服务器。
"anonymous"（不会发送 cookie，需要一个服务器端的 header）和 "use-credentials"（会发送 cookie，需要两个服务器端的 header）之间进行选择。

---

# 杂项
## DOM变动观察器
内建对象`MutationObserver`用于观察DOM元素，并在检测到更改时触发回调。

### 语法
```js
// 创建一个观察器
let observer = new MutationObserver(callback);
// 将其附加到一个DOM节点
observer.observe(node, config);
```
config是一个具有布尔选项的对象
* `childList`: 观察`node`直接子节点
* `subtree`: 观察`node`所有后代的更改
* `attributes`: 观察`node`特性
* `attributeFilter`: 特性数组名称，只观察选定的特性
* `characterData`: 是否观察`node.data`(文本内容) 
其他选项
* `attributeOldValue`: 为true时，将特性的旧值传递给回调
* `characterDataValue`: 为true时，将`node.data`的旧值和新值都传递给回调
##### 发生更改后，将执行"回调
更改被作为一个`MutationRecord`对象列表传入第一个参数，而观察期自身作为第二个参数
`MutationRecord`对象的特性
* `type`: 类型根据节点被修改的情况变动
  * `attributes`: 特性被修改
  * `characterData`: 数据被修改，用于文本节点
  * `childList`: 添加/删除了子元素
* `target`: 修改发生的位置
...

### 其他方法
* `observer.disconnect()`: 停止观察
停止观察时，使用`observer.takeRecords()`获取尚未处理的变动记录列表

> 观察节点不影响垃圾回收（观察器在内部对节点使用弱引用）

## 选择(Selection)和范围(Range)

### 范围
```js
// 在没有参数的情况下
let range = new Range();
```
#### 选择部分文本
* 如果`node`是一个文本节点，那么`offset`则必须是其文本中的位置。
```html
<p id="p">Hello</p>
<script>
  let range = new Range();
  // 这里的p是一个文本节点，那么第二个参数必须是文本的位置下标
  range.setStart(p.firstChild, 2);
  range.setEnd(p.firstChild, 4);

  // 对 range 进行 toString 处理，range 则会把其包含的内容以文本的形式返回
  console.log(range); // ll
</script>
```
#### 选择文本节点
* 如果`node`是一个元素节点，那么`offset`则必须是其子元素的编号。

## 事件循环: 微任务和宏任务
浏览器中JS的执行流程和node.js中的流程都是基于**事件循环**的。
理解事件循环有利于代码优化
### 事件循环
概念: 一个无线循环，JS引擎在执行任务时，状态在1/2/2之间循环
* 1.等待任务 → 2. 执行任务 → 3. 进入休眠状态等待更多任务 → 等待任务...
引擎的一般算法:
1. 有任务时:
  * 从最先进入的任务开始执行
2. 休眠直到常出现任务，然后回到第1步
> 休眠几乎不消耗CPU资源
举例:
* 当出现外部脚本`<script src="...">`加载完成时，任务就是执行它。
* 当用户移动鼠标时，任务就是派生出`mousemove`事件和执行程序。
...等等

一个任务到来时，引擎可能正处于繁忙状态，那么这个任务就会被排入队列。
多个任务组成了一个队列，即所谓的“宏任务队列”。
队列中的任务基于`先进先出`原则执行。
细节:
1. 引擎执行任务时永远不会进行DOM渲染。
2. 如果一项任务执行花费的时间过长，浏览器会抛出一个"页面未响应"之类的警报。
> 可以使用`setTimeout`对执行事件过长的任务进行拆分
```html
<div id="progress"></div>
<script>
  let i = 0;

  function count() {
    // 做繁重的任务的一部分 (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
      // 使用一个等待时长为0的setTimeout拆分显示任务
      // 即使我们不设置等待时长，但是最小是4ms或者更久
      setTimeout(count);
    }
  }

  count();
</script>
```

### 宏任务和微任务
每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。

一般的执行顺序（首先是脚本，然后是微任务，渲染等，之后的其他宏任务）

---
# 其他文章

# Frame和window

## 弹窗和window方法

### 阻止弹窗
**如果弹窗是在用户触发的事件处理程序（如 onclick）之外调用的，大多数浏览器都会阻止此类弹窗。**
```js
// 弹窗被阻止
window.open('https://javascript.info');

// 弹窗被允许
button.onclick = () => {
  window.open('https://javascript.info');
};
```
```js
// 在setTimeout中的延迟弹窗会被允许
setTimeout(() => window.open('http://google.com'), 3000);
```

### window.open
```js
// 语法
window.open(url, name, params);
```

### 关闭弹窗
关闭弹窗: `win.close()`
检查窗口是否关闭: `win.closed`



# 网络请求

## Fetch
一种现代通用的语法，用来向服务器获取信息。
基本语法
```js
let promise = fetch(url, [options]);
// options默认为一个GET请求
```
获取响应分为两个阶段
1. 服务器发送响应头(response header), `feteh`返回的`promise`就使用内建的Response class对象来对响应头进行解析。
* 检查响应头，查看请求是否成功
通过response的属性中查看状态
* `status`: `HTTP`状态码
* `ok`: 布尔值, 如果`HTTP`状态码为200-299，则为true。

2. 为了获取response body(请求体), 我们需要使用一个其他的方法调用。
`Response`提供了很多基于`promise`的方法，用来访问不同的body
* `response.text()`: 读取response，并以文本形式返回
* `response.json()`: 将response解析为JSON格式
* `response.formData()`: 以`FormData`对象的形式返回response
* `response.blod()`: 以Blod(具有类型的二进制数据)的形式返回response
* `response.arrayBuffer()`: 以ArrayBuffer(低级别的二进制数据)的形式返回response
* `response.body`是ReadableStream对象，允许逐块读取body
> 只能选用一种读取body的方法
```js
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
      .then(response => response.json())
      .then(commits => alert(commits[0].author.login)); // smith558

// 这里很奇怪， 我使用await写法，一直报错
// await is only valid in async function
// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // 读取 response body，并将其解析为 JSON 格式

// alert(commits[0].author.login);
```

### Response header
`response.headers`中的一个类Map对象，且具有和Map类似的方法

### Request header
通过fetch中的`headers`选项设置
```js
let response = fetch(protecteUrl, {
  headers: {
    Authentication: 'secret'
  }
});
```

### POST请求
创建POST请求需要使用一些fetch选项
* `method`: HTTP请求方法，例如POST
* `body`: request body
  * 字符串
  * FormData
  * Blob/BufferSource
  * URLSerachParams
JSON比较常用
```js
let user = {
  name: 'Jhon',
  surname: 'Smith',
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user);
});
let result = await response.json();
alert(result.message);
```

## FormData
表示HTML表单数据的对象
```js
let formDate = new FormData([form]);
```
```html
<form id="formElem">
  <input type="text" name="name" value="John">
  <input type="text" name="surname" value="Smith">
  <input type="submit">
</form>
<script>
  let formELem = document.getElementById('formElem');
  formELem.onsubmit = async (event) => {
    event.preventDefault(); // 阻止默认行为

    let response = fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formELem),
    });

    let result = await response.json();

    alert(result.message);
  }
</script>
```

### FormData方法
使用以下方法修改`formData`中的字段
* `formData.append(name, value)`
* `formData.append(name, blob, fileName)`
* `formData.delete(name)`
* `formData.get(name, value)`
* `formData.has(name, value)`
* `formData.set(name, value)`
* `formData.set(name, blod, fileName)`

### 发送带有文件的表单
表单始终以`Content-Type: multipart/form-data`来发送数据

### 发送Blob数据的表单

## Fetch下载进度
`fetch`方法允许跟踪**下载**进度。
使用`response.body`属性，该属性给与了对进度读取的完全控制，我们可以随时计算下载了多少。
```js
// 代替response.json()及其他方法
const reader = response.body.getReader();

// 在body下载时，一直为无限循环
while(true) {
  // 当最后一块下载完成时，done值为true
  // value是块字节的Uint8Array
  const {done, value} = await reader.read();
  // reader.read()的结果是一个具有2个属性的对象
  // done: 读取完成时为true
  // value: 字节的类型化数组: Uint8Array

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`);
}
```

## Fetch: 中止(Abort)
JS通常没有中止的概念，通过内建对象`AbortController`中止`fetch`和其他异步任务。

### AbortController对象
```js
let controller = new AbortController();
controller.abort() // 中止进程
// 调用abort(), controller.signal会触发abort事件
// controller.signal.aborted变为true，告诉你中止成功
```
* `abort()`方法
* `signal`属性


#### 与fetch一起使用
如果要取消fetch，需要将`AbortController`的`signal`属性作为`fetch`的一个可选参数进行传递
```js
let controller = new AbortController();
fetch(url, {
  signal: controller.signal;
})
```
当fetch被中止时，它的promise会以一个error AbortError reject。

### AbortController是可伸缩的
允许一次取消多个fetch。
在有多个需要取消的fetch时，可以使用单个`AbortController`去中止这些任务

## Fetch: 跨源请求

## Fetch API
仅做了解

## WebSocket
很有用，后续详细看一下
## Sever Send Events
很有用，后续详细看一下