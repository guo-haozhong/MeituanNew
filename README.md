# 项目介绍

## 一、编译运行

* 因为有些库的最新版本引入了AndroidX，所以运行安卓端需进行迁移：

调用npx jetify将所有node_modules迁移到AndroidX，如下所示：

```
$ npx jetify 
```

* 

## 二、运行效果图

## 三、部分组件使用

* [Drawer抽屉组件]: https://github.com/rnc-archive/react-native-drawer-layout

  该组件来源于react-native-drawer-layout

```
import DrawerLayout from '../../common/component/drawer'

const _renderNavigationView=()=>{
            return(
                <View style={{flex:1,backgroundColor:colors.theme}}>
                    <Text></Text>
                </View>
            )
}
<DrawerLayout
                onDrawerSlide={(e) => { }}
                onDrawerStateChanged={(e) => { }}
                drawerWidth={250}
                drawerPosition={'left'}
                ref={'drawer'}
                keyboardDismissMode="on-drag"
                renderNavigationView={_renderNavigationView}>
                <View>
                    ...
                </View>
 </DrawerLayout>
```



* 

