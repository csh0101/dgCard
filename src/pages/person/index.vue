<template> 
    <view class="container">
    <view class="bg-white">
    <view class="profile-container">
      <view class="profile">
        <view class="avatar">
          <nut-avatar size="large">
            <img src="https://img.xwyue.com/i/2024/03/13/65f19f9fc2627.png" alt="用户头像" />
          </nut-avatar>
        </view>
        <!-- <nut-avatar url="https://img.xwyue.com/i/2024/03/13/65f19f9fc2627.png"  icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" ></nut-avatar> -->
        <!-- <a v-if="isLogin" on-click="">点击登录</a> -->
      <div class="user-info">
          <!-- 加粗大字体的用户ID -->
          <div class="user-id" v-if="userId">
            <strong>ID: {{ userId }}</strong>
          </div>
          <!-- 提示信息 -->
          <view class="membership-status">
            你还不是会员哦
          </view>
        </div>
      </view>
      <view class="refresh-button">
        <nut-button type="default">会员刷新</nut-button>
      </view>
    </view>

    <view class="banner">
      开通VIP会员 享受更多特权
    </view>

    <view class="box2">
      <view class="button-container" @click="handleButtonClick">
        <img class="button-image" src="https://img.xwyue.com/i/2024/03/13/65f19478aec40.png" width="40px" height="40px" alt="会员" >
        <span>开通会员</span>
      </view>
      <view class="button-container" @click="handleButtonClick">
        <img class="button-image" src="https://img.xwyue.com/i/2024/03/13/65f197ac092b0.png" width="40px" height="40px" alt="会员" >
        <span>每日任务</span>
      </view>
      <view class="button-container" @click="handleButtonClick">
        <img class="button-image" src="https://img.xwyue.com/i/2024/03/13/65f197fb7297e.png" width="40px" height="40px" alt="会员" >
        <span>邀请赚现金</span>
      </view>
      <view class="button-container" @click="handleButtonClick">
        <img class="button-image" src="https://img.xwyue.com/i/2024/03/13/65f1989eb3883.png" width="40px" height="40px" alt="会员" >
        <span>代金券</span>
      </view>   
    </view> 
    <view class="box1" >
        <nut-cell>
          <scan></scan>
          <p>扫码登录</p>
        </nut-cell>
        <nut-cell>
          <order></order>
          <p>订单中心</p>
        </nut-cell>
        <nut-cell>
          <ask></ask>
          <p>意见反馈</p>
        </nut-cell>
    </view> 
    <view class="box1">
        <nut-cell>
          <scan></scan>
          <p>小程序登录教程</p>
        </nut-cell>
        <nut-cell>
          <order></order>
          <p>电脑端登录教程</p>
        </nut-cell>
        <nut-cell>
          <ask></ask>
          <p>如何导入到剪映</p>
        </nut-cell>
    </view>
    </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import { Scan,Ask,Order } from '@nutui/icons-vue-taro';
const count = ref(0);
const value = ref('');
const isLogin = ref(true);
const userId = ref('xxxxx'); 
</script>

<style lang="scss">
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  margin-top: 30px;
  background-color: #f0f0f0;
  font-size: medium;
}

.box1{
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}

.box2{
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ffffff; /* 主题色 */
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}

.button-image {
  margin-bottom: 5px; /* 文字和图片之间的间距 */
  width: 40px;
  height: 40px;
}

.profile-container {
  display: flex;;
  justify-content: space-between;
  align-items: center;
}

.profile {
  display: flex;;  
  align-items: center;
}


.user-info {
  /* 根据需要调整布局 */
  margin-left: 20px;
}

.user-id {
  font-size: 24px; /* 大字体 */
  font-weight: bold; /* 加粗 */
  margin-bottom: 10px; /* 与下面文本的间距 */
}

.membership-status {
  /* 根据需要调整样式 */
}

.avatar img {
  width: 125px; /* 调整头像大小 */
  height: 125px; /* 调整头像大小 */
  border-radius: 50%; /* 头像圆形 */
}
.bg-white {
  background-color: #ffffff; /* 纯白色，适用于区分出的特定功能区或突出显示内容 */
}

.banner {
  background-color: yellow;
  height: 200px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-size: large;
}

</style>