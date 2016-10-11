### 定义

> In a document, each element is represented as a rectangular box. Determining the size, properties — like its color, background, borders aspect — and the position of these boxes is the goal of the rendering engine.

> In CSS, each of these rectangular boxes is described using the standard box model. This model describes the content of the space taken by an element. Each box has four edges: the margin edge, border edge, padding edge, and content edge.

![x](http://occte31r6.bkt.clouddn.com/blog/images/css-box.png)

### Chrome 调试工具

![x](http://occte31r6.bkt.clouddn.com/blog/images/css-box-chrome.png)

- Tips
  - margin 值可为负, padding 值不能为负.


### 元素宽高计算方式

- box-sizing


### Margin collapsing

- 并列元素

  ```
  <p style="margin: 10px">Fist paragraph</p>
  <p style="margin: 10px">Fist paragraph</p>
  ```

  ![x](http://occte31r6.bkt.clouddn.com/blog/images/margin-sample.png)

- 父子元素
  - 在父元素和第一个子元素中，如果没有 border, padding, inline content, clearance 将他们的 margin-top 隔开，那么他们的 margin-top 将会 collapse.
  - 在父元素和最后一个子元素中，如果没有 no border, padding, inline content, height, min-height, max-height 将他们的 margin-bottom 隔开，那么他们的 margin-bottom 将会 collapse.

  ```
  <div>test</div>
  <div style="width: 200px;">
    <div style="margin-top: 40px; height: 50px;"></div>
    <div style="margin-bottom: 50px; height: 50px;"></div>
  </div>
  <div>test</div>
  ```

- 空元素
  - 如果一个元素没有 border, padding, inline content, height, or min-height 将它的 margin-top 和 margin-bottom 隔开，那么它的 margin-top 和 margin-bottom 会 collapse.

  ```
  <div>test</div>
  <div style="margin-top:20px; margin-bottom:20px;"></div>
  <div>test</div>
  ```
