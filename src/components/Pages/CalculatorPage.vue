<template>
  <div class="calculator-page">
    <div class="calculator-container">
      <h1>计算器</h1>
      
      <!-- 显示屏 -->
      <div class="display">
        <div class="previous-operand">{{ previousInput }} {{ operator }}</div>
        <div class="current-operand">{{ currentInput || '0' }}</div>
      </div>
      
      <!-- 按钮区域 -->
      <div class="buttons">
        <!-- 第一行 -->
        <button class="span-two clear" @click="clear">AC</button>
        <button class="operator" @click="deleteNumber">DEL</button>
        <button class="operator" @click="chooseOperator('÷')">÷</button>
        
        <!-- 第二行 -->
        <button @click="appendNumber('7')">7</button>
        <button @click="appendNumber('8')">8</button>
        <button @click="appendNumber('9')">9</button>
        <button class="operator" @click="chooseOperator('×')">×</button>
        
        <!-- 第三行 -->
        <button @click="appendNumber('4')">4</button>
        <button @click="appendNumber('5')">5</button>
        <button @click="appendNumber('6')">6</button>
        <button class="operator" @click="chooseOperator('-')">-</button>
        
        <!-- 第四行 -->
        <button @click="appendNumber('1')">1</button>
        <button @click="appendNumber('2')">2</button>
        <button @click="appendNumber('3')">3</button>
        <button class="operator" @click="chooseOperator('+')">+</button>
        
        <!-- 第五行 -->
        <button @click="appendNumber('0')">0</button>
        <button @click="appendNumber('.')">.</button>
        <button class="span-two equals" @click="calculate">=</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义响应式数据
const currentInput = ref('')      // 当前输入
const previousInput = ref('')     // 上一个输入
const operator = ref('')          // 当前运算符
const shouldResetScreen = ref(false)  // 是否需要重置屏幕

// 追加数字
const appendNumber = (number: string) => {
  // 如果需要重置屏幕（刚计算完或选择了运算符）
  if (shouldResetScreen.value) {
    currentInput.value = ''
    shouldResetScreen.value = false
  }
  
  // 防止多个小数点
  if (number === '.' && currentInput.value.includes('.')) return
  
  // 追加数字
  currentInput.value = currentInput.value + number
}

// 选择运算符
const chooseOperator = (op: string) => {
  // 如果当前没有输入，不执行
  if (currentInput.value === '') return
  
  // 如果已经有运算符，先计算
  if (previousInput.value !== '') {
    calculate()
  }
  
  // 保存当前输入和运算符
  operator.value = op
  previousInput.value = currentInput.value
  shouldResetScreen.value = true
}

// 计算结果
const calculate = () => {
  // 如果没有输入或运算符，不执行
  if (currentInput.value === '' || previousInput.value === '' || operator.value === '') return
  
  let computation: number
  const prev = parseFloat(previousInput.value)
  const current = parseFloat(currentInput.value)
  
  // 根据运算符执行计算
  switch (operator.value) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '×':
      computation = prev * current
      break
    case '÷':
      // 处理除零错误
      if (current === 0) {
        alert('不能除以零！')
        return
      }
      computation = prev / current
      break
    default:
      return
  }
  
  // 显示结果
  currentInput.value = computation.toString()
  operator.value = ''
  previousInput.value = ''
  shouldResetScreen.value = true
}

// 清除所有
const clear = () => {
  currentInput.value = ''
  previousInput.value = ''
  operator.value = ''
  shouldResetScreen.value = false
}

// 删除最后一个数字
const deleteNumber = () => {
  currentInput.value = currentInput.value.slice(0, -1)
}
</script>

<style scoped>
.calculator-page {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.calculator-container {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.calculator-container h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #667eea;
  font-size: 1.8rem;
}

.display {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: right;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.previous-operand {
  color: #666;
  font-size: 1rem;
  min-height: 24px;
}

.current-operand {
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-all;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #f0f0f0;
  color: #333;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

.span-two {
  grid-column: span 2;
}

.operator {
  background-color: #667eea;
  color: white;
}

.operator:hover {
  background-color: #5a6fd8;
}

.equals {
  background-color: #4caf50;
  color: white;
}

.equals:hover {
  background-color: #45a049;
}

.clear {
  background-color: #f44336;
  color: white;
}

.clear:hover {
  background-color: #da190b;
}

@media (max-width: 768px) {
  .calculator-container {
    padding: 20px;
  }
  
  button {
    padding: 15px;
    font-size: 1rem;
  }
  
  .current-operand {
    font-size: 1.5rem;
  }
}
</style>