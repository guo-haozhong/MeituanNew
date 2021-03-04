# 项目介绍

## 一、编译运行

* yarn install

* 因为有些库的最新版本引入了AndroidX，所以运行安卓端需进行迁移：

调用npx jetify将所有node_modules迁移到AndroidX，如下所示：

```
$ npx jetify 
```

或者在项目根目录下的终端输入：

```
$ yarn jetify
```



## 二、运行效果图



## 三、部分组件使用

* Drawer抽屉组件使用示例：
* 源码地址：https://github.com/rnc-archive/react-native-drawer-layout

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



* 吸顶组件StickyHeader使用示例:

```
import StickyHeader from '../../common/component/stickyheader'

<TabView
       style={{}}
       navigationState={{ index, routes }}
       swipeEnabled={true}
       renderScene={renderScene}
       renderTabBar={(props) =>
          <StickyHeader
              stickyHeaderY={310} // 滑动到多少悬浮
              stickyScrollY={this.state.scrollY} >
                  <View/>
          </StickyHeader> }
       onIndexChange={(index) => { this.setState({ index }) }}
       initialLayout={initialLayout}/>
```



# 四、网络请求示例

* fetch请求--callback写法

  ```
  import { getDetail, getUserInfo, uploadImage } from '../../../service/fetch/index'
  
  getUserInfo({
              id: 123456,
              token: 'Hozan'
          }, (res) => {
              alert(JSON.stringify(res))
          })
          
  //上传图片请求示例
   const fileArr = [{
              uri: 'uri',
              name: 'image.jpg',
              type: 'multipart/form-data'
  }]
  uploadImage(fileArr, (res) => { })
  ```

  

* axios请求--promise写法

```
import { getDetail, getUserInfo } from '../../../service/axios/index'

getUserInfo({
            id: 123456,
            token: 'Hozan'
        }).then((res) => {
            alert(JSON.stringify(res))
        }).catch((error) => {
            alert(JSON.stringify(error))
        })
```

