<template>
  <div>
    <div id="main">
      <!-- 形象畫面 -->
      <div class="div-introduce-container">
        <div class="introduce-filter-cover">
          <div style="width: 100%; height: 100%; position: relative">
            <div class="introduce-center">
              <img src="https://i.imgur.com/ArfYYvz.jpg" />
              <p style="font-size: 24px; font-weight: bold">詹凱鈞(KG)</p>
              <p style="font-size: 16px">1993/08/31</p>
            </div>
            <p class="introduce-slogan">{{ slogan }}</p>
          </div>
        </div>
      </div>
      <!-- 業務範圍 -->
      <div class="div-main-container">
        <div class="main-block">
          <!--左側區塊介紹 -->
          <div class="content-view">
            <card-widget-vue class="card-bg-style">
              <h2>職責</h2>
              <section>
                <card-widget-vue>
                  <p>{{ responseibility }}</p>
                </card-widget-vue>
              </section>
              <h2>技術工具</h2>
              <section>
                <card-widget-vue>
                  <div
                    v-for="item in spcialtyContent"
                    :key="item"
                    style="padding: 3px"
                  >
                    <!-- <h3 style="font-size: 18px; font-family: 'Lora', serif">
                      {{ item.title }}
                    </h3> -->
                    <p>
                      <span
                        style="
                          font-size: 18px;
                          font-family: 'Lora', serif;
                          font-weight: bold;
                        "
                        >{{ item.title }} : </span
                      >{{ item.content }}
                    </p>
                  </div>
                </card-widget-vue>
              </section>
              <h2>作品集與相關連結</h2>
              <section class="project-wrap">
                <div class="project-item-container">
                  <card-widget-vue
                    class="project-item"
                    v-for="item in worksList"
                    :key="item.id"
                  >
                    <a :href="item.link" class="item-link">
                      <img :src="item.picPath" class="item-img" />
                      <h3>{{ item.title }}</h3>
                    </a>
                  </card-widget-vue>
                </div>
              </section>
            </card-widget-vue>
          </div>
          <!--右側經歷介紹 -->
          <div class="div-principal-container">
            <scroll-principal-widget-vue
              style="width: 90%"
              v-for="principal in reversedPrincipalList"
              :key="principal['id']"
              :title="principal['post']"
              :startDateTime="principal['startDateTime']"
              :endDateTime="principal['endDateTime']"
              :companyName="principal['company']"
              :content="principal['content']"
            ></scroll-principal-widget-vue>
          </div>
        </div>
      </div>
      <!-- 簡要經歷 -->
      <div class="div-bottom-container">
        <div>
          <ul>
            <li>/ 客製APP / 網頁建置 / 媒合設計 / 媒合攝影 / 廣告投放 /</li>
            <li style="font-size: 30px">歡迎來信洽詢</li>
            <li>/ 0968-717-579 /</li>
            <li>/ kaichun831@gmail.com /</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardWidgetVue from "../components/CardWidget.vue";
import ScrollPrincipalWidgetVue from "../components/ScrollPrincipalWidget.vue";

export default {
  components: { cardWidgetVue, ScrollPrincipalWidgetVue },
  data() {
    return {
      drawer: true,
      projectSeletedPage: 1,
      projectSeletedIndexStart: 0,
      responseibility:
        "\n主要負責項目: \n配合設計人員開發畫面、評估開發時程、構思並實作額外功能、客製內容開發、製作使用者手冊等。\n\n",
      spcialtyContent: [
        {
          title: "Android開發",
          content:
            "Android Architecture MVVM / Databinding / JetPack / ReactiveX / Java / Kotlin / UnitTest / Coroutine",
        },
        { title: "Flutter開發", content: "Architecture GetX" },
        { title: "ReactNative開發", content: "TypeScript" },
        { title: "CI/CD", content: "Jenkins、GitLab-CI" },
        { title: "版本控制", content: "Git" },
        { title: "專案管理", content: "Redmine、CickUp" },
      ],
      slogan: "　　/ 享受過程，並穩紮穩打 /",
      principalList: [
      {
          id: "001",
          startDateTime: "2013/06",
          endDateTime: "2015/08",
          company: "嶺東科技大學",
          post: "畢委會總幹事",
          content:
            "● 策畫系會參展事宜  \n● 協調它系舉辦日程\n\n※曾帶領參與「新一代設計展」、「高雄放肆大賞」和「台中A+設計展」。",
        },
        {
          id: "002",
          startDateTime: "2015/07",
          endDateTime: "2019/10",
          company: "職業軍人",
          post: "飛機修護人員",
          content:
            "● 直升機相關零件維護及修復\n● 教學新進官兵飛機維修相關內容\n",
        },
        {
          id: "003",
          startDateTime: "2019/11",
          endDateTime: "2021/02",
          company: "嘉通物聯網科技公司",
          post: "ANDROID ENGINEER",
          content:
            "● 開發「睡眠檢測」、「空氣品質檢測」應用程式\n● BLT藍芽技術串聯APP即時顯示\n",
        },
        {
          id: "004",
          startDateTime: "2021/03",
          endDateTime: "2023/04",
          company: "承穎科技公司",
          post: "APP ENGINEER",
          content:
            "● 開發「倉儲管理系統」、「派車系統」、「貨態查詢」應用程式 \n● 客製客戶需求功能\n● 維護現有客戶專案\n\n※服務國內多家知名物流企業。如:夏暉、宅配通、MOMO和中華郵政等等。以MVVM軟體設計架構進行開發，並主動導入Flutter雙系統平台及提供用戶使用。",
        },
        {
          id: "005",
          startDateTime: "2023/05",
          endDateTime: "NOW",
          company: "宇立峯科技有限公司",
          post: "FLUTTER ENGINEER",
          content:
            "從0開始打造產品，提供多國業主使用，提供多種APP服務，如：APP開發、APP維護等等。\n\n※擁有多年APP開發經驗，熟悉多種APP開發流程，並且擅長多國語言翻譯。",
        },
        
       
        
      ],
      worksList: [
        {
          id: "001",
          type: "APP",
          title: "迷途狗",
          link: "./project/001",
          webUrl:
            "https://play.google.com/store/apps/details?id=com.dylanwalkha.asuscomm.app.twudingmap&hl=zh-TW",
          picPath: "https://i.imgur.com/9hXYeXG.png",
          description:
            "為了方便家人，因此誕生了圖像記錄通訊錄，希望在這方面能夠幫到更多人。\n\n 2020已上架於Android PlayStore ",
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
          link: "./project/002",
          webUrl: "",
          picPath: "https://i.imgur.com/lHDVbB5.png",
          description:
            "提供中華郵政內部倉儲作業人員使用，方便處理倉儲相關入庫、出庫、盤點等等功能。",
          screenshot: [
            "https://i.imgur.com/YJjVWAI.png",
            "https://i.imgur.com/r1hZGKN.png",
            "https://i.imgur.com/6YyXhJ2.png",
            "https://i.imgur.com/8Hdpd7q.png",
            "https://i.imgur.com/Hwf6lXk.png",
            "https://i.imgur.com/6LDqrgr.png",
            "https://i.imgur.com/NS67mgk.png",
          ],
        },
        {
          id: "003",
          type: "APP",
          title: "承穎派車系統",
          link: "./project/003",
          webUrl:
            "https://apps.apple.com/tw/app/%E6%89%BF%E7%A9%8E%E6%B4%BE%E8%BB%8A%E7%B3%BB%E7%B5%B1/id1622515145",
          picPath: "https://i.imgur.com/LF1zkEh.png",
          description:
            "提供貨運人員使用，在管理訂單配達等等能有效的提供即時狀態回報，包含照片上傳、客戶簽名、客戶約配、單據查詢等等。\n\n 2022已上架於IOS AppStore",
          screenshot: [
            "https://i.imgur.com/X5lXPNm.png",
            "https://i.imgur.com/Q0KvrL7.png",
            "https://i.imgur.com/AL05D2K.png",
            "https://i.imgur.com/6XzWeje.png",
            "https://i.imgur.com/nQMU1I6.png",
            "https://i.imgur.com/137wvLA.png",
            "https://i.imgur.com/ZyAtEti.png",
            "https://i.imgur.com/rwTf1KO.png",
          ],
        },
        {
          id: "004",
          type: "APP",
          title: "承穎貨態查詢系統",
          link: "./project/004",
          webUrl:
            "https://apps.apple.com/tw/app/%E6%89%BF%E7%A9%8E%E8%B2%A8%E6%85%8B%E7%B3%BB%E7%B5%B1/id1673628631",
          picPath: "https://i.imgur.com/Sl7VCsM.png",
          description:
            "提供多倉進行查詢系統即時狀態，同時可以查詢庫存異動資料。",
          screenshot: [
            "https://i.imgur.com/J6LsO2v.png",
            "https://i.imgur.com/ZbvdVnV.png",
            "https://i.imgur.com/Alpvq0r.png",
            "https://i.imgur.com/5W0b0lh.png",
            "https://i.imgur.com/1yTXhC2.png",
            "https://i.imgur.com/upMuSKA.png",
            "https://i.imgur.com/bJY8HlL.png",
            "https://i.imgur.com/ZyfdxN5.png",
          ],
        },
        {
          id: "005",
          type: "APP",
          title: "承穎倉儲系統",
          link: "./project/005",
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
          type: "APP",
          title: "AIVB",
          link: "./project/006",
          webUrl: "",
          picPath: "https://i.imgur.com/GuXcmmt.png",
          description:
            "非接觸型電子感應偵測睡眠裝置，與以往錶帶不同，主要服務對象為長照相關行業，遠端即可監測老人家上下床狀態，讓家人好安心。",
          screenshot: [
            "https://i.imgur.com/6uSibgp.png",
            "https://i.imgur.com/hCFn3CL.png",
            "https://i.imgur.com/3Fbj7TW.png",
            "https://i.imgur.com/qf2MD1t.png",
            "https://i.imgur.com/8MmWfY4.png",
            "https://i.imgur.com/AyiCduT.png",
          ],
        },
        {
          id: "007",
          type: "WEB",
          title: "旺來蓁展蛋捲",
          link: "https://walai.com.tw/",
          webUrl: "https://walai.com.tw/",
          picPath: "https://i.imgur.com/mDEXaNl.png",
          description: "協助店家製作商業網站。",
          screenshot: [],
        },
        {
          id: "008",
          type: "WEB",
          link: "https://dynergicsupplyinc.com/",
          title: "鼎耀國際供應鏈有限公司",
          webUrl: "https://dynergicsupplyinc.com/",
          picPath: "https://i.imgur.com/Tkq4HFe.png",
          description: "協助店家製作商業網站。",
          screenshot: [],
        },
      ],
    };
  },
  methods: {
    routerToPage(item) {
      console.log("click");
      if (item.type == "APP") {
        this.$router.push({
          path: "/project/" + item.id,
          query: {
            id: item.id,
            title: item.title,
            type: item.type,
            picPath: item.picPath,
            description: item.description,
            webUrl: item.webUrl,
            screenshot: item.screenshot,
          },
        });
      } else {
        window.open(item.webUrl);
      }
    },
  },
  computed:{
    reversedPrincipalList() {
      return [...this.principalList].reverse();  // 使用擴展運算符創建副本，避免直接修改原始數據
    }
  }
};
</script>
<style lang="scss" scoped>
$left-container-background-color: rgba(255, 255, 255, 0.5);

#main {
  background: url("https://imgur.com/826OQ6R.jpg");
  .div-introduce-container {
    height: 600px;
    background: url("https://i.imgur.com/Bbx53b6.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    .introduce-filter-cover {
      position: absolute;
      background: rgba(255, 255, 255, 0.2);
      width: 100%;
      height: 600px;
      .introduce-center {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        text-align: center;
        img {
          border: 6px solid white;
          border-radius: 5px;
          max-height: 250px;
        }
        p {
          color: white;
        }
      }
      .introduce-slogan {
        position: absolute;
        bottom: 10px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        background: black;
        width: 300px;
      }
    }
  }
  .div-main-container {
    width: 100%;
    .main-block {
      display: flex;
      padding: 10px;
      .content-view {
        width: 70%;
        height: 100%;
        .card-bg-style {
          background: $left-container-background-color;
          width: 100%;
          h2 {
            padding-top: 10px;
            font-family: "Lora", serif;
            color: white;
            font-size: 30px;
          }
          section {
            p {
              white-space: pre-line;
            }
          }
          .project-wrap {
            height: 450px;
            overflow: auto;
            .project-item-container {
              display: flex;
              flex-wrap: wrap;
              .project-item {
                margin: 3px;
                text-align: center;
                width: 24%;
                .item-link {
                  color: rgb(73, 68, 68);
                  text-decoration: none;
                  &:hover {
                    color: rgb(26, 117, 236);
                  }
                }
                .item-img {
                  width: 100%;
                  height: auto;
                  max-width: 150px;
                  max-height: 150px;
                  border: 1px solid rgba(255, 255, 255, 0.5);
                  border-radius: 4px;
                  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
                }
              }
            }
            &::-webkit-scrollbar {
              width: 0.5em; //滾軸粗度
            }
            &::-webkit-scrollbar-track {
              box-shadow: inset 0 0 6px rgba(20, 76, 129, 0.527);
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb {
              border: 0.5px solid rgb(255, 255, 255);
              border-radius: 10px;
            }
          }
        }
      }
      .div-principal-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 30%;
        height: 700px;
        overflow: auto;
        color: rgba(255, 0, 0, 0.26) (122, 122, 122);
        &::-webkit-scrollbar {
          width: 0.3em; //滾軸粗度
        }
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 0px rgba(139, 139, 139, 0.3);
          border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
          border: 0.1px solid rgb(235, 235, 235);
          border-radius: 10px;
        }
      }
    }
  }
  .div-bottom-container {
    white-space: pre-wrap;
    height: 200px;
    background: #6666667e;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      list-style: none;
      color: white;
      font-size: 16px;
      text-align: center;
      font-family: Lora;
    }
  }
}
@media screen and (max-width: 900px) {
  #main {
    .div-main-container {
      .main-block {
        .content-view {
          width: 100%;
          .card-bg-style {
            .project-wrap {
              .project-item-container {
                .project-item {
                  margin: 3px;
                  text-align: center;
                  width: 45%;
                }
              }
            }
          }
        }
        .div-principal-container {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  #main {
    .div-main-container {
      .main-block {
        .content-view {
          width: 100%;
          .card-bg-style {
            .project-wrap {
              .project-item-container {
                .project-item {
                  margin: 3px;
                  text-align: center;
                  width: 100%;
                }
              }
            }
          }
        }
        .div-principal-container {
          width: 100%;
        }
      }
    }
  }
}
</style>
