### 团队协作中的 Git

---

- ``git pull --rebase``

  前面已经说过，``git pull`` 会自动拉取远程分支的数据，并与本地分支进行自动合并，当多人在同一分支进行工作的时候，此时直接使用 ``git pull``，就可能出现三方 merge 的情况，此时不仅会产生一个新的提交，还会在该分支的历史上增加一个小分支
  
  例如
  
  ![x](/markdowns/images/pull_rebase_0.png)
  
  它在 Network 中看起来是这样的
  
  ![x](/markdowns/images/pull_rebase_1.png)
  
  但如果使用 ``git pull --rebase``，就不会有多余的分支和提交
  
  **工作原理**
  
  首先来看看 merge 的原理
  
  ![x](/markdowns/images/pull_rebase_2.png)
  
  再来看看 rebase 的原理
  
  ![x](/markdowns/images/pull_rebase_4.png)
  
  ![x](/markdowns/images/pull_rebase_3.png)
  
  可以从图中看出，Feature 分支中的两个提交被接到了 Master 分支的头部，从而实现了整个分支历史的干净清晰
  
- **分支的创建规范**

  具体可以参见这篇文档 [Git/GitHub branching standards & conventions](https://gist.github.com/digitaljhelms/4287848)
  
  其中主分支一般有两个
    - master
    - stable
    
  辅助分支一般分为
    - Feature
    - Bug
    - Hotfix
    
  其中，Feature 一般是为了开发新的功能或者增强之前的功能，命名时一般为 feature-xxx，例如 feature/mails, feature/user-center
  
  *不要使用自己的名字命名分支* 

- **写好 commit message**

  在多人合作开发中，写好 commit message 十分的重要，它可以清晰地向别人展示你的工作情况，也可以帮你记录自己的历史提交进程，人的记忆力是有限的，大多数时候，当你想要恢复之前的某一段代码时，光凭记忆是不够的。如果你有一个良好的 commit message 书写习惯，那么就可以轻松找到曾经的代码。
  
  **推荐的 message 格式**
  
  ``<type>(<scope>): <subject>// 空一行<body>// 空一行<footer>``
  
  - type 用于说明 commit 的类别，如 Fix, Add...
  - scope 用于说明 commit 影响的范围
  - subject 是 commit 目的的简短描述，最好使用祈使句
  - body 是 commit 的详细描述
  - footer 可以用作关闭 issue，或者不兼容变动的描述 
  
  **一个优秀的栗子**
  
  ![x](/markdowns/images/commit_message_0.png)
  
  **一个糟糕的栗子**
  
  ![x](/markdowns/images/commit_message_1.png)
  
  [上一篇：Try Git 00x02](/#/article/2)