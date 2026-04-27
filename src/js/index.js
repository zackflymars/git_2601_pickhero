const { createApp } = Vue
const app = createApp({
  data() {
    return {
      //定义数据结构,用于保存所有英雄信息
      heroList: [],
    }
  },
  methods: {
    getHeroDetail(value) {
      return `https://pvp.qq.com/web201605/herodetail/${value}.shtml`
    },
    getHeroImage(value) {
      return `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${value}/${value}.jpg`
    },
    async getHeroList() {
      //发送axios请求
      const res = await axios.get('http://project.x-zd.net:3001/apis/herolist')
      this.heroList = res.data.data
      // console.log(res)
      // console.log(res.data)
      // console.log(res.data.data)
    },
  },
  mounted() {
    this.getHeroList()
  },
  computed: {
    
  },
}).mount('#app')
