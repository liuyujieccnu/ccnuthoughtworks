## CCNU thoughtworks特训营测试题目练习

### 任务四 类和继承

#### 学习总结

任务四主要是构建一个类，其实在JS语法中本身并没有类的概念，但是ECMA语法标准帮助JS可以实现类，同时能够完成一些大型的程序。

#### 学习笔记

* [JavaScript prototype 属性](http://www.w3school.com.cn/jsref/jsref_prototype_array.asp)
* Object.assign方法可以很方便地一次向类添加多个方法。

```javascript
Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
```

* 通过extends关键字，继承了父类的所有属性和方法。但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个父类。

### 任务五 统计状态

#### 学习总结

这个任务并不难，但是有一些细节要注意，当然，从这个任务中也有学到一定的知识。

#### 学习笔记

* $开头一个匿名函数
* join方法在数组的每个元素之间加上一个“符号”变成一个字符串 
* 在本个任务中使用eval把字符串表示的代数式进行运算，实际上[eval()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)函数会将传入的字符串当做JavaScript代码进行执行。避免在不必要的情况下使用eval，危险和效率低。
* toFixed函数实现四舍五入保留小数。
* 对于非数字，~~的结果为0，布尔的true是1
* 对于大于0的数，~~相当于是Math.floor
* 对于小于0的数，~~相当于是Math.ceil
* ~~效率更高

### 任务六 POS Project v0.2

#### 学习总结

这是一个类似实战逻辑的项目，在这里我简单描述一下我的实现逻辑。首先创建一个长度和商品表一样长度的数组，用来保存每种商品被购买的个数（个人认为，也可以采取网商品表中push一个元素的方法），一个变量存放总金额。然后，开始遍历购买清单（也就是我们挨个扫描的条码），和我们的商品遍历比对，条码吻合则购买数量加一，总额加上商品对应的金额。打印部分的每个产品的价格也就可以用数量*单价的方式计算。

另外，对于任务六，主要是逻辑的实现，没有在语法上学习更新的东西，所以没有笔记。

### 任务七 邮件地址验证

#### 学习总结

自己为数组对象增加了一种比较方法，函数也可以直接写进去。还可以运用一些数组已经有的方法，例如

* indexOf()如果被查找的字符串在总的字符串中，indexof就会返回其索引，反之不然，利用这个原理。

#### 学习笔记

* [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)


