import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const firstOperand = ref(0)
    const secondOperand = ref(0)
    const outputValue = ref(0)
    const operator = ref('sum')

    const calculateValue = () => {
      switch (operator.value) {
        case 'sum':
          outputValue.value = firstOperand.value + secondOperand.value
          break
        case 'subtract':
          outputValue.value = firstOperand.value - secondOperand.value
          break
        case 'multiply':
          outputValue.value = firstOperand.value * secondOperand.value
          break
        case 'divide':
          outputValue.value =
            secondOperand.value !== 0 ? firstOperand.value / secondOperand.value : 'На ноль делить нельзя!'
          break
        default:
          outputValue.value = 0
      }
    }

    watch([firstOperand, secondOperand, operator], calculateValue)

    return {
      firstOperand,
      secondOperand,
      outputValue,
      operator,
    }
  },

  template: `
    <div class="calculator">
      <input v-model="firstOperand" type="number" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input v-model="operator" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="operator" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="operator" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="operator" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input v-model="secondOperand" type="number" aria-label="Second operand" />

      <div>=</div>

      <output>{{outputValue}}</output>
    </div>
  `,
})
