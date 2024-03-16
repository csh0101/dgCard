<template>
  <view class="container" >
    <a>皮皮配音</a> 
    <view>
      <img  src="https://img.xwyue.com/i/2024/03/14/65f28b37844b4.png" width="100px" height="100px" >
    </view>
      <view class="character-window">
        <view class="character-container">
         <view class="character-image"  @tap="handleClick">
            <img  src="https://img.xwyue.com/i/2024/03/14/65f28e2e20e5f.png" width="50px" height="50px" ></img>
         </view> 
         <a class="character-text">温柔阿姨</a>
        </view>

        <view class="character-container">
         <div class="character-image" @tap="handleClick">
            <img  src="https://img.xwyue.com/i/2024/03/14/65f297f4b731a.png" width="50px" height="50px" ></img>
         </div> 
         <a class="character-text">皮皮</a>
        </view>

        <view class="character-container">
         <view class="character-image" @tap="handleClick">
            <img  src="https://img.xwyue.com/i/2024/03/14/65f297f89e0eb.png" width="50px" height="50px" ></img>
         </view> 
         <a class="character-text">小男孩</a>
        </view>

        <view class="character-container">
         <view class="character-image" @tap="handleClick">
            <img  src="https://img.xwyue.com/i/2024/03/14/65f2980332f03.png" width="50px" height="50px" ></img>
         </view> 
         <a class="character-text">小女孩</a>
        </view>
      </view>
    <view>
      <div style="margin-top: 50px;">
      <nut-textarea v-model="value" rows="50"  limit-show max-length="3000" />
      </div>
      <div style="margin-top: 50px;">
        <nut-row>
          <nut-col :span="6">
            <button class="feature-button" type="primary" style="font-size: medium;" >语速调节</button>
          </nut-col>
          <nut-col :span="6">
            <button class="feature-button" style="font-size: medium;" >敬请期待</button>
          </nut-col>
          <nut-col :span="6">
            <button class="feature-button" style="font-size: medium;" >敬请期待</button>
          </nut-col>
          <nut-col :span="6">
            <button class="feature-button" style="font-size: medium;" >敬请期待</button>
          </nut-col>
        </nut-row>
      </div>
    </view>
    <view>
      <nut-button type="primary" style="margin-top: 50px;">开始配音</nut-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';

const count = ref(0);
const value = ref(1)
const handleClick = () => {
  count.value++;
};
</script>


<style>
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
.character-window {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  margin-top: 20px;
}

.character-image {
  align-items: center;
}

.character-text {
  align-items: center;
  font-size: small;
}
.character-container {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ffffff; /* 主题色 */
  cursor: pointer;
  border-radius: 5px;
}

.feature-button {
  margin-right: 20px;
  padding: 10px;
  font-size: medium;
  border-radius: 5px;
}
</style>
