# 为什么要用Prefab预制体?
### 脚本处理逻辑，数据和绑定交给Prefab
借用MaxwellGeng在[此贴](https://www.zhihu.com/question/347571130/answer/836094555)中的一句名言：**Prefab比起BP，最根本的关系在于：心里有点B数，知道自己是干啥的**。更细节的讨论请看帖子。  
所以，在预制体工作流中，脚本（c++或蓝图）只负责处理逻辑，Prefab预制体负责挂载信息。  

### 可预测的执行顺序 Awake & Tick
加载预制体的时候，创建Actor的顺序是按照保存时候的规则来的：Outliner从上往下排序，最上面的先创建，所以根物体最先创建；Outliner默认是按照Actor的显示名称（ActorLabel）来排序的。由于创建的Actor的顺序是可控的，所以Awake和Tick的执行顺序也会按照创建Actor的顺序来。
