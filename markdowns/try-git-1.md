### Git 本地工作流分析

---
- 本地 Git 环境由三棵树组成
  - HEAD：当前分支引用的指针，它总是指向该分支上的最后一次提交
  - Index：索引，暂存区，临时保存你的改动，是你预期的下次提交
  - Working Directory：工作目录，实际文件的管理


- 提交流程分析
  - 假设我们有一个新的工作目录，里面有一个文件 file.txt，首先初始化 Git 仓库
  
    ``
    git init
    ``
    
    此时，只有工作目录有内容
    
    ![x](/markdowns/images/workflow-0.png)
    
  - 我们把此时这个文件的版本命令为 v1，此时我们想把这个文件提交到 Index 中,
  
    ``
    git add file.txt
    ``
    
    此时，文件便添加到了 Index 中
    
    ![x](/markdowns/images/workflow-1.png)
    
  - 我们想将这个文件提交到本地分支上
  
    ``
    git commit
    ``
    
    它会将索引中的内容保存成一个永久存在的快照，然后创建一个指向该快照的对象，最后更新 mater 来指向这个对象
    
    ![x](/markdowns/images/workflow-2.png)
    
    
    
- Reset 的用法

  - 假设当前已经有了3个版本的历史记录，如图
  
    ![x](/markdowns/images/reset-start.png)
  - 只移动 HEAD
  
    ``
    git reset (--soft) 9e5e6a4
    ``
    
    可以发现此时只有 HEAD 进行了移动，Index 和 Working Directory 都维持着原样
    
    ![x](/markdowns/images/reset-soft.png)
    
  - 移动 HEAD 并更新 Index
    
    ``
    git reset --mixed 9e5e6a4
    ``
    
    可以发现此时 HEAD 和 Index 都改动了
    
    ![x](/markdowns/images/reset-mixed.png)
    
  - 移动 HEAD 并更新 Index 和 Working Directory
  
    ``
    git reset --hard 9e5e7a4
    ``
    
    ![x](/markdowns/images/reset-hard.png)
    
    *值得一提的是，reset 后可以指明路径和文件，使得只回滚指定范围内的文件*
    
    [上一篇：Try Git 00x00](/#/article/0)
    
    [下一篇：Try Git 00x02](/#/article/2)