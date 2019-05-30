<template>
<div class="main">
  <div class="phone_app">
    <div class="menu" @click="onBack">
      <div class="menu_content">
          <div class='menu_buttons'>
            <button 
                v-for="(but, key) of AppsLoki" 
                v-bind:key="but.name" 
                v-bind:class="{ select: key === currentSelect}"
                v-bind:style="{backgroundImage: 'url(' + but.icons +')'}"
                @click.stop="openApp(but)">
                {{but.intlName}}
                <span class="puce" v-if="but.puce !== undefined && but.puce !== 0">{{but.puce}}</span>
            </button>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InfoBare from '../InfoBare'

export default {
  components: {
    InfoBare
  },
  data () {
    return {
      currentSelect: 0
    }
  },
  computed: {
    ...mapGetters(['AppsLoki'])
  },
  methods: {
    ...mapActions(['closePhone']),
    onLeft () {
      this.currentSelect = (this.currentSelect + this.AppsLoki.length) % (this.AppsLoki.length + 1)
    },
    onRight () {
      this.currentSelect = (this.currentSelect + 1) % (this.AppsLoki.length + 1)
    },
    onUp () {
      this.currentSelect = Math.max(this.currentSelect - 4, 0)
    },
    onDown () {
      this.currentSelect = Math.min(this.currentSelect + 4, this.AppsLoki.length)
    },
    openApp (app) {
      this.$router.push({ name: app.routeName })
    },
    onEnter () {
      this.openApp(this.AppsLoki[this.currentSelect] || {routeName: 'lokistore'})
    },
    onBack () {
      this.$router.push({ name: 'home' })
    }
  },
  created () {
    if (!this.useMouse) {
      this.$bus.$on('keyUpArrowLeft', this.onLeft)
      this.$bus.$on('keyUpArrowRight', this.onRight)
      this.$bus.$on('keyUpArrowDown', this.onDown)
      this.$bus.$on('keyUpArrowUp', this.onUp)
      this.$bus.$on('keyUpEnter', this.onEnter)
    } else {
      this.currentSelect = -1
    }
    this.$bus.$on('keyUpBackspace', this.onBack)
  },
  beforeDestroy () {
    this.$bus.$off('keyUpArrowLeft', this.onLeft)
    this.$bus.$off('keyUpArrowRight', this.onRight)
    this.$bus.$off('keyUpArrowDown', this.onDown)
    this.$bus.$off('keyUpArrowUp', this.onUp)
    this.$bus.$off('keyUpEnter', this.onEnter)
    this.$bus.$off('keyUpBackspace', this.onBack)
  }
}
</script>

<style scoped>
.main{
background-image: url('/html/static/img/background/lokistorebackground.png');
width: 100%;
height: 100%;
background-size: contain; 
background-repeat: no-repeat;
background-color: #141414;
}
.menu{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 95px 5px;
}
.menu_content {
  display: flex;
  flex-direction: column;
}

.menu_buttons{
  margin-top: 24px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  /* justify-content: space-around; */
  flex-flow: row;
  flex-wrap: wrap;
  margin-bottom: 0px;

  transition: all 0.5s ease-in-out;
}

.menu_buttons {
  animation-name: up;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
}
@keyframes up {
  from {transform: translateY(100vh);}
  to {transform: translateY(0);}
}


button{
  position: relative;
  margin: 0px;
  border: none;
  width: 80px;
  height: 110px;
  margin: 8px;
  color: white;
  background-size: 64px 64px;
  background-position: center 6px;
  background-repeat: no-repeat;
  background-color: transparent;
  font-size: 14px;
  padding-top: 72px;
  font-weight: 700;
  text-shadow: -1px 0 0 rgba(0,0,0, 0.8), 
             1px 0 0 rgba(0,0,0, 0.8),
             0 -1px 0 rgba(0,0,0, 0.8),
             0 1px 0 rgba(0,0,0, 0.8);
  text-align: center;
}
button .puce{
  position: absolute;
  display: block;
  background-color: #1450b8;
  font-size: 14px;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid white;
  bottom: 32px;
  right: 12px;
}
button.select, button:hover{
  background-color: rgba(255,255,255, 0.7);
  border-radius: 12px;
}
</style>
