### Git 介绍

---
- 命名来源：源自英国俚语，意思大约是“混账”

- Git 是目前全球最先进的版本控制系统

- 什么是版本控制系统？

    *通过文档控制，能记录任何工程项目内各个模块的改动历程，并为每次改动编上序号。*
    
    *下图对版本控制系统的基本功能作了很好的诠释。*
   
   ![x](/markdowns/images/revision_controlled.png)
   
- Git 历史
    - 2002年，使用 BitKeeper 作为 Linux 内核主要的版本控制系统，遭到质疑
    - 2005年，Larry MaVoy 决定收回使用 BitKeeper 的授权
    - 同年，林纳斯·托瓦兹决定自行开发版本控制系统，来替代 BitKeeper，于是编写出 Git
    
- Git 安装
    - for Linux
    
        ``
        apt-get install git-all
        ``
    - for OS X
    
        [Xcode Command Line Tools ](https://developer.apple.com/downloads/)
        
    - 图形化界面
        
        [SourceTree](https://www.sourcetreeapp.com/)

### Git 基本操作

---

- 克隆远程仓库：创建一个远程仓库的本地克隆版本

  ```
  $ git clone username@host:/path/to/repository 
  ```
  
- 创建新仓库

  ```
  $ git init
  Initialized empty Git repository in /path/to/repository/.git/
  ```
  
- 添加远程仓库

  ```
  $ git remote add <name> <url>
  ```

- 查看本地状态

  ```
  $ git status
  On branch master
  Your branch is up-to-date with 'origin/master'.
  nothing to commit, working directory clean
  ```
  
- 提交本地修改

  ```
  $ git add <file>
  $ git commit -m "Add a new file"
  ```
  
- 推到远程仓库

  ```
  $ git push origin master
  ```
  
- 从远程仓库拉取

  ```
  $ git pull origin master
  ```
  [下一篇：Try Git 00x00](/#/article/1)