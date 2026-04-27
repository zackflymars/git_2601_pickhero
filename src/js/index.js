const { createApp } = Vue
const app = createApp({
  data() {
    return {
      //定义数据结构,用于保存所有英雄信息
      heroList: [],
      query: {
        key: 'dingwei',
        value: 0,
      },
      keyword: '',
      typeList: {
        zonghe: [
          { name: '本周免费', value: 10 },
          { name: '新手推荐', value: 11 },
        ],
        dingwei: [
          { name: '全部', value: 0 },
          { name: '坦克', value: 3 },
          { name: '战士', value: 1 },
          { name: '法师', value: 2 },
          { name: '刺客', value: 4 },
          { name: '射手', value: 5 },
          { name: '辅助', value: 6 },
        ],
      },
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
    changeType(key, value) {
      ;((this.query.key = key), (this.query.value = value))
      this.keyword = ''
    },
    changeKeyword(e) {
      this.keyword = e.target.value
      this.query.value = 0
    },
  },
  mounted() {
    this.getHeroList()
  },
  computed: {
    //定义计算属性,根据参与条件过滤出英雄信息
    fillterHeroList() {
      const { key, value } = this.query
      const keyword = this.keyword
      if (keyword == '') {
        if (key == 'zonghe') {
          return this.heroList.filter((item) => item.pay_type === value)
        } else if (key == 'dingwei') {
          if (value == 0) {
            return this.heroList
          } else {
            return this.heroList.filter(
              (item) => item.hero_type === value || item.hero_type2 === value,
            )
          }
        }
      } else {
        const res = this.heroList.filter((item) => item.cname.includes(keyword))
        return res.map((item) => ({
          ...item,
          cname: item.cname.replace(
            keyword,
            `<span style='color:red'>${keyword}</span>`,
          ),
        }))
      }
    },
  },
}).mount('#app')
