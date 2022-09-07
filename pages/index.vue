<template>
  <div class="main">
    <div class="div-top-cover-container">
      <div class="div-top-cover-under-background">
        <div class="div-text-area">
          <!-- <p>{{ aboutMeContent }}</p> -->
        </div>
      </div>
      <div class="div-principal-container">
        <scroll-principal-widget
          v-for="principal in principalList"
          :key="principal"
          :title="principal['post']"
          :startDateTime="principal['startDateTime']"
          :endDateTime="principal['endDateTime']"
          :companyName="principal['company']"
          :content="principal['content']"
        ></scroll-principal-widget>
      </div>
    </div>
    <div>
      <h1>Work</h1>
      <work-item-widget
        v-for="item in worksList"
        :key="item"
        :title="item.title"
        :description="item.description"
      ></work-item-widget>
    </div>
    <div>
      <h1>Skill</h1>
    </div>
  </div>
</template>

<script>
import ScrollPrincipalWidget from "../components/ScrollPrincipalWidget.vue";
import WorkItemWidget from "../components/WorkItemWidget.vue";
export default {
  components: { ScrollPrincipalWidget, WorkItemWidget },
  data() {
    return {
      aboutMeContent:
        "　　畢業於嶺東科技大學數位媒體設計系，在校時擔任社團幹部以及畢委會總召，興趣是潛水。四年志願役服役期間踏入了程式設計圈，退伍後隨即進入科技業IOT相關行業歷練，下班後利用時間自學更精深內容及發展彈吉他興趣。",
      principalList: [
        {
          startDateTime: "2021/03",
          endDateTime: "",
          company: "承穎科技公司",
          post: "APP ENGINNER",
          content:
            "● 開發「倉儲管理系統」、「派車系統」、「貨態查詢」應用程式  \u000A● 客製客戶需求功能\u000A● 維護現有客戶專案\u000A\u000A※服務知名國內多家知名物流企業。如:宅配通、MOMO、中華郵政等等。以MVVM軟體設計架構進行開法，並主動導入Flutter雙系統平台及提供用戶使用。",
        },
        {
          startDateTime: "2019/11",
          endDateTime: "2021/02",
          company: "嘉通物聯網科技公司",
          post: "ANDROID ENGINNER  ",
          content:
            "● 開發「睡眠檢測」、「空氣品質檢測」應用程式\u000A● BLT藍芽技術串聯APP即時顯示\u000A● 維護現有客戶專案",
        },
        {
          startDateTime: "2015/07",
          endDateTime: "2019/10",
          company: "職業軍人",
          post: "飛機修護人員",
          content:
            "● 直升機相關零件維護及修復\u000A● 教學新進官兵飛機維修相關內容\u000A",
        },
        {
          startDateTime: "2013/06",
          endDateTime: "2015/08",
          company: "嶺東科技大學",
          post: "畢委會總幹事",
          content: "",
        },
      ],
      worksList: [
        { title: "迷途狗", description: "This is about 迷途狗" },
        { title: "迷途狗", description: "This is about 迷途狗" },
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
.div-top-cover-container {
  width: 100%;
  background: #dddddd;
  position: relative;
  height: 600px;
  .div-top-cover-under-background {
    white-space: pre-wrap;
    position: absolute;
    height: 200px;
    background: #5f5f5f7e;
    bottom: 0;
    width: 100%;
    .div-text-area {
      display: flex;
      align-content: center;
      align-items: flex-end;
      flex-direction: column;
      height: 100%;
      p {
        margin-top: 100px;
        margin-right: 700px;
        width: 600px;
        color: rgb(255, 255, 255);
      }
    }
  }
  .div-principal-container {
    position: absolute;
    background: #ffffff;
    right: 120px;
    width: 35%;
    height: 600px;
    width: 500px;
    overflow: auto;
  }
  .div-principal-container::-webkit-scrollbar {
    width: 0.3em; //滾軸粗度
  }
  .div-principal-container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(139, 139, 139, 0.3);
    border-radius: 2px;
  }
  .div-principal-container::-webkit-scrollbar-thumb {
    border: 0.1px solid rgb(235, 235, 235);
    border-radius: 10px;
  }
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
