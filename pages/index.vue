<template>
  <div class="main">
    <div class="top-area">
      <div class="title-text">
        <h1>KAI CHUN CHAN</h1>
        <h2>1993/08/31</h2>
      </div>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="produce image"
      />
    </div>
    <div>
      <div class="introduce-box">
        <div class="box-item">
          <h3>About Me</h3>
          <hr />
          <div>
            <p class="introduce-text">
              <!-- 畢業於嶺東科技大學數位媒體設計系 -->
            </p>
          </div>
        </div>
      </div>
      <div class="introduce-box">
        <div
          class="box-item"
          v-for="introduce in introduceList"
          :key="introduce"
        >
          <h3>{{ introduce["title"] }}</h3>
          <div>
            <p>2022/02 - 2022/06</p>
            <p>未來有限公司</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduceList: [
        { no: "001", title: "重大經歷" },
        // { no: "002", title: "相關技能" },
        // { no: "003", title: "程式語言" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: rgb(104, 104, 104);
  width: 100%;
  height: 100%;
  position: fixed;
}

p {
  color: white;
}
h1,
h2 {
  color: white;
}
.top-area {
  margin: auto;
  height: 300px;
  text-align: center;
  position: relative;
  background: rgb(97, 97, 96);

  .title-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    border-radius: 50%;
    position: relative;
    top: 65%;
    width: 200px;
    border: 3px solid rgb(255, 255, 255);
  }
}
.introduce-box {
  margin-top: 125px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .box-item {
    width: 50%;
  }
}

hr {
  width: 80%;
}
</style>
