---
title: layout
order: 1.1
---

## Simple Example

<div class="bs-example" id="layout-demo">
  <n3-container fluid><n3-row><n3-column :col="8" class="context">:col="8"</n3-column><n3-column :col="4" class="context">:col="4"</n3-column></n3-row><n3-row><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column><n3-column :col="1" class="context">1</n3-column></n3-row></n3-container>
</div>

<script type="text/javascript">
  new Vue({
    el: '#layout-demo'
  })
</script>

## 示例代码

``` html
<n3-container fluid>
  <n3-row>
      <n3-column :col="8" class="context">
          :col="8"
      </n3-column>
      <n3-column :col="4" class="context">
          :col="4"
      </n3-column>
  </n3-row>
  <n3-row>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
  </n3-row>
</n3-container>
```

## n3-container 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| fluid | `Boolean` | `false` | 是否流式布局 |

## n3-column参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| col | `Number` | `false` | 占的列数 |
| mode | `String` | `'md'` | 布局模式 xs/sm/md/lg |
| offset | `Number` |  | 偏移值 |
