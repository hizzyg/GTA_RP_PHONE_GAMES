<template>
  <div class="phone_app">
    <table v-if="!dead">
      <tr v-for="row in grid" :key="row.id">
        <td v-for="cell in row" :key="cell.id" class="grid-cell" :class="{ snake: cell.snake > 0, food: cell.food }">
        </td>
      </tr>
    </table>
    <div v-else>
      You Died. <a @click="start">Play Again?</a>
    </div>
  </div>
</template>

<style>
  .phone_app
  {
    height: 100%;
    width: 100%;
  }
  a {
    cursor: pointer;
    color: #006aff;
  }

  table {
    border-collapse: collapse;
  }

  .grid-cell {
    margin: 0;
    padding: 1px;
    height: 12.5px;
    width: 10px;
    background-color: #f4f4f4;
    border: 1px solid white;
  }

  .food {
    background-color: #56b0bb;
  }

  .snake {
    background-color: #3e3e3e;
  }
</style>

<script type="module">
  import Grid from '../../classes/Grid'

  const UP = [-1, 0],
    DOWN = [1, 0],
    LEFT = [0, -1],
    RIGHT = [0, 1];

  let keyMap = {
    "37": LEFT,
    "38": UP,
    "39": RIGHT,
    "40": DOWN
  };

  let snakePos, snakeCells, length, ticking, userActions = [];

  export default{
    props: [],

    components: {
    },

    created() {
      
      this.start();
      window.addEventListener('keydown', event => this.handleUserAction(event.which));
      this.$bus.$on('keyUpBackspace', this.quit)
    },

    data() {
      return {
        direction: UP,
        dead: false,
        grid: null
      };
    },
    methods: {
      handleUserAction(key) {
        let direction = keyMap[key];
        if (direction) {
            userActions.push(() => {
            if (direction[0] + this.direction[0] === 0 && direction[1] + this.direction[1] === 0) {
              return; // ignore opposite direction presses
            }
            this.direction = direction
            
          });
          
          this.startGame = 1;
        }
      },
      start() {
        let size = 30, ms = 80;
        this.grid = new Grid(size, (x, y) => ({x, y, snake: 0, food: false}));
        this.dead = false;
        userActions = [];
        length = 5;
        ticking = setInterval(this.tick, ms);

        snakePos = Grid.random(this.grid);
        snakePos.snake = length;
        snakeCells = [snakePos];
        this.setFood();
        let startGame = 0;
      },

      tick() {
        let userAction;
        if (userAction = userActions.shift()) {
          userAction();
        }
        this.moveSnake();
        this.eatFood();
      },

      moveSnake() {
        if(this.startGame == 1){
          let {x, y} = snakePos;
          let [xd, yd] = this.direction;
          snakePos = (this.grid[x + xd] || [])[y + yd];

          if (!snakePos || snakePos.snake) {
            return this.gameOver();
          }

          // shift snake in all cells
          snakeCells.forEach(cell => cell.snake--);
          snakeCells = snakeCells.filter(cell => cell.snake > 0);

          snakePos.snake = length;
          snakeCells.push(snakePos);
        }
      },

      eatFood() {
        if (snakePos && snakePos.food) {
          length++;
          snakeCells.forEach(cell => cell.snake++);
          snakePos.food = false;
          this.setFood();
        }
      },

      setFood() {
        Grid.random(this.grid).food = true;
      },

      gameOver() {
        this.dead = true;
        clearInterval(ticking);
      },
      quit: function () {
        
        this.$router.push({ name: 'home' })
        window.location.reload()
      }
    },
    beforeDestroy: function () {
      this.$bus.$off('keyUpBackspace', this.quit)
    }
  }
</script>
