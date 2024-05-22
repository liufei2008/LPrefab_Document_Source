# PrefabEditor

When double click a Prefab, a PrefabEditor window will be opened, it is the good place to edit prefab:  
![](./1.png)

**[temporary_RootAgent]** is automatically created actor, which is just an temporary root node.  

## Assign actor variable
Sometimes we want to assign an actor variable inside PrefabEditor, we actually can't use these quick methods to choose the desired actor (the three little icon buttons), because it can only choose actors inside current level:  
![](./note1.png)

But how can we do it? Well there is a workaround.  
Check on the little lock button in the Details panel:  
![](./note2.png)

Then drag your actor to the variable area:  
![](./note3.png)  
That's it.
