JavaScript Stop Inner Click Event Propagation Demo
==================================================

如果想让某个button的click事件不要向上传到某个parent里，但我们又没有办法去更改button自己的onclick，我们可以创建一个中间层，定义它的onclick，停止事件向上传播

Open `index.html` in your browser.

You will see "Hello, JS!" on the page.
