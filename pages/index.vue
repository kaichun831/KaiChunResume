<template>
  <v-app>
    <v-navigation-drawer app style="background: #ffffff">
      <v-container align="center">
        <v-hover>
          <v-avatar size="180">
            <v-img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></v-img>
          </v-avatar>
        </v-hover>
        <p style="margin-top: 10px">簡簡單單創造美好生活，熱愛潛水和音樂。</p>
        <v-divider style="margin-top: -15px; margin-bottom: 20px"></v-divider>
        <v-row align="center" style="margin-left: 2px">
          <v-icon style="margin-right: 10px">mdi-cellphone</v-icon>
          <p style="font-size: 8px; margin: 0">0968-717579</p>
        </v-row>
        <v-row align="center" style="margin-left: 2px">
          <v-icon style="margin-right: 10px">mdi-email-box</v-icon>
          <p style="font-size: 8px; margin: 0">kaichun831@gmail.com</p>
        </v-row>
        <v-row align="center" style="margin-left: 2px">
          <v-icon style="margin-right: 10px">mdi-github</v-icon>
          <a
            href="https://github.com/kaichun831"
            style="font-size: 8px; margin: 0"
            >https://github.com/kaichun831</a
          >
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main style="background: white">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <div class="div-top-cover-container">
          <div class="div-top-cover-under-background">
            <div class="div-text-area">
              <p>{{ aboutMeContent }}</p>
            </div>
          </div>
          <div class="div-principal-container">
            <scroll-principal-widget
              v-for="principal in principalList"
              :key="principal['id']"
              :title="principal['post']"
              :startDateTime="principal['startDateTime']"
              :endDateTime="principal['endDateTime']"
              :companyName="principal['company']"
              :content="principal['content']"
            ></scroll-principal-widget>
          </div>
        </div>
        <h1>Specialty</h1>
        <v-col>
          <v-card
            color="rgba(255, 255, 255)"
            style="padding: 20px; margin: 10px"
          >
            <h3>{{ spcialtyTitle }}</h3>
            <p>{{ spcialtyContent }}</p>
          </v-card>
        </v-col>
        <h1>Project</h1>
        <v-col>
          <work-item-widget
            :id="worksList[projectSeletedIndexStart].id"
            :title="worksList[projectSeletedIndexStart].title"
            :type="worksList[projectSeletedIndexStart].type"
            :picPath="worksList[projectSeletedIndexStart].picPath"
            :webUrl="worksList[projectSeletedIndexStart].webUrl"
            :description="worksList[projectSeletedIndexStart].description"
            :screenshot="worksList[projectSeletedIndexStart].screenshot"
          ></work-item-widget>
          <work-item-widget
            :id="worksList[projectSeletedIndexStart + 1].id"
            :title="worksList[projectSeletedIndexStart + 1].title"
            :type="worksList[projectSeletedIndexStart + 1].type"
            :picPath="worksList[projectSeletedIndexStart + 1].picPath"
            :webUrl="worksList[projectSeletedIndexStart + 1].webUrl"
            :description="worksList[projectSeletedIndexStart + 1].description"
            :screenshot="worksList[projectSeletedIndexStart + 1].screenshot"
            v-if="projectSeletedIndexStart + 1 < worksList.length"
          ></work-item-widget>
          <work-item-widget
            :id="worksList[projectSeletedIndexStart + 2].id"
            :title="worksList[projectSeletedIndexStart + 2].title"
            :type="worksList[projectSeletedIndexStart + 2].type"
            :picPath="worksList[projectSeletedIndexStart + 2].picPath"
            :webUrl="worksList[projectSeletedIndexStart + 2].webUrl"
            :description="worksList[projectSeletedIndexStart + 2].description"
            :screenshot="worksList[projectSeletedIndexStart + 2].screenshot"
            v-if="projectSeletedIndexStart + 2 < worksList.length"
          ></work-item-widget>
        </v-col>
        <v-pagination
          v-model="projectSeletedPage"
          :length="getProjectLength()"
        ></v-pagination>
        <!-- <h1>Hobby</h1> -->
        <!-- <image-wall></image-wall> -->
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import ImageWall from "../components/ImageWall.vue";
import ScrollPrincipalWidget from "../components/ScrollPrincipalWidget.vue";
import WorkItemWidget from "../components/WorkItemWidget.vue";
export default {
  components: { ScrollPrincipalWidget, WorkItemWidget, ImageWall },
  data() {
    return {
      projectSeletedPage: 1,
      projectSeletedIndexStart: 0,
      spcialtyTitle: "擅長於ANDROID原生APP及跨平台FLUTTER開發",
      spcialtyContent:
        "\u000A★ Android Architecture MVVM / Databinding / JetPack / ReactiveX / Java/ Kotlin / UnitTest / Coroutine \u000A★ Flutter Architecture GetX \u000A★ CI/CD Jenkins \u000A★ Version Control Git \u000A★ Project Mangement Redmine",
      aboutMeContent:
        "　　畢業於嶺東科技大學數位媒體設計系，在校時擔任社團幹部以及畢委會總召，興趣是潛水。四年志願役服役期間踏入了程式設計圈，退伍後隨即進入科技業IOT相關行業歷練，下班後利用時間自學更精深內容及發展彈吉他興趣。",
      principalList: [
        {
          id: "001",
          startDateTime: "2021/03",
          endDateTime: "NOW",
          company: "承穎科技公司",
          post: "APP ENGINNER",
          content:
            "● 開發「倉儲管理系統」、「派車系統」、「貨態查詢」應用程式  \u000A● 客製客戶需求功能\u000A● 維護現有客戶專案\u000A\u000A※服務知名國內多家知名物流企業。如:宅配通、MOMO、中華郵政等等。以MVVM軟體設計架構進行開法，並主動導入Flutter雙系統平台及提供用戶使用。",
        },
        {
          id: "002",
          startDateTime: "2019/11",
          endDateTime: "2021/02",
          company: "嘉通物聯網科技公司",
          post: "ANDROID ENGINNER  ",
          content:
            "● 開發「睡眠檢測」、「空氣品質檢測」應用程式\u000A● BLT藍芽技術串聯APP即時顯示\u000A",
        },
        {
          id: "003",
          startDateTime: "2015/07",
          endDateTime: "2019/10",
          company: "職業軍人",
          post: "飛機修護人員",
          content:
            "● 直升機相關零件維護及修復\u000A● 教學新進官兵飛機維修相關內容\u000A",
        },
        {
          id: "004",
          startDateTime: "2013/06",
          endDateTime: "2015/08",
          company: "嶺東科技大學",
          post: "畢委會總幹事",
          content: "● 策畫系會參展事宜  \u000A● 協調它系舉辦日程\u000A",
        },
      ],
      worksList: [
        {
          id: "001",
          type: "APP",
          title: "迷途狗",
          webUrl: "",
          picPath: "https://i.imgur.com/9hXYeXG.png",
          description:
            "2020為了方便家人，因此誕生了圖像記錄通訊錄，希望在這方面能夠幫到更多人。",
          screenshot: [
            "https://i.imgur.com/qu59buZ.png",
            "https://i.imgur.com/otilftA.png",
            "https://i.imgur.com/H92MTVt.png",
            "https://i.imgur.com/RE5RytO.png",
            "https://i.imgur.com/XwSf5R2.png",
            "https://i.imgur.com/SwW9ham.png",
          ],
        },
        {
          id: "002",
          type: "APP",
          title: "中華郵政",
          webUrl: "",
          picPath: "https://i.imgur.com/lHDVbB5.png",
          description:
            "提供中華郵政內部倉儲作業人員使用，方便處理倉儲相關入庫、出庫、盤點等等功能。",
          screenshot: [
            "https://i.imgur.com/qu59buZ.png",
            "https://i.imgur.com/otilftA.png",
            "https://i.imgur.com/H92MTVt.png",
            "https://i.imgur.com/RE5RytO.png",
            "https://i.imgur.com/XwSf5R2.png",
            "https://i.imgur.com/SwW9ham.png",
          ],
        },
        {
          id: "003",
          type: "APP",
          title: "承穎派車系統",
          webUrl: "",
          picPath: "https://i.imgur.com/LF1zkEh.png",
          description:
            "提供貨運人員使用，在管理訂單配達等等能有效的提供即時狀態回報，包含照片上傳、客戶簽名、客戶約配、單據查詢等等。",
          screenshot: [
            "https://i.imgur.com/qu59buZ.png",
            "https://i.imgur.com/otilftA.png",
            "https://i.imgur.com/H92MTVt.png",
            "https://i.imgur.com/RE5RytO.png",
            "https://i.imgur.com/XwSf5R2.png",
            "https://i.imgur.com/SwW9ham.png",
          ],
        },
        {
          id: "004",
          type: "APP",
          title: "承穎貨態查詢系統",
          webUrl: "",
          picPath: "https://i.imgur.com/Sl7VCsM.png",
          description:
            "提供多倉進行查詢系統即時狀態，同時可以查詢庫存異動資料。",
          screenshot: [
            "https://i.imgur.com/qu59buZ.png",
            "https://i.imgur.com/otilftA.png",
            "https://i.imgur.com/H92MTVt.png",
            "https://i.imgur.com/RE5RytO.png",
            "https://i.imgur.com/XwSf5R2.png",
            "https://i.imgur.com/SwW9ham.png",
          ],
        },
        {
          id: "005",
          type: "APP",
          title: "承穎倉儲系統",
          webUrl: "",
          picPath: "https://i.imgur.com/X4UF8l4.png",
          description:
            "全新開發倉儲系統(公版)，優化效能、畫面重新安排，使倉儲工作變得簡單。",
          screenshot: [
            "https://i.imgur.com/ImATgfW.png",
            "https://i.imgur.com/9Xax4zF.png",
            "https://i.imgur.com/cUZhB5t.png",
            "https://i.imgur.com/GVjLD8r.png",
            "https://i.imgur.com/aaaPEHK.png",
            "https://i.imgur.com/7mfrydU.png",
          ],
        },
        {
          id: "006",
          type: "WEB",
          title: "旺來蓁展蛋捲",
          webUrl: "https://walai.com.tw/",
          picPath: "https://i.imgur.com/mDEXaNl.png",
          description: "協助店家製作商業網站。",
          screenshot: [],
        },
        {
          id: "007",
          type: "WEB",
          title: "鼎耀國際供應鏈有限公司",
          webUrl: "https://dynergicsupplyinc.com/",
          picPath: "https://i.imgur.com/Tkq4HFe.png",
          description: "協助店家製作商業網站。",
          screenshot: [],
        },
      ],
      introduceList: [
        { no: "001", title: "重大經歷" },
        // { no: "002", title: "相關技能" },
        // { no: "003", title: "程式語言" },
      ],
    };
  },
  methods: {
    //專案作品顯示個數
    getProjectLength() {
      let count = 3;
      if (this.worksList.length % count == 0) {
        return Number.parseInt(this.worksList.length / count);
      } else {
        return Number.parseInt(this.worksList.length / count + 1);
      }
    },
  },
  watch: {
    projectSeletedPage: {
      handler(newVal, oldVal) {
        let count = 3;
        this.projectSeletedIndexStart = count * (newVal - 1);
        // console.log("Start Index " + this.projectSeletedIndexStart);
      },
      immediate: true,
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.main {
  background: rgb(143, 143, 143);
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
  color: rgb(117, 117, 117);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 30px;
}
h2 {
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.div-top-cover-container {
  width: 100%;
  background: url("https://as2.ftcdn.net/v2/jpg/02/94/37/55/1000_F_294375555_tpcdo43DC1XFr6kpSv4v4bEsmcY1GgWz.jpg");
  // background-size: cover;
  position: relative;
  height: 600px;
  .div-top-cover-under-background {
    white-space: pre-wrap;
    position: absolute;
    height: 200px;
    background: #a0a0a07e;
    bottom: 0;
    width: 100%;
    .div-text-area {
      display: flex;
      align-content: center;
      align-items: flex-end;
      flex-direction: column;
      height: 100%;
      p {
        margin-top: 120px;
        margin-right: 500px;
        width: 600px;
        color: rgb(255, 255, 255);
      }
    }
  }
  .div-principal-container {
    position: absolute;
    background: #ffffffb4;
    right: 120px;
    width: 35%;
    height: 600px;
    width: 350px;
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
@media screen and (max-width: 768px) {
  .div-top-cover-container {
    .div-principal-container {
      width: 100%;
      right: 0px;
      left: 0px;
    }
  }
}
</style>
