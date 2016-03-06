### Git 分支管理

---

- 分支的本质：指向提交对象的可变指针

- 分支的意义
  - 可以轻松从主线开发上脱离开来，使得可以继续自己单独的工作
  - 提高多线开发的效率
  - 控制生产环境

- 创建分支

  ``
  $ git branch <name>
  ``
  
- 切换分支

  ``
  $ git checkout <branch name>
  ``
  
  *需要注意的是，分支切换会改变你工作目录中的文件*
  
- 合并分支

  ``
  $ git merge <branch name>
  ``
  
  该命令会将指定分支名合并到当前分支
  当两个分支对同一个文件的同一部分进行了修改时，Git 就没有办法自动合并它们，此时合并分支时，会提示 CONFLICT
  
  ```
  $ git merge gh-pages
  Auto-merging index.html 
  CONFLICT (content): Merge conflict in index.html 
  Automatic merge failed; fix conflicts and then commit the result. 
  ```
  
  此时，找到提示的文件，打开后，找到冲突的部分，它们看起来是这样的
  
  ```
  <<<<<<< HEAD:index.html
  <div id="footer">sway</div>
  =======
  <div id="footer">
  sway
  </div>
  >>>>>>> gh-pages:index.html
  ```
  
  解决冲突以后，将所有冲突的文件存入暂存区，然后运行 ``git commit``，完成提交即可
  

### Git 远程管理

---

远程仓库是指托管在因特网或其他网络中的你的项目的版本库。是多人协作的基础。

一个项目可以有好几个远程仓库。

- Remote 命令

  - 查看远程仓库列表
  
    ```
    $ git remote -v
    origin	git@github.com:dyweb/Ayi.git (fetch)
    origin	git@github.com:dyweb/Ayi.git (push)
    ```
    
  - 查看远程仓库详情
  
    ```
    $ git remote show origin
    * remote origin
      Fetch URL: git@github.com:dyweb/Ayi.git
      Push  URL: git@github.com:dyweb/Ayi.git
      HEAD branch: master
      Remote branches:
        feature/multi-package new (next fetch will store in remotes/origin)
        gh-pages              tracked
        master                tracked
      Local branch configured for 'git pull':
        master merges with remote master
      Local ref configured for 'git push':
        master pushes to master (local out of date)
    ```
    
  - 添加远程仓库
  
    ```
    $ git remote add <remote name> <url>
    ```
    
- 远程分支管理

  - 跟踪远程分支：从一个远程跟踪分支检出一个本地分支会自动创建一个叫做 “跟踪分支”，当克隆一个仓库时，它通常会自动地创建一个跟踪 origin/master 的 master 分支。
  
    使用 ``git checkout`` 可以轻松跟踪远程分支
    
    - 使用 ``git checkout -b <branch> <remote name>/<branch>``，创建一个本地分支，并且跟踪一个远程分支
    
      ```
      $ git checkout -b gh-pages origin/gh-pages
      Branch gh-pages set up to track remote branch gh-pages from origin.
      Switched to a new branch 'gh-pages'
      ```
      
    - 或者也可以使用 --track 快捷键
    
      ```
      $ git checkout --track origin/gh-pages
      ```
      
    - 使用 ``git branch --set-upstream-to <remote name>/<branch>``，修改已有的本地分支跟踪远程分支
    
      ```
      $ git branch --set-upstream-to origin/master
      Branch gh-pages set up to track remote branch master from origin.
      ```
    

- 数据推送

  - ``git push <remote name>/<branch>``：将本地分支的数据推送到有写权限的仓库上

- 数据拉取

  - ``git fetch (remote name)``：从远程仓库拉取还没有的数据，但不会自动合并或者修改你本地的工作
  - ``git pull <remote name>/<branch>``：从远程仓库拉取还没有的数据，并与本地分支进行自动合并，**当不显示地声明具体的仓库名和分支名时，会自动拉取当前分支的跟踪分支。**
  
  [上一篇：Try Git 00x01](/#/article/1)
  
  [下一篇：Try Git 00x03](/#/article/3)