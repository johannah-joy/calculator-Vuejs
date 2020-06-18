// Vue.component('clear', {
//   template: `
//     <button @click.prevent="clear_entry">C</button>
//   `,
//   data: function(){
//     return {
//       // num: '',
//     }
//   }
// })


let vm = new Vue({
  el: '#app',
  data: {
    answer: 0,
    numOutput: 0,
    op: undefined,
    resetDisplay: false,
  },
  methods: {
    display(number) {
      if (this.answer == 0 || this.resetDisplay === true) {
        this.answer = '';
        this.resetDisplay = false;
      }
      this.answer += number.toString();  // string due to decimal
    },
    clear_entry() {
      this.answer = 0;
      this.numOutput = 0;
      this.op = undefined;
    },
    negate() {
      this.answer *= -1;
    },
    divide_hundred() {
      this.answer /= 100;
    },
    decimal() {
      if (!this.answer.includes('.')) {
        this.answer += '.';
      }
    },
    operator(op) {
      if (this.numOutput != 0) {
        // this.equals();
        this.doCalculating();
      }
      this.numOutput = this.answer;
      this.op = op;
      this.resetDisplay = true;
    },
    equals() {
      this.doCalculating();
      this.numOutput = 0;
      this.op = undefined;
    },
    doCalculating() {
      let equaling = 0;
      let numOne = parseFloat(this.numOutput);
      let numTwo = parseFloat(this.answer);
      if (this.op == '+') {
        equaling = numOne + numTwo;
      }
      if (this.op == '-') {
        equaling = numOne - numTwo;
      }
      if (this.op == '*') {
        equaling = numOne * numTwo;
      }
      if (this.op == '/') {
        equaling = numOne / numTwo;
      }
      this.answer = equaling.toString();  // string due to decimal
    }
  },
})