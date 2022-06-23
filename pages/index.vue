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
    <div class="main-content">
      <div class="sp-box-area">
        <div class="box-border-style sp-box-item-left">
          <p class="p-title">About Me</p>
          <div class="customer-hr" />
          <div>
            <p class="introduce-text">
              {{ this.aboutMeContent }}
            </p>
          </div>
        </div>
        <div class="box-border-style sp-box-item-right">
          <p class="p-title">Principal</p>
          <div class="customer-hr" />
          <div>
            <ul>
              <li v-for="principal in principalList" :key="principal">
                <div>
                  <p>
                    {{ principal["startDateTime"] }} -
                    {{ principal["endDateTime"] }}
                  </p>
                  <p>{{ principal["company"] }} / {{ principal["post"] }}</p>
                  <hr class="li-hr" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="introduce-box">
        <!-- <div
          class="box-border-style box-item"
          v-for="introduce in introduceList"
          :key="introduce"
        >
          <p class="p-title">{{ introduce["title"] }}</p>
          <div>
            <p>2022/02 - 2022/06</p>
            <p>未來有限公司</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutMeContent:
        "　　畢業於嶺東科技大學數位媒體設計系，在校時擔任社團幹部以及畢委會總召，興趣是潛水。四年志願役服役期間踏入了程式設計圈，退伍後隨即進入科技業IOT相關行業歷練，下班後利用時間自學更精深內容及發展彈吉他興趣。",
      principalList: [
        {
          startDateTime: "2021/03",
          endDateTime: "",
          company: "承穎科技公司",
          post: "應用程式工程師",
        },
        {
          startDateTime: "2019/11",
          endDateTime: "2021/02",
          company: "嘉通物聯網科技公司",
          post: "Android工程師",
        },
        {
          startDateTime: "2015/07",
          endDateTime: "2019/10",
          company: "職業軍人",
          post: "飛機修護人員",
        },
        {
          startDateTime: "2013/06",
          endDateTime: "2015/08",
          company: "嶺東科技大學",
          post: "畢委會總幹事",
        },
      ],
      introduceList: [
        { no: "001", title: "重大經歷" },
        // { no: "002", title: "相關技能" },
        // { no: "003", title: "程式語言" },
      ],
    };
  },
};
</script>

<style lang="scss">
.main {
  background: rgb(236, 236, 236);
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
}

p {
  color: rgb(0, 0, 0);
  font-family: "OpenFenYuan";
}

h1 {
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 60px;
}
h2 {
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.top-area {
  margin: auto;
  height: 300px;
  text-align: center;
  position: relative;
  background: rgb(97, 97, 96);
  .title-text {
    position: absolute;
    width: 100%;
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
.box-border-style {
  background: white;
  border: 3px rgb(255, 255, 255) solid;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 2px 1px rgba(83, 83, 83, 0.2);
}

.main-content {
  padding: 10px;
  .customer-hr {
    height: 2px;
    background: rgb(0, 0, 0);
    margin-bottom: 5px;
  }

  ul {
    list-style: none;
  }
  .p-title {
    color: rgb(26, 135, 224);
    font-size: 45px;
    font-family: "Lobster", cursive;
  }
  .sp-box-area {
    position: relative;
    display: flex;
    justify-content: space-between;
    .sp-box-item-left {
      width: 45%;
      margin-right: 10%;
    }
    .sp-box-item-right {
      width: 45%;
      margin-left: 10%;
      .li-hr {
        border: 0.5px solid rgba(184, 184, 184, 0.425);
        width: 50%;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
  .introduce-box {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .box-item {
      margin-top: 30px;
      width: 100%;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
}

hr {
  width: 80%;
}
@media screen and (max-width: 1024px) {
  h1 {
    font-size: 40px;
  }
  .main-content {
    padding-top: 125px;
    .sp-box-area {
      display: block;
      .sp-box-item-left {
        width: 95%;
        margin-right: 0;
        margin-bottom: 30px;
      }
      .sp-box-item-right {
        width: 95%;
        margin-left: 0;
      }
    }
    .introduce-box {
      .box-item {
        width: 100%;
      }
    }
  }
}
</style>
