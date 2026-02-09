import { Project, Experience, Award } from './types';

export const personalInfo = {
  name: "Zhenhuang Portfolio",
  chineseName: "方圳煌",
  title: "👋Hi! 这里是方圳煌",
  bio: "2003年生于福建漳州，2025年毕业于中国美术学院创新设计学院-艺术与科技专业。富有创意和跨学科能力的艺术工作者和设计师，热衷于数字艺术、视觉设计、策展策划，涉足人工智能、装置艺术、交互设计、用户体验及程序设计。",
  location: "Hangzhou, Zhejiang, China",
  contact: {
    phone: "18906940033",
    email: "billd12138@iCloud.com"
  },
  education: {
    school: "中国美术学院（China Academy of Art）",
    dept: "创新设计学院 - 计算艺术研究所 - 生成艺术工作室 - 艺术与科技专业",
    degree: "本科 (2021.09 - 2025.06)",
    gpa: "3.55/4.00 (专业成绩前3%)",
    courses: "视觉策略、参数化设计（算法艺术）、生成艺术、策展与展示、空间叙事、交互设计、用户体验设计"
  }
};

export const skills = {
  software: [
    "Adobe Ai", "Ps", "Ae", "Id", "Pr", "Figma", 
    "TouchDesigner", "Processing", "VisualStudioCode", "Unity", "Cursor",
    "Blender", "SketchUp", "Lumion", 
    "Resolume Arena", "OBS Studio", "MadMapper"
  ],
  capabilities: [
    "视觉设计", "生成艺术", "算法艺术", "数字媒体艺术", "装置艺术",
    "展览及活动策划", "展陈设计", "书籍排版及装帧", 
    "交互设计", "UI原型设计", "网页设计", "3D建模渲染", "AI模型训练","熟练各种AI"
  ]
};

export const experiences: Experience[] = [
  {
    period: "2025.10 - 2026.01",
    company: "made美德",
    role: "创意策划师 视觉设计师  [展览策划与执行｜项目统筹｜视觉设计｜运营宣发]",
    tasks: [
      "独立负责BAC社区 x made美德「酉时有鬼 银夜降临」活动策划及前期宣发",
      "打造made美德 x Found Object「客体流水线」System四周年艺术装置现场",
      "负责马丁·戈雅生意 x made美德「馬德招待所」活动视觉设计及现场执行",
      "独立负责「转塘爱你2.0」策展、活动策划、宣发及VJ，并完成一件互动装置"
    ]
  },
  {
    period: "2025.12 - 2026.01",
    company: "油罐艺术不眠夜2026 - “kARToke TANK Club”",
    role: "导演 策展执行 创作者  [展览策划与执行｜体验与交互设计｜艺术项目创作｜视觉设计｜运营宣发]",
    tasks: [
      "负责并完成其中三个装置、交互数字艺术作品的创作全流程",
      "负责展览项目的方案及内容策划、推演及项目管理",
      "负责展览项目的视觉产出、海报设计及衍生物料的设计与制作",
      "设计展览互动体验流程，担任现场导演及VJ"
    ]
  },
  {
    period: "2025.11 - 2025.12",
    company: "“Fishidex” - Rokid AR数字路亚辅助类APP",
    role: "设计师 开发者  [AR应用程序设计｜项目策划｜用户体验设计｜视觉设计｜UI 设计]",
    tasks: [
      "荣获 Spatial Joy 2025 Rokid 全球开发大赛 AR赛道铜奖",
      "利用 Unity 和 Blender 进行场景搭建及动画制作，采用 Qwen 多模态大模型进行识别功能搭建",
      "进行前期用户调研及竞品分析，负责项目策划、统筹",
      "负责宣传视频的脚本攥写、声音制作及视频内容的制作和剪辑",
      "负责视觉设计、鱼类图鉴设计及UI设计"
    ]
  },
    {
    period: "2025.08 - 2025.10",
    company: "油罐玩家艺术节2025——“卡拉艺术OK”",
    role: "策展人 策展执行  [展览策划与执行｜体验与交互设计｜项目统筹｜视觉设计｜运营宣发]",
    tasks: [
      "负责展览项目的方案及内容策划、推演及项目管理，通过3d建模和渲染参与制作展陈效果图",
      "设计展览互动体验流程并策划体验内容，负责并完成了展览中的屏幕从视觉设计到交互制作到落地的全流程以及节目编排",
      "负责展览项目的视觉产出、海报设计及衍生物料的设计与制作",
      "负责运营展览项目的小红书账号，包括内容策划、文本攥写及视频剪辑",
      "负责展陈落地的现场执行，人员统筹，与甲方、施工团队、参展人员多方沟通协调"
    ]
  },
   {
    period: "2024.11-2025.06",
    company: "“不小 Lunker” - APP辅助路亚钓用户渔获记录",
    role: "设计师 开发者  [应用程序设计｜项目策划｜用户体验设计｜视觉设计｜UI设计｜算法开发]",
    tasks: [
      "进行用户调研及竞品分析，负责项目的策划、统筹与前期开发",
      "决策了包括智能识别鱼种及尺寸、渔获图鉴收集、语音助手辅助等功能，进行了产品的UI设计",
      "负责视觉设计、渔获图鉴设计及动画制作，搭建生成式人工智能数据集提高制作精度和效率",
      "负责运营展览项目的小红书账号，包括内容策划、文本攥写及视频剪辑",
      "负责宣传视频的脚本攥写、分镜绘制及视频内容的制作和剪辑"
    ]
  },
   {
    period: "2024.12-2025.02",
    company: "“多元发展 更高可能” - 宁国中学艺术史馆设计",
    role: "设计师  [展陈及空间设计｜体验设计｜视觉设计]",
    tasks: [
      "负责项目的展陈方案设计及内容策划、推演，设计展览互动体验流程并策划体验内容",
      "负责项目的空间及动线设计、规划，3d建模和渲染、制作展陈效果图",
      "负责项目的视觉产出、海报设计及衍生物料的设计"
    ]
  },
  {
    period: "2023.10 - 2023.12",
    company: "2023深圳光影艺术节 - “墟幻光谱”",
    role: "创作者  [视觉设计｜AI模型搭建与训练｜AI生成图像与三维模型｜实时渲染与算法视觉｜分镜脚本视频剪辑]",
    tasks: [
      "负责艺术项目的视觉设计和产出，将太空艺术和观澜古墟建筑相结合进行视觉设计和界面编排",
      "搭建了多个工程文件工作流，进行实时渲染与产出声音互动画面",
      "编排了最终呈现视频的脚本、分镜、节奏",
      "运用AIGC、AE、Blender与TouchDesigner相结合的工作流制作了包含二维动效和三维模型动画的视频并投影于建筑物",
    ]
  }
];

export const awards: Award[] = [
  { title: "大学英语四级 (CET-4)" },
  { title: "三次作品留校被选编入中国美术学院教材" },
  { title: "Spatial Joy 2025 Rokid全球开发大赛 AR赛道铜奖" },
  { title: "作品参展油罐艺术不眠夜2026" },
  { title: "作品参展油罐玩家艺术节2025" },
  { title: "作品参展转塘爱你2.0" },
  { title: "作品参展第三届浙江青年科学家开放日" },
  { title: "作品参展第四届深圳光影艺术节并获星光奖" },
  
];

const placeholderGallery_kARToke = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/poster.gif", caption: "展览活动动态海报©茅婧雯M.Jingwen，方圳煌FANG Zhenhuang"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/overview.PNG", caption: "展览活动预告封面©茅婧雯M.Jingwen，方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/pre1.JPG", caption: "展览活动预告封面©茅婧雯M.Jingwen，方圳煌FANG Zhenhuang"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/pre2.JPG", caption: "展览活动预告封面©茅婧雯M.Jingwen，方圳煌FANG Zhenhuang"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/1.jpg", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/2.jpg", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/3.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/4.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/5.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/6.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/7.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/8.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/9.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/10.jpg", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/11.JPG", caption: "展览活动现场，图片由艺术家及主办方提供"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/kARTokeTANKCLUB/QR.jpg", caption: "更多好玩的内容请在小红书找到我们的账号⬆️"}
];
const placeholderGallery_loveinzhuantang = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/poster.jpg", caption: "转塘爱你2.0展览主海报©卓三千，方圳煌"},
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/1.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/2.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/3.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/4.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/5.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/6.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/7.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/8.jpg", caption: "转塘爱你2.0展览现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/work1.jpg", caption: "图片由艺术家及主办方提供，©王屿僮 Daniel & 索菲亚 Sophie，方圳煌 FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/work2.jpg", caption: "图片由艺术家及主办方提供，©王屿僮 Daniel & 索菲亚 Sophie，方圳煌 FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/shengdanjie.jpg", caption: "「跳入」社交联谊圣诞特别活动海报©made美德，方圳煌 | 艺术家：蔡琪玟 CATTIN TSAI，方圳煌 FANG Zhenhuang，made美德，g" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/loveinzhuantang/192.gif", caption: "「跳入」社交联谊圣诞特别活动现场VJ及视觉设计©方圳煌 FANG Zhenhuang" }
];
const placeholderGallery_Fishidex = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/1.png", caption: "产品封面©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/2.png", caption: "产品功能图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/3.png", caption: "产品用户体验流程图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/4.png", caption: "产品操作说明图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/5.png", caption: "产品操作说明图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/6.png", caption: "产品技术说明图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/7.png", caption: "产品技术说明图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/8.png", caption: "产品技术说明图©AquaRium团队，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/9.jpg", caption: "展位现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FIshidex/10.jpg", caption: "获奖现场，图片由主办方提供" }
];
const placeholderGallery_madehotel = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/poster.png", caption: "活动主海报©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/1.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/2.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/3.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/4.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/5.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/6.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/7.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/8.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/9.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/madehotel/10.jpg", caption: "活动现场，图片由主办方提供" }
  ];
const placeholderGallery_system = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/system/poster.jpg", caption: "展览海报©Found Object, made美德, System" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/system/1.jpg", caption: "活动现场，图片由艺术家及主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/system/2.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/system/3.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/system/4.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/system/5.jpg", caption: "策划：made美德 & Found Obejct；服装：Found Object；装置：修能“64E06水中捞月”，现成品、不锈钢锻造、3d打印、铝铂纸，2025；统筹：章康；场地策划：周聪颀；策展执行：茅婧雯、方圳煌、周大周；特别感谢：System系统、秦然" }
];
const placeholderGallery_hollyween = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/poster.png", caption: "活动海报©BAC艺术社区，made美德，方圳煌" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/1.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/2.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/3.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/4.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/5.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/6.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/7.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/8.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/9.jpg", caption: "活动现场，图片由主办方提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ghost/10.jpg", caption: "活动策划：方圳煌、茅婧雯；场地策划：周聪颀；戏剧策划：沙一飞；戏剧演员：马梓恒、陈天琪；“废物万岁”游车策划：天使鱼、或二、牙牙、u-u；“PLAY BALL玩个球”游车策划：空地小组UnoccupiedD；主办：BAC艺术社区 & made美德" },
];
const placeholderGallery_karaoke = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/poster.png", caption: "展览总海报©方圳煌FANG Zhenhuang，茅婧雯M.Jingwen，徐诺XU Nuo" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/karaoke1.JPG", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/2.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/3.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/4.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/5.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/6.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/7.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/8.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/9.jpg", caption: "展览现场，图片由策展团队提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/10.jpg", caption: "更多好玩的内容请在小红书找到我们的账号⬆️" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/11.jpg", caption: "策展团队：茅婧雯，方圳煌，梁冉，吴柏韬，徐诺；参展艺术家：Yiyisogreen，董垚，许思慧，吴欣晨，贾忻潼，封帅，李诚尧，郭亦涵，空地小组UnoccupiedD（李育婵，夏慧聪，黄瀚哲，徐旻乐，况铭威），蔚男子，朱屹立，made美德（李修能、章康、周聪颀、王浩），Banshii，温蕙玮；特别感谢：乔志兵，俞同舟，张琛，陈南汐，侯少康，谢宜耿，刘嘉怡，曾雨馨，陈清扬，乐泉，张斐，张驰，LITTI；支持单位：油罐艺术中心，InsPUMP直觉泵，中国美术学院创新设计学院媒介与交互研究所" }
];
const placeholderGallery_lunker = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/buxiao.png", caption: "不小 Lunker｜产品宣传封面©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/lunker/1.jpg", caption: "不小 Lunker｜毕业展现场，图片由艺术家提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/lunker/2.jpg", caption: "不小 Lunker｜毕业展现场，图片由艺术家提供" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/lunker/3.jpg", caption: "不小 Lunker｜产品周边©方圳煌FANG Zhenhuang" }
];
const placeholderGallery_ningguo = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/1.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/2.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/3.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/4.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/5.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/6.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/7.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/8.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/9.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/10.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/ningguozhongxue/11.png", caption: "设计概念，推演，展具设计，空间设计，渲染图©方圳煌FANG Zhenhuang" },
];
const placeholderGallery_shenzhen = [
  { imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop", caption: "概念设计图：早期草图与空间构思推演" },
  { imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", caption: "展览现场：观众正在体验交互装置的瞬间" },
  { imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2596&auto=format&fit=crop", caption: "细节呈现：基于算法生成的视觉纹理测试" }
];
const placeholderGallery_xiangxiu = [
  { imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop", caption: "概念设计图：早期草图与空间构思推演" },
  { imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", caption: "展览现场：观众正在体验交互装置的瞬间" },
  { imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2596&auto=format&fit=crop", caption: "细节呈现：基于算法生成的视觉纹理测试" }
];
const placeholderGallery_xuhuan = [
  { imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop", caption: "概念设计图：早期草图与空间构思推演" },
  { imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", caption: "展览现场：观众正在体验交互装置的瞬间" },
  { imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2596&auto=format&fit=crop", caption: "细节呈现：基于算法生成的视觉纹理测试" }
];
const placeholderGallery_earth = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/%E8%8B%B9%E6%9E%9C%E5%B1%95%E7%AD%BE_00.jpg", caption: "作品展签©方圳煌FANG Zhenhuang" }
  ];
const placeholderGallery_julysun = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/poster.jpg", caption: "装置海报©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/1.jpg", caption: "装置现场图片©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/2.jpg", caption: "装置现场图片©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/3.jpg", caption: "装置现场图片©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/4.jpg", caption: "装置现场图片©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/5.jpg", caption: "装置现场图片©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/SUNon7/6.jpg", caption: "装置现场图片©方圳煌FANG Zhenhuang" },
];
const placeholderGallery_prototype = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/layout.png", caption: "书籍封面、封底、勒口设计©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/overview.gif", caption: "概念大纲预览©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/overview1.gif", caption: "概念推导预览©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/overview2.gif", caption: "书籍排版及设计预览©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/overview3.gif", caption: "设计渲染图预览©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/1.png", caption: "书籍内容预览©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/2.png", caption: "书籍内容预览©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/3.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/4.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/5.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/6.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/7.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/8.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/9.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/prototype-book/10.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
];
const placeholderGallery_museum = [
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/1.png", caption: "设计图稿及排版©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/2.png", caption: "设计图稿及排版©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/3.png", caption: "设计图稿及排版©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/4.png", caption: "设计图稿及排版©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/5.png", caption: "设计图稿及排版©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/6.png", caption: "设计图稿及排版©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/7.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/8.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/9.png", caption: "书籍成品©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/10.png", caption: "基于“轴柱”的博物展示设计图稿©方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/11.png", caption: "概念推演大纲©中国美术学院社会与策略研究所，方圳煌FANG Zhenhuang" },
  { imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/12.jpg", caption: "设计内容图谱©方圳煌FANG Zhenhuang" }
];

export const projects: Project[] = [
  {
    id: "tank-art-night-2026",
    title: "kARToke TANK Club",
    category: ["数字艺术", "投影", "策划", "策展", "装置", "交互", "现场"],
    date: "@2025.12-2025.01",
    description: "油罐艺术不眠夜2026，交互装置与数字艺术项目",
    longDescription: [
      "《他何时停止歌唱》（When Will He StopSinging？）是由艺术家茅婧雯M.Jingwen，方圳煌FANG Zhenhuang携手AI共同创作的空间互动影像装置。",
      "作品旨在打破人们对虚拟与真实的固有认知，消解舞台与生活的二元边界，探讨数字时代下个体表达、集体狂欢与虚拟共生的深层关系。作品以儿童视角回归人类创造的“游戏本能”。",
      "12月31号，我们于上海油罐艺术中心U罐-KARToke TANK CLUB再现AI数字人导师—奇迹 & VOC-E & Zeeta，邀请大家一起享受k歌狂欢、音乐美食，犒劳2025的自己，共同迎接2026的钟声。",
      "《他何时停止歌唱》围绕“15分钟定律”在当下的游戏化变型，传递对注意力经济的轻盈反思和时代性调侃，并将其延伸至短视频时代的大众狂欢语境———请注意：虚拟与现实的界限。"
    ],
    tags: ["TouchDesigner", "Resolume Arena", "OBS Studio", "AIGC"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/youguantankclub.png",
    gallery: placeholderGallery_kARToke,
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116028826785404&bvid=BV1WKFszxEiR&cid=35888365865&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "kARToke Tank Club 跨年倒计时现场 ©茅婧雯 M.Jingwen，方圳煌 FANG Zhenhuang",
    links: [
      { label: "上海油罐艺术中心官方推文：油罐艺术不眠夜2026｜油罐中的俱乐部", url: "https://mp.weixin.qq.com/s/CZGG7iuduOafvEvVYSwqmg" },
      { label: "上海油罐艺术中心官方推文：油罐艺术不眠夜2026 | 跨年倒计时，开心迎新年!", url: "https://mp.weixin.qq.com/s/DDdeclzxEt4ZH3AiOYxOuw" },
      { label: "上海油罐艺术中心官方推文：TANK 活动｜2026跨年，新年快乐！", url: "https://mp.weixin.qq.com/s/yaimlX2mLgeQ2dkjRYZZZg" }
    ]
  },
  {
    id: "love-in-zhuantang",
    title: "转塘爱你2.0",
    category: ["策展", "策划", "装置", "活动", "投影"],
    date: "@2025.12-2026.01",
    description: "转塘爱你2.0 “Love” in Zhuantang - 转身跳入池塘再爱你，展览活动",
    longDescription: [
      "时隔四年，转塘再爱你。",
      "若说第一期的爱是投入池塘的一颗石子激越而悲壮,那么第二期便是要奋身跳入池塘并不断激起涟漪。我们试图将「爱」从一个瞬间的戏剧动作延伸为一段持续的、被包裹的实践。",
      "“转塘爱你2.0”试图追问：",
      "当爱走向公共的场域，它如何避免成为一种新的仪式?在意义的真空里，我们能否通过一次又一次具体的、微小的交换与互动，共同编织一种抵抗盘无的“现在进行时的意义”?当简化字抽去了“愛”之中的“心”，我们是否能在共同的行动与回响中，为它重新植入一颗集体的跳动的心脏 ?这一次，“爱你”不再是悲剧的起点或终点。这是场发生于此地、此时的实验——在塘人街市，留存在转塘“垃圾街”之上的社区。那条會充满烟火气与混乱生命力的街道虽已消逝，但生活并未离场。我们在此聚集，既非单纯的怀旧，也非浪漫的重建，而是以艺术行动追问：在这变迁之地上构建的社区，究竟是对已逝之物的慰藉，还是清醒的祭奠?",
      "我们在此跳入池塘，并期待“谁”的回应，能在我们共同的池中，激起涟漪。",
      "———————————————————————————————————",
      "转塘爱你2结束了，短短15天，29位艺术家，6场公共行动，几十万的浏览，无数的来访，共同构成了这场名为“转身跳入池塘再爱你”的集体实践。",
      "感谢所有参与的艺术家，感谢塘人街市、各位合作伙伴提供的实践场域，尤其感谢每一位走入现场的观众——你们的行动与反馈，让这次实验得以完整。",
      "行动虽暂歇，实验未终止。谨此致谢，并保持前行。"
    ],
    tags: ["AIGC", "OBS Studio", "SketchUp", "TouchDesigner", "Adobe AI"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/zhuantangaini20.png.jpg",
    gallery: placeholderGallery_loveinzhuantang,
    links: [
      { label: "转塘爱你2.0全回顾｜展览现场&公共活动", url: "https://mp.weixin.qq.com/s/SEYWAZJ8u_xyn_rC2ammZQ" },
      { label: "展览预告｜转塘爱你2.0——转身跳入池塘再爱你", url: "https://mp.weixin.qq.com/s/TIFDb41YiyOQQV03I2vnoA" },
      { label: "开幕预告｜12月19日晚7点 转塘爱你2.0", url: "https://mp.weixin.qq.com/s/rx0wVC54e4X9od3f7mzfHg" },
      { label: "「转塘天地书」奥马Omar｜转塘爱你2.0 公共活动单元 12月20日", url: "https://mp.weixin.qq.com/s/UTrUdlU-8NWSBlyp04V4fA" },
      { label: "「跳入」社交联谊圣诞特别活动｜转塘爱你2.0 公共活动单元 12月24日", url: "https://mp.weixin.qq.com/s/XkKuSbCnNXEbSCLwuxglyQ" },
      { label: "「百人投票」社交策略游戏｜转塘爱你2.0 公共活动单元 12月27日", url: "https://mp.weixin.qq.com/s/plXRZWj5sSXH0CoZx3pTDw" },
      { label: "弦乐、冷焰、走秀、篝火｜转塘爱你2.0 公共活动单元 12月31日", url: "https://mp.weixin.qq.com/s/g_oC_cW1--G30k5Djd5Iwg" },
      { label: "闭幕夜实验艺术剧场｜转塘爱你2.0 公共活动单元 1月3日", url: "https://mp.weixin.qq.com/s/K5OIysfdZtGoFXreurLryA" },
      { label: "艺术家及作品介绍 Part 1｜转塘爱你2.0 展览现场", url: "https://mp.weixin.qq.com/s/L_0fYsWm8S66XvrDjzAJyQ" },
      { label: "艺术家及作品介绍 Part 2｜转塘爱你2.0 展览现场", url: "https://mp.weixin.qq.com/s/suFoajRx-I8utBXPSeoy_Q" }
    ]
  },
  {
    id: "fishidex",
    title: "Fishidex",
    category: ["AR应用", "算法开发", "影像"],
    date: "@2025.11-2025.12",
    description: "Rokid AR数字路亚辅助类APP，AR应用设计开发项目",
    longDescription: [
      "Fishidex是路亚钓爱好者的作钓记录平台。",
      "应用致力于将AR与路亚钓运动融合，使其为一种数字化、个性化的创新生活方式，让每一次抛竿收杆都成为有价值的情绪出口与文化表达。在这里，每一条鱼都值得被记录和炫耀！",
      "应用核心功能围绕路亚钓的完整体验设计：通过智能化的渔获记录与图鉴，珍藏每一条鱼的故事；同时，构建高黏性的社群空间，满足用户在钓后欣赏、分享、寻求文化认同的需求。",
      "不论是经验丰富，还是刚刚解锁路亚乐趣的用户，平台都能提供清晰、有趣的指引和交流空间。应用积极倡导绿色路亚精神，陪伴用户将这份热爱活成一种独特的生活哲学，让路亚不止于水边，更成为一种可以被珍藏、分享和持续探索的新空间体验。"
    ],
    tags: ["APP", "AR", "Unity", "Blender", "AI", "Adobe AI", "AE"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/Fishidexhead.png",
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116029028048836&bvid=BV1FGFszHErT&cid=35889417819&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "产品宣传视频©AquaRium团队，方圳煌",
    gallery: placeholderGallery_Fishidex,
    links: [
      { label: "获奖名单公布｜Spatial Joy 2025 Rokid全球AR&AI开发大赛", url: "https://mp.weixin.qq.com/s/dZ2-5yKE3NWwtEvhxaOEKA" },
    ]
  },
  {
    id: "made-hotel",
    title: "馬德招待所",
    category: ["策划", "策展", "投影"],
    date: "@2025.12",
    description: "马丁·戈雅生意 x made美德，活动",
    longDescription: [
      "这座始于南宋年间的神秘驿馆，曾以“客制衾枕”闻名——每位旅客需亲手纺织床单被套，夜枕西域传来的电子琴音入眠。后因不明原因，建筑隐入虚实缝隙。直至乙巳年（2025）被made美德与马丁·戈雅生意重新编译，定于冬月既望（12月6日）重启幻境。",
      "此间无既定之章：子夜穹顶自动播放肯特郡迷幻电子乐，声波频率与古老星象暗合。每位住客仍要亲手缝制床单被套，这些织物将穿越时空，被未来旅人使用。曾有住客将梦境织入锦缎，三年后竟见西域旅人盖此衾安眠——时空在此如蚕吐丝，经纬交错间，不知庄周梦蝶亦或蝶梦庄周。",
      "诸相非相，虚室生白。馬德招待所今启请柬，静候破壁之人。"
    ],
    tags: ["Adobe AI", "TouchDesigner"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/madezhaodaisuo.jpg",
    gallery: placeholderGallery_madehotel,
    links: [
      { label: "开业预告｜馬德招待所 12月6日 马丁·戈雅生意 x made美德", url: "https://mp.weixin.qq.com/s/Bot9dkCoV7efmBDQo2WhLQ" },
      { label: "现场回顾｜馬德招待所12月6日开业", url: "https://mp.weixin.qq.com/s/tnYTKbf7MimO7CTbLgt2tg" }
    ]
  },
  {
    id: "object-pipeline",
    title: "客体流水线",
    category: ["策展", "装置", "展陈设计"],
    date: "@2025.11",
    description: "made美德 x Found Object，System四周年艺术装置现场",
    longDescription: [
      "以缝纫机构建了现代性隐喻的「流水线」，即我们同时是驱动生产的主体，亦是最终被系统所编织的「客体」。",
      "“世界是肉身性的，而我们是其褶皱。”"
    ],
    tags: [],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/ketiliushuixian.jpg",
    gallery: placeholderGallery_system,
    links: [
      { label: "WE ARE THE SYSTEM四周年影像展&现场艺术装置", url: "https://mp.weixin.qq.com/s/LF0peTB3WJ4_jPGnIOMuOw" },
      { label: "made美德 x Found Object｜「客体流水线」System四周年艺术装置现场", url: "https://mp.weixin.qq.com/s/67-Vaj0CaT5AQ5y4eHHQOA" }
    ]
  },
  {
    id: "silver-night",
    title: "酉时有鬼 银夜降临",
    category: ["策划", "宣发"],
    date: "@2025.10",
    description: "BAC社区 x made美德，特别活动策划",
    longDescription: [
      "各位鬼友注意⚡️：",
      "10月31日晚，BAC艺术社区北广场——",
      "「酉时有鬼 银夜降临」特别活动！"
    ],
    tags: ["Adobe AI", "ID"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/youshiyougui.jpg",
    gallery: placeholderGallery_hollyween,
    links: [
      { label: "Yoohoo～ghost酉时有鬼｜made.in BAC", url: "https://mp.weixin.qq.com/s/bjLcix4wOJUVwASUnBO9YA" },
      { label: "活动预告｜10月31日 BAC社区「酉时有鬼 银夜降临」特别呈现", url: "https://mp.weixin.qq.com/s/kWRPRI5uXmDxQOxZSEqpMw" }
    ]
  },
  {
    id: "karaoke-2025",
    title: "卡拉艺术OK",
    category: ["策展", "投影", "策划", "交互"],
    date: "@2025.08-2025.10",
    description: "油罐玩家艺术节2025，在美术馆里营业了一家KTV",
    longDescription: [
      "今年十月，在上海油罐艺术中心玩家艺术节，将营业一家为期七天的KTV——",
      "KTV作为无论任何年代都火热的娱乐社交场所，在当代大众生活中不断渗透和更新。如今有这样一群人：结合艺术与生活，试图入侵一片空间生产出一些新奇的玩意儿。",
      "“Karaoke1号厅”公开招募艺术家成为员工，前台迎宾小姐，安保，服务员，店长经理，后勤保洁阿姨，“少爷”“公主”们...当你和任意一个员工对谈都可能开启一段奇妙的经历。无论你是钟情于经典金曲的品味之士，还是热衷潮流音乐的时尚达人，是期待一展歌喉的社交高手还是只想在旋律中放松身心的灵魂旅人；都可以在karaoke1号找到属于你的位置。",
      "还有更多流动惊喜等你发现...…",
    ],
    tags: ["AI", "Lumion", "OBS Studio", "Resolume Arena", "SketchUp", "TouchDesigner", "Adobe AI"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/karaoke/1.jpg",
    gallery: placeholderGallery_karaoke,
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116029464252892&bvid=BV1b5FWzcECy&cid=35891777190&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "展览动态海报宣传视频©方圳煌FANG Zhenhuang，茅婧雯M.Jingwen",
    links: [
      { label: "上海油罐艺术中心官方推文：油罐玩家艺术节2025｜艺术项目预告", url: "https://mp.weixin.qq.com/s/yuEBI42gO3FNT8YErKMI1A" },
      { label: "上海油罐艺术中心官方推文：油罐玩家艺术节2025｜油罐卡拉OK", url: "https://mp.weixin.qq.com/s/JwP0FDS9_H7D4Sw2mUpQEA" },
      { label: "上海油罐艺术中心官方推文：油罐玩家艺术节2025｜和艺术家一起玩！", url: "https://mp.weixin.qq.com/s/QVj3xEmDKJXvCFPNKntOIQ" },
      { label: "上海油罐艺术中心官方播客：策展人/艺术家采访", url: "https://www.xiaoyuzhoufm.com/episode/68e39b3f8bf86095c5f804d2?s=eyJ1IjoiNjhlMGM1MDYyNTRmYmNhNDcwODA4ZDc3In0%3D" },
      { label: "更多精彩内容请看卡拉艺术OK的小红书账号", url: "https://xhslink.com/m/3pXXxb0Rz1x" }
    ]
  },
  {
    id: "lunker",
    title: "不小 Lunker",
    category: ["APP", "UI设计", "算法开发"],
    date: "@2024.10-2025.06",
    description: "APP辅助路亚钓用户渔获记录，APP产品设计项目，本科毕业设计",
    longDescription: [
      "路亚钓是全球三大高端休闲运动之一，不仅具备娱乐属性，更承载人与自然关系的文化表达，渔获记录对于爱好者而言尤为关键。近年来其在中国迅速发展，然数字化工具仍面临功能雷同、体验割裂、数据低效、视觉单一等问题。为此，在进行用户调研、竞品分析、痛点剖析后，针对钓鱼类应用存在的问题，创作者提出了利用人工智能实现智能识别鱼种和尺寸与个性化渔获图鉴、智能管理等功能，以“情绪驱动设计”为核心理念，开发一款体验丰富、交互独特的路亚钓应用。",
      "“Lunker”在路亚圈中是一个象征荣耀的词汇，代表钓起的“巨物”。“路亚”是一种模仿弱小生物诱捕大鱼的钓法，而创作者正是痴迷其中的“钓鱼佬”。他们将热爱化为创作，设计了一款结合AI识别与数据记录的钓鱼类应用，建立了一个专属路亚爱好者的数字乐园。每一条鱼都能被识别、计量、生成独一无二的“战利品图鉴”，既满足“比尺寸”的虚荣心，也强化分享的乐趣。小众文化由此被注入数字活力，焕发出新的交流方式与体验魅力。"
    ],
    tags: ["Adobe AI", "AE", "AIGC", "APP", "VisualStudioCode"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/lunker/layout.png",
    gallery: placeholderGallery_lunker,
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116029011271314&bvid=BV1fVFszSE92&cid=35888693679&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "不小 Lunker｜Promotion宣传视频©方圳煌FANG Zhenhuang，茅婧雯M.Jingwen",
    links: [
      { label: "MANA平台推广", url: "https://www.manamana.net/video/detail?id=2730882#!zh$0" },
      { label: "临界观测｜创新设计学院2025毕业展——计算艺术研究所：生成艺术工作室", url: "https://mp.weixin.qq.com/s/ZiBXsh4tmQyR0YCP3mAfXA" }
    ]
  },
  {
    id: "ningguo-museum",
    title: "多元发展 更高可能",
    category: ["展陈设计", "策展", "空间设计", "展具设计", "书籍装帧排版"],
    date: "@2024.12-2025.03",
    description: "宁国中学艺术史馆设计，展览与空间设计项目",
    longDescription: [
      "唐朝时期，是宣城地区文化经济影响力的最顶端。古人张若虚曾感叹道，今月何时照古人，古人又何时观新月。当不同时代的人聚集在一起的时候，对于新人来说，是对古人的追寻与致敬，对于古人来说，是对下一代的呵护与期待。宁中艺术校史馆正是根据这个理念来构建起一个薪火相传的场所，让新人树立目标，让古人相传薪火。在空间上通过徽派建筑的曲径通幽与峰回路转来构建相互交错的目光。"
    ],
    tags: ["Blender", "Adobe ID", "Lumion", "SketchUp"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/nz.jpg",
    gallery: placeholderGallery_ningguo,
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116029866909276&bvid=BV1f7F4zREy2&cid=35894002220&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "“多元发展 更高可能”——宁国中学艺术史馆设计｜漫游视频©方圳煌FANG Zhenhuang",
  },
  {
    id: "collective-memory",
    title: "共同记忆-深圳",
    category: ["数字艺术", "大型影像", "数据可视化", "交互"],
    date: "@2024.06-2024.07",
    description: "2024深圳光影艺术季作品，融合AI技术与算法转译视觉",
    longDescription: [
      "人们总对未来保有空虚，对过去抱有晕染。一个看似不起眼的事实：2024年12月31号一过，相较于2050年，我们离2000年已更为遥远。",
      "《共同记忆-深圳》是一项融合AI技术与算法转译数据的作品。为了使深圳海滨广场成为“共同回忆”，作品利用AI和算法构筑的“大脑”来模仿人类的回忆印象——通过处理记忆来形成新图像和后续变化的新组合。为了实现这一目标，作品将Lora模型与AI技术应用于深圳街景的档案，这些档案被用于生成新的共同记忆图像，而后通过自定义算法将数据与图像的各种变换对应，算法系统既能产生深圳的“共同记忆”，又能在其之上与数据、观众之间产生新的联系。《共同记忆-深圳》通过唤醒“深圳共同记忆”，与观众共同创新，并探索艺术与技术、建筑与机器之间的协同作用。"
    ],
    tags: ["TouchDesigner", "AE", "AIGC", "Blender", "ComfyUI", "Lora"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/shenzhen.png",
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116030017901997&bvid=BV1uZFxzzEi9&cid=35894791844&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "深圳光影艺术季2024｜共同记忆-深圳©方圳煌FANG Zhenhuang",
  },
  {
    id: "changsha-metro",
    title: "湘绣城市脉搏",
    category: ["数字艺术", "数据可视化", "沉浸式体验", "交互", "大型影像"],
    date: "@2024.04-2024.05",
    description: "长沙地铁数字艺术馆项目，将地铁客流数据转化为视觉元素",
    longDescription: [
      "随着城市化进程的不断推进，城区范围不断扩张，城市人口急剧增长，地铁迅速成为许多城市为优化城市空间布局、缓解城市交通压力、完善城市功能而首选的民生基础设施工程。",
      "从人(S)到地铁列车(M)再到城市(L)：地铁网络作为无形的城市，地铁线路作为城市的脉搏，由微观至宏观为城市提供几乎最强大的活跃、生命和动力。",
      "湘绣城市脉搏(Xiang Embroiderying The City's Pulse)旨在创造一个多维度的沉浸式体验，通过数据感知，将地铁客流数据转化为视觉元素，提供一种全新的感官体验。游客将以全新的视角多方面感受长沙作为当代城市的活力和作为文化古城的灵韵。项目将地铁的客流数据视为城市脉搏的具像展现，通过计算艺术的形式呈现，让观众能够感受长沙的脉搏，让城市的历史文化和现代生命力于屏幕上交响律动。"
    ],
    tags: ["TouchDesigner", "Data Viz"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/xiangxiu1.png",
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116030085078943&bvid=BV1aQFxzCE8K&cid=35895119579&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "长沙地铁数字艺术馆｜湘绣城市脉搏方案呈现©方圳煌FANG Zhenhuang",
  },
  {
    id: "void-spectrum",
    title: "墟幻光谱",
    category: ["投影", "大型影像", "数字艺术"],
    date: "@2023.10-2023.12",
    description: "2023深圳光影艺术节，将太空艺术和观澜古墟建筑相结合",
    longDescription: [
      "《墟幻光谱》，是发生在深圳光影艺术季中的一件视听作品，围绕“太阳系”这一主题，五组艺术家犹如五个飞往不同星球的“探测器”，基于观澜古墟借助技术与科幻的方式向我们展现了“可见光”之外的“不可见”的虚幻世界。"
    ],
    tags: ["AE", "AIGC", "Blender", "OBS Studio", "TouchDesigner"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/xuhuanguangopu.png",
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116030236139071&bvid=BV1gVFxz6E91&cid=35895837925&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "2023深圳光影艺术节｜观澜古墟-墟幻光谱©方圳煌FANG Zhenhuang",
  },
  {
    id: "pointing-earth",
    title: "指向地球",
    category: ["AIGC", "影像", "交互", "数字艺术"],
    date: "@2023.11-2024.01",
    description: "以多次哲思概念的转译与叙事，通过训练AI生成图像、影像和声音，进行了AIGC影像创作",
    longDescription: [
      "指向地球(Point to Earth)灵感源自爱因斯坦的相对论中时间锥模型。以多次哲思概念的转译与叙事，通过训练AI生成图像、影像和声音，进行了AIGC影像创作。",
      "苹果之所以坠落，是因为它的未来指向地球。 占卜、巫术、命理等等一直以超脱时间的视角观测预知个人的命运。身为旁观者，你比土壤更提前知晓苹果的着地；身为当局者，你无法像观测苹果那样知晓陨星已经出发。",
      "每个事件，每个瞬间都可以看做是一个“时间锥”。",
      "随着每一颗苹果的掉落，掉进时间锥的指向，进入每个时刻之间的可能与命运：结局比我们更先抵达，就仿佛无时无刻都隐藏着一颗正在掉落的苹果。它存在于坠落原点的未来，也存在于光年外时间锥里的过去。",
      "太空探索致力于寻找宇宙的边界，而生成艺术同样在尝试打破艺术的界限。通过训练AI生成内容（AIGC）模型的方式，思考生成艺术作为一种系统运行逻辑如何探索宇宙未知和人类命运。"
    ],
    tags: ["AE", "AIGC", "TouchDesigner"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/zhixiangdiiqu.png",
    gallery: placeholderGallery_earth,
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116030269560335&bvid=BV18jFxzqEKq&cid=35895971044&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "指向地球(Point to Earth)©方圳煌FANG Zhenhuang",
  },
  {
    id: "july-sun",
    title: "七月七号的太阳",
    category: ["装置", "交互", "影像"],
    date: "@2023.06-2023.07",
    description: "基于Arduino与TouchDesigner的实时交互装置作品",
    longDescription: [
      "当我们去初步认识自然时， 我们意识到除去第一次抱有目的看待它， 其实大部分的自然行为会联系到情绪上， 想一想我们为何会行走在大地上， 而不是瘫做一团， 抱着现有的电子产品，在自然里撒泼， 这无疑是我们对情绪的需求。 我们将情绪带入自然时， 旁观者见到的也即是带有情绪的自然。 在人类世初步开始之时， 我们所见的是更接近的温情， 而现在多是情绪后的宣泄。",
      "为此， 我们将从人类世开始， 通过对个体的认知到工具技术的介入， 探索其与自然对立统一的一面， 即自然与工具形式之上的情绪。 我们将植物与太阳之间的联系放大， 通过人工的手段构建起一处属于自然的场所， 再次演绎出现代社会下的温情画面， 试图唤醒人与自然之间的情绪链接。",
      "作品以太阳能为能源驱动， Arduino 编程控制气泵始停， 依照太阳光度强弱以及时间变化开始或暂停充气， 致使气球臌胀或瘪。 通过新能源和新媒介展示人与自然、 绿植之间的呼吸和相互作用。"
    ],
    tags: ["Arduino", "TouchDesigner", "Adobe Pr"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/qiyueqihaotaiyang.jpg",
    gallery: placeholderGallery_julysun,
    videoEmbed: '<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116030470954315&bvid=BV1ZZFszSE8h&cid=35896623725&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
    videoCaption: "七月七号的太阳(The Sun on 7/7)｜宣传视频©方圳煌FANG Zhenhuang",
  },
  {
    id: "portotype-morphtype",
    title: "原型与变型-示物以居",
    category: ["书籍装帧排版", "展陈设计", "展具设计", "策展与展示"],
    date: "@2022.10-2022.12",
    description: "以“目见”、“物视”、“具变”的交互推导作为展具本体的扩延逻辑，引发多样性、连续性和无限性的展示设计推导",
    longDescription: [
      "展具是器具的一种，但与其它器具的最大区别在于展具并非直接展现自身的主体，而是通过有效和有趣地展现“他者”获得主体性。",
      "从介质上看，小到一颗钉，大到一座山，万物都可以成为展具，但从主体性看，大部分展具都是工具性的，即仅仅作为不相关或弱相关的展陈界面，而并非在“化被动为主动”的过程中，与被展示物在观念上相呼应的内容主体。究其本质，是“人”赋予了万物可“展”的功用，从人出发，我们将展具的边界定义为三个层次：“目见：人通介而以眼观之”；“物示：示物之主客、辨其原异”；“具变：具之型易”。三者中以“目见”为原点，从主体的观法变化和主客转化切入展具设计，进而展开“物示”中“展”与“被展”的辨证，以及“具变”中展具与人、事、物、场的相对关系。",
      "作品以三者的交互推导作为展具本体的扩延逻辑，进而引发多样性、连续性和无限性的设计推导，实践“由物及我，感同身受”的方法。"
    ],
    tags: ["SketchUp", "Blender", "Lumion","Aodbe ID"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/shiwuyiju.png",
    gallery: placeholderGallery_prototype,
    links: [
      { label: "「创·学」｜原型与变型", url: "https://mp.weixin.qq.com/s/fjMCUB5vfq-iNLg77xiBZQ" },
    ]
  },
 {
    id: "museum",
    title: "策展与展示-博物展示",
    category: ["书籍装帧排版", "展陈设计", "展具设计", "策展与展示"],
    date: "@2022.09-2022.10",
    description: "对传统“museum”展示类型进行反思、梳理和原型讨论，引发多样性、连续性的博物展示设计推导",
    longDescription: [
      "通过对传统“museum”展示类型进行反思，对具体展品进行展出的模式，进行展示原型的梳理，进而讨论博物馆内、或展览的布局与内容对应的空间原型讨论。"
    ],
    tags: ["SketchUp", "Blender", "Lumion","Aodbe ID"],
    imageUrl: "https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/zhanshisheji/layout.png",
    gallery: placeholderGallery_museum
  }

];